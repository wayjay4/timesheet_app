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
		
        return view('dashboard.timesheets', [
        	'user' => $user,
            'page' => 'timesheets'
        ]);
    }

    public function orders()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('dashboard.comingsoon', [
            'user' => $user,
            'page' => 'orders'
        ]);
    }

    public function products()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('dashboard.comingsoon', [
            'user' => $user,
            'page' => 'products'
        ]);
    }

    public function customers()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('dashboard.comingsoon', [
            'user' => $user,
            'page' => 'customers'
        ]);
    }

    public function reports()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('dashboard.comingsoon', [
            'user' => $user,
            'page' => 'reports'
        ]);
    }

    public function integrations()
    {
        // get the currently authenticated user
        $user = Auth::user();

        return view('dashboard.comingsoon', [
            'user' => $user,
            'page' => 'integrations'
        ]);
    }
}
