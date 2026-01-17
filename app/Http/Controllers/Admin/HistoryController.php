<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\History;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoryController extends Controller
{
    /**
     * List history records (Table + Sheet)
     */
    public function index()
    {
        return Inertia::render('Admin/History/Index', [
            'histories' => History::orderBy('year', 'desc')
                ->orderBy('month', 'desc')
                ->get(),
        ]);
    }

    /**
     * Store new history record (Sheet - Add)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'year'        => 'required|string|max:10',
            'month'       => 'required|string|max:20',
            'description' => 'required|string',
        ]);

        History::create($data);

        return redirect()
            ->route('admin.history.index')
            ->with('success', 'History added successfully');
    }

    /**
     * Update history record (Sheet - Edit)
     */
    public function update(Request $request, History $history)
    {
        $data = $request->validate([
            'year'        => 'required|string|max:10',
            'month'       => 'required|string|max:20',
            'description' => 'required|string',
        ]);

        $history->update($data);

        return redirect()
            ->route('admin.history.index')
            ->with('success', 'History updated successfully');
    }

    /**
     * Delete history record
     */
    public function destroy(History $history)
    {
        $history->delete();

        return back()->with('success', 'History deleted successfully');
    }
}
