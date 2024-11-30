let cart = JSON.parse(localStorage.getItem('cart')) || [];
 
// Manejo de productos dinámico
const products = [
  { id: 1, name: "Laptop", price: 800, img: "laptop.jpg" },
  { id: 2, name: "Smartphone", price: 600, img: "smartphone.jpg" },
  { id: 3, name: "Sofá", price: 300, img: "sofa.jpg" },
  { id: 4, name: "Lámpara", price: 50, img: "lamp.jpg" },
  { id: 5, name: "Bicicleta", price: 150, img: "bike.jpg" },
  { id: 6, name: "Balón de fútbol", price: 30, img: "football.jpg" },
];
 
// Agregar producto al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productId = parseInt(button.dataset.id);
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} añadido al carrito.`);
  });
});