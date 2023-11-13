<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        @page {
            size: 210mm 297mm;
            /* Tamaño de hoja A4 (8.27 x 11.69 pulgadas) */
            margin: 30px;
            /* Sin márgenes para que la imagen ocupe toda la página */
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
            /* text */
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
        <img src="{{ public_path('storage/imsslogo.png') }}" height="80px">
        <p class="logoText">INSTITUTO MEXICANO DEL SEGURO SOCIAL</p>
        <p class="logoText" style="font-size: 17px;">SEGURIDAD Y SOLIDARIDAD SOCIAL</p>
    </div>

    <div class="content">
        <hr class="divisionHeader">

        <div class="titleheader">
            Historia clínica
        </div>
        <p>Fecha de valoración: </p>

        <!-- Datos del paciente -->
        <article>
            <div class="title">1. DATOS DE IDENTIFICACIÓN DEL PACIENTE</div>
            <div class="information">
                <table>
                    <tr>
                        <th>
                            <p>Nombre completo:</p>
                        </th>
                        <th>
                            <p>Sexo: </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Fecha de nacimiento: </p>
                        </th>
                        <th>
                            <p>Edad:</p>
                        </th>
                    </tr>
                    <tr>
                        <th>

                            <p>Diabetes: </p>
                        </th>
                        <th>
                            <p>Hipertención arterial: </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Cáncer: </p>
                        </th>
                        <th>
                            <p>Cardiopatia: </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Nefropatia:</p>
                        </th>
                        <th>
                            <p>Malformaciones: </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>Otros:</p>
                        </th>
                    </tr>
                </table>

            </div>

        </article>

        <article>
            <div class="title">2. ANTECEDENTES PERSONALES NO PATOLÓGICOS</div>
            <div class="information">
                <table>
                    <tr>
                        <td>
                            <p>Tabaquismo: </p>
                        </td>
                        <td>
                            <p>¿Cuántos por día?</p>
                        </td>
                        <td>
                            <p>Años de consumo: </p>
                        </td>
                        <td>
                            <p>Exfumador: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Alcohol: </p>
                        </td>
                        <td>
                            <p>mLs por semana: </p>
                        </td>
                        <td>
                            <p>Años de consumo: </p>
                        </td>
                        <td>
                            <p>Ex-alcohólico y/o ocasional</p>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <p>Alergías:</p>
                        </td>
                        <td>
                            <p>Especificar: </p>
                        </td>
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
                            <p>Enfermedades de la infancia: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Secuelas: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Hospitalizaciones previas: </p>
                            <p style="margin-left: 30px">Especificar: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Antecedentes quirúrgicos:</p>
                            <p style="margin-left: 30px">Especificar: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Transfusiones previas:</p>
                            <p style="margin-left: 30px">Especificar: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Fracturas:</p>
                            <p style="margin-left: 30px">Especificar: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Traumatismo:</p>
                            <p style="margin-left: 30px">Especificar: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Otra enfermedad:</p>
                            <p style="margin-left: 30px">Especificar: </p>
                        </td>
                    </tr>
                </table>
            </div>
        </article>

        <div style="page-break-after:always;"></div>

        <div class="navheader">
            <img src="{{ public_path('storage/imsslogo.png') }}" height="80px">
            <p class="logoText">INSTITUTO MEXICANO DEL SEGURO SOCIAL</p>
            <p class="logoText" style="font-size: 17px;">SEGURIDAD Y SOLIDARIDAD SOCIAL</p>
        </div>

        <br><br>

        <article>
            <div class="title">4. MOTIVO DE INGRESO</div>
            <div class="information">
                <p>Motivo: </p>
            </div>
        </article>

        <article>
            <div class="title">5. PRINCIPIO Y EVOLUCIÓN DEL PADECIMIENTO ACTUAL</div>
            <div class="information">
                <p> </p>
            </div>
        </article>

        <article>
            <div class="title">6. INTERROGATORIO POR APARATOS Y SISTEMAS</div>
            <div class="information">
                <table>
                    <tr>
                        <td>
                            <p>Respiratorio / Cardiovascular: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Digestivo: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Endocrino: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Músculo / Esquelético</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Genito / Urinario</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Hematopoyético / Linfático</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Piel y Anexos: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Neurológico y psiquiátrico: </p>
                        </td>
                    </tr>
                </table>
            </div>
        </article>

        <article>
            <div class="title">7. MEDICACIÓN ACTUAL</div>
            <div class="information">
                <p>Nombre comercial: </p>
                <p style="margin-left: 30px">Dosis: </p>
                <p style="margin-left: 30px">Vía: </p>
                <p style="margin-left: 30px">Frecuencia: </p>
            </div>
        </article>

        <article>
            <div class="title">8. OBSERVACIONES Y/O COMENTARIOS FINALES</div>
            <div class="information">
                <p></p>
            </div>
        </article>
    </div>
</body>

</html>
