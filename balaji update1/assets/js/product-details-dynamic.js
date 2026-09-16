// Balaji Namkeen — product-details.html dynamic content
// Reads ?id=N from the URL and fills in the existing product-details
// markup (title, rating, price, description, gallery image, WhatsApp
// enquiry link) from assets/js/balaji-products.js. Does not change the
// page's design/layout — only the text/image content inside it.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof namkeenProducts === "undefined") return;

    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get("id"), 10);
    var product = getBalajiProductById(id) || namkeenProducts[0];
    if (!product) return;

    document.title = product.name + " - Balaji Ghanshyam Namkeen";

    // Gallery: every js-pd-img element (nav thumbnails, main preview
    // slides, variant swatches, description-tab banner) shows the
    // real packet photo for this product.
    document.querySelectorAll(".js-pd-img").forEach(function (img) {
      img.src = product.image;
      img.alt = "Balaji " + product.name + " product image";
    });
    document.querySelectorAll(".js-pd-preview-link").forEach(function (a) {
      a.setAttribute("href", product.image);
    });

    // Badge (e.g. "New") — hide the ribbon entirely if this product has none.
    document.querySelectorAll(".js-pd-badge").forEach(function (el) {
      if (product.badge) {
        el.textContent = product.badge;
        el.closest(".product__badge").style.display = "";
      } else {
        el.closest(".product__badge").style.display = "none";
      }
    });

    // Title (shown in both the info panel and the description tab)
    document.querySelectorAll(".js-pd-title, .js-pd-title-echo").forEach(function (el) {
      el.textContent = product.name;
    });

    // Rating
    document.querySelectorAll(".js-pd-rating").forEach(function (el) {
      el.textContent = "( " + product.rating.toFixed(1) + ")";
    });

    // Price
    document.querySelectorAll(".js-pd-price").forEach(function (el) {
      el.textContent = "₹" + product.price.toFixed(2);
    });
    document.querySelectorAll(".js-pd-oldprice").forEach(function (el) {
      el.textContent = "₹" + product.oldPrice.toFixed(2);
    });

    // Descriptions
    document.querySelectorAll(".js-pd-desc").forEach(function (el) {
      el.textContent = product.shortDescription;
    });
    document.querySelectorAll(".js-pd-full-desc").forEach(function (el) {
      el.textContent = product.description;
    });

    // Meta info
    document.querySelectorAll(".js-pd-pack").forEach(function (el) {
      el.textContent = product.pack;
    });
    document.querySelectorAll(".js-pd-type").forEach(function (el) {
      el.textContent = product.category;
    });

    // WhatsApp "Enquiry Now" button — inserted once, right under the
    // description, using the site's own existing WhatsApp number and a
    // message that always names the currently viewed product.
    document.querySelectorAll(".js-pd-whatsapp-slot").forEach(function (slot) {
      if (slot.dataset.filled) return;
      slot.dataset.filled = "true";
      var link = document.createElement("a");
      link.href = getWhatsAppEnquiryUrl(product.name);
      link.target = "_blank";
      link.rel = "noopener";
      link.className = "primary__btn js-whatsapp-enquiry";
      link.style.display = "inline-flex";
      link.style.alignItems = "center";
      link.style.gap = "8px";
      link.style.background = "#25D366";
      link.style.borderColor = "#25D366";
      link.style.marginBottom = "15px";
      link.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.11.32.02.51-.09.2-.14.32-.27.49-.13.17-.28.38-.4.51-.13.14-.27.29-.12.56.16.28.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.19 1.35.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.43.19.5.3.06.11.06.63-.18 1.31z"/></svg>' +
        "Enquiry Now";
      slot.appendChild(link);
    });
  });
})();
