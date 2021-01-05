<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;

class Costcenter extends Model
{
    use HasFactory;

    protected $fillable = [
    	'name',
    	'description',
    	'order_details',
    	'account_id',
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }
}
