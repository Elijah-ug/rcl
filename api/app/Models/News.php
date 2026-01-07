<?php
namespace App\Models;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    //
    protected $fillable=["title", "description", "image"];
    public function admin(){
        return $this->belongsTo(Admin::class);
    }
}
