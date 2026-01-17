<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * List clients (Table + Sheet)
     */
    public function index()
    {
        return Inertia::render('Admin/Clients/Index', [
            'clients' => Client::with('sections')->latest()->get(),
        ]);
    }

    /**
     * Store new client (Sheet - Add)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'description' => 'required|string',

            'sections' => 'required|array|min:1',
            'sections.*.type' => 'required|in:customer,alliance,contract,partner',
            'sections.*.name' => 'required|string|max:255',
        ]);

        $client = Client::create([
            'description' => $data['description'],
        ]);

        foreach ($data['sections'] as $index => $section) {
            ClientSection::create([
                'client_id' => $client->id,
                'section_type' => $section['type'],
                'name' => $section['name'],
                'sort_order' => $index,
            ]);
        }

        return redirect()
            ->route('admin.clients.index')
            ->with('success', 'Clients added successfully');
    }

    /**
     * Update client (Sheet - Edit)
     */
    public function update(Request $request, Client $client)
    {
        $data = $request->validate([
            'description' => 'required|string',

            'sections' => 'required|array|min:1',
            'sections.*.type' => 'required|in:customer,alliance,contract,partner',
            'sections.*.name' => 'required|string|max:255',
        ]);

        $client->update([
            'description' => $data['description'],
        ]);

        // Replace sections (same as Jobs)
        $client->sections()->delete();

        foreach ($data['sections'] as $index => $section) {
            ClientSection::create([
                'client_id' => $client->id,
                'section_type' => $section['type'],
                'name' => $section['name'],
                'sort_order' => $index,
            ]);
        }

        return redirect()
            ->route('admin.clients.index')
            ->with('success', 'Clients updated successfully');
    }

    /**
     * Delete client
     */
    public function destroy(Client $client)
    {
        $client->delete();

        return back()->with('success', 'Clients deleted successfully');
    }
}
