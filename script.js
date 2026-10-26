if(document.getElementById('copy')){
document.getElementById('copy').addEventListener('click', function(){
  var b=this, t=document.getElementById('email').textContent;
  function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('email'));var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected';}
  try{navigator.clipboard.writeText(t).then(function(){b.textContent='Copied';},sel);}catch(e){sel();}
  setTimeout(function(){b.textContent='Copy email';},2000);
});

}
// Shoreline toggle
(function(){
  if(!document.getElementById('after'))return;
  var a=document.getElementById('after'), e=document.getElementById('erode'), bb=document.getElementById('btnBefore'), ba=document.getElementById('btnAfter');
  function set(after){a.style.opacity=after?1:0;e.style.opacity=after?.28:0;bb.setAttribute('aria-pressed',!after);ba.setAttribute('aria-pressed',after);}
  bb.addEventListener('click',function(){set(false)}); ba.addEventListener('click',function(){set(true)});
})();

// Flood year switcher
(function(){
  if(!document.getElementById('flimg'))return;
  var IM={F1974:'f1974.jpg',F1988:'f1988.jpg',F1998:'f1998.jpg',F2010:'f2010.jpg',F2017:'f2017.jpg'};
  var D={
    F1974:{y:'1974',tag:'one of the first great floods after independence',note:'About 10,360 sq km of the Mymensingh region alone was flooded.'},
    F1988:{y:'1988',tag:'a flood that reached the capital',note:'Around 82,000 sq km, roughly 60% of the country, went under water, and Dhaka was badly affected.'},
    F1998:{y:'1998',tag:'the most severe flood in the record',note:'More than two-thirds of the country went under water, and the flooding lasted over two months.'},
    F2010:{y:'2010',tag:'fast-rising rivers in the north',note:'Heavy rain and rapidly swelling rivers flooded the north, especially Lalmonirhat and Kurigram.'},
    F2017:{y:'2017',tag:'heavy rain and upstream runoff',note:'Flooding spread across the north, disrupting daily life in 31 districts.'}
  };
  var img=document.getElementById('flimg'), tabs=document.querySelectorAll('[data-y]');
  function show(k){
    var d=D[k]; img.src=IM[k]; img.alt='Map of areas flooded in Bangladesh in '+d.y;
    document.getElementById('flcap').textContent='Flood-affected areas, '+d.y+'. Blue shows flooded land.';
    document.getElementById('flyear').textContent=d.y; document.getElementById('fltag').textContent=d.tag; document.getElementById('flnote').textContent=d.note;
    tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.y===k)});
  }
  tabs.forEach(function(t){t.addEventListener('click',function(){show(t.dataset.y)})});
})();

// Dhaka year switcher
(function(){
  if(!document.getElementById('dkimg'))return;
  var IM={D2013:'d2013.jpg',D2018:'d2018.jpg',D2023:'d2023.jpg'};
  var D={
    D2013:{y:'2013',note:'Good livability was rare in every season, peaking at 2.95% in winter. In summer, 39.54% of the city rated very poor.'},
    D2018:{y:'2018',note:'Summer was the best season of the decade, with 6.94% of the city rated good. The monsoon was worse, with 46.78% poor and 32.24% very poor.'},
    D2023:{y:'2023',note:'Monsoon was the worst season: 52.03% of the city rated poor and 40.39% very poor.'}
  };
  var img=document.getElementById('dkimg'), tabs=document.querySelectorAll('[data-d][role=tab]'), bars=document.querySelectorAll('.dkbars li');
  function show(k){
    var d=D[k]; img.src=IM[k]; img.alt='Maps of ecological livability quality of Dhaka City in summer, monsoon and winter '+d.y;
    document.getElementById('dkcap').textContent='Ecological livability quality of Dhaka City by season, '+d.y+'.';
    document.getElementById('dknote').textContent=d.note;
    tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.d===k)});
    bars.forEach(function(b){b.classList.toggle('on',b.dataset.d===k)});
  }
  tabs.forEach(function(t){t.addEventListener('click',function(){show(t.dataset.d)})});
})();

// Gazipur map switcher
(function(){
  if(!document.getElementById('gzimg'))return;
  var IM={GRES:'gres.jpg',GROAD:'groad.jpg',GGRAPH:'ggraph.jpg',GACC:'gacc.jpg'};
  var D={
    GRES:{alt:'Map of tourist spots and resorts across the upazilas of Gazipur District',cap:'Tourist spots and resorts across the five upazilas.'},
    GROAD:{alt:'Map of the road network of Gazipur District with the N3 highway',cap:'Road network, with the N3 highway in red.'},
    GGRAPH:{alt:'Topological graph linking the main nodal points of the five upazilas',cap:'Topological graph of the main nodes, used for the shortest-path matrix.'},
    GACC:{alt:'Map of road network accessibility zones in Gazipur District',cap:'Accessibility zones from the Shimbel index. Darker red is more accessible.'}
  };
  var img=document.getElementById('gzimg'), tabs=document.querySelectorAll('[data-g][role=tab]');
  function show(k){
    img.src=IM[k]; img.alt=D[k].alt; document.getElementById('gzcap').textContent=D[k].cap;
    tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.g===k)});
  }
  tabs.forEach(function(t){t.addEventListener('click',function(){show(t.dataset.g)})});
})();

