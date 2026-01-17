<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Policy;
use App\Models\PolicySection;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PolicyController extends Controller
{
    /**
     * List policies
     */
    public function index()
    {
        return Inertia::render('Admin/Policy/Index', [
            'policies' => Policy::with('sections')
                ->orderBy('sort_order')
                ->get(),
        ]);
    }

    /**
     * Store policy
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'slug'  => 'required|string|max:255|unique:policies,slug',
            'intro' => 'required|string',

            'sections' => 'required|array|min:1',
            'sections.*.title' => 'required|string|max:255',
            'sections.*.description' => 'required|string',
        ]);

        $policy = Policy::create([
            'title' => $data['title'],
            'slug' => Str::slug($data['slug']),
            'intro' => $data['intro'],
        ]);

        foreach ($data['sections'] as $index => $section) {
            PolicySection::create([
                'policy_id' => $policy->id,
                'title' => $section['title'],
                'description' => $section['description'],
                'sort_order' => $index,
            ]);
        }

        return redirect()
            ->route('admin.policy.index')
            ->with('success', 'Policy created successfully');
    }

    /**
     * Update policy
     */
    public function update(Request $request, Policy $policy)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'slug'  => 'required|string|max:255|unique:policies,slug,' . $policy->id,
            'intro' => 'required|string',

            'sections' => 'required|array|min:1',
            'sections.*.title' => 'required|string|max:255',
            'sections.*.description' => 'required|string',
        ]);

        $policy->update([
            'title' => $data['title'],
            'slug' => Str::slug($data['slug']),
            'intro' => $data['intro'],
        ]);

        // Replace sections (same as Jobs pattern)
        $policy->sections()->delete();

        foreach ($data['sections'] as $index => $section) {
            PolicySection::create([
                'policy_id' => $policy->id,
                'title' => $section['title'],
                'description' => $section['description'],
                'sort_order' => $index,
            ]);
        }

        return redirect()
            ->route('admin.policy.index')
            ->with('success', 'Policy updated successfully');
    }

    /**
     * Delete policy
     */
    public function destroy(Policy $policy)
    {
        $policy->delete();

        return back()->with('success', 'Policy deleted successfully');
    }
}
