import { ApiCall } from "../../lib/http.request";

const form = document.forms.namedItem('wallet-form')
const refId = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall("http://localhost:8080")

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const wallet = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: refId.id,
    }

    fm.forEach((val, key) => wallet[key] = val)

    const res = await apiCall.postData('/wallets', wallet)

    if(res.status === 201) {
        form.reset()
        location.assign('/')   
    }
    localStorage.setItem('wallet', JSON.stringify(wallet))
}