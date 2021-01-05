<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;
use App\Models\Activity;

class Timesheet extends Model
{
    use HasFactory;

    protected $fillable = [
    	'date',
    	'hours',
    	'job_type',
    	'date_submitted',
    	'account_id',
    	'activity_id',
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function activity(){
        return $this->belongsTo(Activity::class);
    }
}
