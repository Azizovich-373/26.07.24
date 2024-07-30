export function transaction(item , array){
    const tr_body = document.createElement('tr')
    const id = document.createElement('td')
    const which_card = document.createElement('td')
    const cat = document.createElement('td')
    const total = document.createElement('td')
    const when = document.createElement('td')

    id.classList.add('td')
    which_card.classList.add('td')
    cat.classList.add('td')
    total.classList.add('td')
    when.classList.add('td')

    id.innerHTML = '121212'
    which_card.innerHTML = 'VISA'
    cat.innerHTML = 'Автомобиль'
    total.innerHTML = '414,000,000'
    when.innerHTML = '4 дня назад'


    tr_body.append(id,which_card,cat,total,when)


    return tr_body
}