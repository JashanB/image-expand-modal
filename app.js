const express = require('express');
const app = express();
app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})

app.get('/', function(req, res) {
  res.render('index.html');
});


// const modal = document.querySelector('.modal');
// const previews = document.querySelectorAll(".gallery img");
// const original = document.querySelector('.full-img');
// const imgText = document.querySelector('.caption');

// previews.forEach(preview => {
//   preview.addEventListener('click', () => {
//     modal.classList.add("open");
    
//   })
// })