<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Http\Requests\ValidarHistorialRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use App\Models\Paciente;
use Validator;

class PDFController extends Controller
{
    public function createHistorial(ValidarHistorialRequest $request)
    {
        // dd(auth()->user()->curp);

        $paciente = Paciente::where('user_id', auth()->user()->id)->first();

        $data = $request->validated();

        $information = [

            'fullname' => $paciente['nombres'] . ' ' . $paciente['apellidos'],
            'fechaNac' => $paciente['fechaNac'],
            'sexo' => $paciente['sexo'],
            'fecha' => date('d-m-Y'),
            'diabetes' => $request->Diabetes,
            'cancer' => $request->Cancer,
            'nefropatia' => $request->Nefropatia,
            'hipertension' => $request->Hipertension,
            'cardiopatia' => $request->Cardiopatia,
            'malformaciones' => $request->Malformaciones,
            'otras' => $request->Otras,
            'tabaquismo' => $request->Tabaquismo,
            'cigarrillosDia' => $request->CigarrillosDia,
            'cigarrillosYear' => $request->CigarrillosYear,
            'exfumador' => $request->Exfumador,
            'alcoholismo' => $request->Alcoholismo,
            'mlAlcoholismo' => $request->mlAlcoholismo,
            'alcoholismoYear' => $request->AlcoholismoYear,
            'exalcoholico' => $request->Exalcoholico,
            'alergias' => $request->Alergias,
            'alergiasInfo' => $request->AlergiasInfo,
            'infancia' => $request->Infancia,
            'infanciaSecuelas' => $request->InfanciaSecuelas,
            'hospitalizaciones' => $request->Hospitalizaciones,
            'hospitalizacionesInfo' => $request->HospitalizacionesInfo,
            'quirurgicos' => $request->Quirurgicos,
            'quirurgicosInfo' => $request->QuirurgicosInfo,
            'transfusiones' => $request->Transfusiones,
            'transfusionesInfo' => $request->TransfusionesInfo,
            'fracturas' => $request->Fracturas,
            'fracturasInfo' => $request->FracturasInfo,
            'traumatismo' => $request->Traumatismo,
            'traumatismoInfo' => $request->TraumatismoInfo,
            'padecimiento' => $request->Padecimiento,
            'padecimientoInfo' => $request->PadecimientoInfo,
            'motivo' => $request->Motivo,
            'evolucion' => $request->Evolucion,
            'cardiovascular' => $request->Cardiovascular,
            'respiratorio' => $request->Respiratorio,
            'digestivo' => $request->Digestivo,
            'urinario' => $request->Urinario,
            'endocrino' => $request->Endocrino,
            'muscular' => $request->Muscular,
            'hematopoyetico' => $request->Hematopoyetico,
            'nervioso' => $request->Nervioso,
            'piel' => $request->Piel,
            'medicacion' => $request->Medicacion,
            'medicacionInfo' => $request->MedicacionInfo,
            'comentarios' => $request->Comentarios,
        ];

        // Opciones de configuración de Dompdf
        $options = new Options();
        $options->set('isHtml5ParserEnabled', true);
        $options->set('isRemoteEnabled', true);
        $dompdf = new Dompdf($options);

        // histiral path
        $path = 'C:\xampp\htdocs\Mozcalti-IMSS\public\historiales/';
        $nombreArchivo = time() . ".pdf";
        //Renderiza el archivo primero
        $html = view('historial', compact('information'))->render();
        $dompdf->loadHtml($html);
        $dompdf->render();

        //Guardalo en una variable
        $output = $dompdf->output();

        file_put_contents($path . $nombreArchivo, $output);

        $cloudinaryResponse = Cloudinary::upload($path . $nombreArchivo, ['folder' => 'Historiales']);

        if (file_exists($path . $nombreArchivo)) {
            unlink($path . $nombreArchivo);
        }

        $public_id = $cloudinaryResponse->getPublicId();
        //  con este podemos descargar el pdf
        $url = $cloudinaryResponse->getSecurePath();

        // dd($url . ' ' . $public_id);

        // ! Logica para asignar valores en la tabla de pacientes

        return redirect($url);
    }


}