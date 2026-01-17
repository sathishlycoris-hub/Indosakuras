<?php

namespace App\Http\Controllers;

use App\Models\Solution;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Seo;
class SolutionPageController extends Controller
{
    public function index()
    {
        return Inertia::render('Solutions', [
             'seo' => Seo::where('page', 'solutions')->first(), 
            'solutions' => Solution::select('id', 'title', 'slug', 'hero_description')
                ->orderBy('id')
                ->get(),

             'solutionNav' => Solution::select('title','slug')->orderBy('id')->get(),
        ]);
    }

    public function show(string $slug)
    {
        $solution = Solution::where('slug', $slug)
            ->with([
                'features',
                'useCases',
                'industries',
                'caseStudies',
            ])
            ->firstOrFail();

        return Inertia::render('Solutions/Show', [
            'solution' => $solution,

             'solutionNav' => Solution::select('title','slug')->orderBy('id')->get(),
        ]);
    }
}
