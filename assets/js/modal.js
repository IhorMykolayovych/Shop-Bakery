const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

// document.addEventListener('DOMContentLoaded', function () {
//   // Отримуємо всі кнопки "Замовити дзвінок"
//   const modalBtns = document.querySelectorAll('.modal-btn-open');

//   // Додаємо обробник подій на кожну кнопку
//   modalBtns.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//       // Знаходимо модальне вікно за класом backdrop та змінюємо його стиль, щоб воно стало видимим
//       const modal = document.querySelector('.backdrop');
//       modal.classList.remove('is-hidden');
//     });
//   });

//   // Додаємо обробник подій на кнопку закриття модального вікна
//   const modalCloseBtns = document.querySelectorAll('.modal-btn-close');
//   modalCloseBtns.forEach(function (closeBtn) {
//     closeBtn.addEventListener('click', function () {
//       // Закриваємо модальне вікно, змінюючи стиль
//       const modal = document.querySelector('.backdrop');
//       modal.classList.add('is-hidden');
//     });
//   });
// });
