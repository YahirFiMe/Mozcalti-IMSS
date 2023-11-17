import ProfileIconCircle from "@/Components/Logos-Icons/ProfileIconCircle";
import {Link, usePage} from "@inertiajs/react";
import CloseIcon from "@/Components/Logos-Icons/CloseIcon";
import HashIcon from "@/Components/Logos-Icons/HashIcon";
import NavItemProfile from "@/Components/Info/NavItemProfile";
import {useEffect} from "react";
import BirthdayIcon from "@/Components/Logos-Icons/BirthdayIcon";
import GenderIcon from "@/Components/Logos-Icons/GenderIcon";
import MapIcon from "@/Components/Logos-Icons/MapIcon";
import GeoIcon from "@/Components/Logos-Icons/GeoIcon";
import EmailIcon from "@/Components/Logos-Icons/EmailIcon";

export default function LateralMenu({className = '', ...props}) {

    const {auth} = usePage().props;
    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className={'d-flex gap-3'}>{auth.user.paciente.nombres} {auth.user.paciente.apellidos}
                    <ProfileIconCircle/></span>
            </button>
            <div className="offcanvas offcanvas-end rounded-end rounded-4" tabIndex="-1" id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> Datos personales </h5>
                    <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"><CloseIcon/></button>
                </div>
                <div className="offcanvas-body position-relative">
                    <ul>
                        <NavItemProfile title={'Numero Seguro Social (NSS)'} subtitle={auth.user.paciente.NSS}>
                            <HashIcon/>
                        </NavItemProfile>

                        <NavItemProfile title={'Fecha de nacimiento'} subtitle={auth.user.paciente.fechaNac}>
                            <BirthdayIcon/>
                        </NavItemProfile>

                        <NavItemProfile title={'Sexo'} subtitle={auth.user.paciente.sexo}>
                            <GenderIcon/>
                        </NavItemProfile>

                        <NavItemProfile title={'Nacionalidad'} subtitle={'Mexicana'}>
                            <MapIcon/>
                        </NavItemProfile>

                        <NavItemProfile title={'Entidad de nacimiento'} subtitle={auth.user.paciente.entidadNac}>
                            <GeoIcon/>
                        </NavItemProfile>

                        <NavItemProfile title={'Correo electronico'} subtitle={auth.user.email}>
                            <EmailIcon/>
                        </NavItemProfile>
                    </ul>

                    <div className="container align-items-center position-relative mt-14">
                        <div className="row d-flex justify-center">
                            <div className="col-10 text-center">
                                <p className={'text-sm font-light'}>
                                    Recuerda realizar el examen clinico si es que no lo has realizado, esto nos ayudara a generar un
                                    historial y birndarte un mejor servicio
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className={'btn btn-lg btn-success border-0 bg-IMSS text-white position-absolute bottom-10 left-7'}>
                        <Link href="/AgendarCita" >Agendar cita</Link>
                    </button>
                </div>
            </div>
        </>
    )
}
