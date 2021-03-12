// <!-- Awal Navbar -->

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-350px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-350px") {
        sideNav.style.right = "0 ";
    } else {
        sideNav.style.right = "-350px";
    }
}

// <!-- Akhir Navbar -->

// Awal Rekomendasi
$('.glider').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// Akhir Rekomendasi

// Awal login Card
const card = document.getElementById("card");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
    card.style.transform = "rotateY(0deg)";
}
// Akhir login card

// Awal open Close btn login
document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});
// Akhir Close btn login

// Awal Animate on Scroll


// Akhir animate on scroll