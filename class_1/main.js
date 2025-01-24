const fisrtBasket = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const totalApple = 10;
let seconBasketAppleCount = 0;
let firstBasketAppleCount = totalApple - seconBasketAppleCount;
fisrtBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = seconBasketAppleCount;

rightArrow.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    fisrtBasket.innerText = firstBasketAppleCount;
    seconBasketAppleCount++;
    secondBasket.innerText = seconBasketAppleCount;
  }
});
leftArrow.addEventListener("click", () => {
  if (seconBasketAppleCount > 0) {
    firstBasketAppleCount++;
    fisrtBasket.innerText = firstBasketAppleCount;
    seconBasketAppleCount--;
    secondBasket.innerText = seconBasketAppleCount;
  }
});
