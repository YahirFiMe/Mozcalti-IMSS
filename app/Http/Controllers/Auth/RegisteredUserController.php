<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\dbGob;
use App\Models\Paciente;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'curp' => 'required|string|max:18|min:18|unique:'.User::class,
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $data = dbGob::where('curp', $request->curp)->first();

        if(!$data){
            return redirect()->back()->withErrors(['curp' => 'Ingrese una curp valida']);
        }
        Log::info($data);
        $user = User::create([
            'curp' => $request->curp,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        Paciente::create([
            'user_id' => $user->id,
            'nombres' => $data->nombres,
            'apellidos' => $data->apellidos,
            'NSS' => $data->NSS,
            'sexo' => $data->sexo,
            'fechaNac' => $data->fechaNac,
            'entidadNac' => $data->entidadNac,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
