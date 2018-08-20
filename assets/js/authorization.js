const token = localStorage.getItem('token')

if (!token) {
  window.location = 'http://ecommerce.arisupriatna.com/signin.html'
}