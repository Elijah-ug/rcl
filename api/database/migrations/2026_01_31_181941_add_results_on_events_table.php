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
        Schema::table("events", function(Blueprint $table){
            $table->unsignedInteger("host_score")->nullable();
            $table->unsignedInteger("visitor_score")->nullable();
            $table->string("status")->default("upcoming")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
