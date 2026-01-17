<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'hero_description',
        'hero_image',
        'how_it_works',
    ];

    public function highlights()
    {
        return $this->hasMany(ServiceHighlight::class)->orderBy('sort_order');
    }

    public function benefits()
    {
        return $this->hasMany(ServiceBenefit::class)->orderBy('sort_order');
    }

    // public function industries()
    // {
    //     return $this->hasMany(ServiceIndustry::class)->orderBy('sort_order');
    // }
}
