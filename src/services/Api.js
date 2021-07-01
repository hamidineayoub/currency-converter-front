import axios from "axios";

const url = "http://localhost:8080/calculate";

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