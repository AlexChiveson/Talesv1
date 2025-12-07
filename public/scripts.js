const dictionary = {
  en: {
    hero_eyebrow: 'Magical stories for curious minds',
    hero_title: 'Mint & lavender online bookshop for bedtime tales',
    hero_subtitle: 'Hand-picked fairy tales to lull little dreamers. Choose calming or adventurous moods and build your bedtime ritual.',
    btn_shop: 'Shop now',
    btn_review: 'Leave a review',
    featured_eyebrow: 'Featured Fairy Tales',
    featured_title: 'Swipe through our growing collection — add to cart with one tap.',
    review_cta_title: 'Enjoyed the stories? Leave a review on Amazon and get one fairy tale for free!',
    cart_title: 'Your cart',
    cart_total: 'Total',
    btn_continue: 'Continue browsing',
    btn_checkout: 'Checkout',
    checkout_title: 'Checkout',
    field_first: 'First name',
    field_last: 'Last name',
    field_address: 'Shipping address',
    field_comment: 'Comment',
    field_subscription: 'Choose your subscription',
    sub_6m: '6 months — $25',
    sub_12m: '12 months — $45',
    btn_place_order: 'Place order',
    review_title: 'Leave a review',
    field_name: 'Name',
    field_link: 'Link to Amazon review',
    btn_cancel: 'Cancel',
    btn_submit_review: 'Submit review',
  },
  it: {
    hero_eyebrow: 'Storie magiche per menti curiose',
    hero_title: 'Libreria online menta & lavanda per fiabe della buonanotte',
    hero_subtitle: 'Favole selezionate per accompagnare i piccoli sognatori. Scegli umori calmanti o avventurosi.',
    btn_shop: 'Vai al catalogo',
    btn_review: 'Lascia una recensione',
    featured_eyebrow: 'Fiabe in evidenza',
    featured_title: 'Scorri la nostra collezione crescente — aggiungi al carrello con un tap.',
    review_cta_title: 'Ti sono piaciute le storie? Lascia una recensione su Amazon e ricevi una fiaba in regalo!',
    cart_title: 'Il tuo carrello',
    cart_total: 'Totale',
    btn_continue: 'Continua a esplorare',
    btn_checkout: 'Checkout',
    checkout_title: 'Checkout',
    field_first: 'Nome',
    field_last: 'Cognome',
    field_address: 'Indirizzo di spedizione',
    field_comment: 'Commento',
    field_subscription: 'Scegli l\'abbonamento',
    sub_6m: '6 mesi — $25',
    sub_12m: '12 mesi — $45',
    btn_place_order: 'Invia ordine',
    review_title: 'Lascia una recensione',
    field_name: 'Nome',
    field_link: 'Link alla recensione Amazon',
    btn_cancel: 'Annulla',
    btn_submit_review: 'Invia recensione',
  },
  ru: {
    hero_eyebrow: 'Сказки для любопытных детей',
    hero_title: 'Мятно-лавандовый магазин сказок для сладкого сна',
    hero_subtitle: 'Отобранные истории, чтобы убаюкать маленьких мечтателей. Выбирайте спокойные или приключенческие настроения.',
    btn_shop: 'Перейти в каталог',
    btn_review: 'Оставить отзыв',
    featured_eyebrow: 'Подборка сказок',
    featured_title: 'Листайте коллекцию и добавляйте в корзину в один клик.',
    review_cta_title: 'Понравились истории? Оставьте отзыв на Amazon и получите одну сказку бесплатно!',
    cart_title: 'Ваша корзина',
    cart_total: 'Итого',
    btn_continue: 'Продолжить выбор',
    btn_checkout: 'Оформить',
    checkout_title: 'Оформление заказа',
    field_first: 'Имя',
    field_last: 'Фамилия',
    field_address: 'Адрес доставки',
    field_comment: 'Комментарий',
    field_subscription: 'Выберите подписку',
    sub_6m: '6 месяцев — $25',
    sub_12m: '12 месяцев — $45',
    btn_place_order: 'Отправить заказ',
    review_title: 'Оставить отзыв',
    field_name: 'Имя',
    field_link: 'Ссылка на отзыв Amazon',
    btn_cancel: 'Отмена',
    btn_submit_review: 'Отправить отзыв',
  },
};

