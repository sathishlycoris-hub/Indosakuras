<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
use Inertia\Inertia;

class JobPageController extends Controller
{
    //
    public function show(string $slug)
{
    $job = Job::where('slug', $slug)
        ->where('status', 'published')
        ->with(['sections' => function ($q) {
            $q->orderBy('sort_order');
        }])
        ->firstOrFail([
            'id',
            'title',
            'title_ja',
            'department_ja',
            'location_ja',
            'employment_type_ja',
            'experience_ja',
            'salary_ja',
            'short_description_ja',
            'short_description',
            'department',
            'location',
            'employment_type',
            'experience',
            'salary',
            'slug',
            'status',
        ]);

    $jobs = Job::where('status', 'published')
        ->select('id', 'title', 'title_ja', 'slug')
        ->orderBy('created_at', 'desc')
        ->get();

    return Inertia::render('Recruitment/JobDetails', [
        'job' => $job,
        'jobs' => $jobs,
    ]);
}
}
