import {children, useState} from "react";


export default function DropdownClinica({ classBtn = '', children,onShow, options= [], indexA=[]}) {



    return (
        <div className="dropdown">
            <a className={"dropdown-toggle" + classBtn} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {children}
            </a>

            <ul className="dropdown-menu">
                {options.map((item, index) => (
                    <li key={index}><a className="dropdown-item" href="#" onClick={() => onShow(item)}>Clinica {item.numClinica}</a></li>
                ))}
            </ul>
        </div>
    )
}
