<?php

use App\Http\Controllers\Payment\ControlPaymentImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('payment')->group(function() {
    Route::resource('image', ControlPaymentImageController::class)->except(['index', 'create', 'edit']);
});