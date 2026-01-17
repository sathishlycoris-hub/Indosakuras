<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Seminar;
use Illuminate\Http\Request;

class SeminarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Admin/Seminar/Index', [
        'seminars' => Seminar::select(
            'id',
            'title',
            'description',
            'location',
            'date',
            'time',
            'status',
            'tags',
            'organizer',
            'image' 
        )
        ->orderBy('date', 'desc')
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
            'description' => 'required|string',
            'location' => 'required|string',
            'date' => 'required|date',
            'time' => 'required|string',
            'status' => 'required|in:upcoming,archived',

            'title_ja' => 'nullable|string',
            'description_ja' => 'nullable|string',
            'location_ja' => 'nullable|string',

            'participation_fee' => 'nullable|string',
            'participation_fee_ja' => 'nullable|string',
            'organizer' => 'nullable|string',
            'organizer_ja' => 'nullable|string',
            'sponsorship' => 'nullable|string',
            'sponsorship_ja' => 'nullable|string',
            'cooperation' => 'nullable|string',
            'cooperation_ja' => 'nullable|string',

            'tags' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->tags) {
            $data['tags'] = array_map('trim', explode(',', $request->tags));
        }

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('seminars', 'public');
        }

        Seminar::create($data);

        return back()->with('success', 'Seminar added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Seminar $seminar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seminar $seminar)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, Seminar $seminar)
{
    $data = $request->validate([
        'title' => 'required|string',
        'description' => 'required|string',
        'location' => 'required|string',
        'date' => 'required|date',
        'time' => 'required|string',
        'status' => 'required|in:upcoming,archived',

        'title_ja' => 'nullable|string',
        'description_ja' => 'nullable|string',
        'location_ja' => 'nullable|string',

        'participation_fee' => 'nullable|string',
        'participation_fee_ja' => 'nullable|string',
        'organizer' => 'nullable|string',
        'organizer_ja' => 'nullable|string',
        'sponsorship' => 'nullable|string',
        'sponsorship_ja' => 'nullable|string',
        'cooperation' => 'nullable|string',
        'cooperation_ja' => 'nullable|string',

        'tags' => 'nullable|string',
        'image' => 'nullable|image|max:2048',
    ]);

    if ($request->filled('tags')) {
        $data['tags'] = array_map(
            'trim',
            explode(',', $request->tags)
        );
    } else {
        $data['tags'] = [];
    }

    if ($request->hasFile('image')) {
        $data['image'] = $request->file('image')->store('seminars', 'public');
    }

    $seminar->update($data);

    return back()->with('success', 'Seminar updated successfully');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seminar $seminar)
    {
        //
        $seminar->delete();
        return back()->with('success', 'Seminar deleted');
    }
}
