import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    
    const name = "Diego Antonio Angel Rodriguez"
    const curp = "AERD002211HGRNDGA5"
    const routeImg = "/resources/css/perfil_formulario.png"

    return (
        <>
            <Head title="Formulario de historial medico"/>

            <div className='w-10/12 h-60 bg-gray-400 m-auto flex justify-center items-center gap-8 p-8'>
                <img src={routeImg} alt="Foto de perfil" className='w-56 h-full border border-solid border-white'/>
                <div className="flex flex-col">
                    <h2 className='font-bold text-white text-3xl'>{name}</h2>
                    <p className='text-white text-2x1'>{curp}</p>
                    <button className='text-white font-bold text-left mt-5 transition-transform ease-in-out hover:-translate-y-0.5'>&laquo; Cancelar</button>
                </div>                
            </div>
            <div className='w-10/12 h-12 border border-solid border-gray-300 m-auto flex justify-center items-center p-8 flex flex-col'>
                <span className='font-bold text-green-900'>
                    Por favor, contesta las siguientes preguntas para completar tu historial medico.
                </span>
                <span className='font-bold text-green-900'>
                    Algunas de las preguntas son obligatorias y están marcadas con un *.
                </span>
            </div>
            <form action="" method="post" className='w-10/12 h-full border border-solid border-gray-300 m-auto pl-52 pr-52 pt-14 pb-14 flex flex-col align-middle justify-center gap-y-8' id='historial'>
                <p className=''>
                    <label htmlFor='padecimientos' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Sufre alguno de los siguientes padecimientos? 
                        </span>
                        <span className='text-xs text-green-900'>
                            Puedes seleccionar mas de una opción
                        </span>
                    </label>
                    <fieldset id='padecimientos' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='diabetes' value={"diabetes"} className='active:outline-none rounded'/>
                                <label htmlFor="diabetes">Diabetes</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='cancer' value={"diabetes"} className='active:outline-none rounded'/>
                                <label htmlFor="cancer">Cáncer</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='nefropatia' value={"diabetes"} className='active:outline-none rounded'/>
                                <label htmlFor="nefropatia">Nefropatía</label>
                            </p>
                        </div>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='diabetes' value={"diabetes"} className='active:outline-none rounded'/>
                                <label htmlFor="diabetes">Diabetes</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='cancer' value={"diabetes"} className='active:outline-none rounded'/>
                                <label htmlFor="cancer">Cáncer</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='nefropatia' value={"diabetes"} className='active:outline-none rounded'/>
                                <label htmlFor="nefropatia">Nefropatía</label>
                            </p>
                        </div>
                    </fieldset>
                    <label className='flex flex-col ml-6 mt-6'>                        
                        <textarea className='w-96 rounded resize-none' name="" id="otros_padecimientos" rows="5" placeholder='Otros'></textarea>
                    </label>
                </p>
                <p className=''>
                    <label htmlFor='habitos' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Mantiene o mantuvo alguno de los siguientes habitos? 
                        </span>
                        <span className='text-xs text-green-900'>
                            Puedes seleccionar mas de una opción
                        </span>
                    </label>
                    <fieldset id='habitos' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='tabaquismo' value={"tabaquismo"} className='active:outline-none rounded'/>
                                <label htmlFor="tabaquismo">Tabaquismo</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='alcoholismo' value={"alcoholismo"} className='active:outline-none rounded'/>
                                <label htmlFor="alcoholismo">Alcoholismo</label>
                            </p>
                        </div>                        
                    </fieldset>                    
                </p>
                <p className=''>
                    <label htmlFor='alergias' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Padece alguna alergia? <span className='text-red-600'>*</span>
                        </span>                        
                    </label>
                    <fieldset id='alergias' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='si' value={"si"} className='active:outline-none'/>
                                <label htmlFor="si">Si</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='no' value={"no"} className='active:outline-none'/>
                                <label htmlFor="no">No</label>
                            </p>
                        </div>                        
                    </fieldset>                  
                </p>
                <p className=''>
                    <label htmlFor='enfermedades_infantiles' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Describa las enfermedades que sufrió en su infancia, si es que sufrió alguna.
                        </span>                        
                        <textarea className='w-96 rounded resize-none ml-6 mt-6' name="" id="enfermedades_infantiles" rows="5" placeholder='Enfermedades de su infancia'></textarea>
                    </label>                                  
                </p>
                <p className=''>
                    <label htmlFor='hospitalizaciones' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Tuvo hospitalizaciones previas? <span className='text-red-600'>*</span>
                        </span>                        
                    </label>
                    <fieldset id='hospitalizaciones' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='si' value={"si"} className='active:outline-none'/>
                                <label htmlFor="si">Si</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='no' value={"no"} className='active:outline-none'/>
                                <label htmlFor="no">No</label>
                            </p>
                        </div>                        
                    </fieldset>                  
                </p>
                <p className=''>
                    <label htmlFor='antecedentes_quirurgicos' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Tiene antecedentes quirúrgicos? <span className='text-red-600'>*</span>
                        </span>                        
                    </label>
                    <fieldset id='antecedentes_quirurgicos' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='si' value={"si"} className='active:outline-none'/>
                                <label htmlFor="si">Si</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='no' value={"no"} className='active:outline-none'/>
                                <label htmlFor="no">No</label>
                            </p>
                        </div>                        
                    </fieldset>                  
                </p>
                <p className=''>
                    <label htmlFor='transfusiones' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Fue sujeto a transfusiones previas?<span className='text-red-600'>*</span>
                        </span>                        
                    </label>
                    <fieldset id='transfusiones' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='si' value={"si"} className='active:outline-none'/>
                                <label htmlFor="si">Si</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='no' value={"no"} className='active:outline-none'/>
                                <label htmlFor="no">No</label>
                            </p>
                        </div>                        
                    </fieldset>                  
                </p>
                <p className=''>
                    <label htmlFor='fracturas' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Sufrió de una o más fracturas previas?<span className='text-red-600'>*</span>
                        </span>                        
                    </label>
                    <fieldset id='fracturas' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='si' value={"si"} className='active:outline-none'/>
                                <label htmlFor="si">Si</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='no' value={"no"} className='active:outline-none'/>
                                <label htmlFor="no">No</label>
                            </p>
                        </div>                        
                    </fieldset>                  
                </p>
                <p className=''>
                    <label htmlFor='traumatismos' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Sufrió de uno o más traumatismos previos?<span className='text-red-600'>*</span>
                        </span>                        
                    </label>
                    <fieldset id='traumatismos' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='si' value={"si"} className='active:outline-none'/>
                                <label htmlFor="si">Si</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="radio" id='no' value={"no"} className='active:outline-none'/>
                                <label htmlFor="no">No</label>
                            </p>
                        </div>                        
                    </fieldset>                  
                </p>
                <p className='w-3/5'>
                    <label className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Describa alguna otra enfermedad que padezca actualmente, si no es así, puede saltar este y el siguiente inciso.
                        </span>                        
                        <textarea className='w-3/4 rounded resize-none ml-6 mt-6 overscroll-y-auto' name="" id="enfermedades" rows="5" placeholder='Descripción'></textarea>
                    </label>                                  
                </p>
                <p className='w-3/5'>
                    <label className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Describa el principio y evolución del padecimiento actual.
                        </span>                        
                        <textarea className='w-3/4 rounded resize-none ml-6 mt-6 overscroll-y-auto' name="" id="enfermedades" rows="5" placeholder='Descripción'></textarea>
                    </label>                                  
                </p>
                <p className='w-3/5'>
                    <label className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Si tuvo algún ingreso hospitalario, describa el motivo.
                        </span>                        
                        <textarea className='w-3/4 rounded resize-none ml-6 mt-6 overscroll-y-auto' name="" id="enfermedades" rows="5" placeholder='Descripción'></textarea>
                    </label>                                  
                </p>
                <p className=''>
                    <label htmlFor='interrogatorios' className='flex flex-col'>
                        <span className='font-bold text-xl'>
                            Tuvo algún interrogatorio de alguno de los siguientes aparatos o sistemas?
                        </span>
                        <span className='text-xs text-green-900'>
                            Puedes seleccionar mas de una opción
                        </span>
                    </label>
                    <fieldset id='interrogatorios' className='flex gap-x-12 pl-6 mt-2'>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='r/c' value={"r/c"} className='active:outline-none rounded'/>
                                <label htmlFor="r/c">Respiratorio / Cardiovascular</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='digestivo' value={"digestivo"} className='active:outline-none rounded'/>
                                <label htmlFor="digestivo">Digestivo</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='endocrino' value={"endocrino"} className='active:outline-none rounded'/>
                                <label htmlFor="endocrino">Endocrino</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='m/e' value={"m/e"} className='active:outline-none rounded'/>
                                <label htmlFor="m/e">Músculo/Esquelético</label>
                            </p>
                        </div>
                        <div className="">
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='g/u' value={"g/u"} className='active:outline-none rounded'/>
                                <label htmlFor="g/u">Genito / Urinario</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='h/l' value={"h/l"} className='active:outline-none rounded'/>
                                <label htmlFor="h/l">Hematopoyético / Linfático</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='piel' value={"piel"} className='active:outline-none rounded'/>
                                <label htmlFor="piel">Piel y anexos</label>
                            </p>
                            <p className='flex items-center gap-x-4 mt-4'>
                                <input type="checkbox" id='n/n' value={"n/n"} className='active:outline-none rounded'/>
                                <label htmlFor="n/n">Neurológico / Nervioso</label>
                            </p>
                        </div>
                    </fieldset>
                </p>                
                <button type="button" form='historial' className='pl-7 pr-7 pt-3 pb-3 bg-green-900 text-white font-bold rounded w-1/3 mt-16'>Enviar respuestas</button>
            </form>
            <div className='w-10/12 h-12 border border-solid border-gray-300 m-auto flex justify-center items-center p-8 flex flex-col'>
                
            </div>
        </>
    );
}
