import{S as d,a as f,i as a}from"./assets/vendor-BH9GyP-n.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const l=document.querySelector(".gallery"),m=new d(".gallery a");function p(t){const n=t.map(e=>`<li class ="gallery-item">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
          <div class="info">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",n),m.refresh()}function y(){l.innerHTML=""}function h(){const t=document.querySelector(".loader");t&&t.classList.remove("hidden")}function g(){const t=document.querySelector(".loader");t&&t.classList.add("hidden")}const L="49817544-43b774cd8787f655d5cc3b57b",b="https://pixabay.com/api/";async function v(t){const n={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(b,{params:n})).data}const u=document.querySelector(".form"),c=u.querySelector('input[name="search-text"]');u.addEventListener("submit",t=>{t.preventDefault();const n=c.value.trim();n&&(y(),h(),v(n).then(e=>new Promise(s=>{setTimeout(()=>s(e),1e3)})).then(e=>{if(e.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e.hits)}).catch(e=>{a.error({message:"Error"}),console.error(e)}).finally(()=>{g(),c.value=""}))});
//# sourceMappingURL=index.js.map
