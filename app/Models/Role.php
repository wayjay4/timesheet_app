<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Account;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
    	'name',
    ];

    public function accounts(){
    	return $this->hasMany(Account::class);
    }
}
