import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";

const refId = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall(import.meta.env.VITE_BATH_URL)
const add_wallet = document.querySelector('#add_wallet')
const body = document.body
const card_place = document.querySelector('.wallets_all')

reload([{}],body, Header)

await apiCall.getData('/wallets?userId=' + refId.id)
    .then(wallet => {
        reload(wallet,card_place, Card)
    })
add_wallet.onclick = () => {
    location.assign('/pages/wallet/') 
}