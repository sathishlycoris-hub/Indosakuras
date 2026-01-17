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
        $data = $request->validate([
            'productService' => 'required|string',
            'classification' => 'required|array',
            'expectedDate' => 'required|string',
            'companyName' => 'required|string',
            'lastNameEn' => 'required|string',
            'firstNameEn' => 'required|string',
            'lastNameJa' => 'required|string',
            'firstNameJa' => 'required|string',
            'zipCode' => 'required|string',
            'address' => 'required|string',
            'telephone' => 'required|string',
            'email' => 'required|email',
            'language' => 'required|in:en,ja',
        ]);

            // dd($data);
             
        Contact::create([
            'product_service' => $request->productService,
            'classification' => json_encode($request->classification),
            'requests' => $request->requests,
            'expected_date' => $request->expectedDate,
            'company_name' => $request->companyName,
            'customer_position' => $request->customerPosition,
            'department' => $request->departmentName,
            'post' => $request->post,
            'name_en' => $request->lastNameEn . ' ' . $request->firstNameEn,
            'name_ja' => $request->lastNameJa . ' ' . $request->firstNameJa,
            'address_type' => $request->addressType,
            'zip_code' => $request->zipCode,
            'prefecture' => $request->prefecture,
            'address' => $request->address,
            'telephone' => $request->telephone,
            'email' => $request->email,
            'language' => $request->language,
        ]);

        return redirect()->back();
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
