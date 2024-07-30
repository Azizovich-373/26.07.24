export function card(item) {
    const card = document.createElement('div')
    const name_card = document.createElement('p')
    const currently = document.createElement('p')

    card.classList.add('card')
    name_card.classList.add('name_card')
    currently.classList.add('currently')

    
    name_card.innerHTML = 'VISA'
    currently.innerHTML = 'rub'
    
    card.append(name_card,currently)

    return card
}