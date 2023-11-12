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
        Schema::create('citas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('paciente_id');
            $table->unsignedBigInteger('especialista_id');
            $table->foreign('paciente_id')->references('user_id')->on('pacientes');
            $table->foreign('especialista_id')->references('user_id')->on('especialistas');
            $table->foreignId('clinica_id')->constrained();
            $table->date('fecha');
            $table->time('hora');
            $table->integer('estatus');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('citas');
    }
};
