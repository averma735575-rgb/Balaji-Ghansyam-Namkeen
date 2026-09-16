# Balaji Namkeen — Products & Categories (v2, real project)

This time I worked directly inside your real project (from `balajinamk.zip`),
so it has your actual CSS/JS and should work exactly as shown in your
screenshots. Only **4 things** were touched — nothing else in the project
was changed.

## Files changed
1. **`index.html`**
   - "Our Products" section: same design (rounded filter pills, 3-column
     grid, card style, "Namkeen" subtitle, arrow icon — all untouched),
     now filled with real Balaji/Ghanshyam product photos and real
     category filtering.
   - Filter bar: **All · Rs 5 · Rs 10 · Rs 20 · 170 gm · 350 gm · 500 gm ·
     1 kg** — every button shows only that category's real products.
     Uses your site's own existing tab script (`assets/js/script.js`,
     the same one that runs your Description/Reviews tabs), so the red
     active-button style and click behaviour are exactly what your site
     already does — no new tab logic was invented.
   - Navbar **"Categories"** mega-menu: replaced the dummy links (Shop
     Left Sidebar, Standard Product, My Account, Compare Pages, etc.)
     with real product names under each price/weight heading, and made
     them jump straight to that category's tab on the homepage.

2. **`assets/css/style.css`** — one small block appended at the very end
   (nothing above it was touched). It only sets a consistent image height
   + `object-fit: contain` **inside the new products section**, so every
   photo (whichever pack size/shape) sits neatly in the same card without
   stretching.

3. **`assets/js/balaji-categories.js`** *(new file)* — a few lines that
   make the navbar's category links open the right tab on the homepage.
   It doesn't modify your existing `script.js` at all.

4. **`assets/img/product/balaji/`** *(new folder, 35 images)* — every
   real product photo from your ZIP, compressed from ~2MB PNGs to
   ~90–140KB WebP (same visual quality, faster page load), and correctly
   mapped to the right product + size.

## Product → image mapping logic
- Every card uses a real photo from your ZIP — no placeholders, no
  random/repeated images.
- Where only one photo exists for a product (e.g. Ajwain Sev, Navratan
  Mixture), that same photo is reused correctly across the sizes it
  belongs to — never swapped for an unrelated image.
- Where two different photos of the same product exist (e.g. Khari Pata
  Boondi, Makhana Mix, Salimaar Mixture, Aloo Bhujia), the different
  packs are used for different sizes so cards don't look identical.
- Spelling was normalized as you asked (Khata Mita → Khata Mitha, Kanpuri
  Mixture → Kanpuri Mix, Khuria/Khurjia → Khurja Mixture, etc.).
- The duplicate "Bhujia" / "Bhojia" entry in your 500 gm list was treated
  as one product, to avoid an identical duplicate card.

## What I deliberately did NOT touch (and why)
- **`shop.html`** ("View All Products" target) — it already has 9 real
  product cards and is not broken, so nothing there breaks. But its
  product-card markup is a more complex, fragile structure (each card is
  its own image swiper + wishlist/compare icons + USD "$" placeholder
  prices) than the homepage cards, so fully rebuilding its catalogue with
  all ~24 products safely needs its own pass — happy to do that next if
  you want it.
- The **mobile hamburger menu**'s "Shop" section still has old template
  links (Column One/Two/Three/Four). It was already structured
  differently from the desktop navbar before I started, and touching it
  wasn't part of what you asked for — flagging it here in case you'd
  like it cleaned up too.
- Header, footer, logo, colors, fonts, About/Contact pages, cart — all
  untouched.

## Please test
Open `index.html` in a browser and click through all 8 tabs, then open
the "Categories" menu in the navbar and click a couple of items to
confirm they jump to the right tab. Tell me if anything looks off.
