<?php

namespace App\Http\Controllers\AuthApi;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SessionLoginController extends Controller
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

        $user = User::where('username', $request->username)->first();

        try {
            if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
                $token = $user->createToken('auth_token')->plainTextToken;
                $result = [
                    'message' => 'Masuk Berhasil',
                    'access_token' => $token
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

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        try {
            $request->user()->tokens()->delete();
            return response()->json([
                'message' => 'logout success'
            ]);
        } catch (\Throwable $th) {
            $result = [
                'message' => $th->getMessage()
            ];
            return response()->json($result, 500);
        }
    }
}
