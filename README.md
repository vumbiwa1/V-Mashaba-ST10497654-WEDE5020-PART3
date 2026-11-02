# Joss Sweet Crumbs Bakery — WEDE5020 Part 3

**Student:** Vumbiwa Joster Mashaba  
**Student number:** ST10497654  
**Client:** Joss Sweet Crumbs Bakery  
**Location:** 2526 Chiawelo, Chris Hani Road, Soweto, 1818  
**Established:** 9 March 2021  

## Project overview
This website builds on the submitted Part 1 foundation and Part 2 design. It presents the bakery, its products and services, gallery, order enquiry and contact information. The business facts and original bakery photographs were retained from the Part 1 project; the Part 2 visual layout and responsive styling were used as the design base.

## Pages
- `index.html` — home page and bakery overview.
- `about.html` — business story, mission, vision and FAQ accordion.
- `products.html` — products/services with live client-side search.
- `gallery.html` — bakery photographs with an accessible lightbox.
- `enquiry.html` — product/service quotation enquiry with validation and acknowledgement.
- `contact.html` — general contact form for website submissions.

## Features implemented for Part 3
- Responsive mobile navigation with an expanded/collapsed state.
- FAQ accordion and gallery lightbox modal.
- Live product/service search using JavaScript DOM filtering.
- HTML5 and JavaScript-assisted form validation, including email, phone pattern, required fields, character limits, quantity and future date checks.
- Separate enquiry and general contact forms to match the brief; both use Netlify Forms POST submissions after deployment.
- Both forms use JavaScript-assisted validation and submit to Netlify Forms when hosted on Netlify. Configure an email notification for each form in the Netlify dashboard so the bakery administrator receives submissions. Static preview / opening files locally cannot deliver form submissions.
- Unique page titles, meta descriptions, keywords, author and viewport metadata, semantic heading hierarchy, descriptive image alt text, internal links and mobile-friendly layout.
- South African date and live time displayed in every page footer, refreshed every second.
- `robots.txt` and `sitemap.xml` supplied.

## Running the website
Open `index.html` in a modern browser, or use the Live Server extension in Visual Studio Code. No build step is required.

## Before deployment/submission
1. Confirm that the phone number `+27 11 987 6543` and email `info@josssweetcrumbs.co.za` are still correct. These were taken from the Part 1 project.
2. Replace `https://YOUR-DOMAIN.example` in the canonical tags, `robots.txt` and `sitemap.xml` with the actual published domain.
3. Deploy to Netlify to activate the Netlify Forms submissions. In the Netlify dashboard, open Forms and configure email notifications to the bakery administrator for both `contact` and `order-enquiry`. Submit test entries and confirm they appear in Forms and the notification email arrives. Forms do not send from a local file preview.
4. Use Netlify for deployment because the forms are configured for Netlify Forms. GitHub Pages alone will not process these forms. Submit the repository and live website URLs as required by the lecturer.
5. Review the actual Part 2 lecturer feedback and add any feedback-specific corrections below. No lecturer feedback document was included in the files supplied for this build, so no specific feedback items have been assumed.

## Changelog
### Part 3 — 2 November 2026
- Built the Part 3 version using the Part 2 responsive site as the design base and restored the verified business details and original bakery photographs from the Part 1 project.
- Added `enquiry.html` as a dedicated service/product enquiry page, separate from the general message form on `contact.html`, as required by the Part 3 brief.
- Added JavaScript mobile navigation, accessible FAQ accordion, gallery lightbox and dynamic product/service search.
- Added client-side validation for required fields, email addresses, phone formats, message lengths, quantities and non-past enquiry dates.
- Added an enquiry acknowledgement that explains availability and pricing must be confirmed by the bakery; no unsupported prices or booking promises are displayed.
- Configured contact and order-enquiry forms for Netlify Forms POST handling, with client-side validation and anti-spam honeypot fields. Netlify email notifications must be enabled by the site owner after deployment.
- Improved on-page SEO with individual title tags and meta descriptions, descriptive image alt text, semantic headings, internal links and mobile responsive styling.
- Added `robots.txt` and `sitemap.xml`; deployment-domain placeholders must be replaced before publishing. Added SEO keywords metadata to all pages.
- Updated this README with Part 3 features, setup, deployment checks and references.

### Deployment note
- Form submissions require a published Netlify site. In Netlify, configure email notifications for both forms and test each one. Do not describe the forms as tested until this has been completed.
- Replace every `https://YOUR-DOMAIN.example` placeholder with the real Netlify domain in canonical tags, `robots.txt` and `sitemap.xml`.

### Part 2 baseline
- Part 2 supplied the responsive CSS design, shared navigation, page layouts and initial JavaScript foundation. No Part 2 lecturer feedback sheet was provided with the files, so feedback-specific amendments remain to be checked against the lecturer's comments.

## References
- Joss Sweet Crumbs Bakery. (2021). *Business information, product descriptions, address and operating hours*. Details reproduced from the student's Part 1 project documentation.
- Google Maps. (n.d.). *Google Maps embed/search*. Used to display the bakery-area map. https://www.google.com/maps
- MDN Web Docs. (n.d.). *HTML forms, constraint validation, DOM events and dialog element*. https://developer.mozilla.org/
- Sitemaps.org. (n.d.). *Sitemaps XML format*. https://www.sitemaps.org/protocol.html
