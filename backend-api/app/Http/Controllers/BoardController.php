<?php

namespace App\Http\Controllers;

use App\Board;
use App\Pin;
use App\User;
use Illuminate\Http\Response;
use Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BoardController extends Controller
{
    /**
     * Show a list of all of the application's boards.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all boards');
        return response()->json(Board::with('pins')->get());
    }

    /**
     * Create a new board instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        $boardValidator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'user_id' => ['required', 'integer']
        ]);

        if($boardValidator->fails()) {
            $errors = $boardValidator->errors()->getMessages();
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }

        if(User::where('id', $request->user_id)->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => 'User Id does not exist', 'code' => $code], $code);
        } else {
            $board = Board::create([
                'name' => $request->name,
                'description' => $request->description,
                'user_id' => $request->user_id,
            ]);

            $board->save();
            return response()->json(["boardCreated" => $board, "Message" => "Board created successfully"], 201);
        }
    }

    /**
     * Return a given board by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {
        Log::info('Retrieving board with id: '.$id);
        return response()->json(Board::findOrFail($id));
    }

    /**
     * Return a collection of boards given a user id.
     *
     * @param $userId
     * @return JsonResponse
     */
    public function getByUser($userId)
    {
        Log::info('Retrieving boards with user id: '.$userId);
        $boards = Board::where('user_id', $userId)->get();
        return response()->json($boards);
    }

    /**
     * Update board instance.
     *
     * @param  Request $request $id
     * @return JsonResponse
     */
    public function updateById(Request $request, $id)
    {
        Log::info('Updated board with id: ' .$id);
        $board = Board::where('id', $id)->first();
        $dataFromTheBoardUpdated = $request->all();
        $board->update($dataFromTheBoardUpdated);
        return response()->json(["boardUpdated" => $board, "Message" => "Board updated successfully"]);
    }

    /**
     * Delete board instance.
     *
     * @param  $id
     * @return JsonResponse
     */
    public function deleteById($id)
    {
        if(Board::where('id', $id)->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => 'Board Id does not exist', 'code' => $code], $code);
        } else {
            Log::info('Deleted board by id: ' .$id);
            $board = Board::where('id', $id)->first();
            $board->delete();
            return response()->json(["boardDeleted" => $board, "Message" => "Board deleted successfully"]);
        }
    }
}
