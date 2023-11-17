import {Head, Link} from '@inertiajs/react';
import TopAndBottom from "@/Layouts/TopAndBottom";
import ProfileIcon from "@/Components/Logos-Icons/ProfileIcon";
import {useEffect, useState} from "react";
import CalendarIcon from "@/Components/Logos-Icons/CalendarIcon";
import PdfIcon from "@/Components/Logos-Icons/PdfIcon";
import {getDate} from "date-fns";
import CitaCard from "@/Components/Template/CitaCard";

export default function Dashboard({auth}) {


    const [Citas, setCitas] = useState([])

    const getCitas = () => {

        axios.get(`/CitasUser/${auth.user.id}`)
            .then((response) => {
                setCitas(response.data.citas)
            }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getCitas()
        console.log(Citas)

    }, []);


    return (
        <TopAndBottom>
            <Head title="Panel de control"/>

            <div className="row bg-gray-200 p-5 mr-0">
                <div className="col-auto">
                    <ProfileIcon/>
                </div>
                <div className="col-auto d-flex flex-col justify-center p-0 text-black">
                    <p className={'font-extrabold text-3xl mb-2'}>{auth.user.paciente.nombres} {auth.user.paciente.apellidos}</p>
                    <p className={' text-xl mb-2'}> {auth.user.curp}</p>
                    <button className={'btn btn-success bg-IMSS border-0'}>Realizar examen clinico</button>
                </div>
            </div>

            <div className="row mr-0 mt-3 mb-3 justify-around d-flex h-96 ">
                <div
                    className={"col-6 border rounded-3 h-full bg-gray-200 d-flex  justify-center " +
                        "align-items-center cursor-pointer position-relative"}
                >
                    {
                        Citas.length === 0 ?
                            (
                            <>
                                <Link href={route('calendario')} className={'h-full w-full position-absolute'}/>
                                <CalendarIcon/>
                                <div className="col-4 mt-3 ">
                                    <p className={'text-center text-gray-400 text-lg font-light '}>
                                        Parece que no tienes ninguna cita programada. Haz click aquí para programar una
                                        cita.
                                    </p>
                                </div>
                            </>
                            )
                            :
                            (
                                <div className={'grid gap-2 grid-cols-2 w-full'}>
                                    {
                                        Citas.map((cita) => (
                                            <CitaCard cita={cita} key={cita.id}/>
                                        ))
                                    }
                                </div>
                            )
                    }
                </div>
                <div
                    className="col-5 border rounded-3 h-full bg-gray-200 d-flex flex-col justify-center align-items-center cursor-pointer"
                    onClick={() => console.log('click')}>
                    <PdfIcon/>
                    <div className="col-9 mt-3">
                        <p className={'text-center text-gray-400 text-lg font-light'}>
                            No tienes ningun archivo en tu historial clinico. Te recomendamos hacer el examen clinico
                            para
                            generar tu historial clinico o subir tus archivos.
                        </p>
                    </div>
                </div>
            </div>


        </TopAndBottom>
    );
}
