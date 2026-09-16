// Balaji Namkeen — Categories navigation helper
// Purely additive: does not modify assets/js/script.js.
// Lets the navbar "Categories" mega-menu links (Rs 5 / Rs 10 / ... / 1 kg)
// jump straight to the matching tab inside #balaji-categories on the
// homepage, using the same tab system script.js already powers.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var section = document.getElementById("balaji-categories");
    if (!section) return; // only runs on index.html

    var allProducts = document.querySelector("#all .row");
    // ids already hardcoded directly into the "All" tab in index.html —
    // everything else in namkeenProducts gets appended here so all 35
    // real Balaji packets show up, without duplicating any card.
    var alreadyStatic = [1, 6, 9, 13, 18, 21, 25, 28, 31, 32, 33, 35];

    if (allProducts && typeof namkeenProducts !== "undefined") {
      namkeenProducts.forEach(function (product) {
        if (alreadyStatic.indexOf(product.id) !== -1) return;
        allProducts.insertAdjacentHTML(
          "beforeend",
          '<div class="col custom-col-2 mb-30"><article class="project__card "><a class="project__card--link" href="product-details.html?id=' +
            product.id +
            '"><div class="project__card--thumbnail"><img class="project__card--thumbnail__img display-block" src="' +
            product.image +
            '" alt="Balaji ' +
            product.name +
            ' product image" loading="lazy"></div>' +
            '<div class="project__card--content d-flex justify-content-between align-items-center"><div class="project__card--content__left"><h3 class="project__card--content__title">' +
            product.name +
            '</h3><span class="project__card--content__subtitle">Namkeen</span></div><span class="project__card--btn"><svg class="project__card--btn__svg" xmlns="http://www.w3.org/2000/svg" width="15.51" height="15.443" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"></path></svg></span></div>' +
            "</a></article></div>"
        );
      });
    }

    var validTabs = ["all", "rs5", "rs10", "rs20", "g170", "g350", "g500", "g1kg"];

    function activateTab(id) {
      var btn = document.querySelector(
        '.project__tab--btn__list[data-target="#' + id + '"]'
      );
      if (btn) {
        btn.click();
      }
    }

    function handleHash() {
      var hash = window.location.hash.replace("#", "");
      if (validTabs.indexOf(hash) !== -1) {
        activateTab(hash);
        setTimeout(function () {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      }
    }

    // Landed here (possibly from another page) with a category hash already set
    if (window.location.hash) {
      handleHash();
    }

    // Mega-menu / any link tagged with data-balaji-tab
    document.querySelectorAll("[data-balaji-tab]").forEach(function (link) {
      link.addEventListener("click", function () {
        var id = link.getAttribute("data-balaji-tab");
        setTimeout(function () {
          activateTab(id);
        }, 0);
      });
    });

    // Back/forward navigation with hash changes while already on the page
    window.addEventListener("hashchange", handleHash);
  });
})();
