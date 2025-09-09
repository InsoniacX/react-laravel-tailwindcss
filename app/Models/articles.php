<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class articles extends Model
{
    protected $table = 'articles';
    protected $fillable = [
        'title',
        'content',
        'author'
    ];
}
