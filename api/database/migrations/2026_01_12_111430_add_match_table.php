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
        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            // foreig keys
            $table->foreignId("host_team_id")->constrained("teams")->onDelete("cascade");
            $table->foreignId("visitor_team_id")->constrained("teams")->onDelete("cascade");
            // match details
            $table->dateTime("date");
            $table->dateTime("time");
            $table->string("venue");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matches');
    }
};
