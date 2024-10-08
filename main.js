import { Header } from "./components/Header";
import { reload } from "./lib/utils";
import { Transaction } from "./components/Tranjaction";
import { Card } from "./components/Card";
import { ApiCall } from "./lib/http.request";

const local = JSON.parse(localStorage.getItem('user'))
if (local === null) {
    location.assign('/pages/signin/')
}
const apiCall = new ApiCall(import.meta.env.VITE_BATH_URL)
const user_name = document.querySelector('#user_name')
const user_email = document.querySelector('#user_email')
const body = document.body
const tbody = document.querySelector('.place')
const card_place = document.querySelector('.wallets')
user_email.innerHTML = local.email
user_name.innerHTML = local["last-name"] + ' ' + local["first-name"]
reload([{}],body, Header)

apiCall.getData('/wallets?userId=' + local.id)
    .then(wallet => {
        reload(wallet,card_place, Card) 
    })
apiCall.getData('/transactions?userId=' + local.id)
    .then(transaction => {
        reload(transaction,tbody, Transaction)   
    })
