
const form = document.forms.namedItem("sign");


form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        emial: formData.get("sign_email"),
        password: formData.get("sign_password"),
    };

    console.log(user);
};