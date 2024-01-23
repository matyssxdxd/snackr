<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MatchesController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $likedUserIds = $user->likes->pluck('liked_user_id');

        $matches = User::whereIn('id', $likedUserIds)
            ->whereHas('likes', function ($query) use ($user) {
                $query->where('liked_user_id', $user->id);
            })
            ->get();

        return Inertia::render('Matches/Index', [
            'matches' => $matches
        ]);
    }

    public function match(Request $request)
    {
        $user = Auth::user();
        $matchedUserId = $request->route('id');
        $likedUserIds = $user->likes->pluck('liked_user_id');

        $matches = User::whereIn('id', $likedUserIds)
            ->whereHas('likes', function ($query) use ($user) {
                $query->where('liked_user_id', $user->id);
            })
            ->get();

        // Check if the matched user ID is in the matches
        $isMatched = $matches->contains('id', $matchedUserId);

        if ($isMatched) {
            return Inertia::render('Matches/Match', [
               'match'=> User::find($matchedUserId),
            ]);
        } else {
            return Redirect::route('likes.index');
        }
    }

}
