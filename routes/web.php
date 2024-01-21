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

Route::redirect('/', 'dashboard/timesheets/');

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/mydashboard', function () {
	return view('mydashboard');
})->middleware('auth:sanctum', 'verified');

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');

Route::redirect('/dashboard', '/dashboard/timesheets/')->name('dashboard');
Route::redirect('/timesheet/dashboard/', '/dashboard/timesheets/');

Route::any('dashboard/timesheets/', [DashboardController::class, 'timesheets'])
	->middleware('auth:sanctum','verified')
	->name('timesheets');

Route::any('dashboard/timesheets/{any}', [DashboardController::class, 'timesheets'])
	->middleware('auth:sanctum', 'verified')
	->where('any', '.*');

Route::any('dashboard/orders/', [DashboardController::class, 'orders'])
	->middleware('auth:sanctum','verified')
	->name('orders');

Route::any('dashboard/products/', [DashboardController::class, 'products'])
	->middleware('auth:sanctum','verified')
	->name('products');

Route::any('dashboard/customers/', [DashboardController::class, 'customers'])
	->middleware('auth:sanctum','verified')
	->name('customers');

Route::any('dashboard/reports/', [DashboardController::class, 'reports'])
	->middleware('auth:sanctum','verified')
	->name('reports');

Route::any('dashboard/integrations/', [DashboardController::class, 'integrations'])
	->middleware('auth:sanctum','verified')
	->name('integrations');
