<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;
use App\Models\Activity;
use App\Models\Jobtype;
use App\Models\Subjob;
use App\Models\Tasktype;
use App\Models\Subtask;

class Timesheet extends Model
{
    use HasFactory;

    protected $fillable = [
        'week_ending',
        'date',
        'building',
        'hours',
    	'date_submitted',
        'jobtype_id',
        'subjob_id',
        'tasktype_id',
        'subtask_id',
    	'account_id',
    	'activity_id',
    ];

    protected $with = ['jobtype', 'subjob', 'tasktype', 'subtask'];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function activity(){
        return $this->belongsTo(Activity::class);
    }

    public function jobtype(){
        return $this->belongsTo(Jobtype::class);
    }

    public function subjob(){
        return $this->belongsTo(Subjob::class);
    }

    public function tasktype(){
        return $this->belongsTo(Tasktype::class);
    }

    public function subtask(){
        return $this->belongsTo(Subtask::class);
    }
}
