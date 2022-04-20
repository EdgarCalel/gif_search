export const getGifs = async ( category ) =>{
    const API_KEY = '1vxN25ZhmnwhoRs1N5PQDH9gYsfQGoCY'
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=${API_KEY}`
const respo = await fetch(url)
const { data } = await respo.json()
const gifs = data.map(img =>{
 return {
     id: img.id,
     title: img.title,
     url: img.images?.downsized_medium.url
 }
})
return gifs
}