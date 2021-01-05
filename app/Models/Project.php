<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity;
use App\Models\Account;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
    	'project_code',
    	'name',
    	'location',
    	'other_details',
    	'account_id',
    ];

    public function activities(){
    	return $this->hasMany(Activity::class);
    }

    public function account(){
        return $this->belongsTo(Account::class);
    }
}
