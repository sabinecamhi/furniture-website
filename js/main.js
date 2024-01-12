new Glide('.glide').mount();

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Glide
    var glide = new Glide('.my-glide', {
      // your existing Glide configuration options
    });
  
    // Set the interval for automatic slide change (4000 milliseconds = 4 seconds)
    setInterval(function () {
      glide.go('>');
    }, 2500);
  
    // ... your existing Glide initialization code
    glide.mount();
  });
