<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'description',
    ];

    public function sections()
    {
        return $this->hasMany(ClientSection::class);
    }
}
