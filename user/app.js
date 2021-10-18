function makeList(documentElement, elementData) {
  for (let i in elementData) {
    const liElement = document.createElement("li");
    liElement.textContent = elementData[i];
    documentElement.appendChild(liElement);
  }
}

const scotchWhiskyElement = document.querySelector("#scotch-whisky");

const scotchWhiskyData = [
  "Ballantine's 17y",
  "Royal Salute 21y",
  "Johnnie Walker Black",
  "J&B Reserve",
  "IMERIAL QUANTUM 19y",
  "The SMOOTH by IMPERIAL 17y",
];

makeList(scotchWhiskyElement, scotchWhiskyData);

const domesticWhiskyElement = document.querySelector("#domestic-whisky");

const domesticWhiskyData = ["Scotch Blue 17y", "Windsor 17y"];

makeList(domesticWhiskyElement, domesticWhiskyData);

const singleMaltWhiskyElement = document.querySelector("#single-malt-whisky");

const singleMaltWhiskyData = [
  "Macallan 12y",
  "Glenfiddich 18y",
  "Glenfiddich 15y",
  "Glenfiddich 12y",
  "Glenlivet 15y",
  "Balvenie 14y",
  "Balvenie 12y",
  "Macallan 12y",
];

makeList(singleMaltWhiskyElement, singleMaltWhiskyData);

const AmericanWhiskyElement = document.querySelector("#american-whisky");

const AmericanWhiskyData = ["Jack Daniel's"];

makeList(AmericanWhiskyElement, AmericanWhiskyData);

const cognacElement = document.querySelector("#cognac");

const cognacData = [
  "Jose Cuervo 1800",
  "Jose Cuervo Especial",
  "SILVER PATRON",
];

makeList(cognacElement, cognacData);

const wineElement = document.querySelector("#wine");

const wineData = ["문희주세용"];

makeList(wineElement, wineData);

const vodkaElement = document.querySelector("#vodka");

const vodkaData = ["ABSOLUT(plain)", "ABSOLUT(flavored)", "SMIRNOFF"];

makeList(vodkaElement, vodkaData);

const domesticBeerElement = document.querySelector("#domestic-beer");

const domesticBeerData = ["Cloud"];

makeList(domesticBeerElement, domesticBeerData);

const importedBeerElement = document.querySelector("#imported-beer");

const importedBeerData = [
  "Budweiser",
  "Heineken",
  "San Miguel",
  "TSINGTAO",
  "Corona",
  "GUINNESS",
  "BIG WAVE",
  "Hoegaarden",
];

makeList(importedBeerElement, importedBeerData);

const sidedishElement = document.querySelector("#side-dish");

const sidedishData = [
  "잔치국수",
  "비빔국수",
  "라면",
  "돈까스",
  "과일",
  "스페셜 치즈",
  "오징어",
  "한치",
  "베이컨 야채볶음",
  "소세지 야채볶음",
  "골뱅이소면",
  "마른안주",
  "Today's Special 안주",
];

makeList(sidedishElement, sidedishData);

const DrinkElement = document.querySelector("#drink");

const DrinkData = [
  "토닉워터",
  "진저엘",
  "콜라",
  "사이다",
  "페리에",
  "크렌베리 주스",
  "오렌지 주스",
  "우유",
  "아이스티",
  "원두커피",
];

makeList(DrinkElement, DrinkData);

function scrollToReservationInput() {
  document
    .getElementById("reservation-info")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleCallingButton() {
  var x = document.getElementById("calling-buton-wrapper");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
