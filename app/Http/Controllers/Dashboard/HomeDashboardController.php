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

    public function showUser() {
        return Inertia::render('User/UserView');
    }

    public function showCart() {
        $uid = Auth::user()['id'];
        // dd($uid);
        return Inertia::render('Cart/CartView', [
            'uid' => $uid
        ]);
    }
}
