import {useEffect} from 'react';
import InputError from '@/Components/Inputs/InputError';
import InputLabel from '@/Components/Inputs/InputLabel';
import PrimaryButton from '@/Components/Inputs/PrimaryButton';
import TextInput from '@/Components/Inputs/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import TopAndBottom from "@/Layouts/TopAndBottom";
import IMSSLogo from "@/Components/Logos/IMSSLogo";

import Fondo from '../../../assets/jpg/FondoLogin.jpg';

export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        curp: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <TopAndBottom>
            <Head title="Iniciar sesión"/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 p-16">
                        <IMSSLogo/>

                        <p className={'text-5xl font-bold text-IMSS mb-3 mt-3'}> Portal de citas </p>
                        <p className={'mb-3'}>
                            En nuestra plataforma de citas, te aseguramos que pobras solicitar y gestionar tus citas de
                            manera segura y rápida, todo
                            desde la comodidad de tu hogar. Este portal ha sido diseñado con el objetivo de facilitar el
                            acceso a servicios de salud
                            a todas las personas en México.
                        </p>

                        <div className="col-8">
                            <form onSubmit={submit}>
                                <div className="">
                                    <InputLabel className={'font-bold text-xl ml-3'} value={'Ingresa tu Curp'}/>

                                    <TextInput id="Curp" name="Curp" value={data.curp} className="mt-1 block w-full"
                                               isFocused={true} maxLength={18} placeholder={'CURP (18 caracteres)'}
                                               autoComplete={'curp'}
                                               onChange={(e) => setData('curp', e.target.value)} required/>
                                    <InputError message={errors.curp} className="mt-2"/>
                                </div>
                                <div className="mt-4">
                                    <InputLabel className={'font-bold text-xl ml-3'} value={'Contraseña'}/>

                                    <TextInput id="password" name="password" value={data.password}
                                               className="mt-1 block w-full"
                                               isFocused={true} placeholder={'Ingresa tu contraseña'} type={'password'}
                                               onChange={(e) => setData('password', e.target.value)} required/>
                                </div>

                                <PrimaryButton className={'mt-3 mb-2'} disabled={processing}>
                                    Iniciar sesión
                                </PrimaryButton>
                            </form>

                            <p>
                                ¿No tienes una cuenta? <Link href={route('register')} className={'text-IMSS font-bold'}>Registrate
                                aquí</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col p-0">
                        <img src={Fondo} className={'position-relative'}/>
                    </div>
                </div>
            </div>

        </TopAndBottom>
    );
}
