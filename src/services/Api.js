import axios from "axios";

const url = "https://converter-curren.herokuapp.com/calculate";

const calculate = async (source, target, value) => {
    return axios.post(url, {
        source: source,
        target: target,
        value: value
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export {calculate}