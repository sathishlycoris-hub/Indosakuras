<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_id',
        'section_type',
        'content',
        'sort_order',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class);
    }
}
