<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
         return Inertia::render('Admin/Team/Index', [
            'teams' => Team::orderBy('id', 'desc')->get(),
            'categories' => [
                'Executive Leadership',
                'Management Team',
                'Technology & Innovation Leadership',
                'Regional Leadership',
                'Advisory Board',
                'Strategic Alliance Partners',
            ],
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
        //

         $data = $request->validate([
            'language' => 'required',
            'name' => 'required',
            'designation' => 'required',
            'category' => 'required',
            'description' => 'required',
            'image' => 'nullable|image',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('team', 'public');
        }

        Team::create($data);

        return back()->with('success', 'Team member added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
        //
        $data = $request->validate([
            'language' => 'required',
            'name' => 'required',
            'designation' => 'required',
            'category' => 'required',
            'description' => 'required',
            'image' => 'nullable|image',
        ]);

        if (!$request->hasFile('image')) {
            unset($data['image']);
        } else {
            if ($team->image) {
                Storage::disk('public')->delete($team->image);
            }
            $data['image'] = $request->file('image')->store('team', 'public');
        }

        $team->update($data);

        return back()->with('success', 'Team member updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        //
         if ($team->image) {
            Storage::disk('public')->delete($team->image);
        }

        $team->delete();

        return back()->with('success', 'Team member deleted');
        
    }
}
