<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{

    /**
     * Show a list of all of the application's users.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all user profiles');
        return response()->json(User::with('boards')->get());

    }

    /**
     * Create a new user instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        $user = User::create([
            'first_name' =>$request->first_name,
            'last_name' =>$request->last_name,
            'email' =>$request->email,
            'username' =>$request->username,
            'password' =>bcrypt($request->password),
            'bio' =>$request->bio,
            'email_verified_at' => $request->email_verified_at
        ]);

        $user->save();
        return response()->json(["userCreated" => $user, "Message" => "User created successfully"], 201);
    }

    /**
     * Return a given user by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {
        Log::info('Retrieving user profile for user: '.$id);
        return response()->json(User::findOrFail($id));
    }

    /**
     * Return a given user by email.
     *
     * @param $email
     * @return JsonResponse
     */
    public function getByEmail($email)
    {
        Log::info('Retrieving user profile for user: '.$email);
        return response()->json(User::where('email', $email) -> first());
    }

    /**
     * Return a given user by username.
     *
     * @param $username
     * @return JsonResponse
     */
    public function getByUsername($username)
    {
        Log::info('Retrieving user profile for user: '.$username);
        return response()->json(User::where('username', $username) -> first());
    }

    /**
     * Update pin instance.
     *
     * @param  Request $request $id
     * @return JsonResponse
     */
    public function updateById(Request $request, $id)
    {
        if(User::where('id', $id)->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => 'User Id does not exist', 'code' => $code], $code);
        } else {
            Log::info('Updated user with id: ' .$id);
            $user = User::where('id', $id)->first();
            $dataFromTheUserUpdated = $request->all();
            $user->update($dataFromTheUserUpdated);
            return response()->json(["userUpdated" => $user, "Message" => "User updated successfully"]);
        }
    }

    /**
     * Delete user instance.
     *
     * @param  $id
     * @return JsonResponse
     */
    public function deleteById($id)
    {
        if(User::where('id', $id)->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => 'User Id does not exist', 'code' => $code], $code);
        } else {
            Log::info('Deleted user with id: ' .$id);
            $user = User::where('id', $id)->first();
            $user->delete();
            return response()->json(["userDeleted" => $user, "Message" => "User deleted successfully"]);
        }
    }
}
