import { ApiCall } from "../../lib/http.request";

const form = document.forms.namedItem('transaction-form')
const total = document.querySelector('#total')
const apiCall = new ApiCall("http://localhost:8080")
const refId = JSON.parse(localStorage.getItem('wallet'))

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const transaction = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        walletId: refId.id,
    }

    fm.forEach((val, key) => transaction[key] = val)

    const {data} = await apiCall.getData('/wallets?wallet-name=' + transaction.wallet)

    if(data.length <= 0) {
        alert('Wallet not finded!')
        return
    }

    const [transactionFromDB] = data

    if(transactionFromDB.total > total.value) {
        alert('Insufficient funds!')
        return
    }
    const res = await apiCall.postData('/transactions', transaction)

    if(res.status === 201) {
        form.reset()
        location.assign('/')   
    }
}