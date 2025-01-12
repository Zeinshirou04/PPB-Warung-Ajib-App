<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    protected $fillable = [
        'mid',
        'gambar',
        'nama_menu',
        'deskripsi',
        'harga'
    ];

    public function cartItem(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }
}
