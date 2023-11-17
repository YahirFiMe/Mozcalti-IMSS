import {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/Inputs/InputError';
import InputLabel from '@/Components/Inputs/InputLabel';
import PrimaryButton from '@/Components/Inputs/PrimaryButton';
import TextInput from '@/Components/Inputs/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import TopAndBottom from "@/Layouts/TopAndBottom";
import IMSSLogo from "@/Components/Logos-Icons/IMSSLogo";
import Fondo from "../../../assets/jpg/FondoLogin.jpg";

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        curp: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <TopAndBottom>
            <Head title={'Registro'}/>

            <div className="container-fluid">
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
                </div>

                <div className="row">
                    <form onSubmit={submit}>
                        <div className="row justify-around">
                            <div className="col-5">
                                <InputLabel className={'font-bold text-xl ml-3'} value={'Ingresa tu Curp'}/>

                                <TextInput id="Curp" name="Curp" value={data.curp} className="mt-1 block w-full"
                                           isFocused={true} maxLength={18} placeholder={'CURP (18 caracteres)'}
                                           autoComplete={'curp'}
                                           onChange={(e) => setData('curp', e.target.value)} required/>
                                <InputError message={errors.curp} className="mt-2"/>
                            </div>
                            <div className="col-5">
                                <InputLabel className={'font-bold text-xl ml-3'} value={'Ingresa una contraseña'}/>

                                <TextInput id="password" type="password" name="password" value={data.password}
                                           className="mt-1 block w-full" autoComplete="new-password"
                                           placeholder={'Ingresa tu contraseña'}
                                           onChange={(e) => setData('password', e.target.value)} required
                                />

                                <InputError message={errors.password} className="mt-2"/>
                            </div>
                        </div>
                        <div className="row mt-4 justify-around">
                            <div className="col-5">
                                <InputLabel className={'font-bold text-xl ml-3'}
                                            value={'¿Cuál es tu correo electronico?'}/>

                                <TextInput id="email" name="email" value={data.email}
                                           className="mt-1 block w-full"
                                           isFocused={true} placeholder={'Ejemplo@hotmail.com'} type={'email'}
                                           onChange={(e) => setData('email', e.target.value)} required/>
                            </div>
                            <div className="col-5">
                                <InputLabel className={'font-bold text-xl ml-3'} value={'Confirma tu contraseña'}/>

                                <TextInput id="password_confirmation" type="password" name="password_confirmation"
                                           value={data.password_confirmation} className="mt-1 block w-full"
                                           autoComplete="new-password" placeholder={'Confirma tu contraseña'}
                                           onChange={(e) => setData('password_confirmation', e.target.value)} required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2"/>
                            </div>

                        </div>
                        <div className="row  p-16">
                            <div className="col-4">
                                <PrimaryButton disabled={processing}>
                                    Registrarse
                                </PrimaryButton>
                                <p className={'mt-3'}>
                                    ¿No tienes una cuenta? <Link href={route('register')}
                                                                 className={'text-IMSS font-bold'}>Registrate
                                    aquí</Link>
                                </p>
                            </div>
                            <div className="col-8 flex-col text-IMSS">
                                <p className={'font-extrabold'}>Tu contraseña debe cumplir con lo siguiente:</p>
                                <ul className={'list-disc'}>
                                    <li>Debe tener almenos 8 caracteres</li>
                                    <li>Incluye mayusculas y minusculas</li>
                                    <li>Incluye caracteres especiales y numeros</li>
                                </ul>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </TopAndBottom>
    );
}
