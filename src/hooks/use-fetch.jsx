import {useState} from 'react';

const useFetch=(cb, options = {})=>{
    const [date, setDate] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


   

    return {date, loading, error, }
}

export default useFetch;