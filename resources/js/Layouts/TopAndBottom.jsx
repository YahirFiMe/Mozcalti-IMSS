import {Link, usePage} from "@inertiajs/react";

import facebook from '../../assets/png/facebook.png';
import twitter from '../../assets/png/twitter.png';
import GMXLogo from "@/Components/Logos/GMXLogo";


export default function TopAndBottom({imageUrlTop, imageUrlBottom, children}) {

    const {auth} = usePage().props;

    return (
        <>
            {/*TopBar*/}
            <div className="row d-flex justify-around  bg-IMSS  align-items-center m-0">
                <div className="col-6">
                    <GMXLogo/>
                </div>
                <div className="col-4">
                    <nav>
                        <ul className={'d-flex gap-5 justify-end text-white font-bold text-2xl'}>
                            <li><a href='#'>Trámites</a></li>
                            {
                                auth.user ?
                                    (<li><Link href={route('dashboard')}> Dashboard</Link></li>)
                                    :
                                    (
                                        <>
                                            <li><Link href={route('register')}>Registrarse</Link></li>
                                            <li><Link href={route('login')}>Iniciar sesión</Link></li>
                                        </>
                                    )
                            }
                        </ul>
                    </nav>
                </div>
            </div>


            <>{children}</>


            {/*BottomBar*/}
            <div className="position-relative ">
                <footer className="row bg-IMSS p-3 justify-around align-items-center m-0">
                    <div className="col-4">
                        <GMXLogo/>
                    </div>
                    <div className="col-3 text-white text-sm ">
                        <p className={'font-semibold'}>¿Que es el portal de citas?</p>
                        <p>Es el nuevo portal para programar citas medivccas en tu institucion de IMSS mas
                            cercanas <Link>Leer
                                más</Link></p><br/>
                    </div>
                    <div className="col-2 text-white text-xs">
                        <Link>Denuncia contra servidores publicos</Link>
                        <p>Siguenos en:</p><br/>
                        <div className="d-flex gap-3">
                            <img src={twitter} alt=""/>
                            <img src={facebook} alt=""/>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
}
