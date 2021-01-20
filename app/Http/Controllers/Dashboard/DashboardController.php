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
    public function index()
    {


		// Get the currently authenticated user...

		$user = Auth::user();

		// Get the currently authenticated user's ID...

		$id = Auth::id();
		
        return view('timesheet.dashboard.index', [
        	'user' => $user,
        ]);
    }
}
