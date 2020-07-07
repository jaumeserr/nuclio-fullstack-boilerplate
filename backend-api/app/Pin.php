<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{

    public function board()
    {
        return $this->belongsTo('App\Board');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'note', 'color', 'media_url', 'board_id'
    ];

}
