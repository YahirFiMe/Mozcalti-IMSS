export default function NavItemProfile({children, title, subtitle, className = '', ...props}) {

    return(
        <li className="row border-bottom mr-4 ml-3 mb-3 ">
            <div className="row">
                <div className="col-1">
                    {children}
                </div>
                <div className="col-auto flex-col text-sm">
                    <p>{title}:</p>
                    <p className={'font-light'}>{subtitle}</p>
                </div>
            </div>
        </li>
    )
}
