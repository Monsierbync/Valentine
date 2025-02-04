const messages = [
    "Chắc chưaaaa?",
    "Suy nghĩ lại ikkkk",
    "E bé iuuuu ơiiiii",
    "Hoiii mòooo",
    "Bấm yesss ikkk",
    "No là bùnnn lắm áaaa",
    "Bùnnn lắmm lắmmmm",
    "Bùnnn lắm lắm lắm lunnn đóaaa",
    "Oke hoi hem hỏi nựa...",
    "Giỡn hoi, yes ik mòooo! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
