(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;


  var hdr = document.getElementById('hdr');
  function s(){ hdr.classList.toggle('solid', scrollY > 40); }
  s(); addEventListener('scroll', s, {passive:true});

  var els = document.querySelectorAll('.rv');
  function showAll(){ for (var i=0;i<els.length;i++) els[i].classList.add('in'); }
  if (reduce || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function(en){
      en.forEach(function(x){ if (x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target); } });
    }, {threshold:0});
    for (var k=0;k<els.length;k++) io.observe(els[k]);
    /* failsafes: never leave content hidden if the observer cannot fire
       (e.g. the page is embedded in a frame that does not scroll itself) */
    setTimeout(showAll, 1600);
    addEventListener('scroll', showAll, {passive:true, once:true});
    addEventListener('pageshow', function(){ setTimeout(showAll, 1600); });
  }

  var vals = document.querySelectorAll('.ncell .v');
  function run(el){
    var to = +el.dataset.to;
    function paint(n){ el.innerHTML = n + '<span class="p">+</span>'; }
    if (reduce){ paint(to); return; }
    var t0 = performance.now(), dur = 2200;
    (function tick(t){
      var p = Math.min(1, (t - t0) / dur);
      paint(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  if ('IntersectionObserver' in window){
    var io2 = new IntersectionObserver(function(en){
      en.forEach(function(x){ if (x.isIntersecting){ run(x.target); io2.unobserve(x.target); } });
    }, {threshold:.45});
    vals.forEach(function(v){ io2.observe(v); });
  } else { vals.forEach(run); }
  /* contact form: opens the visitor's mail app with the message pre-filled
     (works on GitHub Pages without a backend; swap for Formspree etc. later) */
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function(e){
    e.preventDefault();
    if (!form.reportValidity()) return;
    var en = document.documentElement.lang === 'en';
    var n = form.elements.name.value.trim(), em = form.elements.email.value.trim(), m = form.elements.message.value.trim();
    var subject = (en ? 'Website enquiry — ' : 'استفسار من الموقع — ') + n;
    var body = m + '\n\n— ' + n + '\n' + em;
    location.href = 'mailto:' + form.getAttribute('data-to') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  /* company-profile request: the message body is pre-written, so the visitor
     only fills in their own contact details */
  var pform = document.getElementById('profile-form');
  if (pform) pform.addEventListener('submit', function(e){
    e.preventDefault();
    if (!pform.reportValidity()) return;
    var en = document.documentElement.lang === 'en';
    var n = pform.elements.name.value.trim(),
        em = pform.elements.email.value.trim(),
        ph = pform.elements.phone.value.trim();
    var subject = en ? 'Company profile request \u2014 ' + n : '\u0637\u0644\u0628 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a \u2014 ' + n;
    var msg = document.getElementById('profile-msg').textContent.trim();
    var body = msg + '\n\n' + (en ? 'Name: ' : '\u0627\u0644\u0627\u0633\u0645: ') + n
             + '\n' + (en ? 'Email: ' : '\u0627\u0644\u0628\u0631\u064a\u062f: ') + em
             + (ph ? '\n' + (en ? 'Mobile: ' : '\u0627\u0644\u062c\u0648\u0627\u0644: ') + ph : '');
    var note = document.getElementById('profile-note');
    if (note) note.hidden = false;
    location.href = 'mailto:' + pform.getAttribute('data-to') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
