const btn = document.querySelector('.menu__btn');
const navLinks = document.querySelector('.nav__links');

btn.addEventListener('click', () => {
   btn.classList.toggle('menu__btn-active');
   navLinks.classList.toggle('nav__links-active');
   document.body.classList.toggle('lock');
});

const keysList = document.querySelector('.keys__list');
const keysShowMore = document.querySelector('.keys__show-more');
const keysShowMoreText = keysShowMore.querySelector('.keys__show-more-text');

keysShowMore.addEventListener('click', () => {
   keysList.classList.toggle('keys__list-active');
   if (document.querySelector('.keys__list-active')) {
      keysShowMoreText.innerHTML = 'Скрыть'
   } else {
      keysShowMoreText.innerHTML = 'Показать ещё';
   }
});

const keysItems = document.querySelectorAll('.keys__item');
const keysPopUp = document.querySelector('.keys-popup');
const keysPopUpItems = document.querySelector('.keys-popup__items');
const keysPopUpBack = document.querySelector('.keys-popup__back');
const keysListClone = keysList.cloneNode(true);

keysItems.forEach((el) => {
   el.addEventListener('click', () => {
      keysPopUp.classList.remove('keys-popup-active');
      document.body.classList.add('lock');
      keysPopUp.classList.add('keys-popup-active');
      keysPopUpItems.append(keysListClone);
   })
});

keysPopUpBack.addEventListener('click', () => {
   document.body.classList.remove('lock');
   keysPopUp.classList.remove('keys-popup-active');
   keysListClone.remove();
});


// inputMask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
   .addField('.input-name', [
      {
         rule: 'minLength',
         value: 3,
      },
      {
         rule: 'maxLength',
         value: 30,
      },
      {
         rule: 'required',
         value: true,
         errorMessage: 'Введите имя!'
      }
   ])
   .addField('.input-mail', [
      {
         rule: 'required',
         value: true,
         errorMessage: 'Email обязателен!',
      },
      {
         rule: 'email',
         value: true,
         errorMessage: 'Введите корректный Email!',
      },
   ])
   .addField('.input-tel', [
      {
         rule: 'required',
         value: true,
         errorMessage: 'Телефон обязателен!',
      },
      {
         rule: 'function',
         validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
         },
         errorMessage: 'Введите корректный телефон',
      },
   ])
   .onSuccess((event) => {
      const formBtn = document.querySelector('.form__btn');
      formBtn.classList.remove('form__btn-checked');
      formBtn.classList.add('form__btn-checked');
   });


