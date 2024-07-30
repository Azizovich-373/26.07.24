export function header(item) {
    const header = document.createElement('header')
    const header_box = document.createElement('div')
    const left = document.createElement('nav')
    const right = document.createElement('nav')
    const text_main = document.createElement('a')
    const text_card = document.createElement('a')
    const text_transaction = document.createElement('a')
    const text_mail = document.createElement('a')
    const header_img = document.createElement('a')
    const exit_img = document.createElement('img')


    header.classList.add('header')
    header_box.classList.add('header_box')
    left.classList.add('left')
    right.classList.add('right')
    text_main.classList.add('header_text')
    text_card.classList.add('header_text')
    text_transaction.classList.add('header_text')
    text_mail.classList.add('header_text')
    header_img.classList.add('header_img')
    exit_img.src = '/exit.svg'

    text_main.innerHTML = 'Главная'
    text_card.innerHTML = 'Мои кошельки'
    text_transaction.innerHTML = 'Мои транзакции'
    text_mail.innerHTML = 'alexadams@google.com'

    header.append(header_box)
    header_box.append(left,right)
    left.append(text_main,text_card,text_transaction)
    right.append(text_mail,header_img)
    header_img.append(exit_img)
    
    return header
}