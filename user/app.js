function makeList(documentElement, elementData) {
    for (let i in elementData) {
    const liElement = document.createElement("li")
    liElement.textContent = elementData[i]
    documentElement.appendChild(liElement)
  }
}

const sidedishElement = document.querySelector("#side-dish")

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
]

makeList(sidedishElement, sidedishData)

const DrinkElement = document.querySelector("#drink")

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
]

makeList(DrinkElement, DrinkData)
