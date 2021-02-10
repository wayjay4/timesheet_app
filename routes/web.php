<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', 'timesheet/dashboard/');

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/mydashboard', function () {
	return view('mydashboard');
})->middleware('auth:sanctum', 'verified');

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');

Route::redirect('/dashboard', 'timesheet/dashboard/')->name('dashboard');

Route::any('timesheet/dashboard/', [DashboardController::class, 'index'])
	->middleware('auth:sanctum','verified');

Route::any('timesheet/dashboard/{any}', [DashboardController::class, 'index'])
	->middleware('auth:sanctum', 'verified')
	->where('any', '.*');
