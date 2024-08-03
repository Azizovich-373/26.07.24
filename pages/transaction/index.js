import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";

const form = document.forms.namedItem('transaction-form')
const total = document.querySelector('#total')
const select_wallet = document.querySelector('#wallet')
const apiCall = new ApiCall("http://localhost:8080")
const refId = JSON.parse(localStorage.getItem('user'))
const res = await apiCall.getData('/wallets?userId=' + refId.id)
function SelectWallet(item){
    const option = document.createElement('option')
    option.innerHTML = item["wallet-name"]

    return option
}
reload(res,select_wallet,SelectWallet)
form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const transaction = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: refId.id,
    }

    fm.forEach((val, key) => transaction[key] = val)

    const data = await apiCall.getData('/wallets?wallet-name=' + transaction.wallet)

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

    form.reset()
    location.assign('/')   

}