const tabs=[...document.querySelectorAll('.tabbar a')];
const targets=['top','services','works','contact'].map(id=>document.getElementById(id));
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){
    const i=targets.indexOf(e.target);
    tabs.forEach((t,k)=>t.classList.toggle('on',k===i));
  }});
},{rootMargin:'-40% 0px -50% 0px'});
targets.forEach(t=>t&&io.observe(t));
