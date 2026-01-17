<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProfileController extends Controller
{
       public function index()
    {
        return Inertia::render('Admin/Profile/Index', [
            'profiles' => Profile::latest()->get(),
        ]);
    }

    /**
     * Store new profile (Sheet - Add)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            // 'title'     => 'nullable|string|max:255',
            'sub_title' => 'required|string|max:255',
            'content'   => 'required|string',
        ]);

        Profile::create($data);

        return redirect()
            ->route('admin.profile.index')
            ->with('success', 'Profile added successfully');
    }

    /**
     * Update profile (Sheet - Edit)
     */
    public function update(Request $request, Profile $profile)
    {
        $data = $request->validate([
            // 'title'     => 'nullable|string|max:255',
            'sub_title' => 'required|string|max:255',
            'content'   => 'required|string',
        ]);

        $profile->update($data);

        return redirect()
            ->route('admin.profile.index')
            ->with('success', 'Profile updated successfully');
    }

    /**
     * Delete profile
     */
    public function destroy(Profile $profile)
    {
        $profile->delete();

        return back()->with('success', 'Profile deleted successfully');
    }
}
