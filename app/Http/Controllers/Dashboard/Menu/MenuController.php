<?php

namespace App\Http\Controllers\Dashboard\Menu;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MenuController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->file('gambar')->getClientOriginalName());
        try {
            $this->storeImage($request);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors(['storage' => 'Gambar gagal disimpan']);
        }

        $menu = [
            'mid' => $request->mid,
            'gambar' => 'storage/menu/' . $request->file('gambar')->getClientOriginalName(),
            'nama_menu' => $request->nama_menu,
            'deskripsi' => $request->deskripsi,
            'harga' => $request->harga
        ];

        try {
            Menu::create($menu);
            return redirect()->back();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    protected function storeImage(Request $request) {
        $filename = $request->file('gambar')->getClientOriginalName();
        Storage::disk('public')->putFileAs('menu', $request->file('gambar'), $filename);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $menus = Menu::all();

        return response()->json(['items' => $menus], 200);
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
