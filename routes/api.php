<?php

use App\Http\Controllers\AuthApi\RegisterUserController;
use App\Http\Controllers\AuthApi\SessionLoginController;
use App\Http\Controllers\Payment\ControlPaymentImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return response()->json($request->user(), 200);
})->middleware('auth:sanctum');

Route::prefix('payment')->group(function () {
    Route::resource('image', ControlPaymentImageController::class)->except(['index', 'create', 'edit']);
});

Route::prefix('auth')->group(function () {
    Route::resource('register', RegisterUserController::class)->only(['store']);
    Route::resource('login', SessionLoginController::class)->except(['index', 'create', 'edit', 'destroy']);
    Route::post('logout', [SessionLoginController::class, 'destroy'])->middleware('auth:sanctum');
});
