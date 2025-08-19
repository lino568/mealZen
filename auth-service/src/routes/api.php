<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('api/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
