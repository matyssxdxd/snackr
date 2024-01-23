<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
}
