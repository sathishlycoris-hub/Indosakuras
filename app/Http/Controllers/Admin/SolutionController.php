<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Solution;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;



class SolutionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Admin/Solutions/Index', [
            'solutions' => Solution::with(['features', 'useCases', 'caseStudies', 'industries'])
                ->latest()
                ->get(),
        ]);
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
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'slug' => 'required|string|unique:solutions',
            'subtitle' => 'nullable|string',
            'hero_description' => 'nullable|string',
            'hero_image' => 'nullable|image|max:2048',

            'features' => 'nullable',
            'use_cases' => 'nullable',
            'case_studies' => 'nullable',
            'industries' => 'nullable',
        ]);

        // 2Decode JSON arrays (FormData sends strings)
        foreach (['features', 'use_cases', 'case_studies', 'industries'] as $key) {
            if ($request->filled($key)) {
                $data[$key] = json_decode($request->input($key), true) ?? [];
            } else {
                $data[$key] = [];
            }
        }

        //  Handle hero image
        if ($request->hasFile('hero_image')) {
            $data['hero_image'] = $request->file('hero_image')
                ->store('solutions', 'public');
        }

        //  Create solution
        $solution = Solution::create([
            'title' => $data['title'],
            'slug' => $data['slug'],
            'subtitle' => $data['subtitle'] ?? null,
            'hero_description' => $data['hero_description'] ?? null,
            'hero_image' => $data['hero_image'] ?? null,
        ]);

        // Features
        foreach ($data['features'] as $i => $feature) {
            $solution->features()->create([
                'title' => $feature['title'] ?? '',
                'description' => $feature['description'] ?? null,
                'sort_order' => $i,
            ]);
        }

        //  Use cases
        foreach ($data['use_cases'] as $i => $useCase) {
            $solution->useCases()->create([
                'title' => $useCase['title'] ?? '',
                'description' => $useCase['description'] ?? null,
                'sort_order' => $i,
            ]);
        }

        //  Case studies
        foreach ($data['case_studies'] as $i => $caseStudy) {
            $solution->caseStudies()->create([
                'title' => $caseStudy['title'] ?? '',
                'summary' => $caseStudy['summary'] ?? null,
                'sort_order' => $i,
            ]);
        }

        // Industries
        foreach ($data['industries'] as $i => $industry) {
            $solution->industries()->create([
                'title' => $industry['title'] ?? '',
                'description' => $industry['description'] ?? null,
                'sort_order' => $i,
            ]);
        }

       return redirect()
        ->route('admin.solutions.index')
        ->with('success', 'Solution created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Solution $solution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Solution $solution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Solution $solution)
    {
        //
         // 1️⃣ Validate
    $data = $request->validate([
        'title' => 'required|string',
        'slug' => 'required|string|unique:solutions,slug,' . $solution->id,
        'subtitle' => 'nullable|string',
        'hero_description' => 'nullable|string',
        'hero_image' => 'nullable|image|max:2048',

        'features' => 'nullable',
        'use_cases' => 'nullable',
        'case_studies' => 'nullable',
        'industries' => 'nullable',
    ]);

    // 2️⃣ Decode JSON arrays
    foreach (['features', 'use_cases', 'case_studies', 'industries'] as $key) {
        if ($request->filled($key)) {
            $data[$key] = json_decode($request->input($key), true) ?? [];
        } else {
            $data[$key] = [];
        }
    }

    // 3️⃣ Hero image replace (delete old)
    if ($request->hasFile('hero_image')) {
        if ($solution->hero_image) {
            Storage::disk('public')->delete($solution->hero_image);
        }

        $data['hero_image'] = $request->file('hero_image')
            ->store('solutions', 'public');
    }

    // 4️⃣ Update solution
    $solution->update([
        'title' => $data['title'],
        'slug' => $data['slug'],
        'subtitle' => $data['subtitle'] ?? null,
        'hero_description' => $data['hero_description'] ?? null,
        'hero_image' => $data['hero_image'] ?? $solution->hero_image,
    ]);

    // 5️⃣ Sync children (delete → recreate)

    $solution->features()->delete();
    foreach ($data['features'] as $i => $feature) {
        $solution->features()->create([
            'title' => $feature['title'] ?? '',
            'description' => $feature['description'] ?? null,
            'sort_order' => $i,
        ]);
    }

    $solution->useCases()->delete();
    foreach ($data['use_cases'] as $i => $useCase) {
        $solution->useCases()->create([
            'title' => $useCase['title'] ?? '',
            'description' => $useCase['description'] ?? null,
            'sort_order' => $i,
        ]);
    }

    $solution->caseStudies()->delete();
    foreach ($data['case_studies'] as $i => $caseStudy) {
        $solution->caseStudies()->create([
            'title' => $caseStudy['title'] ?? '',
            'summary' => $caseStudy['summary'] ?? null,
            'sort_order' => $i,
        ]);
    }

    $solution->industries()->delete();
    foreach ($data['industries'] as $i => $industry) {
        $solution->industries()->create([
            'title' => $industry['title'] ?? '',
            'description' => $industry['description'] ?? null,
            'sort_order' => $i,
        ]);
    }

    return redirect()
        ->route('admin.solutions.index')
        ->with('success', 'Solution deleted successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Solution $solution)
    {
        
    if ($solution->hero_image && Storage::disk('public')->exists($solution->hero_image)) {
        Storage::disk('public')->delete($solution->hero_image);
    }

   
    $solution->features()->delete();
    $solution->useCases()->delete();
    $solution->caseStudies()->delete();
    $solution->industries()->delete();

   
    $solution->delete();

    return redirect()
        ->route('admin.solutions.index')
        ->with('success', 'Solution deleted successfully');
    }
}
