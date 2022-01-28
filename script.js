$(() => {
  const $page = $("body");
  const $darkSwitch = $("#nav-four");
  const $nav = $(".nav");

  $darkSwitch.on("click", function () {
    $page.toggleClass("dark");
    $nav.toggleClass("navbar-dark");
    $nav.toggleClass("bg-dark");
    $(".card").toggleClass("text-white");
    $(".card").toggleClass("bg-dark");
    $(".btn").toggleClass("btn-dark");
    $(".btn").toggleClass("btn-primary");
    // $("#darkbtn").text("Light")
    // $(".card").toggleClass("mb-3");
    // text-white bg-dark mb-3
  })
});