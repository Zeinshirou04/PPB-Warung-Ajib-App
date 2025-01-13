<?php

use App\Http\Controllers\Api\User\CartItemController;
use App\Http\Controllers\AuthApi\RegisterUserController;
use App\Http\Controllers\AuthApi\SessionLoginController;
use App\Http\Controllers\Dashboard\Menu\MenuController;
use App\Http\Controllers\Dashboard\User\UserController;
use App\Http\Controllers\Payment\ControlPaymentImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return response()->json($request->user(), 200);
})->middleware('auth:sanctum');

Route::prefix('payment')->group(function () {
    Route::resource('image', ControlPaymentImageController::class)->except(['index', 'create', 'edit', 'show']);
    Route::get('image', [ControlPaymentImageController::class, 'show'])->name('images.show');
});

Route::prefix('auth')->group(function () {
    Route::resource('register', RegisterUserController::class)->only(['store']);
    Route::resource('login', SessionLoginController::class)->except(['index', 'create', 'edit', 'destroy']);
    Route::get('user', [UserController::class, 'show'])->name('dashboard.user.all');
    Route::post('logout', [SessionLoginController::class, 'destroy'])->middleware('auth:sanctum');
});

Route::prefix('menu')->group(function () {
    Route::get('items', [MenuController::class, 'show'])->name('dashboard.menu.all');
    Route::resource('items', MenuController::class)->except(['index', 'create', 'store', 'show']);
});

Route::prefix('cart')->group(function () {
    Route::get('items/{id}', [CartItemController::class, 'show'])
        ->name('cart.items.show');
    Route::post('items', [CartItemController::class, 'store'])
        ->name('cart.items.store')
        ->middleware('auth:sanctum');
    Route::delete('items', [CartItemController::class, 'destroy'])
        ->name('cart.items.destroy')
        ->middleware('auth:sanctum');
});
