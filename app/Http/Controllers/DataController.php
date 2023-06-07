<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Data;

class DataController extends Controller
{
    public function index()
    {
        return Inertia::render('Data/DataIndex');
    }
}
