<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Likes extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'liked_user_id'
    ];
    
    public function User(): belongsTo
    {
        return $this->belongsTo(User::class);
    }
}
