<?php

namespace App\Http\Controllers\Tasktype;

use App\Http\Controllers\ApiController;
use App\Models\Tasktype;
use Illuminate\Http\Request;

class TasktypeController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasktypes = Tasktype::all();

        return $this->showAll($tasktypes);
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
     * @param  \App\Models\Tasktype  $tasktype
     * @return \Illuminate\Http\Response
     */
    public function show(Tasktype $tasktype)
    {
        return $this->showOne($tasktype);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tasktype  $tasktype
     * @return \Illuminate\Http\Response
     */
    public function edit(Tasktype $tasktype)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tasktype  $tasktype
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tasktype $tasktype)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tasktype  $tasktype
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tasktype $tasktype)
    {
        //
    }
}
