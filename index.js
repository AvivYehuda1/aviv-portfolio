$(document).ready(function () {
  $(".Linkedin").click(function () {
    // Default LinkedIn placeholder link
    window.open("https://www.linkedin.com/in/aviv-yehuda-11511219a/", "_blank");
  });

  $(".Email").click(function () {
    // Default email placeholder
    window.open("mailto:avivty66@gmail.com", "_blank");
  });

  $(".Whatsapp").click(function () {
    // Default WhatsApp placeholder
    window.open("https://wa.me/<972528080839>", "_blank");
  });

  $(".Github").click(function () {
    // Default GitHub placeholder link
    window.open("https://github.com/AvivYehuda1", "_blank");
  });

  $(".about").click(function () {
    // Navigate to placeholder about page
    window.location.href = "./about.html";
  });

  $(".talk-to-me").click(function () {
    // Scroll to contact section with smooth animation
    $("html, body").animate({
      scrollTop: $("#talk-to-me").offset().top
    }, 1000);
  });

  $(".explore-button").click(function () {
    // Scroll to projects section
    $("html, body").animate({
      scrollTop: $("#projects").offset().top
    }, 1000);
  });
});
