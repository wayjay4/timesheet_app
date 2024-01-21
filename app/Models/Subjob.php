<?php

namespace App\Models;

use App\Models\Jobtype;
use App\Models\Tasktype;
use App\Model\Timesheet;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subjob extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description'
    ];

    protected $hidden = [
        'pivot',
    ];

    public function jobtypes()
    {
      return $this->belongsToMany(Jobtype::class);
    }

    public function tasktypes()
    {
        return $this->belongsToMany(Tasktype::class);
    }

    public function timesheets()
    {
      return $this->hasMany(Timesheet::class);
    }
}
