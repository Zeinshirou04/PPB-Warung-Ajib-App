<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'mid',
        'gambar',
        'nama_menu',
        'deskripsi',
        'harga'
    ];
}
