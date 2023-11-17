<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained();
            $table->string('nombres')->nullable();
            $table->string('apellidos')->nullable();
            $table->string('NSS', 11)->unique()->nullable();
            $table->enum('sexo', ['Hombre', 'Mujer'])->nullable();
            $table->date('fechaNac')->nullable();
            $table->string('entidadNac')->nullable();
            $table->string('domicilio')->nullable()->nullable();
            $table->string('telefono')->nullable()->nullable();

            // cloudinary
            $table->string('public_id')->nullable();
            $table->string('url')->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pacientes');
    }
};