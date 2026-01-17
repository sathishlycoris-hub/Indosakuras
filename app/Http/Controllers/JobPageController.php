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
        ->firstOrFail();
        
         $jobs = Job::where('status', 'published')
        ->select('id', 'title', 'slug')
        ->orderBy('created_at', 'desc')
        ->get();


    return Inertia::render('Recruitment/JobDetails', [ 
        'job' => $job,
        'jobs' => $jobs, 
    ]);
}
}
