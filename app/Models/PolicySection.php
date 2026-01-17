<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PolicySection extends Model
{
    protected $fillable = [
        'policy_id',
        'title',
        'description',
        'sort_order',
    ];

    public function policy()
    {
        return $this->belongsTo(Policy::class);
    }
}
