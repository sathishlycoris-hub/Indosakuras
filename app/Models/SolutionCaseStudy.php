<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolutionCaseStudy extends Model
{
    use HasFactory;

     protected $fillable = [
        'solution_id',
        'title',
        'client',
        'summary',
        'result',
        'image',
        'sort_order',
    ];
}
