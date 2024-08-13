import { Header } from "../../components/Header";
import { reload } from "../../lib/utils";
import { Transaction } from "../../components/Tranjaction";
import { ApiCall } from "../../lib/http.request";

const refId = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall(import.meta.env.VITE_BATH_URL)
const add_transaction = document.querySelector('#add_transaction')
const transaction = await apiCall.getData('/transactions?userId=' + refId.id)
const body = document.body
const tbody = document.querySelector('.place')

reload([{}],body, Header)
reload(transaction,tbody, Transaction)
add_transaction.onclick = () => {
    location.assign('/pages/transaction/')
}