
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const t=document.querySelector(this.getAttribute('href'));
      if(t){ t.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your request has been received. We will contact you soon.');
      form.reset();
    });
  }
});
