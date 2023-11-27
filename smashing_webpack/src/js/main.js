// Generated by CoffeeScript 1.3.3
import $ from './vendor/jquery-1.8.0.min.js';
import __ from 'lodash'
import '/src/sass/style.scss'; // Importa tu archivo Sass principal


(function () {
  var e, t, n;
  ddsmoothmenu.init({
    mainmenuid: "mainmenu",
    orientation: "h",
    contentsource: "markup",
    classname: "menu",
  });
  jQuery("nav.menu > ul").tinyNav({ active: "current-menu-item" });
  e = $("#portfolio-filter");
  t = e.data("cols");
  $(window).load(function () {
    return e.isotope({ itemSelector: ".portfolio_item" });
  });
  $(window).resize(function () {
    return e.isotope({ itemSelector: ".portfolio_item" });
  });
  $("#filters a").click(function () {
    var t;
    t = $(this).attr("data-filter");
    $("#filters a").removeClass("active");
    $(this).addClass("active");
    e.isotope({ filter: t });
    return !1;
  });
  $(window).load(function () {
    return $(".blog_grid").isotope({
      itemSelector: ".post",
      masonry: { columnWidth: $(".blog_grid").width() / 3 },
    });
  });
  $(window).resize(function () {
    return $(".blog_grid").isotope({
      itemSelector: ".post",
      masonry: { columnWidth: $(".blog_grid").width() / 3 },
    });
  });
  $(".portfolio_item a").attr("rel", "portfolio");
  $(".fancybox, .portfolio_item a").fancybox({
    padding: 0,
    closeBtn: !1,
    helpers: { title: { type: "outside" }, buttons: { position: "bottom" } },
  });
  jQuery(".price-table a").tooltip();
  jQuery(".flickr_widget").each(function () {
    var e, t, n;
    t = $(this);
    n = $(this).data("flickr-id");
    e = $(this).data("count");
    return jQuery.getJSON(
      "http://api.flickr.com/services/feeds/photos_public.gne?ids=" +
        n +
        "&lang=en-us&format=json&jsoncallback=?",
      function (t) {
        var n;
        n = 0;
        return jQuery.each(t.items, function (r, s) {
          n >= e && next;
          console.log(t.items);
          jQuery("<img/>")
            .attr("src", s.media.m)
            .appendTo(".flickr_widget")
            .wrap("<a href='" + s.link + "'></a>");
          return n++;
        });
      }
    );
  });
  n = function (e) {
    var t;
    t =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\.+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return t.test(e);
  };
  $("#contact_form").submit(function () {
    var e, t, r, i;
    $(".alert", this).remove();
    $("input[type=submit]").attr("disabled", "disabled");
    r = $("#name", this).val();
    e = $("#email", this).val();
    i = $("#subject", this).val();
    t = $("#message", this).val();
    if (r === "" || e === "" || i === "" || t === "") {
      $("#contact_form").prepend(
        '<div class="alert">\n	<button type="button" class="close" data-dismiss="alert">×</button>\n	<strong>Error!</strong> No fields can be left blank.\n</div>'
      );
      $("input[type=submit]").removeAttr("disabled");
      return !1;
    }
    if (!n(e)) {
      $("#contact_form").prepend(
        '<div class="alert">\n	<button type="button" class="close" data-dismiss="alert">×</button>\n	<strong>Warning!</strong> That doesn\'t look like a valid email.\n</div>'
      );
      $("input[type=submit]").removeAttr("disabled");
      return !1;
    }
    $.post(
      "mailer.php",
      { name: r, email: e, subject: i, message: t },
      function (e) {
        e === "" &&
          $("#contact_form").prepend(
            '<div class="alert alert-danger">\n	<button type="button" class="close" data-dismiss="alert">×</button>\n	<strong>Error!</strong> Something went wrong, try later.\n</div>'
          );
        if (e === "success") {
          $("#contact_form").prepend(
            '            <div class="alert alert-success">\n	<button type="button" class="close" data-dismiss="alert">×</button>\n	<strong>Success!</strong> Your message was sent.\n</div>'
          );
          $(
            "#contact_form input[type=text], #contact_form input[type=email], #contact_form textarea"
          ).val("");
          return $("input[type=submit]").removeAttr("disabled");
        }
      }
    );
    return !1;
  });
}).call(this);
