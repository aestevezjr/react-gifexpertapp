import React from 'react';
import { getGifs } from '../helpers/getGifs';
import { UseFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = UseFetchGifs(category); //Con dos puntos se asigna el valor de data a la nueva constante images

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="card animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                    {
                        images.map(img => (
                            <GifGridItem 
                                key={img.id}
                                {...img} />
                        ))
                    }
            </div>
        </>
    )
}