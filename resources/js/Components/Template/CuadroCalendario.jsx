

export default function CuadroCalendario({ children, className = '',...props}) {


    return(
        <>
            <div className={'border w-full p-2 hover:bg-gray-300 ' + className}>
                {children}
            </div>
        </>
    )
}
