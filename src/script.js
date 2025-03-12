let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    let currentValue = parseInt(count.innerText);
    count.innerText = currentValue + 1;
});

document.getElementById("decrement").onclick = function() {
    count.innerText = count.innerText - 1; // BUG 4: Trata innerText como string
};

// BUG 5: Permite valores negativos
