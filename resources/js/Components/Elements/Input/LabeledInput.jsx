const LabeledInput = ({ type = '', setData, className = '', placeholder = '', name = '', id = '', data = {}, label = '' }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="font-semibold">{label}</label>
            <input type={type} className={className} id={id} placeholder={placeholder} name={name} onChange={(e) => setData({
                ...data,
                [e.target.name]: (type != 'file' ? e.target.value : e.target.files[0])
            })} />
        </div>
    );
}

export default LabeledInput;