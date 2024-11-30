let cart = JSON.parse(localStorage.getItem('cart')) || [];
 
// Manejo de productos dinámico
const products = [
  { id: 1, name: "Laptop", price: 500, img: "laptop.jpg" },
  { id: 2, name: "celular", price: 1500, img: "smartphone.jpg" },
  { id: 3, name: "audifonos", price: 3000, img: "sofa.jpg" },
  { id: 4, name: "mesa de noche", price:300, img: "lamp.jpg" },
  { id: 5, name: "lampara", price: 800, img: "bike.jpg" },
  { id: 6, name: "tabla para picar", price: 250, img: "football.jpg" },
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