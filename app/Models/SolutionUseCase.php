<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolutionUseCase extends Model
{
    use HasFactory;

     protected $fillable = [
        'solution_id',
        'title',
        'subtitle',
        'description',
        'image',
        'sort_order',
    ];
}
