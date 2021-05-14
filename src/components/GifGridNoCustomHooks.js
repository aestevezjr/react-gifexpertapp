import React, {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages) //es igual a .then(imgs => setImages(imgs)), implícitamente se envía el primer argumento del then a la función setImages
    }, [category]) //Se agrega category entre las dependencias del useEffect para que, si el valor de esa variable cambia, se vuelva a ejecutar la función getGifs.
                    //en nuestro caso no va a cambiar porque cada GifGrid creado con su category se queda intacto. Cuando el usuario digita una nueva, se crea un
                    //nuevo componente GifGrid, pero no se modifican los anteriores

    

    //getGifs();

    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem 
                                key={img.id}
                                {...img} />
                        ))
                        /*images.map(({id, title}) => (
                            <li key={id}>{title}</li>
                        ))*/
                    }
                </ol>
            </div>
        </>
    )
}