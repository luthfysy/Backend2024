<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AnimalController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/animals', [AnimalController::class, 'index']);          // GET request untuk menampilkan semua hewan
Route::post('/animals', [AnimalController::class, 'store']);         // POST request untuk menambah hewan baru
Route::put('/animals/{id}', [AnimalController::class, 'update']);    // PUT request untuk mengupdate hewan berdasarkan id
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']); // DELETE request untuk menghapus hewan berdasarkan id
