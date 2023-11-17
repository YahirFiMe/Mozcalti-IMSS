import Checkbox from '@/Components/Inputs/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/Inputs/InputError';
import InputLabel from '@/Components/Inputs/InputLabel';
import PrimaryButton from '@/Components/Inputs/PrimaryButton';
import TextInput from '@/Components/Inputs/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import RadioButton from "@/Components/Inputs/RadioButton";
import SelectInput from "@/Components/Inputs/SelectInput";
import TopAndBottom from '@/Layouts/TopAndBottom';

// chidos
// import GuestLayout from '@/Layouts/GuestLayout';
// import InputLabel from '@/Components/Inputs/InputLabel';
// import PrimaryButton from '@/Components/Inputs/PrimaryButton';
// import TextInput from '@/Components/Inputs/TextInput';
// import {Head, useForm} from '@inertiajs/react';
// import RadioButton from "@/Components/Inputs/RadioButton";
// import SelectInput from "@/Components/Inputs/SelectInput";
// import TopAndBottom from "@/Layouts/TopAndBottom";

export default function Historial() {

   const { data, setData, post, processing, errors, reset } = useForm({
       Diabetes: '',
       Cancer: '',
       Nefropatia: '',
       Hipertension: '',
       Cardiopatia: '',
       Malformaciones: '',
       otras: 'Ninguna',
       Tabaquismo: '',
       TabaquismoCantidad: 0,
       TabaquismoAños: 0,
       Exfumador: 'No',
       Alcoholismo: '',
       AlcoholismoCantidad: 0,
       AlcoholismoAños: 0,
       Exalcoholismo: 'No',
       Alergias: '',
       alergiasInfo: 'Ninguna',
       Infancia: '',
       InfanciaSecuelas: 'Ninguna',
       Hospitalizaciones: '',
       HospitalizacionesInfo: 'Ninguna',
       Quirurgicos: '',
       QuirurgicosInfo: 'Ninguna',
       Transfusiones: '',
       TransfusionesInfo: 'Ninguna',
       Fracturas: '',
       FracturasInfo: 'Ninguna',
       Traumatistmo: '',
       TraumatistmoInfo: 'Ninguna',
       Padecimiento: '',
       PadecimientoInfo: 'Ninguna',
       Motivo: '',
       Evolucion: '',
       Cardiovascular: '',
       Respiratorio: '',
       Digestivo: '',
       Urinario: '',
       Endocrino: '',
       Muscular: '',
       Hematopoyetico: '',
       Nervioso: '',
       Piel: '',
       Medicacion: '',
       MedicacionInfo: 'Ninguna',

   });

    const submit = (e) => {
        // e.preventDefault();

       console.log(data);
    }

    return (
        <TopAndBottom>

        <GuestLayout>
            <Head title="Historial"/>

            <form action="/create" onSubmit={submit}>
                {/*Primera fila*/}
                <div className="row">
                    <div className="col-4">
                        <InputLabel htmlFor="diabetes" value="Diabetes"/>
                        <div className="radio-diabetes">
                            <RadioButton name={'Diabetes'} onChange={e => setData("Diabetes", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Diabetes'} onChange={e => setData("Diabetes", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="cancer" value="Cancer"/>
                        <div className="radio-cancer">
                            <RadioButton name={'Cancer'} onChange={e => setData("Cancer", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Cancer'} onChange={e => setData("Cancer", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="nefropatia" value="Nefropatia"/>
                        <div className="radio-nefropatia">
                            <RadioButton name={'Nefropatia'} onChange={e => setData("Nefropatia", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Nefropatia'} onChange={e => setData("Nefropatia", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                </div>

                {/*Segunda fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="hipertension" value="Hipertension"/>
                        <div className="radio-hipertension">
                            <RadioButton name={'Hipertension'} onChange={e => setData("Hipertension", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Hipertension'} onChange={e => setData("Hipertension", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="cardiopatia" value="Cardiopatia"/>
                        <div className="radio-cardiopatia">
                            <RadioButton name={'Cardiopatia'} onChange={e => setData("Cardiopatia", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Cardiopatia'} onChange={e => setData("Cardiopatia", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="malformaciones" value="Malformaciones"/>
                        <div className="radio-malformaciones">
                            <RadioButton name={'Malformaciones'} onChange={e => setData("Malformaciones", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Malformaciones'} onChange={e => setData("Malformaciones", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                </div>

                {/*Tercera fila*/}
                <div className="row mt-3">
                    <div className="col-12">
                        <InputLabel htmlFor="otras" value="Otras"/>
                        <TextInput
                            id="otras"
                            type="text"
                            name="Otras"
                            className="mt-1 block w-full"
                            autoComplete="otras"
                            onChange={(e) => setData('otras', e.target.value)}
                        />
                    </div>
                </div>

                {/*Cuarta fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="tabaquismo" value="Tabaquismo"/>
                        <div className="radio-tabaquismo">
                            <RadioButton name={'Tabaquismo'} onChange={e => setData("Tabaquismo", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Tabaquismo'} onChange={e => setData("Tabaquismo", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Tabaquismo === 'Si' &&
                        (
                            <div className="col-4">
                                <InputLabel htmlFor="tabaquismoSelect" value="Cigarrillos al dia"/>
                                <div className="select-tabaquismo">
                                    <SelectInput name={'CigarrillosDia'} opcions={[1,2,3,4,5 ,'+5']}/>
                                </div>
                            </div>
                        )
                    }
                    {
                        data.Tabaquismo === 'Si' ?
                        (
                            <div className="col-4">
                                <InputLabel htmlFor="tabaquismoSelect" value="Años de consumo"/>
                                <div className="select-tabaquismo">
                                    <SelectInput name={'CigarrillosYear'} opcions={[1,2,3,4,5 ,'+5']}/>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="col-4">
                                <InputLabel htmlFor="tabaquismo" value="Exfumador"/>
                                <div className="radio-exfumador">
                                    <RadioButton name={'Exfumador'} onChange={e => setData("ExTabaquismo", 'Si')} value={'Si'}>Si</RadioButton>
                                    <RadioButton name={'Exfumador'} onChange={e => setData("ExTabaquismo", 'No')} value={'No'}>No</RadioButton>
                                </div>
                            </div>
                        )
                    }

                </div>

                {/*Quinta fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="tabaquismo" value="Alcoholismo"/>
                        <div className="radio-alcoholismo">
                            <RadioButton name={'Alcoholismo'} onChange={e => setData("Alcoholismo", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Alcoholismo'} onChange={e => setData("Alcoholismo", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Alcoholismo === 'Si' &&
                        (
                            <div className="col-4">
                                <InputLabel htmlFor="tabaquismoSelect" value="ML al dia"/>
                                <div className="select-alcoholismo">
                                    <TextInput name={'mlAlcoholismo'} className={'col-12'} onChange={e => setData('MLAlcoholismo', e.target.value)}/>
                                </div>
                            </div>
                        )
                    }
                    {
                        data.Alcoholismo === 'Si' ?
                            (
                                <div className="col-4">
                                    <InputLabel htmlFor="tabaquismoSelect" value="Años de consumo"/>
                                    <div className="select-cardiopatia">
                                        <SelectInput name={'AlcoholismoYear'} opcions={[1,2,3,4,5 ,'+5']} onChange={e => setData('AlcoholismoAños', e.target.value)}/>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="col-4">
                                    <InputLabel htmlFor="tabaquismo" value="Exalcoholismo"/>
                                    <div className="radio-exfumador">
                                        <RadioButton name={'Exalcoholico'} onChange={e => setData("Exalcoholismo", 'Si')} value={'Si'}>Si</RadioButton>
                                        <RadioButton name={'Exalcoholico'} onChange={e => setData("Exalcoholismo", 'No')} value={'No'}>No</RadioButton>
                                    </div>
                                </div>
                            )
                    }

                </div>

                {/*Sexta fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="alergias" value="Alergias"/>
                        <div className="radio-tabaquismo">
                            <RadioButton name={'Alergias'} onChange={e => setData("Alergias", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Alergias'} onChange={e => setData("Alergias", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Alergias === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="alergiasInput" value="Especificar"/>
                                <div className="input-alergias">
                                    <TextInput name={'AlergiasInfo'} className={'col-12'} onChange={e => setData('alergiasInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Septima fila*/}
                <div className="row mt-3">
                    <div className="col-6">
                        <InputLabel htmlFor="infancia" value="Enfermedades de la infancia"/>
                        <div className="input-infancia">
                            <TextInput name={'Infancia'} className={'col-12'} onChange={e => setData('Infancia', e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col-6">
                        <InputLabel htmlFor="infancia" value="Secuelas"/>
                        <div className="input-infanciaSecuelas">
                            <TextInput name={'InfanciaSecuelas'} className={'col-12'} onChange={e => setData('InfanciaSecuelas', e.target.value)} />
                        </div>
                    </div>
                </div>

                {/*Octava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="hospitalizaciones" value="Hospitalizaciones previas"/>
                        <div className="radio-hospitalizaciones">
                            <RadioButton name={'Hospitalizaciones'} onChange={e => setData("Hospitalizaciones", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Hospitalizaciones'} onChange={e => setData("Hospitalizaciones", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Hospitalizaciones === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="hospitalizaciones" value="Especificar"/>
                                <div className="input-hospitalizaciones">
                                    <TextInput name={'HospitalizacionesInfo'} className={'col-12'} onChange={e => setData('HospitalizacionesInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Novena fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="quirurgicos" value="Antecedentes Quirurgicos"/>
                        <div className="radio-quirurgicos">
                            <RadioButton name={'Quirurgicos'} onChange={e => setData("Quirurgicos", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Quirurgicos'} onChange={e => setData("Quirurgicos", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Quirurgicos === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="quirurgicos" value="Especificar"/>
                                <div className="input-quirurgicos">
                                    <TextInput name={'QuirurgicosInfo'} className={'col-12'} onChange={e => setData('QuirurgicosInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Decima fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="transfusiones" value="Transfusiones previas"/>
                        <div className="radio-transfusiones">
                            <RadioButton name={'Transfusiones'} onChange={e => setData("Transfusiones", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Transfusiones'} onChange={e => setData("Transfusiones", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Transfusiones === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="transfusiones" value="Especificar"/>
                                <div className="input-transfusiones">
                                    <TextInput name={'TransfusionesInfo'} className={'col-12'} onChange={e => setData('TransfusionesInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Onceava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="fracturas" value="Fracturas"/>
                        <div className="radio-fracturas">
                            <RadioButton name={'Fracturas'} onChange={e => setData("Fracturas", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Fracturas'} onChange={e => setData("Fracturas", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Fracturas === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="fracturas" value="Especificar"/>
                                <div className="input-Fracturas">
                                    <TextInput name={'FracturasInfo'} className={'col-12'} onChange={e => setData('FracturasInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Doceava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="Traumatistmo" value="Traumatistmo"/>
                        <div className="radio-traumatistmo">
                            <RadioButton name={'Traumatismo'} onChange={e => setData("Traumatistmo", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Traumatismo'} onChange={e => setData("Traumatistmo", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Traumatistmo === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="Traumatistmo" value="Especificar"/>
                                <div className="input-traumatistmo">
                                    <TextInput name={'TraumatismoInfo'} className={'col-12'} onChange={e => setData('TraumatistmoInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Treceava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="OtroPadecimiento" value="Otro padecimiento"/>
                        <div className="radio-padecimiento">
                            <RadioButton name={'Padecimiento'} onChange={e => setData("Padecimiento", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Padecimiento'} onChange={e => setData("Padecimiento", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>

                    {
                        data.Padecimiento === 'Si' &&
                        (
                            <div className="col-8">
                                <InputLabel htmlFor="OtroPadecimiento" value="Especificar"/>
                                <div className="input-Padecimiento">
                                    <TextInput name={'PadecimientoInfo'} className={'col-12'} onChange={e => setData('PadecimientoInfo', e.target.value)} required/>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/*Catorceava fila*/}
                <div className="row mt-3">
                    <div className="col-12">
                        <InputLabel htmlFor="Motivo" value="Motivo de ingreso"/>
                        <div className="input-mnotivo">
                            <TextInput name={'Motivo'} className={'col-12'} onChange={e => setData('Motivo', e.target.value)} required/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <InputLabel htmlFor="Evolucion" value="Principio y evolución del padecimiento actual"/>
                        <div className="input-evolucion">
                            <TextInput name={'Evolucion'} className={'col-12'} onChange={e => setData('Evolucion', e.target.value)} required/>
                        </div>
                    </div>
                </div>


                <InputLabel htmlFor="Evolucion" value="¿Presenta padecimientos en los siguientes sistemas?"/>

                {/*Quinceava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="cardiovascular" value="Cardiovascular"/>
                        <div className="radio-cardiovascular">
                            <RadioButton name={'Cardiovascular'} onChange={e => setData("Cardiovascular", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Cardiovascular'} onChange={e => setData("Cardiovascular", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="respiratorio" value="Respiratorio"/>
                        <div className="radio-respiratorio">
                            <RadioButton name={'Respiratorio'} onChange={e => setData("Respiratorio", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Respiratorio'} onChange={e => setData("Respiratorio", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="digestivo" value="Digestivo"/>
                        <div className="radio-digestivo">
                            <RadioButton name={'Digestivo'} onChange={e => setData("Digestivo", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Digestivo'} onChange={e => setData("Digestivo", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                </div>

                {/*Dieciseisava fila*/}
                <div className="row">
                    <div className="col-4">
                        <InputLabel htmlFor="urinario" value="Urinario"/>
                        <div className="radio-urinario">
                            <RadioButton name={'Urinario'} onChange={e => setData("Urinario", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Urinario'} onChange={e => setData("Urinario", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="endocrino" value="Endocrino"/>
                        <div className="radio-endocrino">
                            <RadioButton name={'Endocrino'} onChange={e => setData("Endocrino", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Endocrino'} onChange={e => setData("Endocrino", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="muscular" value="Muscular"/>
                        <div className="radio-muscular">
                            <RadioButton name={'Muscular'} onChange={e => setData("Muscular", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Muscular'} onChange={e => setData("Muscular", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                </div>

                {/*Diecisieteava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="hematopoyetico" value="Hematopoyético"/>
                        <div className="radio-hematopoyetico">
                            <RadioButton name={'Hematopoyetico'} onChange={e => setData("Hematopoyetico", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Hematopoyetico'} onChange={e => setData("Hematopoyetico", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="nervioso" value="Nervioso"/>
                        <div className="radio-nervioso">
                            <RadioButton name={'Nervioso'} onChange={e => setData("Nervioso", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Nervioso'} onChange={e => setData("Nervioso", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    <div className="col-4">
                        <InputLabel htmlFor="piel" value="Piel y anexos"/>
                        <div className="radio-piel">
                            <RadioButton name={'Piel'} onChange={e => setData("Piel", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Piel'} onChange={e => setData("Piel", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                </div>

                {/*Dieciochoava fila*/}
                <div className="row mt-3">
                    <div className="col-4">
                        <InputLabel htmlFor="medicacion" value="Medicacion actual"/>
                        <div className="radio-medicacion">
                            <RadioButton name={'Medicacion'} onChange={e => setData("Medicacion", 'Si')} value={'Si'}>Si</RadioButton>
                            <RadioButton name={'Medicacion'} onChange={e => setData("Medicacion", 'No')} value={'No'}>No</RadioButton>
                        </div>
                    </div>
                    {
                        data.Medicacion === 'Si' && (
                            
                    <div className="col-8">
                        <InputLabel htmlFor="medicacion" value="Especificar"/>
                        <div className="input-medicacion">
                            <TextInput name={'MedicacionInfo'} className={'col-12'} onChange={e => setData('MedicacionInfo', e.target.value)} required/>
                        </div>
                    </div>
                        )
                    
                    }
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <InputLabel htmlFor="Motivo" value="Observaciones o comentarios finales:"/>
                        <div className="input-mnotivo">
                            <TextInput name={'Comentarios'} className={'col-12'} onChange={e => setData('Motivo', e.target.value)} required/>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <PrimaryButton>Guardar</PrimaryButton>
                    </div>
                </div>
            </form>
        </GuestLayout>
        </TopAndBottom>
    );
}
