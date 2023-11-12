<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('especialistas', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained();
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('especialidad');
            $table->string('cedula')->unique();
            $table->string('horario');
            $table->string('horaEntrada');
            $table->string('horaSalida');
            $table->foreignId('clinica_id');
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
