<?php

namespace App\Http\Controllers;

use App\Models\Dislikes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DislikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $disliked_user_id = $request->input('liked_user_id');
        $user_id = Auth::id();

        $dislike = new Dislikes([
            'user_id' => $user_id,
            'disliked_user_id' => $disliked_user_id,
        ]);

        $dislike->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Dislikes $dislikes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dislikes $dislikes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dislikes $dislikes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dislikes $dislikes)
    {
        //
    }
}
