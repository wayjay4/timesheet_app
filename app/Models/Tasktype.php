<?php

namespace App\Models;

use App\Models\Subjob;
use App\Models\Subtask;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasktype extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function subjobs()
    {
        return $this->belongsToMany(Subjob::class);
    }

    public function subtasks()
    {
        return $this->belongsToMany(Subtask::class);
    }
}
