import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        getGifs(category)
        //  .then(imgs => setImages(imgs)) porque el argumento es el mismo no hace falta ponerlo.
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [ category ])


    return state; 
}