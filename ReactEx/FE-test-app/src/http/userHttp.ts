import type { formDataT } from "../types/global";
const BASE_URL = "http://localhost:3000/buildings";


export async function createUserHttp(token: string, data: formDataT) { 
    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return response.json();
}


export async function fetchUsersHttp(token: string) {
    try{
        const response = await fetch(`${BASE_URL}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        
        if(!response.ok) throw new Error("Failed to fetch data");
        
        const result: {"data": formDataT[]} = await response.json();
        return result.data;

    }catch(err){
        throw new Error("An error occurred while fetching data");
    }
}