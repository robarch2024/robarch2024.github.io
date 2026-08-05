(function ($) {
  "use strict";

  $(function () {
    var $grid = $(".project-grid .row").isotope({
      itemSelector: ".element-item",
      layoutMode: "masonry",
      percentPosition: true,
      masonry: { columnWidth: ".element-item" }
    });

    var $pendingImages = $grid.find("img").filter(function () {
      return !this.complete;
    });
    var remaining = $pendingImages.length;

    function revealGrid() {
      $grid.isotope("layout");
      $(".grid").css("visibility", "visible");
    }

    if (remaining === 0) {
      revealGrid();
      return;
    }

    $pendingImages.one("load error", function () {
      remaining -= 1;
      if (remaining === 0) {
        revealGrid();
      }
    });
  });
})(jQuery);
