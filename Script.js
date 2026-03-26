let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart(){
  document.getElementById("cart-count").innerText = cart.length;
}

function addToCart(item){
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function removeFromCart(item){
  cart = cart.filter(i=>i!==item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function searchProduct(){
  let input=document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    let name=card.querySelector("h4").innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block":"none";
  });
}

updateCart();