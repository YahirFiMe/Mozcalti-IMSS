export default function SelectInput({id, name, className = '', onChange,opcions= [], ...props}){
    return(
        <>
            <div className="sm:col-span-3">
                <div className="mt-2">
                    <select
                        onChange={onChange}
                        id="country"
                        name="country"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        {
                            opcions.map((opcion,index) => (
                                <option key={index} value={opcion}>{opcion}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    );
}