// Cyclone switcher
(function(){
  if(!document.getElementById('cyimg'))return;
  var IM={SITRANG:'sitrang.jpg',BULBUL:'bulbul.jpg',AMPHAN:'amphan.jpg',MOCHA:'mocha.jpg'};
  var D={
    SITRANG:{n:'Sitrang',e:'52.72%',note:'The weakest storm in the study had the smallest effect: erosion (52.72%) and accretion (47.28%) were almost balanced.'},
    BULBUL:{n:'Bulbul',e:'57.39%',note:'Erosion clearly outweighed accretion, which covered 42.57% of the shoreline.'},
    AMPHAN:{n:'Amphan',e:'77.67%',note:'The strongest storm in the study, with winds of about 150 mph, caused the most severe erosion.'},
    MOCHA:{n:'Mocha',e:'77.36%',note:'Erosion was almost as severe as after Amphan.'}
  };
  var img=document.getElementById('cyimg'), tabs=document.querySelectorAll('[data-k][role=tab]'), bars=document.querySelectorAll('.bars:not(.dkbars) li');
  function show(k){
    var d=D[k]; img.src=IM[k]; img.alt='Shoreline change map before and after Cyclone '+d.n;
    document.getElementById('cycap').textContent='Net shoreline movement (m), before and after Cyclone '+d.n+'.';
    document.getElementById('cystat').textContent=d.e; document.getElementById('cynote').textContent=d.note;
    tabs.forEach(function(t){t.setAttribute('aria-selected',t.dataset.k===k)});
    bars.forEach(function(b){b.classList.toggle('on',b.dataset.k===k)});
  }
  tabs.forEach(function(t){t.addEventListener('click',function(){show(t.dataset.k)})});
})();

// Contour field behind the header
(function(){
  if(!document.getElementById('contours'))return;
  var c=document.getElementById('contours'), ctx=c.getContext('2d');
  function noise(x,y){return Math.sin(x*1.3+Math.sin(y*0.7))*0.5+Math.sin(y*1.1-x*0.4+1.7)*0.35+Math.sin((x+y)*2.1)*0.15+Math.cos(x*0.5-y*1.6)*0.25;}
  function draw(){
    var w=c.clientWidth,h=c.clientHeight,d=window.devicePixelRatio||1;
    c.width=w*d;c.height=h*d;ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);
    var col=getComputedStyle(document.documentElement).getPropertyValue('--contour').trim();
    var step=8,cols=Math.ceil(w/step)+1,rows=Math.ceil(h/step)+1,f=[];
    for(var j=0;j<rows;j++)for(var i=0;i<cols;i++)f.push(noise(i*step/260+2,j*step/260)+(i*step/w)*0.6);
    ctx.strokeStyle=col;
    for(var k=-1.2;k<1.8;k+=0.12){
      ctx.globalAlpha=Math.abs((k*100|0)%60)<12?.5:.22; ctx.lineWidth=ctx.globalAlpha>.4?1.1:.7; ctx.beginPath();
      for(var j=0;j<rows-1;j++)for(var i=0;i<cols-1;i++){
        var a=f[j*cols+i],b=f[j*cols+i+1],cc=f[(j+1)*cols+i+1],dd=f[(j+1)*cols+i],x0=i*step,y0=j*step,p=[];
        function e(v1,v2,ax,ay,bx,by){if((v1<k)!==(v2<k)){var t=(k-v1)/(v2-v1);p.push([ax+(bx-ax)*t,ay+(by-ay)*t]);}}
        e(a,b,x0,y0,x0+step,y0);e(b,cc,x0+step,y0,x0+step,y0+step);e(dd,cc,x0,y0+step,x0+step,y0+step);e(a,dd,x0,y0,x0,y0+step);
        if(p.length>=2){ctx.moveTo(p[0][0],p[0][1]);ctx.lineTo(p[1][0],p[1][1]);}
        if(p.length===4){ctx.moveTo(p[2][0],p[2][1]);ctx.lineTo(p[3][0],p[3][1]);}
      }
      ctx.stroke();
    }
    ctx.globalAlpha=1;ctx.globalCompositeOperation='destination-out';
    var g=ctx.createLinearGradient(0,0,w,0);g.addColorStop(0,'rgba(0,0,0,.92)');g.addColorStop(.55,'rgba(0,0,0,.55)');g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);ctx.globalCompositeOperation='source-over';
  }
  draw();
  var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(draw,150);});
  if(window.matchMedia)matchMedia('(prefers-color-scheme: dark)').addEventListener('change',draw);
  new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
})();