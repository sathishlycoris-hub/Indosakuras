<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\JobApplication;
use Inertia\Inertia;

class JobApplicationController extends Controller
{
    //
      public function index()
    {
        return Inertia::render('Admin/JobApplication/Index', [
            'applications' => JobApplication::with('job')
                ->latest()
                ->get(),
        ]);
    }

    public function destroy(JobApplication $jobApplication)
    {
        $jobApplication->delete();

        return back()->with('success', 'Application deleted.');
    }
}
