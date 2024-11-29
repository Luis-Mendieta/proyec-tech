// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
 
  // Add animation to circles on scroll
  const circles = document.querySelectorAll('.circle');
  window.addEventListener('scroll', () => {
    circles.forEach(circle => {
      const rect = circle.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        circle.style.backgroundColor = '#ff5722';
      } else {
        circle.style.backgroundColor = '#ccc';
      }
    });
  });