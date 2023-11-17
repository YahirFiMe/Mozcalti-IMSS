import {format} from "date-fns/";
import {addHours} from "date-fns";


export default function CitaCard({cita}) {

    const fecha = format(new Date(cita.fecha), 'dd/MMM/yyyy')
    let hora = format(new Date(cita.hora), 'HH:mm')

    console.log(cita)

    return (
        <div className={'rounded-2 bg-amber-50 p-2'}>
            <div className="row mb-2">
                <p className={'font-bold text-sm col'}>Fecha:</p>
                <p className={'col'}>{fecha}</p>
            </div>
            <div className="row mb-2">
                <p className={'font-bold text-sm col'}>Hora:</p>
                <p className={'col'}>{hora}</p>
            </div>
            <div className="row mb-2">
                <p className={'font-bold text-sm col'}>Clinica: {cita.numClinica}</p>
                <p className={'col text-xs'}>{cita.direccion}</p>
            </div>
            <div className="row">
                <p className={'font-bold text-sm col'}>Especialista:</p>
                <p className={'col'}>{cita.especialidad}</p>
            </div>
        </div>
    )
}