const books = [
  {
    id: 'calm-moon',
    title: 'Moonlit Whispers',
    label: 'CALMING',
    description: 'Gentle lullaby of the forest sprites guiding little ones to sleep.',
    price: 9.5,
    image: 'images/book-1.jpg',
  },
  {
    id: 'mint-river',
    title: 'River of Mint Dreams',
    label: 'SOOTHING',
    description: 'Follow the mint river through lavender hills to meet friendly otters.',
    price: 11.0,
    image: 'images/book-2.jpg',
  },
  {
    id: 'lavender-quest',
    title: 'Lavender Quest',
    label: 'ADVENTURE',
    description: 'A brave firefly explores secret gardens under northern lights.',
    price: 10.0,
    image: 'images/book-3.jpg',
  },
  {
    id: 'starlit-letter',
    title: 'Starlit Letters',
    label: 'HEARTWARMING',
    description: 'Pen pals between a mountain fox and a seaside girl share cozy nights.',
    price: 12.0,
    image: 'images/book-4.jpg',
  },
  {
    id: 'pillow-island',
    title: 'Pillow Island',
    label: 'DREAMY',
    description: 'Cloud makers invite kids to stitch their own pillow island maps.',
    price: 8.5,
    image: 'images/book-5.jpg',
  },
];

let currentLang = 'en';
let cart = [];

const carouselTrack = document.getElementById('carouselTrack');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const reviewModal = document.getElementById('reviewModal');

function renderBooks() {
  carouselTrack.innerHTML = '';
  books.forEach((book) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <span class="badge">${book.label}</span>
      <h3>${book.title}</h3>
      <p>${book.description}</p>
      <div class="card__footer">
        <span class="price">$${book.price.toFixed(2)}</span>
        <button class="btn ghost" data-book-id="${book.id}">${dictionary[currentLang].btn_shop}</button>
      </div>
    `;
    card.querySelector('button').addEventListener('click', () => addToCart(book.id));
    carouselTrack.appendChild(card);
  });
}

function addToCart(bookId) {
  const found = cart.find((item) => item.id === bookId);
  if (found) {
    found.qty += 1;
  } else {
    const book = books.find((b) => b.id === bookId);
    cart.push({ ...book, qty: 1 });
  }
  updateCartBadge();
  renderCart();
  openModal(cartModal);
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelector('.cart-count').textContent = count;
}

function renderCart() {
  const container = document.getElementById('cartItems');
  container.innerHTML = '';
  if (!cart.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Cart is empty';
    container.appendChild(empty);
  }
  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <span>${item.title} × ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    container.appendChild(row);
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function openModal(modal) {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModals() {
  [cartModal, checkoutModal, reviewModal].forEach((modal) => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  });
}

function bindLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      setLanguage(btn.dataset.lang);
    });
  });
  document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
}

function setLanguage(lang) {
  currentLang = lang;
  const map = dictionary[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (map[key]) {
      el.textContent = map[key];
    }
  });
  renderBooks();
}

function setupCarousel() {
  const prev = document.querySelector('.carousel__nav.prev');
  const next = document.querySelector('.carousel__nav.next');
  let offset = 0;
  const cardWidth = 276; // approximate including gap

  prev.addEventListener('click', () => {
    offset = Math.max(offset - cardWidth, 0);
    carouselTrack.scrollTo({ left: offset, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    offset = offset + cardWidth;
    carouselTrack.scrollTo({ left: offset, behavior: 'smooth' });
  });
}

function handleCartTrigger() {
  document.querySelector('.cart-trigger').addEventListener('click', () => {
    renderCart();
    openModal(cartModal);
  });
}

function handleCheckout() {
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    closeModals();
    openModal(checkoutModal);
  });
}

function handleModalClose() {
  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModals);
  });
}

function handleCheckoutSubmit() {
  const form = document.getElementById('checkoutForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.cart = cart;
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    console.log('Order response', await res.json());
    form.reset();
    cart = [];
    updateCartBadge();
    renderCart();
    closeModals();
    alert('Order sent to backend placeholder!');
  });
}

function handleReviewSubmit() {
  const form = document.getElementById('reviewForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(form).entries());
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    console.log('Review response', await res.json());
    form.reset();
    closeModals();
    alert('Thank you for your review!');
  });
}

function handleReviewOpeners() {
  document.querySelectorAll('[data-open-review]').forEach((btn) => {
    btn.addEventListener('click', () => openModal(reviewModal));
  });
}

function bindModalsOutsideClick() {
  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModals();
      }
    });
  });
}

function init() {
  bindLanguageSwitcher();
  renderBooks();
  setupCarousel();
  handleCartTrigger();
  handleCheckout();
  handleModalClose();
  handleCheckoutSubmit();
  handleReviewSubmit();
  handleReviewOpeners();
  bindModalsOutsideClick();
}

document.addEventListener('DOMContentLoaded', init);
