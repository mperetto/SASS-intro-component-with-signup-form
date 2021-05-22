const submit = document.querySelector('button[type="submit"]');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('label[for="name"]');
    const surname = document.querySelector('label[for="surname"]');
    const email = document.querySelector('label[for="email"]');
    const password = document.querySelector('label[for="password"]');
    let correct = true;
    let fields = [name, surname, email, password];

    fields.forEach((el, index) => {
        const input = el.querySelector(':scope input');
        const msg = el.querySelector(':scope .message');
        const img = el.querySelector(':scope img');

        const setVisible = (input, msg, img) => {
            input.classList.add('error');
            msg.classList.add('visible');
            img.classList.add('visible');
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