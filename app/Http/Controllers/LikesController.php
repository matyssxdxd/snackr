<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $user = Auth::user();
        $likedUserIds = $user->likes->pluck('liked_user_id')->toArray();
        $dislikedUserIds = $user->dislikes->pluck('disliked_user_id')->toArray();

        $usersToDisplay = User::all()->whereNotIn('id', array_merge([Auth::id()], $likedUserIds, $dislikedUserIds))->toArray();

        return Inertia::render('Likes/Index', [
            'users' => array_values($usersToDisplay)
        ]);

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
        $liked_user_id = $request->input('liked_user_id');
        $user_id = Auth::id();

        $like = new Likes([
            'user_id' => $user_id,
            'liked_user_id' => $liked_user_id,
        ]);

        $like->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Likes $likes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Likes $likes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Likes $likes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Likes $likes)
    {
        //
    }
}
