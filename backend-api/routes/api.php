<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

Route::get('users', 'UserController@all');
Route::post('users', 'UserController@create');
Route::get('users/{id}', 'UserController@getById');
Route::get('users/email/{email}', 'UserController@getByEmail');
Route::get('users/username/{username}', 'UserController@getByUsername');
Route::put('users/{id}', 'UserController@updateById');
Route::delete('users/{id}', 'UserController@deleteById');

/*
|--------------------------------------------------------------------------
| Board Routes
|--------------------------------------------------------------------------
*/
Route::get('boards', 'BoardController@all');
Route::post('boards', 'BoardController@create');
Route::get('boards/{id}', 'BoardController@getById');
Route::get('boards/user/{userId}', 'BoardController@getByUser');
Route::put('boards/{id}', 'BoardController@updateById');
Route::delete('boards/{id}', 'BoardController@deleteById');

/*
|--------------------------------------------------------------------------
| Pin Routes
|--------------------------------------------------------------------------
*/
Route::get('pins', 'PinController@all');
Route::post('pins/', 'Pincontroller@create');
Route::get('pins/{id}', 'PinController@getById');
Route::get('pins/board/{boardId}', 'PinController@getByBoard');
Route::put('pins/{id}', 'PinController@updateById');
Route::delete('pins/{id}', 'PinController@deleteById');

/*
|--------------------------------------------------------------------------
| Generic Routes
|--------------------------------------------------------------------------
*/
Route::get('search/{query}', 'PinController@search');

/*
|--------------------------------------------------------------------------
| Jwt Routes
|--------------------------------------------------------------------------
*/
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::get('me', 'AuthController@me');

});
