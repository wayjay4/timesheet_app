<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Costcenter;
use App\Models\Role;
use App\Models\Timesheet;

class Account extends User
{
    use HasFactory;

    public function costcenters(){
    	return $this->hasMany(Costcenter::class);
    }

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function timesheets(){
    	return $this->hasMany(Timesheet::class);
    }
}
