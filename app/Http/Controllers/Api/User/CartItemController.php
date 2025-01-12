<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartItemController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $items = CartItem::create($request->all());
        try {
            $result = [
                'message' => 'Item telah ditambahkan'
            ];
            if($items) return response()->json($result, 201);
        } catch (\Throwable $th) {
            $result = [
                'message' => $th->getMessage(),
                'error_code' => $th->getCode()
            ];
            return response()->json($result, 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $items = CartItem::with('menus')->with('users')->where('uid', (int) $id);
        try {
            if($items->count() > 1) {
                $result = [
                    'message' => 'Item ditemukan',
                    'items' => $items->get()
                ];
                return response()->json($result, 200);
            }
            $result = [
                'message' => 'Item tidak ditemukan',
            ];
            return response()->json($result, 200);
        } catch (\Throwable $th) {
            $result = [
                'message' => $th->getMessage(),
                'error_code' => $th->getCode()
            ];
            return response()->json($result, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $items = CartItem::find((int) $id);
        try {
            $result = [
                'message' => 'Item berhasil dihapus',
            ];
            if($items->delete()) return response()->json($result, 200);
        } catch (\Throwable $th) {
            $result = [
                'message' => $th->getMessage(),
                'error_code' => $th->getCode()
            ];
            return response()->json($result, 500);
        }
    }
}
