# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

#### Desktop version:
![Desktop version](./design/screenshot-desktop.png)

#### Mobile version:
![Mobile version](./design/screenshot-mobile.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/form-made-with-sass-grid-flex-and-javascript-kRkZM0db6)
- Live Site URL: [Live site](https://marcoperetto-intro-component-with-signup-form-challenge.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Form validation input with javascript
```js
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
```


### Useful resources

- [CSS Flex Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Author

- Frontend Mentor - [@mperetto](https://www.frontendmentor.io/profile/mperetto)
- Linkedin - [Marco Peretto](https://www.linkedin.com/in/marco-peretto/)
