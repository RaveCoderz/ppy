(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&d(e)}).observe(document,{childList:!0,subtree:!0});function g(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(i){if(i.ep)return;i.ep=!0;const s=g(i);fetch(i.href,s)}})();new WOW().init();const u=[document.getElementById("ppy-1"),document.getElementById("ppy-2"),document.getElementById("ppy-3"),document.getElementById("ppy-4"),document.getElementById("ppy-5")],_={"ppy-1":!1,"ppy-2":!1,"ppy-3":!1,"ppy-4":!1,"ppy-5":!1};u.forEach(r=>{r.addEventListener("click",c=>{if(_[c.target.id]=!0,Object.values(_).filter(s=>s===!1).length===0){let m=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},p=function(t,n){return(Math.random()*(n-t)+t).toFixed(1)};var d=m,i=p;const s=document.createElement("div");s.innerHTML=`
      <h1>Congratulations!</h1>
      <img class="osu" id="osu" src="./img/icons/osu.svg">
      <h2>You are great shit eater!</h2>`,s.classList.add("splash"),document.body.append(s),document.body.innerHTML+=`
      <button class="donate" id="donate">Donate</button>
      <div class="shit" id="shit">
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
      <img class="shit__item" src="./img/icons/food.png" />
      <img class="shit__item shit__item--drop" src="./img/icons/drop.png" />
    </div>`;const e=document.getElementById("donate");e.addEventListener("click",()=>{console.log("click"),e.disabled=!0,e.innerText="Thank you!",document.querySelectorAll(".shit__item--drop").forEach(n=>{n.classList.add("visible")}),setTimeout(()=>{e.remove()},5e3)});const a=document.querySelectorAll(".shit__item");a.forEach(t=>{t.style.fontSize=p(.7,1.5)+"em",t.style.animationDuration=m(10,15)+"s",t.style.animationDelay=m(-1,a.length/2)+"s"});const l=new Audio("./audio/circles.mp3");l.play(),l.loop=!0}})});const o=document.getElementById("ppy-4"),y=document.getElementById("day"),h=new Date;y.innerText=h.getDate();switch(h.getDay()){case 0:o.src="./img/days/Sunday.png";break;case 1:o.src="./img/days/Monday.png";break;case 2:o.src="./img/days/Tuesday.png";break;case 3:o.src="./img/days/Wednesday.jpg";break;case 4:o.src="./img/days/Thursday.png";break;case 5:o.src="./img/days/Friday.jpg";break;case 6:o.src="./img/days/Saturday.png";break}
