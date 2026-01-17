<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    use HasFactory;

     protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'hero_description',
        'hero_image',
    ];

    public function features()
    {
        return $this->hasMany(SolutionFeature::class)->orderBy('sort_order');
    }

    public function useCases()
    {
        return $this->hasMany(SolutionUseCase::class)->orderBy('sort_order');
    }

    public function caseStudies()
    {
        return $this->hasMany(SolutionCaseStudy::class)->orderBy('sort_order');
    }

     public function industries()
    {
        return $this->hasMany(SolutionIndustry::class)->orderBy('sort_order');
    }
}
