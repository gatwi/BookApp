import { useState } from 'react';

const useForm = () =>{
    const [state, setState] = useState({})


    const onChange = (e) => {
        setState({...state, [e.target.name]:e.target.value});
    };
    return [state]
}

export default useForm;