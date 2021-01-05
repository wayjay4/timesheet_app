<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Costcenter;
use App\Models\Role;
use App\Models\Timesheet;
use App\Models\User;
use App\Models\Project;

class Account extends User
{
    protected static function boot()
    {
        parent::boot();
    }  
    
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

    public function projects(){
        return $this->hasMany(Project::class);
    }
}
