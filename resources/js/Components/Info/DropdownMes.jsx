import {children, useState} from "react";
import {getMonth} from "date-fns";


export default function DropdownMes({ classBtn = '', children,onShow, options= []}) {

    const MesesArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
        'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    return (
        <div className="dropdown">
            <a className={"dropdown-toggle" + classBtn} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {children}
            </a>

            <ul className="dropdown-menu">
                {options.map((item, index) => (
                    <li key={index}><a className="dropdown-item" href="#" onClick={(e) => onShow(item)}>{MesesArray[getMonth(item)]}</a></li>
                ))}
            </ul>
        </div>
    )
}
