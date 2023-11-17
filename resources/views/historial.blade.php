<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Historial Clinico</title>

    <style>
        @page {
            size: 210mm 297mm;
            margin: 30px;
            font-family: 'optima-bold-bold';
        }

        * {
            font-size: 15px;
            font-weight: normal;
        }

        body {
            padding: 0;
            width: 100%;
            height: 100%;
        }

        .navheader {
            margin-top: 10px;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .membrete {
            max-width: 105%;
            max-height: 103%;
        }

        .logoText {
            margin: 0;
            color: #1f6157;
            font-size: 22px;
            font-family: 'optima-bold-bold';
        }

        .content {
            margin: 20px;
        }

        .divisionHeader {
            color: #1f6157;
            background-color: #1f6157;
            width: 95%;
        }

        .titleheader {
            margin-top: 30px;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            color: #1f6157;
            font-size: 24px;
        }

        article .title {
            background-color: #1f615769;
            font-size: 16px;
            padding: 3px;
        }

        article .information {
            padding: 7px;
        }

        article .information p {
            padding: 0;
            margin: 2px;
        }

        article .information table {
            width: 100%;
        }

        article .information th {
            text-align: left;
            width: 20%;
        }
    </style>
</head>

<body>

    <div class="navheader">
        <img src="https://res.cloudinary.com/dowcuhzqe/image/upload/v1700205348/utils/zinwek9v5qsvgre89wuw"
            height="80px">
        <p class="logoText">INSTITUTO MEXICANO DEL SEGURO SOCIAL</p>
        <p class="logoText" style="font-size: 17px;">SEGURIDAD Y SOLIDARIDAD SOCIAL</p>
    </div>

    <div class="content">
        <hr class="divisionHeader">

        <div class="titleheader">
            Historia clínica
        </div>
        <p>Fecha de valoración: {{ $information['fecha'] }}</p>

        <!-- Datos del paciente -->
        <article>
            <div class="title">1. DATOS DE IDENTIFICACIÓN DEL PACIENTE</div>
            <div class="information">
                <table>
                    <tr>
                        <th>
                            <p>Nombre completo:  {{ $information['fullname'] }}</p>
                        </th>
                        <th>
                            <p>Sexo:  {{ $information['sexo'] }} </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Fecha de nacimiento:  {{ $information['fechaNac'] }}</p>
                        </th>
                    </tr>
                    <tr>
                        <th>

                            <p>Diabetes: {{ $information['diabetes'] }}</p>
                        </th>
                        <th>
                            <p>Hipertensión arterial: {{ $information['hipertension'] }}</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Cáncer: {{ $information['cancer'] }}</p>
                        </th>
                        <th>
                            <p>Cardiopatia: {{ $information['cardiopatia'] }}</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Nefropatia: {{ $information['nefropatia'] }}</p>
                        </th>
                        <th>
                            <p>Malformaciones: {{ $information['malformaciones'] }}</p>
                        </th>
                    </tr>


                    @if ($information['otras'] != null)
                        <tr>
                            <th>
                                <p>Otros: {{ $information['otras'] }}</p>
                            </th>
                        </tr>
                    @endif

                </table>
            </div>
        </article>

        <article>
            <div class="title">2. ANTECEDENTES PERSONALES NO PATOLÓGICOS</div>
            <div class="information">
                <table>
                    <tr>
                        <td>
                            <p>Tabaquismo: {{ $information['tabaquismo'] }}</p>
                        </td>
                        @if ($information['tabaquismo'] == 'Si')
                            <td>
                                <p>¿Cuántos por día? {{ $information['cigarrillosDia'] }}</p>
                            </td>
                            <td>
                                <p>Años de consumo: {{ $information['cigarrillosYear'] }}</p>
                            </td>
                        @endif

                        @if ($information['tabaquismo'] == 'No')
                            <td>
                                <p>Exfumador: {{ $information['exfumador'] }}</p>
                            </td>
                        @endif
                    </tr>
                    <tr>
                        <td>
                            <p>Alcoholismo: {{ $information['alcoholismo'] }}</p>
                        </td>

                        @if ($information['alcoholismo'] == 'Si')
                            <td>
                                <p>mLs por semana: {{ $information['mlAlcoholismo'] }}</p>
                            </td>
                            <td>
                                <p>Años de consumo: {{ $information['alcoholismoYear'] }}</p>
                            </td>
                        @endif

                        @if ($information['alcoholismo'] == 'No')
                            <td>
                                <p>Ex-alcohólico y/o ocasional: {{ $information['exalcoholico'] }}</p>
                            </td>
                        @endif

                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <p>Alergias: {{ $information['alergias'] }}</p>
                        </td>

                        @if ($information['alergias'] == 'Si')
                            <td>
                                <p>Especificar: {{ $information['alergiasInfo'] }}</p>
                            </td>
                        @endif
                    </tr>
                </table>
            </div>
        </article>

        <article>
            <div class="title">3. ANTECEDENTES PERSONALES PATOLÓGICOS</div>
            <div class="information">
                <table>
                    <tr>
                        <td>
                            <p>Enfermedades de la infancia: {{ $information['infancia'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="margin-left: 30px">Secuelas: {{ $information['infanciaSecuelas'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Hospitalizaciones previas: {{ $information['hospitalizaciones'] }}</p>
                            @if ($information['hospitalizaciones'] == 'Si')
                                <p style="margin-left: 30px">Especificar:
                                    {{ $information['hospitalizacionesInfo'] }}</p>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Antecedentes quirúrgicos: {{ $information['quirurgicos'] }}</p>
                            @if ($information['quirurgicos'] == 'Si')
                                <p style="margin-left: 30px">Especificar: {{ $information['quirurgicosInfo'] }}
                                </p>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Transfusiones previas: {{ $information['transfusiones'] }}</p>
                            @if ($information['transfusiones'] == 'Si')
                                <p style="margin-left: 30px">Especificar:
                                    {{ $information['transfusionesInfo'] }}</p>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Fracturas: {{ $information['fracturas'] }}</p>
                            @if ($information['fracturas'] == 'Si')
                                <p style="margin-left: 30px">Especificar: {{ $information['fracturasInfo'] }}
                                </p>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Traumatismo: {{ $information['traumatismo'] }}</p>
                            @if ($information['traumatismo'] == 'Si')
                                <p style="margin-left: 30px">Especificar: {{ $information['traumatismoInfo'] }}
                                </p>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Otra enfermedad: {{ $information['padecimiento'] }}</p>
                            @if ($information['padecimiento'] == 'Si')
                                <p style="margin-left: 30px">Especificar:
                                    {{ $information['padecimientoInfo'] }}</p>
                            @endif
                        </td>
                    </tr>
                </table>
            </div>
        </article>

        <div style="page-break-after:always;"></div>

        <div class="navheader">
            <img src="https://res.cloudinary.com/dowcuhzqe/image/upload/v1700205348/utils/zinwek9v5qsvgre89wuw"
                height="80px">
            <p class="logoText">INSTITUTO MEXICANO DEL SEGURO SOCIAL</p>
            <p class="logoText" style="font-size: 17px;">SEGURIDAD Y SOLIDARIDAD SOCIAL</p>
        </div>

        <br><br>

        <article>
            <div class="title">4. MOTIVO DE INGRESO</div>
            <div class="information">
                <p>Motivo: {{ $information['motivo'] }}</p>
            </div>
        </article>

        <article>
            <div class="title">5. PRINCIPIO Y EVOLUCIÓN DEL PADECIMIENTO ACTUAL</div>
            <div class="information">
                <p>{{ $information['evolucion'] }}</p>
            </div>
        </article>

        <article>
            <div class="title">6. INTERROGATORIO POR APARATOS Y SISTEMAS</div>
            <div class="information">
                <table>
                    <tr>
                        <td>
                            <p>Respiratorio / Cardiovascular: {{ $information['respiratorio'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Digestivo: {{ $information['digestivo'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Endocrino:{{ $information['endocrino'] }} </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Músculo / Esquelético: {{ $information['muscular'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Genito / Urinario: {{ $information['urinario'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Hematopoyético / Linfático: {{ $information['hematopoyetico'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Piel y Anexos: {{ $information['piel'] }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Neurológico / Nervioso: {{ $information['nervioso'] }}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </article>

        <article>
            <div class="title">7. MEDICACIÓN ACTUAL</div>
            <div class="information">
                <p>Medicación: {{ $information['medicacion'] }}</p>
                @if ($information['medicacion'] == 'Si')
                    <p>{{ $information['medicacionInfo'] }}</p>
                @endif
            </div>
        </article>

        <article>
            <div class="title">8. OBSERVACIONES Y/O COMENTARIOS FINALES</div>
            <div class="information">
                <p>{{ $information['comentarios'] }}</p>
            </div>
        </article>
    </div>
</body>

</html>
