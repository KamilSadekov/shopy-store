var menuBtn = document.querySelector('.burger');
var menu = document.querySelector('.header-menu');



function toggleModal() {
    menu.classList.toggle("header_show");
}
menuBtn.addEventListener("click", toggleModal);




window.onload = function () {
    var btnFirst = document.querySelector('.goods-more-button');
    var hiddenElement = document.querySelector('.goods-cards__more');
    hiddenElement.style.display = 'none';
    btnFirst.addEventListener('click', function () {
        if ( 'none' == hiddenElement.style.display ) {
            hiddenElement.style.display = 'flex';
        }else {
            hiddenElement.style.display = 'none';
        }
    });
};

thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}

$(function () {
    $(".images-item").click(function (e) {
        e.preventDefault();
        $(".images-item").removeClass('active-image');
        $(this).addClass('active-image');
    });
});

