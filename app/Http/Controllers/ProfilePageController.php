<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Inertia\Inertia;

class ProfilePageController extends Controller
{
    public function index()
    {
        return Inertia::render('Corporate/Profile', [
            // ONLY company profile rows
            'companyProfiles' => Profile::orderBy('id')->get(),
        ]);
    }
}
