<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HomeDashboardController extends Controller
{
    public function index() {
        // dd(Auth::user());
        $username = Auth::user()->username;
        
        return Inertia::render('Dashboard', ['username' => $username]);
    }

    public function showMenu() {
        return Inertia::render('Menu/MenuView');
    }
}
