<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentItem extends Model
{
    protected $fillable = [
        'uid',
        'gambar'
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uid', 'id');
    }
}
