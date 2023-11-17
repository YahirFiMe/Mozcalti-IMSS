import {format} from "date-fns/";
import {addHours} from "date-fns";


export default function CitaCard({cita}) {

    const fecha = format(new Date(cita.fecha), 'dd/MMM/yyyy')
    let hora = format(new Date(cita.hora), 'HH:mm')

    return (
        <div className={'rounded-2 bg-amber-50'}>
            <div className="row">
                <p className={'font-bold text-sm'}>Fecha:</p>
                <p className={''}>{fecha}</p>
            </div>
            <p>{hora}</p>
        </div>
    )
}
