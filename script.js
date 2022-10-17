const box = document.querySelector('.list-group');

function tambah() {
    let text = document.querySelector('.form-control');
    console.log(text);

    let todo = `<li class='list-group-item'>
    <span onclick='toggle(this)'> 
        <button type="button" class="btn btn-outline-light bi-check2">
        </button>
        ${text.value}
    </span>
    <span onclick='del(this)'> 
        <button type="button" class="btn btn-outline-light bi-x-lg">
        </button>
    </span></li>`
    console.log(todo);

    box.insertAdjacentHTML('afterbegin', todo);
    text.value = "";
}

function toggle(el) {
    el.classList.toggle('done')
};

function del(el) {
    el.parentElement.remove()
};