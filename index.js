// Logic for Time Update Function
function updateTime() {
    let now = new Date();
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear().toString().slice(-2);
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let formattedTime = `${day}/${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = formattedTime;
}
setInterval(updateTime, 1000);
updateTime();

// Logic for FAQ Item Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.faq-item.expanded').forEach(expandedItem => {
        if (expandedItem !== this) {
          expandedItem.classList.remove('expanded');
        }
      });
      this.classList.toggle('expanded');
    });
  });

// Logic for Testimonial Carousel Navigation
let currentIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalCards = testimonialCards.length;

function showNext() {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 3;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 340; 
  document.querySelector('.testimonial-carousel').style.transform = `translateX(${offset}px)`;
}

document.getElementById('next').addEventListener('click', showNext);
document.getElementById('prev').addEventListener('click', showPrev);

updateCarousel();

// Footer Success Message Display
function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = "Successfully Subscribed!";
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
}

// Logic for Cart Count Update
let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartCount;
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;  
        updateCartCount();  
    });
});

updateCartCount();
