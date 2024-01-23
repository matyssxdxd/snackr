<?php

use App\Http\Controllers\DislikesController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\MatchesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    })->name('welcome');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/likes', [LikesController::class, 'index'])->name('likes.index');
    Route::post('/likes', [LikesController::class, 'store'])->name('likes.store');
});

Route::middleware('auth')->group(function () {
    Route::post('/dislikes', [DislikesController::class, 'store'])->name('dislikes.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/matches', [MatchesController::class, 'index'])->name('matches.index');
    Route::get('/matches/{id}', [MatchesController::class, 'match'])->name('matches.match');
});

require __DIR__.'/auth.php';
