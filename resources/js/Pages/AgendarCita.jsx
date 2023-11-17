import TopAndBottom from "@/Layouts/TopAndBottom";
import {Head, Link, usePage} from "@inertiajs/react";
import Calendario from "@/Layouts/Calendario";

import {
    addMonths,
    eachDayOfInterval,
    eachMonthOfInterval,
    format,
    getMonth,
    getYear,
    lastDayOfMonth,
    startOfMonth,

} from "date-fns/";

import {useEffect, useState} from "react";
import CuadroCalendario from "@/Components/Template/CuadroCalendario";
import DropdownMes from "@/Components/Info/DropdownMes";
import DropdownClinica from "@/Components/Info/DropdownClinica";
import DropdownMedico from "@/Components/Info/DropdownMedico";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import PrimaryButton from "@/Components/Inputs/PrimaryButton";
import {utcToZonedTime, zonedTimeToUtc} from "date-fns-tz";
import {eachHourOfInterval, isEqual, isSameDay} from "date-fns";
import HourInput from "@/Components/Inputs/HourInput";
import {jaHira} from "date-fns/locale";


export default function AgendarCita() {

    const {auth} = usePage().props

    const today = new Date();


    //Estado Calendario
    const [CalendarDisable, setCalendarDisable] = useState(true)
    const [arrayDias, setArrayDias] = useState([])

    //Estados de la fecha
    const [fechaSelected, setFechaSelected] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()))
    const [hours, setHours] = useState([])

    //Estados de la clinica
    const [clinicas, setClinicas] = useState([])
    const [clinicaSelected, setClinicaSelected] = useState(null)

    //Estados de los medicos
    const [medicos, setMedicos] = useState([])
    const [medicoSelected, setMedicoSelected] = useState(null)
    const [Citas, setCitas] = useState([])


    let meses = [];

    const MesesArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    const MesesDisponibles = () => {
        meses = eachMonthOfInterval({
            start: new Date(today.getFullYear(), today.getMonth()),
            end: addMonths(today, 3)
        })
        return meses
    }

    MesesDisponibles()


    const getClinicas = () => {
        axios.get('/Clinicas')
            .then(response => {
                setClinicas(response.data.clinicas)

            })
            .catch(error => {
                console.log(error)
            })

    }

    getClinicas()


    const getMedicos = () => {
        axios.get('/Especialistas')
            .then(response => {
                setMedicos(response.data.especialistas)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getMedicos()

    const getCitas = () => {
        clinicaSelected && medicoSelected &&
        (axios.get('/Citas', {
            params: {
                clinica: clinicaSelected.id,
                especialista: medicoSelected.user_id,
            }
        })
            .then(response => {
                setCitas(response.data.citas)
                // console.log(new Date(Citas[0].hora).getUTCHours())
                // console.log(hours[0].getHours())

            })
            .catch(error => {
                console.log(error)
            }))
    }


    const interval = () => {
        let intervalo = eachHourOfInterval({
            start: new Date(fechaSelected.getFullYear(), fechaSelected.getMonth(), fechaSelected.getDate(), 6),
            end: new Date(fechaSelected.getFullYear(), fechaSelected.getMonth(), fechaSelected.getDate(), 14)
        })

        setHours(intervalo)
    }

    const arrayDiasF = () => {

        let dias = eachDayOfInterval({
            start: startOfMonth(new Date(getYear(fechaSelected), getMonth(fechaSelected))),
            end: lastDayOfMonth(new Date(getYear(fechaSelected), getMonth(fechaSelected))),
        })

        setArrayDias(dias)

    }
    const calendarDisable = () => {
        if (clinicaSelected && medicoSelected) {
            setCalendarDisable(false)
        } else {
            setCalendarDisable(true)
        }
    }

    const submmit = () => {
        axios.post('/Citas', {
            'paciente_id': auth.user.id,
            'especialista_id': medicoSelected.user_id,
            'clinica_id': clinicaSelected.id,
            'fecha': fechaSelected,
            'hora': fechaSelected,
            'estatus': 1,
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCitas()
        interval()
        arrayDiasF()
        calendarDisable()
    }, [fechaSelected, clinicaSelected, medicoSelected])


    return (
        <TopAndBottom>
            <Head title="Agendar Cita"/>

            <div className="container d-flex h-auto p-5 m-0">
                <div className="w-75 flex-col p-0">
                    <div className="border-2 bordor-r-0 d-flex ">
                        <div className="col-2 border-r-2 text-center p-0">
                            <p> Calendario </p>
                        </div>
                        <div className="col-2 text-center p-0">
                            <DropdownMes options={meses}
                                         onShow={(e) => setFechaSelected(e)}>
                                {fechaSelected ? MesesArray[getMonth(fechaSelected)] : (getMonth(fechaSelected) === 0 ? MesesArray[0] : MesesArray[getMonth(today)])}
                            </DropdownMes>
                        </div>

                        <div className="col-2 text-center p-0">
                            <DropdownClinica options={clinicas}
                                             onShow={(e) => (setClinicaSelected(e), setMedicoSelected(null), fechaSelected.setHours(0))}>
                                {clinicaSelected ? 'Clinica ' + clinicaSelected.numClinica : 'Selecciona una clinica'}
                            </DropdownClinica>
                        </div>
                        <div className={'col-3 text-center p-0 ' + (clinicaSelected ? '' : 'hidden')}>
                            <DropdownMedico medicos={medicos} clinicSelected={clinicaSelected}
                                            onShow={(e) => (setMedicoSelected(e), fechaSelected.setHours(0))}>
                                {medicoSelected ? medicoSelected.especialidad : 'Selecciona un medico'}
                            </DropdownMedico>
                        </div>
                    </div>
                    <Calendario dias={arrayDias} isDisable={CalendarDisable}
                                onShow={(e) => setFechaSelected(e)}/>
                </div>
                <div className="w-25">
                    <div className="col flex-col border-2 m-0 text-center bg-gray-100 h-full">
                        <div className="">
                            <p className={'font-extrabold'}>Informacion de la cita</p>
                        </div>
                        <div
                            className={`w-full h-full d-flex bg-gray-200 justify-center ` + (CalendarDisable && 'align-items-center')}>
                            {CalendarDisable ?
                                (
                                    <p className={'font-extrabold text-sm'}>Selecciona una clinica y una
                                        especialista</p>
                                )
                                : fechaSelected.getHours() == 0 ?
                                    (
                                        <li className={'w-full list-none'}>
                                            <p>Selecciona un horario</p>
                                            <div className="grid grid-cols-4">

                                                {
                                                    hours.map((item, index) => (
                                                        <HourInput fechaSelected={fechaSelected} horaSelected={item}
                                                                   key={index}
                                                                   onShow={() => (setFechaSelected(item))}>
                                                            {item.getHours() + ':00'}
                                                        </HourInput>
                                                    ))
                                                }
                                            </div>
                                        </li>
                                    )
                                    :
                                    (
                                        <>
                                            <ul className={'text-start p-2'}>
                                                <li className={'flex-col bg-gray-300 mb-2'}>
                                                    <p>Fecha Seleccionada: </p>
                                                    <p className={'font-extrabold'}>{format(fechaSelected, 'dd/MM/yyyy')}</p>
                                                </li>
                                                <li className={'flex-col mb-2'}>
                                                    <p>Horario Seleccionado: </p>
                                                    <p className={'font-extrabold'}>{fechaSelected.getHours()}:00</p>
                                                </li>
                                                <li className={'flex-col bg-gray-300 mb-2 '}>
                                                    <p>Clinica Seleccionada: <b>Clinica {clinicaSelected.numClinica}</b>
                                                    </p>
                                                    <div className="text-xs">
                                                        <p>Direccion: </p>
                                                        <p className={'font-extrabold'}>{clinicaSelected.direccion} </p>
                                                    </div>
                                                </li>
                                                <li className={'flex-col mb-2'}>
                                                    <p>Especialista seleccionado: </p>
                                                    <p className={'font-extrabold'}>{medicoSelected && medicoSelected.especialidad}</p>
                                                </li>
                                                <li className={'flex-col mb-2'}>
                                                    <button
                                                        className={`btn btn-success bg-IMSS text-white font-bold border-0 w-full`}
                                                        onClick={() => (submmit())}>
                                                        <Link href={'/dashboard'}>Agendar Cita</Link>
                                                    </button>
                                                </li>
                                            </ul>

                                        </>

                                    )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </TopAndBottom>
    )
}
