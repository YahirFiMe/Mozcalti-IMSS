import {isEqual} from "date-fns";


export default function HourInput({children, onShow, fechaSelected, horaSelected}) {


    return (
        <div>
            <span className={"badge rounded-pill text-bg-light cursor-pointer " + (isEqual(fechaSelected, horaSelected) && 'bg-secondary')} onClick={() => onShow(children)}>{children}</span>
        </div>
    )
}
