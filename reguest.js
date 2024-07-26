const baseUrl = 'http://localhost:8080'
export async function postData(path, body) {
    try {
        const res = await fetch(baseUrl + path, {
            method: "POST",
            body: JSON.stringify(body)
        })
    
        if(res.status === 200 || res.status === 201) {
            const data = await res.json()
            return data
        } 
    } catch(error) {
        return []
    }
}