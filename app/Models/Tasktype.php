<?php

namespace App\Models;

use App\Models\Subjob;
use App\Models\Subtask;
use App\Model\Timesheet;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasktype extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    protected $hidden = [
        'pivot',
    ];

    public function subjobs()
    {
        return $this->belongsToMany(Subjob::class);
    }

    public function subtasks()
    {
        return $this->belongsToMany(Subtask::class);
    }

    public function timesheets()
    {
      return $this->hasMany(Timesheet::class);
    }
}
