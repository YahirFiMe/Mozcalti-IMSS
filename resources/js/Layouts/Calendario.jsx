import CuadroCalendario from "@/Components/Template/CuadroCalendario";
import {useEffect, useState} from "react";
import {getDate, getDay, isAfter, isBefore} from "date-fns";

export default function Calendario({dias, onShow, isDisable}) {


    const [start, setStart] = useState()

    const DiasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']



    useEffect(() => {
        setStart(getDay(dias[0]))
    }, [dias])



    return (
        <div className="bg-gray-100 w-full h-auto p-0">
            <div className="grid grid-cols-7 gap-0.5">
                {DiasSemana.map((dia, index) => (
                    <CuadroCalendario className={'font-extrabold'} key={index}>
                        {dia}
                    </CuadroCalendario>
                ))}
                {dias.map((item, index) => (
                    index == 0 ?
                       ( <CuadroCalendario key={getDate(item)} className={`h-24 font-light cursor-pointer col-start-` + (start == 0 ? '7 ' : start) + ' ' + ( isDisable && ' opacity-20 cursor-not-allowed') + (isBefore(item, new Date()) && ' cursor-not-allowed opacity-20')}>
                            <div className="h-full w-full" onClick={() => !isDisable && onShow(item)}><p>{getDate(item)}</p></div>
                        </CuadroCalendario>
                       )
                        :
                        (
                            <CuadroCalendario key={getDate(item)} dia={getDate(item)} className={`h-24 font-light cursor-pointer ` + (isDisable && 'opacity-20 cursor-not-allowed') + (isBefore(item, new Date()) && ' cursor-not-allowed opacity-20')}>
                                <div className="h-full w-full" onClick={() => !isDisable && onShow(item)}><p>{getDate(item)}</p></div>
                            </CuadroCalendario>
                        )
                ))}
        </div>
</div>
)
}
