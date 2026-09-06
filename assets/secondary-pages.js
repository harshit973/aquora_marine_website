(function(){
  const year=document.getElementById('year');
  if(year)year.textContent=new Date().getFullYear();

  const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      document.body.classList.toggle('menu-open',open);
      menu.setAttribute('aria-expanded',open?'true':'false');
    });
    nav.addEventListener('click',event=>{
      if(event.target.tagName==='A'){
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
        menu.setAttribute('aria-expanded','false');
      }
    });
  }

  const form=document.getElementById('enquiry');
  if(form){
    const message=form.querySelector('.form-msg');
    form.addEventListener('submit',event=>{
      event.preventDefault();
      if(!form.reportValidity())return;
      const data=new FormData(form);
      const subject=`Aquora enquiry — ${data.get('requirement')}`;
      const body=[
        `Name: ${data.get('name')}`,
        `Work email: ${data.get('email')}`,
        `Company: ${data.get('company')||'Not provided'}`,
        `Requirement: ${data.get('requirement')}`,
        '',
        data.get('message')||'No additional information provided.'
      ].join('\n');
      message.textContent='Your email application should open with the enquiry prepared. Please send the message to complete your enquiry.';
      window.location.href=`mailto:hello@aquora-marine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
