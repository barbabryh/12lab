const username = document.querySelector("#username");
const nameInput = document.querySelector("#nameInput");

const bio = document.querySelector("#bio");
const toggleBioBtn = document.querySelector("#toggleBioBtn");

const hobbies = document.querySelector("#hobbies");
const toggleHobbiesBtn = document.querySelector("#toggleHobbiesBtn");

const likeBtn = document.querySelector("#likeBtn");
const likesSpan = document.querySelector("#likes");

const themeBtn = document.querySelector("#themeBtn");

const resetBtn = document.querySelector("#resetBtn");
const changePhotoBtn = document.querySelector("#changePhotoBtn");
const avatar = document.querySelector("#avatar");

let likes = 0;
let photoIndex = 1;

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        username.textContent = "Имя не может быть пустым!";
        username.style.color = "red";
    } else {
        username.style.color = "";
        username.textContent = nameInput.value;
    }
});

toggleBioBtn.addEventListener("click", () => {
    bio.classList.toggle("hidden");
});


toggleHobbiesBtn.addEventListener("click", () => {
    hobbies.classList.toggle("hidden");
});

likeBtn.addEventListener("click", () => {
    likes++;
    likesSpan.textContent = likes;
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

changePhotoBtn.addEventListener("click", () => {
    if (avatar.src.includes("images/avatar.jpg")) {
        avatar.src = "images/avatar1.jpg";
    } else {
        avatar.src = "images/avatar.jpg";
    }
});

resetBtn.addEventListener("click", () => {
    likes = 0;
    likesSpan.textContent = 0;

    username.textContent = "Варвара";
    nameInput.value = "";

    avatar.src = "avatar1.jpg";
    photoIndex = 1;
});


