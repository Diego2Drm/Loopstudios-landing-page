# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./src/assets/loopstudios.jpg)

### Links

- Solution URL: [Github](https://github.com/Diego2Drm/Loopstudios-landing-page)
- Live Site URL: [loopstudios-landing-page](https://loopstudios-landing-page-diego-2d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS Sass preprocessor 


### What I learned

I learned use CSS Sass preprocessor 

Nesting Selectors in Sass: 

```css
 a {
        @include mixins.flexCenter(center,center);
        font-size: 1.6rem;
        color: variables.$Very-Dark-Gray;
        font-weight: bold;
        font-family: variables.$Alata;
        text-transform: uppercase;
        border: .2rem solid variables.$Very-Dark-Gray;
        padding: 1rem;
        width: 20rem;
        letter-spacing: .5rem;
        transition: .5s ease-in-out;

        &:hover {
          background: variables.$Black;
          color: variables.$White;
        }
      }
```

### Continued development
- CSS Sass preprocessor 
- React js

## Author

- Frontend Mentor - [@Diego2Drm](https://www.frontendmentor.io/profile/Diego2Drm)
