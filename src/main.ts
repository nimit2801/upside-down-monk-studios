import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
// <a href="https://www.typescriptlang.org/" target="_blank">
//   <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
// </a>
// <p class="read-the-docs">
// Click on the Vite and TypeScript logos to learn more
// </p>
// <div class="card">
//   <button id="counter" type="button"></button>
// </div>
