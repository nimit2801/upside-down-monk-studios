(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
  <div>
    <a href="" target="_blank">
      <img src="./assets/UpsideDownMonk_Logo_Final.webp" class="logo rotate linear infinite" alt="upside down monk studios logo" />
    </a>
    <h3>Upside Down Monk Studios</h3>
    <div class="row">
    <div class="column small-logos"><a href="https://www.instagram.com/udmstudios/" target="_blank"><img style="max-width:50%" src="./assets/Intsa_Logo.png"></img></a><h5>@udmstudios<h5></div>
    <div class="column small-logos"><a href="mailto:monkupsidedown@gmail.com" target="_blank"><img style="max-width:50%" src="./assets/Email_Logo.png"></img></a><h5>monkupsidedown@gmail.com<h5></div>
    <div class="column small-logos"><a href="https://wa.me/+917569647009" target="_blank"><img style="max-width:50%" src="./assets/Whatsapp_Logo.png"></img></a><h5>75699647009<h5></div>
  </div>
    </div>
    `;
