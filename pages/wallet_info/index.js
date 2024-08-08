import { reload } from "../../lib/utils"
import { ApiCall } from "../../lib/http.request"
import { Wallet } from "../../components/Info_card"
const apicall = new ApiCall('http://localhost:8080')
// const bank_apiCall = new ApiCall("https://api.apilayer.com/fixer", "j2pLT7yrORYlBVoSvkYpj4dXnY4GaQJj")

const h1 = document.querySelector('.user_card')
const close = document.querySelector('.close_info')
const wallets_place = document.querySelector('.wallets_place')
const select_currency = document.querySelectorAll('.select_currency')
const history_currency = document.querySelector('.history_currency')
const id = location.search.split('=').at(-1)
const refId = JSON.parse(localStorage.getItem('user'))

const wallet = await apicall.getData('/wallets?userId=' + refId.id)
const res = await apicall.getData('/wallets/' + id)
// const currency = await bank_apiCall.getData('/symbols')

reload(wallet, wallets_place, Wallet)
function Select_Currency(item){
    const option = new Option(item.currency, item.id)

    return option
}
reload(wallet,history_currency,Select_Currency)
// for (const select of select_currency) {
//     select.innerHTML = ''

//     for (let key in currency.symbols) {
//         select.innerHTML += `
//             <option value="${key}">${key}: ${currency.symbols[key]}</option>
//         `;
//     }
// }

h1.innerHTML = `Dashboard: ${res["wallet-name"]}`
close.onclick = () => {
    location.assign('/')
}
const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });