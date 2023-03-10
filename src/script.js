async function data() {
  const response = await fetch("https://api.npoint.io/7c3c76337e088202d05b");
  const json = await response.json();

  console.log(json.length);

  for (let i = 0; i < json.length; i++) {
    let period = "weekly";

    trackingBlocks.innerHTML += `
        <div class="grid text-[#bdc1ff] mb-[-1rem]">
          <div class="grid translate-y-2 h-20 w-full bg-[var(--work)] rounded-2xl overflow-hidden z-0">
            <img class="place-self-end pr-4 translate-y-[-0.6875rem]" src="${json[i].image}" alt="">
          </div>
          <div class="grid gap-y-3 grid-cols-2 bg-[#1c1f4a] px-6 pt-[1.625rem] pb-9 z-10 rounded-2xl translate-y-[-2rem]">
            <span class="font-bold text-white tracking-tight">${json[i].title}</span>
            <img class="ellipsis" src="../images/icon-ellipsis.svg" alt="" aria-hidden="true">
            <span class="hours leading-6 text-white text-3xl font-light tracking-tight">${json[i].timeframes.weekly.current}hrs</span>
            <span class="place-self-end text-sm">Last Week - ${json[i].timeframes.weekly.previous}hrs </span>
          </div>
        </div>
      `;
  }
}

data();