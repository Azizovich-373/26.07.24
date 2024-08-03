import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils";

const refId = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall("http://localhost:8080")
const wallet = await apiCall.getData('/wallets?userId=' + refId.id)
const add_wallet = document.querySelector('#add_wallet')
const body = document.body
const card_place = document.querySelector('.wallets_all')

reload([{}],body, Header)
reload(wallet,card_place, Card)
add_wallet.onclick = () => {
    location.assign('/pages/wallet/') 
}