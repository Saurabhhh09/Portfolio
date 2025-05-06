function makeActive(element) {
  // Remove "active" class from all links
  var navlinks = document.querySelectorAll('.nav-item .nav-link');
  navlinks.forEach(function (link) {
    link.classList.remove('active');
  });

  // Add "active" class to the clicked link
  element.classList.add('active');
}

function makeActive2(element) {
  // Remove "active" class from all links
  var navlinks = document.querySelectorAll('.info');
  navlinks.forEach(function (link) {
    link.classList.remove('active');
  });
  var tabcontents = document.querySelectorAll('.info-contents');
  tabcontents.forEach(content => {
    content.classList.remove('active-tab')
  });
  document.getElementById(element).classList.add('active-tab');

  // Add "active" class to the clicked link
  event.currentTarget.classList.add('active');
}



// contact form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzypTmCxzdUgCWxQG3ve7jN_NO_XBgHuRs_L9gQ5CLfKo_MBRw70Wa328f2v8WwNq6W8w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('successMsg');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully !!";
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
