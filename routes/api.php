<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\NotesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::apiResources([
//     'categories' => CategoriesController::class,
//     'notes' => NotesController::class,
// ],[
//     'except' => ['index']
// ]);

// Route::controller(CategoriesController::class)->group(function () {
//     Route::get('/categories/showAll', 'showAll');
//     Route::delete('/categories/deleteAll', 'deleteAll');
//     Route::get('/categories/{id}', 'show');
// });

Route::controller(NotesController::class)->group(function () {
    Route::get('/notes/showAll', 'showAll');
    Route::delete('/notes/deleteAll', 'deleteAll');
    Route::get('/{id}', 'show');
});
