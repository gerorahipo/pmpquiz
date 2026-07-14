<?php

declare(strict_types=1);

namespace App;

/**
 * Minimal path router. Patterns use {name} placeholders, e.g. "/concepts/{id}".
 * Handlers receive (Request $req, array $params).
 */
final class Router
{
    /** @var array<int,array{method:string,regex:string,keys:string[],handler:callable}> */
    private array $routes = [];

    public function add(string $method, string $pattern, callable $handler): void
    {
        $keys = [];
        $regex = preg_replace_callback('/\{(\w+)\}/', static function (array $m) use (&$keys): string {
            $keys[] = $m[1];
            return '([^/]+)';
        }, $pattern);

        $this->routes[] = [
            'method' => strtoupper($method),
            'regex' => '#^' . $regex . '$#',
            'keys' => $keys,
            'handler' => $handler,
        ];
    }

    public function get(string $p, callable $h): void { $this->add('GET', $p, $h); }
    public function post(string $p, callable $h): void { $this->add('POST', $p, $h); }
    public function put(string $p, callable $h): void { $this->add('PUT', $p, $h); }
    public function delete(string $p, callable $h): void { $this->add('DELETE', $p, $h); }

    public function dispatch(Request $req): void
    {
        $pathMatched = false;
        foreach ($this->routes as $route) {
            if (!preg_match($route['regex'], $req->path, $matches)) {
                continue;
            }
            $pathMatched = true;
            if ($route['method'] !== $req->method) {
                continue;
            }
            array_shift($matches);
            $params = array_combine($route['keys'], $matches) ?: [];
            ($route['handler'])($req, $params);
            return;
        }

        // Path exists but wrong verb → 405; otherwise 404.
        Response::error($pathMatched ? 'Method not allowed' : 'Not found', $pathMatched ? 405 : 404);
    }
}
