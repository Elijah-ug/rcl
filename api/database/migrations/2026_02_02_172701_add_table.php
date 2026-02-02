<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void{
        Schema::create("tables", function(Blueprint $table){
            $table->id();
            $table->string("club");
            $table->integer("mp")->default(0);
            $table->integer("w")->default(0);
            $table->integer("d")->default(0);
            $table->integer("l")->default(0);
            $table->integer("gf")->default(0);
            $table->integer("ga")->default(0);
            $table->integer("gd")->default(0);
            $table->integer("pts")->default(0);
            $table->string("last_5");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void{
        Schema::dropIfExists("table");
    }
};
