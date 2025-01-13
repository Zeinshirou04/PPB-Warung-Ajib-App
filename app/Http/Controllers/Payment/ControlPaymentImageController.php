<?php

namespace App\Http\Controllers\Payment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\PaymentItem;
use Illuminate\Support\Facades\Storage;

class ControlPaymentImageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->file('image')->getRealPath());
        try {
            $this->storeImage($request);
        } catch (\Throwable $th) {
            $result = [
                'message' => 'Gambar gagal dibuat',
                'error_message' => $th->getMessage(),
                'error_code' => $th->getCode()
            ];
            return response()->json($result, 500);
        }

        $menu = [
            'uid' => (int) $request->uid,
            'gambar' => 'storage/pembayaran/' . $request->file('image')->getClientOriginalName(),
        ];

        try {
            PaymentItem::create($menu);
            CartItem::where('uid', $request->uid)->delete();
            $result = [
                'message' => 'Gambar berhasil disimpan'
            ];
            return response()->json($result, 201);
        } catch (\Throwable $th) {
            $result = [
                'message' => 'Gambar gagal dibuat',
                'error_message' => $th->getMessage(),
                'error_code' => $th->getCode()
            ];
            return response()->json($result, 500);
        }
    }

    protected function storeImage(Request $request) {
        $filename = $request->file('image')->getClientOriginalName();
        Storage::disk('public')->putFileAs('pembayaran', $request->file('image'), $filename);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        try {
            $items = PaymentItem::with('users')->get();
            $result = [
                'message' => 'Pembayaran ditemukan',
                'items' => $items
            ];
            return response()->json($result, 200);
        } catch (\Throwable $th) {
            $result = [
                'message' => 'Gambar gagal dibuat',
                'error_message' => $th->getMessage(),
                'error_code' => $th->getCode()
            ];
            return response()->json($result, 500);
        }
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
    public function destroy(string $id)
    {
        //
    }
}
