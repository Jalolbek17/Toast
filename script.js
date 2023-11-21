const buttons = document.querySelectorAll(".btn"), toast = document.querySelector(".toast");

var ready = true, stop = false;

function showToast(bg) {
    ready = false;
    if (bg === "#2C2C2C") {
        toast.innerHTML = "Just a usual message";
    } else {
        toast.innerHTML = "Here is your error";
    }
    toast.style.backgroundColor = bg;
    toast.classList.remove("hide");
}

function hideToast() {
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
            ready = true;
        }, 165);
    }, 1500);
}

toast.addEventListener("mouseenter", () => {
    toast.classList.add("stay");
    stop = true;
})

toast.addEventListener("mouseleave", () => {
    setTimeout(() => {
        toast.classList.remove("stay");
        stop = false;
    }, 1500);
})

buttons.forEach(b => {
    b.addEventListener("click", () => {
        if (ready && !stop) {
            showToast(b.dataset.bg);
            hideToast();
        }
    })
})