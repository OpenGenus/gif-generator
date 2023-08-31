
export default async function generateGIF() {
    let url;

    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=AAZoF8brvDeG2IBIKfnQdi7ZsGohQJa8&s=coding');
    
    const data = await response.json();

    return data.data.images.original.url;
}