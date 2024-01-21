<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\ApiController;
use App\Models\Account;
use App\Models\Timesheet;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountTimesheetController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Account $account)
    {
        $timesheets = $account->timesheets;

        return $this->showAll($timesheets);
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
    public function store(Request $request, User $account)
    {
        // $rules = [
            //'quantity' => 'required|min:1',
        // ];

        // $this->validate($rules, $request);

        

        return DB::transaction(function() use ($request, $account){
            $activity_id = 1;
            
            $timesheet = Timesheet::create([
                'week_ending' => $request->week_ending,
                'building' => $request->building,
                'date' => $request->date,
                'foreman_name' => $request->foreman_name,
                'jobtype_id' => $request->jobtype,
                'subjob_id' => $request->subjob,
                'tasktype_id' => $request->tasktype,
                'subtask_id' => $request->subtask,
                'hours' => $request->hours,
                'date_submitted' => $request->date,
                'supervisor_id' => $request->supervisor_id,
                'account_id' => $account->id,
                'activity_id' => $activity_id
            ]);

            return $this->showOne($timesheet, 201);
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Account $account, Timesheet $timesheet)
    {
        $timesheet->week_ending = $request->week_ending;
        $timesheet->building = $request->building;
        $timesheet->date = $request->date;
        $timesheet->foreman_name = $request->foreman_name;
        $timesheet->jobtype_id = $request->jobtype;
        $timesheet->subjob_id = $request->subjob;
        $timesheet->tasktype_id = $request->tasktype;
        $timesheet->subtask_id = $request->subtask;
        $timesheet->supervisor_id = $request->supervisor_id;
        $timesheet->hours = $request->hours;

        $timesheet->save();

        return $this->showOne($timesheet);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account, Timesheet $timesheet)
    {
        Timesheet::find($timesheet->id)->delete();

        return $this->showOne($timesheet);
    }
}
