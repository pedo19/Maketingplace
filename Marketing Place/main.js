let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}
function closeMenu(){
    ul.classList.remove('open');
}

const productAlert = document.getElementById("product-alert");
const closeAlertBtn = document.getElementById("close-btn");
const productText = document.getElementById("product-text");
const productImage = document.getElementById("product-image");
const names = ["Binaweb", "Pedro Jorge", "Gilson", "Francisco", "Belvania"];
const products = [
  {
    name: "faca a criacao do seu website com a binaweb",
    image: "imagens/binaweb.jpg",
  },
  {
    name: "Criacao de site gratis",
    image: "product-image-2.jpg",
  },
  {
    name: "Maketing Place",
    image: "product-image-3.jpg",
  },
  {
    name: "Visita a binaweb para mais informacoes",
    image: "product-image-4.jpg",
  },
  {
    name: "Black Apple Watch",
    image: "product-image-5.jpg",
  },
];

function getRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTime() {
  return Math.floor(Math.random() * 59) + 1;
}

const getRandomDisplayTime = () => Math.random() * (8 - 3) + 3;
const showAlert = () => {
  const randomName = getRandomItemFromArray(names);
  const randomProduct = getRandomItemFromArray(products);
  const { name, image } = randomProduct;
  productImage.src = image;
  productText.innerHTML = `<p class="message">${randomName} purchased ${name}</p> <p class="time">${getRandomTime()} mins ago</p>`;
  productAlert.style.display = "flex";
};

closeAlertBtn.addEventListener("click", () => {
  productAlert.style.display = "none";
  setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);
});

setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);
