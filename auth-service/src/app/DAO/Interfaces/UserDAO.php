<?php

namespace App\DAO\Interfaces;

use App\Models\User;

interface UserDAO
{
    public function createUser(array $data): User;

    public function findByEmail(string $email): ?User;
}