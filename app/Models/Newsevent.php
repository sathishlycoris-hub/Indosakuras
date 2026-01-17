<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newsevent extends Model
{
    use HasFactory;

    protected $table = 'newsevents';

    protected $fillable = [
        'date',
        'eventtype',
        'short',
        'description',
        'image',
        'pdf',
    ];
}
