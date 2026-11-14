export async function getData(url, callback) {
    try {
        
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

        const data = await response.json();

        callback(data);

    } catch (error) {
        console.error(`The ${error} prevented member data from being retrieved`);
    }
}