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
Route::group([

    'prefix' => 'users'

], function ($router) {

    Route::get('', 'UserController@all');
    Route::post('', 'UserController@create');
    Route::get('{id}', 'UserController@getById');
    Route::get('email/{email}', 'UserController@getByEmail');
    Route::get('username/{username}', 'UserController@getByUsername');
    Route::put('{id}', 'UserController@updateById');
    Route::delete('{id}', 'UserController@deleteById');
});

/*
|--------------------------------------------------------------------------
| Board Routes
|--------------------------------------------------------------------------
*/
Route::group([

    'prefix' => 'boards'

], function ($router) {

    Route::get('', 'BoardController@all');
    Route::post('', 'BoardController@create');
    Route::get('{id}', 'BoardController@getById');
    Route::get('user/{userId}', 'BoardController@getByUser');
    Route::put('{id}', 'BoardController@updateById');
    Route::delete('{id}', 'BoardController@deleteById');

});

/*
|--------------------------------------------------------------------------
| Pin Routes
|--------------------------------------------------------------------------
*/
Route::group([

    'prefix' => 'pins'

], function ($router) {

    Route::get('', 'PinController@all');
    Route::post('', 'Pincontroller@create');
    Route::get('{id}', 'PinController@getById');
    Route::get('board/{boardId}', 'PinController@getByBoard');
    Route::put('{id}', 'PinController@updateById');
    Route::delete('{id}', 'PinController@deleteById');

});

/*
|--------------------------------------------------------------------------
| Search Routes
|--------------------------------------------------------------------------
*/
Route::group([

    'prefix' => 'search'

], function ($router) {

    Route::get('{query}', 'PinController@search');
});

/*
|--------------------------------------------------------------------------
| Jwt Routes
|--------------------------------------------------------------------------
*/
Route::group([

    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::get('me', 'AuthController@me');

});
