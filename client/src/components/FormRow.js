const FormRow = ({type, name, value, HandleChange, labelText}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label" >
                {labelText || name}
            </label>

            <input
                type={type}
                value={value}
                name={name}
                onChange={HandleChange}
                className="form-input" 
            />
        </div>
    )
}

export default FormRow