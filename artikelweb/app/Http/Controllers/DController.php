<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DController extends Controller
{
    public function index()
    {
        return Inertia::render('D/Index');
    }
}
