<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    protected $primaryKey = 'cid'; 
    
    protected $fillable = [
        'mid',
        'uid'
    ];

    public function menus(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'mid', 'mid');
    }

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uid', 'id');
    }
}
