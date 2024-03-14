import { useEffect, useState } from 'react';

export const useFetch = (url, method='get')=>{
    const [resonse, setState] = useState({
        data: null,
        loading: true
    });
    useEffect(function(){
        setState({
            data: null, 
            loading: true
        });
        fetch(url, {method})
        .then(resp => resp.json())
        .then(json => setState({
            data: json, 
            loading: false
        }));

    }, [url, method]);
    return resonse
}