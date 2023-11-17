<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ValidarHIstorialRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return Auth::check();
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'Diabetes' => 'required|in:Si,No',
            'Cancer' => 'required|in:Si,No',
            'Nefropatia' => 'required|in:Si,No',
            'Hipertension' => 'required|in:Si,No',
            'Cardiopatia' => 'required|in:Si,No',
            'Malformaciones' => 'required|in:Si,No',
            'Otras' => 'nullable|string',

            // Seccion 2
            'Tabaquismo' => 'required|in:Si,No',
            'CigarrillosDia' => 'nullable|string',
            'CigarrillosYear' => 'nullable|string',
            'Exfumador' => 'nullable|in:Si,No',
            'Alcoholismo' => 'required|in:Si,No',
            'mlAlcoholismo' => 'nullable|string',
            'AlcoholismoYear' => 'nullable|string',
            'Exalcoholico' => 'nullable|in:Si,No',
            'Alergias' => 'required|in:Si,No',
            'AlergiasInfo' => 'nullable|string',

            // Seccion 3
            'Infancia' => 'nullable|string',
            'InfanciaSecuelas' => 'nullable|string',
            'Hospitalizaciones' => 'required|in:Si,No',
            'HospitalizacionesInfo' => 'nullable|string',
            'Quirurgicos' => 'required|in:Si,No',
            'QuirurgicosInfo' => 'nullable|string',
            'Transfusiones' => 'required|in:Si,No',
            'TransfusionesInfo' => 'nullable|string',
            'Fracturas' => 'required|in:Si,No',
            'FracturasInfo' => 'nullable|string',
            'Traumatismo' => 'required|in:Si,No',
            'TraumatismoInfo' => 'nullable|string',
            'Padecimiento' => 'required|in:Si,No',
            'PadecimientoInfo' => 'nullable|string',

            // Seccion 4
            'Motivo' => 'required|string',

            // Seccion 5
            'Evolucion' => 'nullable|string',

            // Seccion 6
            'Cardiovascular' => 'required|in:Si,No',
            'Digestivo' => 'required|in:Si,No',
            'Endocrino' => 'required|in:Si,No',
            'Muscular' => 'required|in:Si,No',
            'Urinario' => 'required|in:Si,No',
            'Hematopoyetico' => 'required|in:Si,No',
            'Piel' => 'required|in:Si,No',
            'Nervioso' => 'required|in:Si,No',

            // seccion 7
            'Medicacion' => 'required|in:Si,No',
            'MedicacionInfo' => 'nullable|string',

            // Seccion 8
            'Comentarios' => 'nullable|string',
        ];
    }
}