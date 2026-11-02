# Part 3 Improvement Report — Joss Sweet Crumbs Bakery

**Module:** WEDE5020  |  **Student:** Vumbiwa Joster Mashaba  |  **Student number:** ST10497654

## Purpose
This report records the improvements made to the existing Joss Sweet Crumbs Bakery website for POE Part 3. The Part 3 meeting instructions call for JavaScript functionality, search-engine optimisation, a validated form, a Google Map, a gallery lightbox/slideshow, a live date/time display, deployment and a change log.

## Improvements implemented

1. **Preserved the existing website foundation.** The Part 3 site continues the bakery website structure and styling instead of starting a new unrelated project. Existing bakery photographs and the supplied business details were retained.
2. **SEO improvements.** Each HTML page has a page-specific title and meta description, keywords, author, viewport and robots metadata. Semantic headings, descriptive image alternative text, internal navigation and sitemap/robots files support discoverability and accessibility.
3. **Contact and enquiry forms.** Separate forms collect contact messages and order enquiry details. Required fields, email format, phone pattern, message length, quantity and date constraints are validated in the browser. Both forms are marked for Netlify Forms processing and include a honeypot field.
4. **Form delivery configuration.** The forms require deployment to Netlify. The site owner must enable email notifications for the `contact` and `order-enquiry` forms in the Netlify dashboard and test that submissions arrive. Local file preview does not deliver form submissions.
5. **Google Map.** The Contact page includes an embedded map search for the supplied Chiawelo, Chris Hani Road, Soweto address.
6. **Gallery slideshow.** Selecting a gallery image opens a lightbox. Previous and next buttons and keyboard arrow keys navigate between the images; Escape closes the native dialog.
7. **JavaScript features.** The site includes responsive navigation, an FAQ accordion, live product search, date validation and a footer date/time display refreshed every second using the Africa/Johannesburg time zone on all pages. Error handling is included around the script and form validation.
8. **Deployment files.** `robots.txt`, `sitemap.xml`, and a deployment checklist are included. Canonical URLs and sitemap/robots domain placeholders must be replaced with the real Netlify URL after deployment.

## Testing checklist

- Open each of the six HTML pages and test all navigation links.
- Check that every image loads and the gallery lightbox opens, closes and navigates in both directions.
- Test the product search and FAQ accordion.
- Submit invalid and valid values to both forms.
- Deploy to Netlify, enable form email notifications and submit test forms. Confirm the submissions appear in Netlify Forms and the administrator receives notifications.
- Check the embedded map on the Contact page.
- Confirm the footer date/time updates every second.
- Replace `YOUR-DOMAIN.example` with the published Netlify domain and retest the canonical URLs, `robots.txt` and `sitemap.xml`.

## Limitations and items requiring owner action

The website package cannot publish itself or create the student's GitHub repository. The student must deploy the folder to Netlify, configure form notifications, replace domain placeholders, test the live site, create/push the GitHub repository and submit the live URL/repository URL and ZIP as instructed. The actual Part 2 lecturer feedback sheet was not among the supplied files, so feedback-specific corrections cannot be confirmed in this report.

## References

- WEDE5020 POE Part 3 lecturer meeting transcript (29 October 2026), supplied course material.
- Mozilla Developer Network (MDN). (n.d.). *HTML forms, constraint validation, JavaScript events and dialog element*. https://developer.mozilla.org/
- Netlify. (n.d.). *Forms setup and form notifications*. https://docs.netlify.com/forms/
- Google Maps. (n.d.). *Google Maps*. https://www.google.com/maps
- Sitemaps.org. (n.d.). *Sitemaps XML format*. https://www.sitemaps.org/protocol.html
