<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\Clinica;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('especialistas', function (Blueprint $table) {
            $table->foreignIdFor(User::class)->constrained();
            $table->foreignIdFor(Clinica::class)->constrained();
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('especialidad');
            $table->string('cedula')->unique();
            $table->string('horario');
            $table->string('horaEntrada');
            $table->string('horaSalida');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('especialistas');
    }
};
