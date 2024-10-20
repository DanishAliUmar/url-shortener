import {useState} from 'react';

const useFetch=(cb, options = {})=>{
    const [date, setDate] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


    const fn = async (...args)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await cb(options, ...args);
            setDate(response);
        } catch (error) {
            setError(error);
        }finally{
            setLoading(false)
        }
    }

    return {date, loading, error, fn}
}

export default useFetch;