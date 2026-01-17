<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Inertia\Inertia;

class TeamPageController extends Controller
{
    public function index()
    {
        $teams = Team::where('language', 'en')->get();

        return Inertia::render('Corporate/Team', [
            'managementTeam' => $teams->where('category', 'Management Team')->values(),
            'technologyLeadership' => $teams->where('category', 'Technology & Innovation Leadership')->values(),
            'regionalLeadership' => $teams->where('category', 'Regional Leadership')->values(),
            'advisoryBoard' => $teams->where('category', 'Advisory Board')->values(),
            'strategicAlliancePartners' => $teams->where('category', 'Strategic Alliance Partners')->values(),
        ]);
    }
}
