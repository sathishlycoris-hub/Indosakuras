<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\JobSection;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class JobController extends Controller
{
    /**
     * List jobs (Admin table)
     */
    public function index()
    {
        return Inertia::render('Admin/Jobs/Index', [
            // IMPORTANT: load sections for edit/view
            'jobs' => Job::with('sections')->latest()->get(),
        ]);
    }

    /**
     * Store new job (Sheet - Add)
     */
    public function store(Request $request)
    {
        
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'employment_type' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'salary' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'about_role' => 'required|string',
            'language' => 'required|in:en,ja',
            'status' => 'required|in:draft,published',

            // sections
            'sections' => 'required|array|min:1',
            'sections.*.type' => 'required|in:responsibilities,requirements,preferred,offer',
            'sections.*.content' => 'required|string',
        ]);

        // Create Job
        $job = Job::create([
            'title' => $data['title'],
            'slug' => Str::slug($data['title']),
            'department' => $data['department'],
            'location' => $data['location'],
            'employment_type' => $data['employment_type'],
            'experience' => $data['experience'],
            'salary' => $data['salary'] ?? null,
            'short_description' => $data['short_description'] ?? null,
            'about_role' => $data['about_role'],
            'language' => $data['language'],
            'status' => $data['status'],
        ]);

        // Store sections
        foreach ($data['sections'] as $index => $section) {
            JobSection::create([
                'job_id' => $job->id,
                'section_type' => $section['type'],
                'content' => $section['content'],
                'sort_order' => $index,
            ]);
        }

        return redirect()
            ->route('admin.jobs.index')
            ->with('success', 'Job created successfully');
    }

    /**
     * Update job (Sheet - Edit)
     */
    public function update(Request $request, Job $job)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'employment_type' => 'required|string|max:255',
            'experience' => 'required|string|max:255',
            'salary' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'about_role' => 'required|string',
            'language' => 'required|in:en,ja',
            'status' => 'required|in:draft,published',

            // sections
            'sections' => 'required|array|min:1',
            'sections.*.type' => 'required|in:responsibilities,requirements,preferred,offer',
            'sections.*.content' => 'required|string',
        ]);

        // Update Job
        $job->update([
            'title' => $data['title'],
            'slug' => Str::slug($data['title']),
            'department' => $data['department'],
            'location' => $data['location'],
            'employment_type' => $data['employment_type'],
            'experience' => $data['experience'],
            'salary' => $data['salary'] ?? null,
            'short_description' => $data['short_description'] ?? null,
            'about_role' => $data['about_role'],
            'language' => $data['language'],
            'status' => $data['status'],
        ]);

        // Replace sections cleanly
        $job->sections()->delete();

        foreach ($data['sections'] as $index => $section) {
            JobSection::create([
                'job_id' => $job->id,
                'section_type' => $section['type'],
                'content' => $section['content'],
                'sort_order' => $index,
            ]);
        }

        return redirect()
            ->route('admin.jobs.index')
            ->with('success', 'Job updated successfully');
    }

    /**
     * Delete job
     */
    public function destroy(Job $job)
    {
        $job->delete();

        return back()->with('success', 'Job deleted successfully');
    }

    public function recruitment()
{
    return Inertia::render('Recruitment', [
        'jobs' => Job::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->get([
                'id',
                'title',
                'department',
                'location',
                'employment_type',
                'experience',
                'salary',
                'slug',
            ]),
    ]);
}



}
