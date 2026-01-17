<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'department',
        'location',
        'employment_type',
        'experience',
        'salary',
        'short_description',
        'about_role',
        'language',
        'status',
    ];

    public function sections()
    {
        return $this->hasMany(JobSection::class)->orderBy('sort_order');
    }

    public function applications()
    {
        return $this->hasMany(JobApplication::class);
    }
}
