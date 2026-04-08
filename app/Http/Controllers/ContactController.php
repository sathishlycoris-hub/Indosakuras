<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        // dd($request->all());
        //
        // $data = $request->validate([
        //     'productService' => 'required|string',
        //     'classification' => 'nullable|array',
        //     'expectedDate' => 'nullable|string',
        //     'companyName' => 'nullable|string',
        //     'lastNameEn' => 'required|string',
        //     'firstNameEn' => 'nullable|string',
        //     'lastNameJa' => 'nullable|string',
        //     'firstNameJa' => 'nullable|string',
        //     'zipCode' => 'nullable|string',
        //     'address' => 'nullable|string',
        //     'telephone' => 'required|string',
        //     'email' => 'required|email',
        //     'language' => 'nullable|in:en,ja',
        // ]);

            // dd($data);
             
        // Contact::create([
        //     'product_service' => $request->productService,
        //     'classification' => json_encode($request->classification),
        //     'requests' => $request->requests,
        //     'expected_date' => $request->expectedDate,
        //     'company_name' => $request->companyName,
        //     'customer_position' => $request->customerPosition,
        //     'department' => $request->departmentName,
        //     'post' => $request->post,
        //     'name_en' => $request->lastNameEn . ' ' . $request->firstNameEn,
        //     'name_ja' => $request->lastNameJa . ' ' . $request->firstNameJa,
        //     'address_type' => $request->addressType,
        //     'zip_code' => $request->zipCode,
        //     'prefecture' => $request->prefecture,
        //     'address' => $request->address,
        //     'telephone' => $request->telephone,
        //     'email' => $request->email,
        //     'language' => $request->language,
        // ]);

        // return redirect()->back();

        $data = $request->validate([
        'name_en' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'telephone' => 'required|string|max:20',
        'address' => 'required|string|max:255',
        'productService' => 'required|string',
    ]);

    Contact::create([
        'name_en' => $data['name_en'],
        'email' => $data['email'],
        'telephone' => $data['telephone'],
        'address' => $data['address'],
        'product_service' => $data['productService'], // DB column
    ]);

    return redirect()->back()->with('success', 'Message sent successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
