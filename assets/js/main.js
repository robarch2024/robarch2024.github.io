(function ($) {
  "use strict";

  var $nav = $("nav");
  var $toggle = $("#nav-container");
  var $navigation = $("#navigation");
  var $links = $navigation.find("a");

  function setNavigation(open) {
    $nav.toggleClass("expanded", open);
    $toggle.toggleClass("pushed", open);
    $toggle.attr({
      "aria-expanded": String(open),
      "aria-label": open ? "Close navigation" : "Open navigation"
    });
    $navigation.attr("aria-hidden", String(!open));
    $links.attr("tabindex", open ? "0" : "-1");
    $("body").toggleClass("no_scroll", open);
  }

  setNavigation(false);

  $toggle.on("click", function () {
    setNavigation(!$nav.hasClass("expanded"));
  });

  $navigation.on("click", "a", function () {
    setNavigation(false);
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && $nav.hasClass("expanded")) {
      setNavigation(false);
      $toggle.trigger("focus");
    }
  });
})(jQuery);
