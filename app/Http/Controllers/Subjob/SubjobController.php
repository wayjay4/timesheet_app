<?php

namespace App\Http\Controllers\Subjob;

use App\Http\Controllers\ApiController;
use App\Models\Subjob;
use Illuminate\Http\Request;

class SubjobController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subjobs = Subjob::all();

        return $this->showAll($subjobs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subjob  $subjob
     * @return \Illuminate\Http\Response
     */
    public function show(Subjob $subjob)
    {
        return $this->showAll($subjob);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subjob  $subjob
     * @return \Illuminate\Http\Response
     */
    public function edit(Subjob $subjob)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subjob  $subjob
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subjob $subjob)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subjob  $subjob
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subjob $subjob)
    {
        //
    }
}
