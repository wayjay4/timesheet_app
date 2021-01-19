<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Jobtype\JobtypeController;
use App\Http\Controllers\Jobtype\JobtypeSubjobController;
use App\Http\Controllers\Jobtype\JobtypeSubjobTasktypeController;
use App\Http\Controllers\Jobtype\JobtypeSubjobTasktypeSubtaskController;

use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Account\AccountRoleController;
use App\Http\Controllers\Account\AccountCostcenterController;
use App\Http\Controllers\Account\AccountTimesheetController;
use App\Http\Controllers\Account\AccountProjectController;
use App\Http\Controllers\Account\AccountActivityController;

use App\Http\Controllers\Role\RoleController;
use App\Http\Controllers\Costcenter\CostcenterController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Activity\ActivityController;
use App\Http\Controllers\Timesheet\TimesheetController;
use App\Http\Controllers\Subjob\SubjobController;
use App\Http\Controllers\Subjob\SubjobTasktypeController;
use App\Http\Controllers\Tasktype\TasktypeController;
use App\Http\Controllers\Tasktype\TasktypeSubtaskController;
use App\Http\Controllers\Subtask\SubtaskController;


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

// Jobtype
Route::resource('jobtypes', JobtypeController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes', JobtypeController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes.subjobs', JobtypeSubjobController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes.subjobs.tasktypes', JobtypeSubjobTasktypeController::class, ['only' => ['index', 'show']]);
Route::resource('jobtypes.subjobs.tasktypes.subtasks', JobtypeSubjobTasktypeSubtaskController::class, ['only' => ['index', 'show']]);

// Subjob
Route::resource('subjobs', SubjobController::class, ['only' => ['index', 'show']]);
Route::resource('subjobs.tasktypes', SubjobTasktypeController::class, ['only' => ['index', 'show']]);

// Tasktype
Route::resource('tasktypes', TasktypeController::class, ['only' => ['index', 'show']]);
Route::resource('tasktypes.subtasks', TasktypeSubtaskController::class, ['only' => ['index', 'show']]);

// Subtask
Route::resource('subtasks', SubtaskController::class, ['only' => ['index', 'show']]);

// Accounts
Route::resource('accounts', AccountController::class, ['only' => ['index', 'show']]);
Route::resource('accounts.roles', AccountRoleController::class, ['only' => ['index']]);
Route::resource('accounts.costcenters', AccountCostcenterController::class, ['only' => ['index']]);
Route::resource('accounts.timesheets', AccountTimesheetController::class, ['only' => ['index', 'store', 'update', 'destroy']]);
Route::resource('accounts.projects', AccountProjectController::class, ['only', ['index']]);
Route::resource('accounts.activities', AccountActivityController::class, ['only' => ['index']]);

// Roles
Route::resource('roles', RoleController::class, ['only' => ['index', 'show']]);

// Costcenters
Route::resource('costcenters', CostcenterController::class, ['only' => ['index', 'show']]);

// Projects
Route::resource('projects', ProjectController::class, ['only' => ['index', 'show']]);

// Activities
Route::resource('activities', ActivityController::class, ['only' => ['index', 'show']]);

// Timesheets
Route::resource('timesheets', TimesheetController::class, ['only' => ['index', 'show']]);



Route::middleware('auth:sanctum')->get('/users', function (Request $request) {
    return $request->user();
});
