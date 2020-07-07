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
Route::put('boards/{id}', 'BoardController@udpateById');
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
Route::put('pins/{id}', 'PinController@udpateById');
Route::delete('pins/{id}', 'PinController@deleteById');
