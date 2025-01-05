<?php

namespace App\Http\Controllers\AuthApi;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterUserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|max:255',
        ]);
        
        // dd($request->all());
        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        try {
            if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
                Auth::loginUsingId($user->id);
                $result = [
                    'message' => 'Daftar Berhasil',
                ];
                return response()->json($result);
            }
        } catch (\Throwable $th) {
            $result = [
                'message' => $th->getMessage()
            ];
            return response()->json($result, 500);
        }
    }
}
