function sliderPrev(btn) {
    let item_active = btn.parentElement.parentElement.getElementsByClassName('active')[0];
    let item_prev = item_active.previousElementSibling;
    if (!item_prev) {
        item_prev = item_active.parentElement.lastElementChild
    }
    item_active.classList.remove("active");
    item_prev.classList.add("active");
}

function sliderNext(btn) {
    let item_active = btn.parentElement.parentElement.getElementsByClassName('active')[0];
    let item_next = item_active.nextElementSibling;
    if (!item_next) {
        item_next = item_active.parentElement.firstElementChild
    }
    item_active.classList.remove("active");
    item_next.classList.add("active");
}