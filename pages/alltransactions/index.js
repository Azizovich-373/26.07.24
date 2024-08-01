import { Header } from "../../components/Header";
import { reload } from "../../lib/utils";
import { Transaction } from "../../components/Tranjaction";
import { ApiCall } from "../../lib/http.request";

const apiCall = new ApiCall("http://localhost:8080")
const transaction = await apiCall.getData('/transactions')
const data = [
    {
        id: 1,
    },
];
const body = document.body
const tbody = document.querySelector('.place')

reload(data,body, Header)
reload(transaction,tbody, Transaction)