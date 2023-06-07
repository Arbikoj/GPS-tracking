<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Data;
use App\Models\employee;

use App\Http\Controllers\DataController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// EMPLOYEE
Route::get('employee', function () {
    return response(employee::all(),200);
});

// get by id
Route::get('employee/{employeeparams}', function ($employeeId) {
    return response(employee::find($employeeId), 200);
});

// add data
Route::post('employee', function(Request $request) {
    $resp = employee::create($request->all());
    return $resp;
});

// update data
Route::put('employee/{employeeparams}', function(Request $request, $employeeId) {
    $employees = employee::findOrFail($employeeId);
    $employees->update($request->all());
    return $employees;
});

// delete data
Route::delete('employee/{employeeparams}',function($employeeId) {
	employee::find($employeeId)->delete();
    return 204;
});


// DATA
Route::get('data', function () {
    return response(Data::all(),200);
});

// get by id
Route::get('data/{dataparams}', function ($dataId) {
    return response(Data::find($dataId), 200);
});

// add data
Route::post('data', function(Request $request) {
    $resp = Data::create($request->all());
    return $resp;
});

// update data
Route::put('data/{dataparams}', function(Request $request, $dataId) {
    $dataku = Data::findOrFail($dataId);
    $dataku->update($request->all());
    return $dataku;
});

// delete data
Route::delete('data/{dataparams}',function($dataId) {
	Data::find($dataId)->delete();
    return 204;
});