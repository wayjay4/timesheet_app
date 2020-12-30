<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Jobtype\JobtypeController;
use App\Http\Controllers\Jobtype\JobtypeSubjobController;
use App\Http\Controllers\Jobtype\JobtypeSubjobTasktypeController;
use App\Http\Controllers\Jobtype\JobtypeSubjobTasktypeSubtaskController;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
