!(function (a) {
  "use strict";
  a(window).on("load", function () {
    a('[data-loader="circle-side"]').fadeOut(),
      a("#preloader").addClass("loaded"),
      a(".animate_hero").addClass("is-transitioned");
  }),
    a(window).on("scroll", function () {
      1 < a(this).scrollTop()
        ? a(".fixed_header").addClass("sticky")
        : a(".fixed_header").removeClass("sticky");
    }),
    a(window).scroll(),
    scrollCue.init({ percentage: 0.85 }),
    a(".opacity-mask").each(function () {
      a(this).css("background-color", a(this).attr("data-opacity-mask"));
    }),
    a(".background-image").each(function () {
      a(this).css("background-image", a(this).attr("data-background"));
    }),
    a('a[href^="#"].btn_scrollto').on("click", function (e) {
      e.preventDefault();
      var t = this.hash,
        e = a(t);
      a("html, body")
        .stop()
        .animate({ scrollTop: e.offset().top - 60 }, 300, "swing", function () {
          window.location.hash = t;
        });
    });
  const e = document.querySelectorAll(".pinned-image");
  e.forEach((e) => {
    const t = e.querySelector(".pinned-image__container");
    t.querySelector("img");
    var a = t.querySelector(".pinned-image__container-overlay"),
      i = e.querySelector(".pinned_over_content");
    const o = gsap.timeline({ paused: !0 });
    o.to(t, { scale: 1.05 }, 0),
      o.from(i, { autoAlpha: 0 }, 0),
      o.from(a, { autoAlpha: 0 }, 0);
    ScrollTrigger.create({
      animation: o,
      trigger: e,
      start: "top center",
      markers: !1,
      pin: !1,
      scrub: !1,
    });
  });
  var t,
    i,
    o,
    s,
    n = a(window),
    r = a("#section_video video");
  r.length &&
    (r.each(function () {
      a(this).attr("webkit-playsinline", ""),
        a(this).attr("playsinline", ""),
        a(this).attr("muted", "muted"),
        a(this).attr("id", "loadvideo"),
        document.getElementById("loadvideo").load();
    }),
    n.scroll(function () {
      r.each(function () {
        var e;
        1 ==
        ((t = a((e = this)).offset().top),
        (i = t + a(e).outerHeight()),
        (o = n.scrollTop()),
        (s = o + n.height()),
        o < i && t < s)
          ? a(this)[0].play()
          : a(this)[0].pause();
      });
    })),
    a(".open_close_menu").on("click", function () {
      a(".main-menu").toggleClass("show"),
        a(".layer").toggleClass("layer-is-visible");
    }),
    a(".fixed_title").theiaStickySidebar({
      minWidth: 991,
      additionalMarginTop: 120,
    });
  var l = a('input[name="dates"]');
  a(function () {
    l.daterangepicker({
      autoUpdateInput: !1,
      autoApply: !0,
      minDate: new Date(),
      locale: { cancelLabel: "Clear" },
    }),
      l.on("apply.daterangepicker", function (e, t) {
        a(this).val(
          t.startDate.format("MM-DD-YY") +
            "  >  " +
            t.endDate.format("MM-DD-YY")
        );
      }),
      l.on("cancel.daterangepicker", function (e, t) {
        a(this).val("");
      });
  }),
    a(".carousel_item_1").owlCarousel({
      center: !0,
      items: 1,
      loop: !1,
      addClassActive: !0,
      margin: 0,
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      animateOut: "fadeOut",
      responsive: { 0: { dots: !0 }, 991: { dots: !0 } },
    }),
    a(".carousel_item_centered").owlCarousel({
      loop: !0,
      margin: 5,
      nav: !0,
      dots: !1,
      center: !0,
      navText: [
        "<i class='bi bi-arrow-left-short'></i>",
        "<i class='bi bi-arrow-right-short'></i>",
      ],
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 2 } },
    }),
    a(".carousel_item_3").owlCarousel({
      loop: !1,
      margin: 15,
      nav: !0,
      dots: !1,
      center: !1,
      navText: [
        "<i class='bi bi-arrow-left-short'></i>",
        "<i class='bi bi-arrow-right-short'></i>",
      ],
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
    }),
    a(".carousel_testimonials").owlCarousel({
      items: 1,
      loop: !0,
      autoplay: !1,
      animateIn: "flipInX",
      margin: 40,
      stagePadding: 30,
      smartSpeed: 300,
      autoHeight: !0,
      dots: !0,
      responsiveClass: !0,
      responsive: { 600: { items: 1 }, 1e3: { items: 1, nav: !1 } },
    }),
    a(".custom_select select").niceSelect();
})(jQuery);
