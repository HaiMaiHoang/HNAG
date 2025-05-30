function togglePopup(){
  const popup   = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const isOpen  = popup.style.display === 'block';

  popup.style.display   = isOpen ? 'none' : 'block';
  overlay.style.display = isOpen ? 'none' : 'block';
}

document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();                   
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 200,                 
      behavior: 'smooth'
    });
  });
});

const sections   = document.querySelectorAll('.section');
const navLinks   = document.querySelectorAll('nav a');

window.addEventListener('scroll', ()=>{
  let pos = window.scrollY + 250;               
  sections.forEach(sec=>{
    if(pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight){
      navLinks.forEach(a=>a.classList.remove('active'));
      document.querySelector(`nav a[href="#${sec.id}"]`).classList.add('active');
    }
  });
});

document.querySelectorAll('.toggle-replies').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const review = btn.closest('.user-review');
    review.classList.toggle('show-replies');
  });
});

const cart = {};

const cartIcon = document.querySelector('.cart-icon');

// Tạo badge tổng số món trên icon giỏ hàng
const totalBadge = document.createElement('span');
totalBadge.classList.add('total-badge');
totalBadge.textContent = '0';
cartIcon.appendChild(totalBadge);

function updateCartCount() {
  const totalCount = Object.values(cart).reduce((a,b) => a + b, 0);
  totalBadge.textContent = totalCount;
  totalBadge.style.display = totalCount > 0 ? 'block' : 'none';
}

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const id = card.dataset.id || card.querySelector('h3').textContent; // lấy id đơn giản (bạn có thể đổi)
    if (!cart[id]) cart[id] = 0;
    cart[id]++;
    updateCartCount();
  });
});



