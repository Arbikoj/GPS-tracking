<?php

namespace App\Models;
// namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'uid', 'name', 'birth', 'gender'
    ];

    // public function datas()
    // {
    //     return $this->hasMany('App\Data');
    // }
}
