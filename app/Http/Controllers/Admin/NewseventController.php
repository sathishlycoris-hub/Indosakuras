<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Newsevent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewseventController extends Controller
{
    public function home()
{
    return Inertia::render('Index', [
        'updates' => Newsevent::orderBy('date', 'desc')
            ->take(6)
            ->get([
                'id',
                'date',
                'eventtype',
                'short',
            ]),
    ]);
}
    /**
     * Admin list page
     */
    public function index()
    {
        return Inertia::render('Admin/Newevent/Index', [
            'events' => Newsevent::orderBy('date', 'desc')->get(),
            'eventTypes' => [
                'Press Release',
                'Updates',
                'Media',
                'Event',
                'Notice',
            ],
        ]);
    }

    /**
     * Store new news/event
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required|date',
            'eventtype' => 'required|string',
            'short' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|image',
            'pdf' => 'nullable|file|mimes:pdf',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('news', 'public');
        }

        if ($request->hasFile('pdf')) {
            $data['pdf'] = $request->file('pdf')->store('news', 'public');
        }
        

        Newsevent::create($data);

        return back()->with('success', 'News added');
    }

    /**
     * Public news detail page
     */
    public function show(Newsevent $newsevent)
    {
        return Inertia::render('News/Detail', [
            'news' => $newsevent,
        ]);
    }

    /**
     * Update news/event
     */
    public function update(Request $request, Newsevent $newsevent)
{
    $data = $request->validate([
        'date' => 'required|date',
        'eventtype' => 'required|string',
        'short' => 'required|string',
        'description' => 'required|string',
        'image' => 'nullable|image',
        'pdf' => 'nullable|file|mimes:pdf',
    ]);

    //  VERY IMPORTANT: prevent accidental deletion
    if (!$request->hasFile('image')) {
        unset($data['image']);
    }

    if (!$request->hasFile('pdf')) {
        unset($data['pdf']);
    }

    if ($request->hasFile('image')) {
        // optional: delete old image
        // Storage::disk('public')->delete($newsevent->image);

        $data['image'] = $request->file('image')->store('news', 'public');
    }

    if ($request->hasFile('pdf')) {
        $data['pdf'] = $request->file('pdf')->store('news', 'public');
    }

    $newsevent->update($data);

    return back()->with('success', 'News updated');
}


    /**
     * Delete news/event
     */
    public function destroy(Newsevent $newsevent)
    {
        $newsevent->delete();

        return back()->with('success', 'News deleted');
    }

    /**
 * Public Press Release page
 */
public function pressRelease()
{
    return Inertia::render('Corporate/Pressrelease', [
        'news' => Newsevent::orderBy('date', 'desc')->get(),
        'filters' => [
            'All',
            'Press Release',
            'Updates',
            'Media',
            'Event',
            'Notice',
        ],
    ]);
}

}
