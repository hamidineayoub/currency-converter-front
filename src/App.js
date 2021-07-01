import './App.css';
import {useState} from "react";
import Form from "./components/Form";
import {calculate} from "./services/Api";


const App = () => {
    const [calculatedValue, setCalculatedValue] = useState(0);
    const [target, setTarget] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = (source, target, value) => {
        calculate(source, target, value)
            .then(res => {
                setTarget(target)
                setCalculatedValue(res.data.value)
                setSubmitted(true)
                setErrorMessage("")
            })
            .catch(err => setErrorMessage(err.response.data.message)

            )

    }
    return (

        <div className="App">
            <Form
                handleSubmit={handleSubmit}
            />

            {
                errorMessage ? <span className="error">{errorMessage}</span> :
                    submitted ? <span className='output'>{
                        new Intl.NumberFormat(navigator.language, {
                            style: 'currency',
                            currency: target
                        }).format(calculatedValue)}
            </span> : ""}
        </div>

    );
}
export default App;
