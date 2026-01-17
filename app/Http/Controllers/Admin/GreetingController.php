<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Greeting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GreetingController extends Controller
{
    /**
     * List greetings (Table + Sheet)
     */
    public function index()
    {
        return Inertia::render('Admin/Greetings/Index', [
            'greetings' => Greeting::latest()->get(),
        ]);
    }

    /**
     * Store new greeting (Sheet - Add)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'image'       => 'nullable|image|max:2048',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('greetings', 'public');
        }

        Greeting::create($data);

        return redirect()
            ->route('admin.greetings.index')
            ->with('success', 'Greeting added successfully');
    }

    /**
     * Update greeting (Sheet - Edit)
     */
    public function update(Request $request, Greeting $greeting)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'image'       => 'nullable|image|max:2048',
            'description' => 'required|string',
        ]);

        if ($request->hasFile('image')) {
            // delete old image
            if ($greeting->image) {
                Storage::disk('public')->delete($greeting->image);
            }

            $data['image'] = $request->file('image')->store('greetings', 'public');
        }

        $greeting->update($data);

        return redirect()
            ->route('admin.greetings.index')
            ->with('success', 'Greeting updated successfully');
    }

    /**
     * Delete greeting
     */
    public function destroy(Greeting $greeting)
    {
        if ($greeting->image) {
            Storage::disk('public')->delete($greeting->image);
        }

        $greeting->delete();

        return back()->with('success', 'Greeting deleted successfully');
    }
}
