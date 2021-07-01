import React, {useState} from "react";
import './Form.css'


const Form = (props) => {
    const [source, setSource] = useState("");
    const [target, setTarget] = useState("");
    const [value, setValue] = useState(0);

    const onClick = () => {props.handleSubmit(source, target, value)}

    return (
        <div className="conversionForm">
            <section className="conversionForm__amount">
                <label>Value :</label>
                <input type="number" step="0.01" value={value} onChange={e => setValue(e.target.value)}
                       className="currencyValue"/>
            </section>
            <section className="conversionForm__currencies">
                <div className="conversionForm__from">
                    <label>Source :</label>
                    <input type="text" value={source} onChange={e => setSource(e.target.value)}
                           className="convertFrom"/>
                </div>
                <div className="conversionForm__to">
                    <label>Target :</label>
                    <input type="text" value={target} onChange={e => setTarget(e.target.value)} className="convertTo"/>
                </div>
            </section>
            <button onClick={() => onClick()} className="currencySubmit">Submit</button>
        </div>
    )
};

export default Form;