const selectTime = document.querySelectorAll(".select_timeframe");
let selectedIndex = 1; //index used to determine which timeframe is selected

async function data() {
  const response = await fetch("https://api.npoint.io/7c3c76337e088202d05b"); //fecthing the json data
  const json = await response.json();

  const period = ["daily", "weekly", "monthly"];
  const time = ["Day", "Week", "Month"];

  trackingBlocks.innerHTML = ""; //cleaning the trackingBlocks div to avoid displaying more than 6 tracking blocks each time the page is loaded

  for (let i = 0; i < json.length; i++) {
    let colors = [
      "#ff8c66",
      "#56c2e6",
      "#ff5c7c",
      "#4acf81",
      "#7536d3",
      "#f1c65b",
    ];

    //creation of the time tracking divs dynamically

    trackingBlocks.innerHTML += `
        <div class="data_block text-[#bdc1ff]">
          <div class="block_header grid h-20 w-full translate-y-2 rounded-2xl overflow-hidden z-0 lg:translate-y-0">
            <img class="place-self-end pr-4 translate-y-[-0.6875rem]" src="${
              json[i].image
            }" alt="">
          </div>
          <div class="block_main grid gap-y-3 grid-cols-2 bg-[#1c1f4a] px-6 pt-[1.625rem] pb-9 z-10 rounded-2xl translate-y-[-2rem] lg:px-8 lg:grid-cols-[unset] lg:gap-y-10 lg:pb-5">
            <span class="tracking_title font-bold text-white tracking-tight">${
              json[i].title
            }</span>
            <img class="ellipsis" src="images/icon-ellipsis.svg" alt="" aria-hidden="true">
            <span class="hours leading-6 text-white text-3xl font-light tracking-wide font-sans lg:text-[3.375rem]">${
              json[i].timeframes[period[selectedIndex]]["current"]
            }hrs</span>
            <span class="previous_hours place-self-end text-sm tracking-tight lg:place-self-start lg:translate-y-[-0.5rem]">Last ${
              time[selectedIndex]
            } - ${
              json[i].timeframes[period[selectedIndex]]["previous"]
            }hrs </span>
          </div>
        </div>
      `;

    const blockHeaders = document.querySelectorAll(".block_header"); //adding the colors to the header of the tracking blocks
    blockHeaders.forEach((header, index) => {
      header.style.backgroundColor = colors[index];
    });

    const blockMains = document.querySelectorAll(".block_main"); //adding the hover events
    blockMains.forEach((main) => {
      main.classList.add("hover:cursor-pointer");
      main.classList.add("hover:bg-[#6f76c8]");
    });
  }
}

data();

selectTime.forEach((period, index) => { //after the json is loaded, adding a click event listener to display the selected timeframe in a different collor and calling the data() function again to correctly display the values corresponding to the correct time frame
  period.addEventListener("click", (event) => {
    period.classList.toggle("selected");
    selectedIndex = index;
    console.log(selectedIndex);
    for (let j = 0; j < selectTime.length; j++) {
      if (selectTime[j] !== event.target) {
        selectTime[j].classList.remove("selected");
      }
    }
    data();
  });
});
