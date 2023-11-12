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
        Schema::create('db_gobs', function (Blueprint $table) {
            $table->id();
            $table->string('nombres');
            $table->string('apellidos');
            $table->enum('sexo', ['Hombre', 'Mujer']);
            $table->date('fechaNac');
            $table->string('curp', 18);
            $table->string('NSS', 11);
            $table->string('nacionalidad');
            $table->string('entidadNac');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_gobs');
    }
};
