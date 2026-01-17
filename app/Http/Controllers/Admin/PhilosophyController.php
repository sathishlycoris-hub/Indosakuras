<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Philosophy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PhilosophyController extends Controller
{
     public function index()
    {
        return Inertia::render('Admin/Philosophy/Index', [
            'philosophies' => Philosophy::latest()->get(),
        ]);
    }

    /**
     * Store new philosophy (Sheet - Add)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'content'     => 'required|string',
            'image'       => 'nullable|image|max:2048',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')
                ->store('philosophy', 'public');
        }

        Philosophy::create($data);

        return redirect()
            ->route('admin.philosophy.index')
            ->with('success', 'Philosophy added successfully');
    }

    /**
     * Update philosophy (Sheet - Edit)
     */
    public function update(Request $request, Philosophy $philosophy)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'content'     => 'required|string',
            'image'       => 'nullable|image|max:2048',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            if ($philosophy->image) {
                Storage::disk('public')->delete($philosophy->image);
            }

            $data['image'] = $request->file('image')
                ->store('philosophy', 'public');
        }

        $philosophy->update($data);

        return redirect()
            ->route('admin.philosophy.index')
            ->with('success', 'Philosophy updated successfully');
    }

    /**
     * Delete philosophy
     */
    public function destroy(Philosophy $philosophy)
    {
        if ($philosophy->image) {
            Storage::disk('public')->delete($philosophy->image);
        }

        $philosophy->delete();

        return back()->with('success', 'Philosophy deleted successfully');
    }
}
