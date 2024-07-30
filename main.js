import { Header } from "./components/Header";
import { reload } from "./lib/utils";
import { Transaction } from "./components/Tranjaction";
import { Card } from "./components/Card";
const data = [
    {
        id: 1,
    },
];
const body = document.body
const tbody = document.querySelector('.place')
const card_place = document.querySelector('.my_cards')

reload(data,body, Header)
reload(data,tbody, Transaction)
reload(data,card_place, Card)