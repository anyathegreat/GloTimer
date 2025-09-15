function validateText(input) {
    const regex = /^[А-Яа-яЁё\s-]+$/;
    return regex.test(input);
}

function validateEmail(input) {
    const regex = /^[a-zA-Z0-9._!~*'@-]+$/;
    return regex.test(input);
}

function validateTel(input) {
    const regex = /^[0-9()\-\s]+$/;
    return regex.test(input);
}

const validator = () => {
    const textInput = document.querySelectorAll('input[type="text"]');
    const emailInput = document.querySelectorAll('input[type="email"]');
    const telInput = document.querySelectorAll('input[type="tel"]');

    textInput.forEach((item)=>{
        item.addEventListener("input",(e)=>{
            const isValid = validateText(e.target.value);

            if(!isValid){
                e.target.value = e.target.value.slice(0, -1);
            }
        });
    })

    emailInput.forEach((item)=>{
        item.addEventListener("input",(e)=>{
            const isValid = validateEmail(e.target.value);

            if(!isValid){
                e.target.value = e.target.value.slice(0, -1);
            }
        });
    })

    telInput.forEach((item)=>{
        item.addEventListener("input",(e)=>{
            const isValid = validateTel(e.target.value);

            if(!isValid){
                e.target.value = e.target.value.slice(0, -1);
            }
        });
    })
}

export default validator;