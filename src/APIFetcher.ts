
export default async function  fetchAPI(): Promise<{text:string}>{

    return await fetch(import.meta.env.API_LINK).then(e => e.json());
  
    
}