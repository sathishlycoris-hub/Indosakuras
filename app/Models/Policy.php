<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Policy extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'intro',
        'sort_order',
    ];

    public function sections()
    {
        return $this->hasMany(PolicySection::class);
    }
}
