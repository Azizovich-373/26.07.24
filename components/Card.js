export function Card(item) {
    const card = document.createElement('div')
    const name_card = document.createElement('p')
    const total = document.createElement('p')
    const currently = document.createElement('p')

    card.classList.add('card')
    name_card.classList.add('name_card')
    currently.classList.add('currently')
    total.classList.add('currently')

    
    name_card.innerHTML = item["wallet-name"]
    currently.innerHTML = item.currency
    total.innerHTML = item["wallet-balance"] + ' | ' + item.currency
    card.append(name_card,total,currently)

    return card
}