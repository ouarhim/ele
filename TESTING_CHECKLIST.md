# Testing and Acceptance Checklist

## Internationalization (i18n)

### Language Switching
- [ ] Language switcher is visible in header
- [ ] Clicking language switcher shows all available languages
- [ ] Switching languages updates the URL with the correct locale
- [ ] Content is displayed in the correct language after switching
- [ ] Language switcher persists selection across pages

### RTL Support (Arabic)
- [ ] Text direction changes to RTL when Arabic is selected
- [ ] Layout is mirrored (navigation, buttons, etc.)
- [ ] Text alignment is right-aligned
- [ ] Margins and paddings are correctly mirrored
- [ ] Fonts change to Arabic font family

## Responsiveness

### Desktop (1200px and above)
- [ ] Layout displays correctly
- [ ] Navigation is horizontal
- [ ] All content is visible and properly spaced

### Tablet (768px - 1199px)
- [ ] Layout adapts to tablet view
- [ ] Navigation collapses to hamburger menu
- [ ] Content reflows appropriately

### Mobile (767px and below)
- [ ] Layout adapts to mobile view
- [ ] Navigation collapses to hamburger menu
- [ ] Content is readable without horizontal scrolling
- [ ] Buttons and links are easily tappable (minimum 44px)

## Accessibility

### Keyboard Navigation
- [ ] All interactive elements are reachable via Tab key
- [ ] Focus indicators are visible
- [ ] Navigation can be operated with keyboard only
- [ ] Skip to content link is present and functional

### Screen Readers
- [ ] All images have appropriate alt text
- [ ] Semantic HTML is used correctly
- [ ] ARIA attributes are used where necessary
- [ ] Page titles and headings are descriptive

## Blog Functionality

### Blog Listing Page
- [ ] Blog posts are displayed in a grid
- [ ] Each post shows title, date, and excerpt
- [ ] Read More button links to individual post
- [ ] Pagination works correctly

### Individual Blog Post
- [ ] Post title, date, and author are displayed
- [ ] Post content is rendered correctly
- [ ] Images display properly
- [ ] Back to Blog link works

## Contact Form

### Form Validation
- [ ] Required fields are marked
- [ ] Validation messages display for empty fields
- [ ] Email field validates email format
- [ ] Form cannot be submitted with invalid data

### Form Submission
- [ ] Form submits successfully with valid data
- [ ] Success message displays after submission
- [ ] Form fields clear after successful submission
- [ ] Error messages display for failed submissions

## SEO

### Meta Tags
- [ ] Page titles are descriptive and unique
- [ ] Meta descriptions are present
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present

### hreflang Tags
- [ ] hreflang tags are present in page head
- [ ] hreflang tags point to correct language variants
- [ ] x-default hreflang tag is present

## Performance

### Lighthouse Scores
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### Image Optimization
- [ ] All images use next/image component
- [ ] Images have appropriate sizing
- [ ] Images load lazily

## Cross-browser Compatibility

### Modern Browsers
- [ ] Site works correctly in latest Chrome
- [ ] Site works correctly in latest Firefox
- [ ] Site works correctly in latest Safari
- [ ] Site works correctly in latest Edge