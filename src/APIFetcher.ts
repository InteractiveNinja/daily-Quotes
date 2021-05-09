
export default async function fetchAPI(): Promise<{ text: string }> {

    return await fetch(import.meta.env.API_LINK, {
        method: "POST",
        body: JSON.stringify({ key: import.meta.env.API_KEY }),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(e => e.json());


}