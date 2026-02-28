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
            'title' => 'nullable|string|max:255',
            'department' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'employment_type' => 'nullable|string|max:255',
            'experience' => 'nullable|string|max:255',
            'salary' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'about_role' => 'nullable|string',

            'title_ja' => 'nullable|string|max:255',
            'department_ja' => 'nullable|string|max:255',
            'location_ja' => 'nullable|string|max:255',
            'employment_type_ja' => 'nullable|string|max:255',
            'experience_ja' => 'nullable|string|max:255',
            'salary_ja' => 'nullable|string|max:255',
            'short_description_ja' => 'nullable|string',
            'about_role_ja' => 'nullable|string',

            'status' => 'nullable|in:draft,published',

            'sections' => 'nullable|array|min:1',
            'sections.*.type' => 'nullable|in:responsibilities,requirements,preferred,offer',
            'sections.*.content' => 'nullable|string',
            'sections.*.content_ja' => 'nullable|string',
        ]);

        // Create Job
        $job = Job::create([
            'title' => $data['title'] ?? null,
            'slug' => Str::slug($data['title'] ?? $data['title_ja']),
            'department' => $data['department'] ?? null,
            'location' => $data['location'] ?? null,
            'employment_type' => $data['employment_type'] ?? null,
            'experience' => $data['experience'] ?? null,
            'salary' => $data['salary'] ?? null,
            'short_description' => $data['short_description'] ?? null,
            'about_role' => $data['about_role'] ?? null,

            'title_ja' => $data['title_ja'] ?? null,
            'department_ja' => $data['department_ja'] ?? null,
            'location_ja' => $data['location_ja'] ?? null,
            'employment_type_ja' => $data['employment_type_ja'] ?? null,
            'experience_ja' => $data['experience_ja'] ?? null,
            'salary_ja' => $data['salary_ja'] ?? null,
            'short_description_ja' => $data['short_description_ja'] ?? null,


            'status' => $data['status'],
        ]);

        // Store sections
        foreach ($data['sections'] as $index => $section) {
            JobSection::create([
                'job_id' => $job->id,
                'section_type' => $section['type'],
                'content' => $section['content'] ?? null,
                'content_ja' => $section['content_ja'] ?? null,
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
            'title' => 'nullable|string|max:255',
            'department' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'employment_type' => 'nullable|string|max:255',
            'experience' => 'nullable|string|max:255',
            'salary' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'about_role' => 'nullable|string',

            'status' => 'nullable|in:draft,published',
            'title_ja' => 'nullable|string|max:255',
            'department_ja' => 'nullable|string|max:255',
            'location_ja' => 'nullable|string|max:255',
            'employment_type_ja' => 'nullable|string|max:255',
            'experience_ja' => 'nullable|string|max:255',
            'salary_ja' => 'nullable|string|max:255',
            'short_description_ja' => 'nullable|string',
            'about_role_ja' => 'nullable|string',

            // sections
            'sections' => 'nullable|array|min:1',
            'sections.*.type' => 'nullable|in:responsibilities,requirements,preferred,offer',
            'sections.*.content' => 'nullable|string',
            'sections.*.content_ja' => 'nullable|string',
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
            'title_ja' => $data['title_ja'] ?? null,
            'department_ja' => $data['department_ja'] ?? null,
            'location_ja' => $data['location_ja'] ?? null,
            'employment_type_ja' => $data['employment_type_ja'] ?? null,
            'experience_ja' => $data['experience_ja'] ?? null,
            'salary_ja' => $data['salary_ja'] ?? null,
            'short_description_ja' => $data['short_description_ja'] ?? null,
            'about_role_ja' => $data['about_role_ja'] ?? null,
            'status' => $data['status'],
        ]);

        // Replace sections cleanly
        $job->sections()->delete();

        foreach ($data['sections'] as $index => $section) {
            JobSection::create([
                'job_id' => $job->id,
                'section_type' => $section['type'],
                'content' => $section['content'] ?? null,
                'content_ja' => $section['content_ja'] ?? null,
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
