import { Header } from "./components/Header";
import { reload } from "./lib/utils";
import { Transaction } from "./components/Tranjaction";
import { Card } from "./components/Card";
import { ApiCall } from "./lib/http.request";

const apiCall = new ApiCall("http://localhost:8080")
const wallet = await apiCall.getData('/wallets')
const transaction = await apiCall.getData('/transactions')
const data = [
    {
        id: 1,
    },
];
const body = document.body
const tbody = document.querySelector('.place')
const card_place = document.querySelector('.wallets')

reload(data,body, Header)
reload(transaction,tbody, Transaction)
reload(wallet,card_place, Card)