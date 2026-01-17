<?php

namespace App\Http\Controllers;
use App\Models\Job;

use App\Models\JobApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JobApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request, Job $job)
{
    //  Step 1: Validate form fields
    $data = $request->validate([
        'full_name'    => 'required|string|max:255',
        'email'        => 'required|email',
        'phone'        => 'required|string|max:255',
        'cover_letter' => 'nullable|string',
        'resume'       => 'required|file|mimes:pdf,doc,docx|max:5120',
        'agree_terms'  => 'accepted',
        // 'recaptcha'    => 'nullable|string',
    ]);

    //  Step 2: Verify reCAPTCHA with Google
    // $response = Http::asForm()->post(
    //     'https://www.google.com/recaptcha/api/siteverify',
    //     [
    //         'secret'   => config('services.recaptcha.secret_key'),
    //         'response' => $request->recaptcha,
    //         'remoteip' => $request->ip(),
    //     ]
    // );

    // if (!data_get($response->json(), 'success')) {
    //     return back()->withErrors([
    //         'recaptcha' => 'reCAPTCHA verification failed. Please try again.',
    //     ]);
    // }

    //  Step 3: Store resume
    $data['resume'] = $request
        ->file('resume')
        ->store('job-applications', 'public');

    //  Step 4: Save application (job_id auto attached)
    $job->applications()->create($data);

    return back()->with('success', 'Application submitted successfully.');
}


    /**
     * Display the specified resource.
     */
    public function show(JobApplication $jobApplication)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JobApplication $jobApplication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, JobApplication $jobApplication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JobApplication $jobApplication)
    {
        //
    }
}
