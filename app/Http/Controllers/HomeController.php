<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Service;
use App\Models\Solution;
use App\Models\Newsevent;
use App\Models\Seo;
class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'seo' => Seo::where('page', 'home')->first(),

            'updates' => Newsevent::orderBy('date', 'desc')
                ->take(6)
                ->get(['id','date','eventtype','short', 'short_ja']),

            'services' => Service::select(
                'id','title','slug','hero_description','title_ja','hero_description_ja'
            )->orderBy('id')->get(),

            'solutions' => Solution::select(
                'id','title','slug','hero_description','title_ja','hero_description_ja'
            )->orderBy('id')->get(),
        ]);
    }
}
