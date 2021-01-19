<?php

namespace App\Models;

use App\Models\Subjob;
use App\Models\Timesheet;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobtype extends Model
{
    use HasFactory;

    protected $fillable = [
      'name',
      'description'
    ];

    protected $hidden = [
        'pivot',
    ];

    public function subjobs()
    {
      return $this->belongsToMany(Subjob::class);
    }

    public function timesheets()
    {
      return $this->hasMany(Timesheet::class);
    }
}
