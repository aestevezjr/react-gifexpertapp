

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1XvLHFcpViTH1HNViQn2h3wYusI89TvF`; 
    //Para poder incluir la variable category en el string, es necesario que dicho string esté contenido en backticks, no comillas
    //encodeURI devuelve la string formateada apra URL (como poner %20 en vez de espacios)
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}