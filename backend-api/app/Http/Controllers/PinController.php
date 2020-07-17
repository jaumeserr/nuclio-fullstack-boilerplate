<?php

namespace App\Http\Controllers;

use App\Board;
use App\Pin;
use Validator;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PinController extends Controller
{
    /**
     * Show a list of all of the application's pins.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all pins');
        return response()->json(Pin::all());
    }

    /**
     * Create a new pin instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        $pinValidator = Validator::make($request->all(), [
            'note' => ['required', 'string', 'max:255'],
            'media_url' => ['required', 'string', 'max:999'],
            'board_id' => ['required', 'integer']
        ]);

        if($pinValidator->fails()) {
            $errors = $pinValidator->errors()->getMessages();
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }

        $pin = Pin::create([
            'note' => $request->note,
            'color' => $request->color,
            'media_url' => $request->media_url,
            'board_id' => $request->board_id,
        ]);

        $pin->save();
        return response()->json(["pinCreated" => $pin, "Message" => "Pin created successfully"], 201);
    }

    /**
     * Return a given pin by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {
        Log::info('Retrieving pin with id: '.$id);
        return response()->json(Pin::findOrFail($id));
    }

    /**
     * Return a collection of pins given a board id.
     *
     * @param $boardId
     * @return JsonResponse
     */
    public function getByBoard($boardId)
    {
        Log::info('Retrieving pins with board id: '.$boardId);
        $pins = Pin::where('board_id', $boardId)->get();
        return response()->json($pins);
    }

    /**
     * Update pin instance.
     *
     * @param  Request $request $id
     * @return JsonResponse
     */
    public function updateById(Request $request, $id)
    {
        if(Board::where('id', $request->board_id)->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => 'Board Id does not exist', 'code' => $code], $code);
        } else {
            Log::info('Updated pin with id: ' .$id);
            $pin = Pin::where('id', $id)->first();
            $dataFromThePinUpdated = $request->all();
            $pin->update($dataFromThePinUpdated);
            return response()->json(["pinUpdated" => $pin, "Message" => "Pin updated successfully"]);
        }
    }

    /**
     * Delete pin instance.
     *
     * @param  $id
     * @return JsonResponse
     */
    public function deleteById($id)
    {
        if(Pin::where('id', $id)->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => 'Pin Id does not exist', 'code' => $code], $code);
        } else {
            Log::info('Deleted pin with id: ' .$id);
            $pin = Pin::where('id', $id)->first();
            $pin->delete();
            return response()->json(["pinDeleted" => $pin, "Message" => "Pin deleted successfully"]);
        }
    }

    /**
     * Show a list of all the pins that matches the search
     *
     * @param $query
     * @return JsonResponse
     */
    public function search($query)
    {
        Log::info('Retrieving all pins related to -> ' . $query);
        $pins = Pin::where('note', 'LIKE', '%' . $query . '%')
            ->orWhere('color', 'LIKE', '%' . $query . '%')->get();

        Log::info('Retrieving query -> ' . $pins);
        return response()->json($pins);
    }
}
