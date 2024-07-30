import { header } from "./components/Header";
import { reload } from "./lib/utils";
import { transaction } from "./components/Tranjactions";
import { card } from "./components/Cards";
const data = [
    {
        id: 1,
    },
];
const body = document.body
const tbody = document.querySelector('.place')
const card_place = document.querySelector('.my_cards')

reload(data,body, header)
reload(data,tbody, transaction)
reload(data,card_place, card)