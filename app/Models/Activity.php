<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;
use App\Models\Timesheet;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
    	'code',
    	'other_details',
    	'start_date',
    	'end_date',
    	'project_id',
    ];

    public function project(){
        return $this->belongsTo(Project::class);
    }

    public function timesheets(){
    	return $this->hasMany(Timesheet::class);
    }
}
