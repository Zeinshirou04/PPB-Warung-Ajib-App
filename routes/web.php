<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Dashboard\HomeDashboardController;
use App\Http\Controllers\Dashboard\Menu\MenuController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->to(route('auth.login.create'));
});

Route::prefix('auth')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('auth.login.create');
    Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('auth.login.store');
});

Route::prefix('dashboard')->group(function () {
    Route::get('home', [HomeDashboardController::class, 'index'])->name('dashboard.home.index');

    Route::get('user', [HomeDashboardController::class, 'showUser'])->name('dashboard.home.user');

    Route::get('menu', [HomeDashboardController::class, 'showMenu'])->name('dashboard.home.menu');
    Route::post('menu', [MenuController::class, 'store'])->name('dashboard.menu.store');

    Route::get('cart', [HomeDashboardController::class, 'showCart'])->name('dashboard.home.cart');
})->middleware('auth');
