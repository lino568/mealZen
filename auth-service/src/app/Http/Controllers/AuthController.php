<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function __construct(
        private AuthService $authService,
    ) {}

    public function login(LoginRequest $request)
    {
        
        $credentials = $request->validated();

        $token = $this->authService->login($credentials);

        if (!$token) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['token' => $token]);
    }

    public function register(RegisterRequest $request)
    {
        $credentials = $request->validated();

        $token = $this->authService->register($credentials);

        if (!$token) {
            return response()->json(['error' => 'User creation failed'], 500);
        }

        return response()->json(['token' => $token]);
    }
}
