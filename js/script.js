//event saat link diklik

$(".page-scroll").on("click", function (e) {
  //ambil isi href
  let tujuan = $(this).attr("href");
  //tankap elemen
  let elemenTujuan = $(tujuan);

  //pindahkan scroll
  $("html").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// $(".navbar-nav>li>a").on("click", function () {
//   $(".navbar-collapse").collapse("hide");
// });

$(document).click(function (event) {
  var clickover = $(event.target);
  var $navbar = $(".navbar-collapse");
  var _opened = $navbar.hasClass("in");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {
    $navbar.collapse("hide");
  }
});
// Solution:
// https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen
