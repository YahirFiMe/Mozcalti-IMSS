export default function RadioButton({name, className = '', children, onChange, ...props}) {


    return (
       <>
           <div className={`form-check form-check-inline ${className}`}>
               <input className="form-check-input" type="radio" name={name} id="inlineRadio1" value={props.value} onChange={onChange}/>
               <label className="form-check-label" htmlFor="inlineRadio1">{children}</label>
           </div>
       </>
    );
}
