import {children, useState} from "react";


export default function DropdownMedico({ classBtn = '', children,onShow, medicos= [], clinicSelected}) {


    const medicosDisponibles = clinicSelected ? medicos.filter(item => item.clinica_id == clinicSelected.id) : []

    return (
        <div className="dropdown">
            <a className={"dropdown-toggle" + classBtn} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {children}
            </a>

            <ul className="dropdown-menu">
                {
                    medicosDisponibles.length > 0 ?
                        (
                            medicosDisponibles.map((item, index) => (
                                <li key={index}><a className="dropdown-item" href="#" onClick={() => onShow(item)}>{item.especialidad}</a></li>
                            ))
                        )
                        :
                        (
                            <li><a className="dropdown-item" href="#">No hay medicos disponibles en esta clinica</a></li>
                        )
                }
            </ul>
        </div>
    )
}
