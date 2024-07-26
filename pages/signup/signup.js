import { postData } from "../../reguest";
const form = document.forms.namedItem("registration");
export const locale = JSON.parse(localStorage.getItem('user'))

form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        email: formData.get("registration_email"),
        name: formData.get("registration_name"),
        surname: formData.get("registration_surname"),
        password: formData.get("registration_password"),
    };

    await postData('/users', user);

    localStorage.setItem(`user${crypto.randomUUID()}`, JSON.stringify(user));

};