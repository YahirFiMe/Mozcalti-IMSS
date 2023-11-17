<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    use HasFactory;

    protected $fillable = [
        'diabetes',
        'cancer',
        'nefropatia',
        'Hipertension',
        'Cardiopatia',
        'Malformaciones',

        // Seccion 2
        'Tabaquismo',
        'CigarrillosDia',
        'CigarrillosYear',
        'Exfumador',
        'Alcoholismo',
        'mlAlcoholismo',
        'AlcoholismoYear',
        'Exalcoholico',
        'Alergias',
        'AlergiasInfo',

        // Seccion 3
        'Infancia',
        'InfanciaSecuelas',
        'Hospitalizaciones',
        'HospitalizacionesInfo',
        'Quirurgicos',
        'QuirurgicosInfo',
        'Transfusiones',
        'TransfusionesInfo',
        'Fracturas',
        'FracturasInfo',
        'Traumatismo',
        'TraumatismoInfo',
        'Padecimiento',
        'PadecimientoInfo',

        // Seccion 4
        'Motivo',

        // Seccion 5
        'Evolucion',

        // Seccion 6
        'Cardiovascular',
        'Digestivo',
        'Endocrino',
        'Muscular',
        'Urinario',
        'Hematopoyetico',
        'Piel',
        'Nervioso',

        // seccion 7
        'Medicacion',
        'MedicacionInfo',

        // Seccion 8
        'Comentarios',
    ];
}