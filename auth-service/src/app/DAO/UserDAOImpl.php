<?php

namespace App\DAO;

use App\DAO\Interfaces\UserDAO;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserDAOImpl implements UserDAO
{
    public function createUser(array $data): User
    {
        $data['password'] = Hash::make($data['password']);
        return User::create($data);
    }

    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }
}