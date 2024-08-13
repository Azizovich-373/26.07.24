import { reload } from "../../lib/utils"
import { ApiCall } from "../../lib/http.request"
import { Wallet } from "../../components/Info_card"
const apicall = new ApiCall(import.meta.env.VITE_BATH_URL)
const bank_apiCall = new ApiCall(import.meta.env.VITE_FIXER_URL, import.meta.env.VITE_API_KEY)

const h1 = document.querySelector('.user_card')
const close = document.querySelector('.close_info')
const name_card = document.querySelector('.name_card')
const total = document.querySelector('.total')
const currently = document.querySelector('.currently')
const wallets_place = document.querySelector('.wallets_place')
const conv_in = document.querySelector('#conv_in')
const conv_to = document.querySelector('#conv_to')
const much = document.querySelector('#much')
const convert = document.querySelector('.convert')
const total_conv = document.querySelector('#total')
const select_currency = document.querySelectorAll('.select_currency')
const history_currency = document.querySelector('.history_currency')
const id = location.search.split('=').at(-1)
const refId = JSON.parse(localStorage.getItem('user'))


apicall.getData('/wallets/' + id)
    .then(res => {
        name_card.innerHTML = res["wallet-name"]
        currently.innerHTML = res.currency
        total.innerHTML = Number(res.balance).toLocaleString('us') + ' | ' + res.currency
        h1.innerHTML = `Dashboard: ${res["wallet-name"]}`
    })

bank_apiCall.getData('/symbols')
    .then(currency => {
        for (const select of select_currency) {
            select.innerHTML = ''
        
            for (let key in currency.symbols) {
                select.innerHTML += `
                    <option value="${key}">${key}: ${currency.symbols[key]}</option>
                `;
            }
        }
    })


convert.onclick = async () => {
    const params = {
        from: conv_in.value,
        to: conv_to.value,
        amount: much.value
    }
    const convertation = await bank_apiCall.getData('/convert', params)
    total_conv.innerHTML = `TOTAL: ${convertation.result} ${conv_to.value}`
}

function Select_Currency(item){
    const option = new Option(item.currency, item.id)

    return option
}



close.onclick = () => {
    location.assign('/')
}

const elems = document.querySelectorAll('.wallet');
elems.forEach(item => {
    if(item.id === id){
        item.classList.add('active')
    }
})
apicall.getData('/wallets?userId=' + refId.id)
    .then(wallet => {
        reload(wallet, wallets_place, Wallet)
        reload(wallet,history_currency,Select_Currency)
    })
apicall.getData('/transactions?walletId=' + id)
    .then(transaction => {
        console.log(transaction);

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: transaction.map(item => item.createdAt),
                datasets: [{
                    label: 'My First Dataset',
                    data: transaction.map(item => item.total),
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
    })