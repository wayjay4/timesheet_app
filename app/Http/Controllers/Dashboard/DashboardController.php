<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\User;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function timesheets()
    {
		// get the currently authenticated user
		$user = Auth::user();
		
        return view('timesheet.dashboard.timesheets', [
        	'user' => $user,
        ]);
    }

    public function orders()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('timesheet.dashboard.comingsoon', [
            'user' => $user,
            'page' => 'Orders'
        ]);
    }

    public function products()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('timesheet.dashboard.comingsoon', [
            'user' => $user,
            'page' => 'Products'
        ]);
    }

    public function customers()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('timesheet.dashboard.comingsoon', [
            'user' => $user,
            'page' => 'Customers'
        ]);
    }

    public function reports()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('timesheet.dashboard.comingsoon', [
            'user' => $user,
            'page' => 'Reports'
        ]);
    }

    public function integrations()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('timesheet.dashboard.comingsoon', [
            'user' => $user,
            'page' => 'Integrations'
        ]);
    }
}
