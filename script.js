let time = document.getElementById("time").innerHTML = new Date().toLocaleTimeString([],
  {hour : '2-digit', minute : '2-digit', hour12 : true});


document.querySelector('.remove-icon').addEventListener('click', function(){
  this.parentElement.style.display = 'none';
});
