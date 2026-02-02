<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
 protected $fillable = ["club", "mp", "w", "d", "l", "gf", "ga", "gd", "pts", "last_5"];
}
