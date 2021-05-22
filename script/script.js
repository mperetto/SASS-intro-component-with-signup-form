const submit = document.querySelector('button[type="submit"]');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('div.name');
    const surname = document.querySelector('div.surname');
    const email = document.querySelector('div.email');
    const password = document.querySelector('div.password');
    let correct = true;
    let fields = [name, surname, email, password];

    fields.forEach((el, index) => {
        const input = el.querySelector(':scope input');
        const msg = el.querySelector(':scope .message');
        const img = el;

        const setVisible = (input, msg, img) => {
            input.classList.add('error');
            msg.classList.add('visible');
            img.classList.add('error');
        }

        if(input.value == '') {
            setVisible(input, msg, img);
            
            correct = false;
        }
        else if(index == 2) {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            
            if(!re.test(input.value)) {
                setVisible(input, msg, img);

                correct = false;
            }
        }
    }, correct)
    
    if(correct) {
        const form = document.querySelector('#sign-in-form');
        form.submit();
    }
})