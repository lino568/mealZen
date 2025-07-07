<?php

namespace App\Services;

use App\Models\User;
use App\DAO\Interfaces\UserDAO;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function __construct(
        private UserDAO $userDAO,
    ) {}

    public function login(array $credentials)
    {
        $user = $this->userDAO->findByEmail($credentials['email']);

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return null;
        }

        return JWTAuth::fromUser($user);
    }

    public function register(array $credentials)
    {
        $user = $this->userDAO->createUser($credentials);

        if (!$user) {
            return null;
        }

        return JWTAuth::fromUser($user);
    }
}