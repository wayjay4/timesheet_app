<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Jobtype\JobtypeController;
use App\Http\Controllers\Jobtype\JobtypeSubjobController;
use App\Http\Controllers\Jobtype\JobtypeSubjobTasktypeController;
use App\Http\Controllers\Jobtype\JobtypeSubjobTasktypeSubtaskController;
use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Role\RoleController;
use App\Http\Controllers\Costcenter\CostcenterController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Activity\ActivityController;
use App\Http\Controllers\Timesheet\TimesheetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::resource('jobtypes', JobtypeController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes.subjobs', JobtypeSubjobController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes.subjobs.tasktypes', JobtypeSubjobTasktypeController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes.subjobs.tasktypes.subtasks', JobtypeSubjobTasktypeSubtaskController::class, ['only' => ['index', 'show']]);

// Accounts
Route::resource('account', AccountController::class, ['only' => ['index', 'show']]);

// Roles
Route::resource('role', RoleController::class, ['only' => ['index', 'show']]);

// Costcenters
Route::resource('costcenter', CostcenterController::class, ['only' => ['index', 'show']]);

// Projects
Route::resource('project', ProjectController::class, ['only' => ['index', 'show']]);

// Activities
Route::resource('activity', ActivityController::class, ['only' => ['index', 'show']]);

// Timesheets
Route::resource('timesheet', TimesheetController::class, ['only' => ['index', 'show']]);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
