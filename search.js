

const searchInput = document.getElementById('input');
const categoryItems = document.querySelectorAll('.category-Item');

searchInput.addEventListener('keyup', function () {
    const filter = searchInput.value.toLowerCase();

    categoryItems.forEach(item => {
        const text = item.querySelector('p').textContent.toLowerCase();
        if (text.includes(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

//const searchInput = document.getElementById('input');
const cards = document.querySelectorAll('.Rows');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const productName = card.querySelector('.dis').textContent.toLowerCase();
        const pirce = card.querySelector('.price').textContent.toLowerCase();

        if (productName.includes(filter) || pirce.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});

const btn = document.querySelector("#num");
const Xclr = document.querySelector("#X");


  const clearbtns = document.querySelector('#cllr');
  clearbtns.addEventListener('click' ,() => {
    cartItemsElement.innerHTML = "";
    cartTotalElement.innerHTML = "0 Rs.";
    
    btn.innerHTML = "";
    li.innerHTML = "";
  })
  

  const cart = [];
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  function updateCart() {
    // Clear existing items
    cartItemsElement.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
      console.log(cart);
      
      const li = document.createElement('li');
      li.innerHTML = `

      <div class="card2">
      <div class="cards">
        <div class="imgs">
          <img src='${item.src}' alt="${item.name}"/>
        </div>
        <div>
          <div class="min">15 mins</div>
          <div class="dis">${item.name}</div>
          <div class="Quntity">${item.quantity} </div>
          <div class="fl">
            <div class="price">${item.price} Rs. </div>
            <button id="X" style="height: 20px; width: 40px;">X</button>
          </div>
        </div>
      </div>
    </div>

      ${item.name} - ${item.quantity} x ${item.price} Rs. = ${item.quantity * item.price} Rs.`;
      cartItemsElement.appendChild(li);
      total += item.quantity * item.price;
    });

    cartTotalElement.textContent = total;
  }

  function addToCart(name, price,src) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price: parseInt(price), quantity: 1 , src});
    }
    updateCart();
  }

  // Attach event listeners to all buttons
  const addButtons = document.querySelectorAll('.add button');
  let num = 0;
  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      
      if (e.target = addButtons) {
        
        num+=1;
        
       
      }else if(e.target = clearbtns){
        num= 0;
      }
      btn.innerHTML = num;
      const name = button.getAttribute('data-name');
      const price = button.getAttribute('data-price');
      const src = button.getAttribute('data-src');
      addToCart(name, price,src);
    });
  });