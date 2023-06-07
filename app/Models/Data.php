<?php

namespace App\Models;
// namespace App;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;

    protected $fillable = [
        'employees_id', 'lang', 'lat', 'date'
    ];


    // public function emp()
    // {
    //     return $this->belongsTo('App\employee');
    // }
}
