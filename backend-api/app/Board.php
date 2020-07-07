<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Board extends Model
{

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function pins()
    {
        return $this->hasMany('App\Pin');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'user_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
