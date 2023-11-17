<?php

use App\Http\Controllers\CitaController;
use App\Http\Controllers\ClinicaController;
use App\Http\Controllers\EspecialistaController;
use App\Http\Controllers\PDFController;
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






//Rutas de Inertia React
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::inertia('/dashboard', 'Dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::inertia('/historial', 'Forms/Historial')
    ->middleware(['auth', 'verified'])
    ->name('historial');

Route::inertia('AgendarCita', 'AgendarCita')
    ->middleware(['auth', 'verified'])
    ->name('calendario');



//Rutas de controladores
Route::resources([
    'Clinicas'=> ClinicaController::class,
    'Especialistas'=> EspecialistaController::class,
    'Citas' => CitaController::class,
]);



Route::get('/CitasUser/{id}', [CitaController::class, 'indexUser']);

Route::get('/create/', [PDFController::class, 'createHistorial'])->name('historial.create');


require __DIR__.'/auth.php';
