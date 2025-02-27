import React from 'react';
import axios from 'axios';

const useIndicators = () => {
    

    const [indicatorsData,setIndicators]=React.useState([]);
    React.useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/indicators/data/indicators`, {}).then(response => {
            setIndicators(response.data);
        })
    }, []);

    return {
        indicatorsData
    }
}

export default useIndicators;