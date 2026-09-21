# A Center for the Arts (AC4TA) Website

## Project Overview

This repository contains the modern website redesign for **A Center for the Arts (AC4TA)** in Fergus Falls, Minnesota.

The project was built as a custom HTML/CSS/JavaScript website with the goal of creating a modern, polished arts-organization website while keeping the structure organized and maintainable for a future WordPress conversion.

A major project goal is that the finished WordPress version should allow AC4TA staff to make normal content updates without needing to edit code.

---

## Design Direction

The website uses a theatrical, modern visual style inspired by AC4TA's identity and historic theatre environment.

### Primary Design Elements

- Dark theatre-inspired imagery
- Deep maroon accents
- Warm gold accents
- Light warm backgrounds
- White text over dark hero imagery
- Rounded cards and buttons
- Playfair Display for major headings
- Inter for body and interface text
- Generous spacing and centered section headings
- Responsive layouts for desktop, tablet, and mobile
- Subtle animations and hover effects where appropriate

### Core Color Palette

```text
Dark:       #121212
Light:      #f7f4ee
Accent:     #7a1f2b
Gold:       #c8a96b
Text:       #1f1f1f
Muted:      #6b6b6b
```

---

# Project Structure

The project is organized into page areas, shared assets, and reusable CSS/JavaScript.

```text
AC4TA/
│
├── about/
│
├── assets/
│   ├── audio/
│   │
│   └── css/
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── pages/
│       ├── responsive/
│
├── js/
│
├── contact/
│
├── data/
│
├── events/
│
├── images/
│
├── rentals/
│
├── store/
│
├── support/
│
└── index.html
```

---

# Folder Guide

## `about/`

Contains pages and content related to AC4TA's organization, history, leadership, mission, vision, and other informational material.

Examples of content developed for this area include:

- Mission & Vision
- Organizational history
- Board of Directors
- Leadership information
- Historical milestones

Board member areas were designed with room for individual photos or general **Photo Coming Soon** placeholders when images are not yet available.

---

## `assets/`

Contains shared website assets.

### `assets/audio/`

Audio files used by the website.

### `assets/css/`

The primary CSS system for the website.

The CSS is separated by purpose rather than putting every page's styling into one large stylesheet.

#### `assets/css/base/`

Global foundations such as:

- Reset styles
- Global typography
- CSS variables
- Site-wide defaults

#### `assets/css/components/`

Reusable visual components such as:

- Buttons
- Cards
- Carousels
- Timelines
- Section headings
- Other reusable interface elements

#### `assets/css/layout/`

Major structural components such as:

- Navbar
- Hero sections
- Footer
- Containers
- Other site-wide layout elements

#### `assets/css/pages/`

Page-specific styles.

Each major page can have its own stylesheet here so that page-specific styling does not unnecessarily affect other pages.

Examples include styles for:

- Home
- Rental Information
- Free Events
- Announcements
- Mission & Vision
- Programs
- Membership
- Sponsorship
- Gift Certificates
- Curtain Appeal
- Other individual pages

#### `assets/css/responsive/`

Responsive behavior for different screen sizes.

The goal is for the site to work cleanly across:

- Desktop
- Laptop
- Tablet
- Mobile phones

#### `assets/css/style.css`

Shared or legacy stylesheet content used by the project.

#### `assets/css/style2.css`

Earlier/alternate stylesheet content retained during the development process.

Before final deployment, unused legacy CSS should be reviewed with Digital Guru.

---

## `js/`

Contains JavaScript used for interactive website functionality.

JavaScript developed for the project includes functionality such as:

- Announcement filtering
- Event interactions
- Curtain Appeal campaign progress
- Image lightboxes
- Carousels
- Other page-specific interactions

JavaScript should remain separated from HTML whenever practical.

---

## `contact/`

Contains contact-related pages and resources.

This area is intended for visitor contact and communication functionality.

---

## `data/`

Contains structured data used by the website.

This may include data files used as fallbacks or sources for dynamic content.

One example developed during the project is:

```text
fallback-events.json
```

---

## `events/`

Contains pages related to AC4TA events.

Examples include:

- Featured Events
- List of Events
- Free Events
- Ticketing Policies
- Plan Your Visit
- Announcements

### Free Events

The Free Events page was created as an information hub for events that are free or offered through freewill donation.

The page includes information for:

- Voices Rise
- Brown Bag Lunch
- The Mighty Wurlitzer

The purpose is to give visitors a destination for free events that may not have a traditional Arts People ticket-purchase flow.

### Announcements

The Announcements page includes category filtering.

Current filter categories include:

- All
- Events
- Ticketing
- Community
- Education
- Fundraising
- Youth

Cards can be associated with more than one category when appropriate by using multiple category values in the card's data attributes and corresponding JavaScript/CSS logic.

---

## `images/`

Contains the site's image assets.

This includes:

- Logos
- Hero backgrounds
- Event images
- Theatre photography
- Campaign images
- Program images
- Board/member images
- Placeholder graphics

### Photo Placeholders

Generic **Photo Coming Soon** imagery was created for areas where final photography is not yet available.

This allows the layout to be completed without leaving broken images or empty visual areas.

---

## `rentals/`

Contains pages and resources related to renting AC4TA facilities.

Pages developed include information such as:

- Rental Information
- Rental Rates
- Technical Specifications
- Bakken Building information

Rental inquiry functionality was also prepared for later WordPress/form integration.

---

## `store/`

Contains pages related to AC4TA's store, merchandise, gift certificates, and related purchasing information.

Arts People retail functionality is used where appropriate.

---

## `support/`

Contains pages related to supporting AC4TA.

Examples include:

- Membership
- Donations
- Sponsorship
- Curtain Appeal
- Other fundraising/support opportunities

---

## `index.html`

The primary homepage.

The homepage includes the main AC4TA brand presentation, navigation, featured content, events, calls to action, and other major entry points into the website.

---

# Major Website Features

## Navigation

The primary navigation includes:

- Home
- Events
- About Us
- Support AC4TA
- Rentals
- Gift Certificates
- Contact Us

Dropdown navigation is used where multiple related pages exist.

The navigation is designed to remain consistent throughout the site.

---

## Hero Sections

Most major pages use a theatrical hero design featuring:

- AC4TA theatre photography
- Dark image overlays
- Gold section tags
- Large white headings
- Centered introductory copy
- Maroon primary buttons

Hero headings were intentionally adjusted throughout the project so major titles remain visually balanced and, when practical, fit on a single line at desktop widths.

---

# Arts People Integration

The website uses Arts People for several AC4TA functions.

Examples include:

```text
Calendar:
https://app.arts-people.com/index.php?calendar=acfta

Donation:
https://app.arts-people.com/index.php?donation=acfta

Membership:
https://app.arts-people.com/index.php?membership=acfta

Season:
https://app.arts-people.com/index.php?theatre_id=1820

Voices Rise:
https://app.arts-people.com/index.php?class=acfta

Retail:
https://app.arts-people.com/index.php?retail=acfta
```

Arts People should remain the source of truth for ticketing, donations, memberships, and other integrated transactional functions where applicable.

---

# Accessibility

Accessibility content was incorporated into the Plan Your Visit experience.

Current accessibility information includes:

- Wheelchair-accessible seating
- Accessible entrances and restrooms
- Assisted listening devices for select performances
- ASL interpretation available upon prior arrangement
- Large-print playbills available by request

The wording should be kept accurate to AC4TA's actual services and availability.

---

# Curtain Appeal

The Curtain Appeal page contains an interactive fundraising progress section.

The page includes:

- Fundraising goal
- Amount raised
- Percentage reached
- Progress bar
- Donor recognition information
- Current/future curtain comparison
- Click-to-enlarge images
- Image lightbox functionality
- Donation CTA

The campaign goal used during development was:

```text
$25,000
```

The JavaScript should read campaign values from the page where possible rather than hard-coding values directly into the script.

The preferred implementation uses `data-raised` and `data-goal` values on the campaign goal element so the content can be updated without rewriting the JavaScript.

---

# Free Events

The Free Events page was created specifically for events that visitors need additional information about when there is no normal ticket-purchase destination.

Current content includes:

### Voices Rise

A community choral program with information and registration through Arts People.

### Brown Bag Lunch

A theatre-organ concert series offered through freewill donation.

### The Mighty Wurlitzer

Information about AC4TA's theatre pipe organ and related programming.

The page also includes a link to the full AC4TA calendar.

---

# WordPress Conversion

The static website was intentionally organized so it can be handed to **Digital Guru**, AC4TA's hosting/web support company, for WordPress conversion.

The WordPress version should preserve the visual design while making normal content editing easier for AC4TA staff.

## Important WordPress Goal

AC4TA staff should be able to perform common tasks such as:

- Change page text
- Change event information
- Replace images
- Update announcements
- Update board member information
- Update campaign amounts
- Edit buttons and links
- Update accessibility information
- Add or remove content

without having to edit HTML or CSS.

The static HTML/CSS/JS files should therefore be treated as the **design and content reference** for the WordPress build.

---

# WordPress Handoff Notes

Digital Guru should receive the complete project folder rather than isolated pages whenever possible.

The following should be included:

```text
about/
assets/
contact/
data/
events/
images/
js/
rentals/
store/
support/
index.html
```

Before handoff:

- Confirm all image files are included.
- Confirm all referenced image filenames are correct.
- Confirm external links.
- Confirm JavaScript files are included.
- Confirm there are no broken local paths.
- Confirm mobile layouts.
- Confirm all major pages are represented.
- Identify any pages still using placeholder imagery.
- Identify any content that still needs final AC4TA approval.

---

# Content That May Still Need Updating

Some areas were intentionally built with temporary content or placeholders so the design could be completed before final materials were available.

These may include:

- Board member photographs
- Other staff/program photographs
- Wurlitzer photography
- Other **Photo Coming Soon** areas
- Final event information
- Fundraising totals
- Future announcements
- Certain technical/rental documentation
- Any content AC4TA staff wants revised before launch

Placeholder imagery should be replaced with final approved photography when available.

---

# Development Philosophy

The project was built around several principles:

### 1. Modern but recognizable

The new site should feel modern without losing AC4TA's theatrical identity.

### 2. Consistent visual language

Pages should share:

- Typography
- Colors
- Buttons
- Section tags
- Hero treatment
- Cards
- Spacing
- Responsive behavior

### 3. Reusable CSS

Reusable components should be styled centrally whenever possible.

Page-specific styles should remain in the appropriate `assets/css/pages/` stylesheet.

### 4. Simple editing after WordPress conversion

The final WordPress implementation should prioritize usability for non-technical staff.

### 5. Mobile-first awareness

Every page should be checked at mobile widths before launch.

---

# Recommended Final Testing Checklist

Before the website is considered ready for production:

## Desktop

- [ ] Homepage reviewed
- [ ] Navigation reviewed
- [ ] Dropdown menus tested
- [ ] Hero headings centered
- [ ] Hero headings fit appropriately
- [ ] Buttons tested
- [ ] Images load correctly
- [ ] Cards align correctly
- [ ] Footer reviewed

## Mobile

- [ ] Navigation/menu tested
- [ ] Hero headings tested
- [ ] Hero text tested
- [ ] Buttons tested
- [ ] Cards stack correctly
- [ ] Images scale correctly
- [ ] No horizontal scrolling
- [ ] Footer stacks correctly
- [ ] Lightbox tested
- [ ] Forms tested

## Links

- [ ] Arts People calendar
- [ ] Arts People ticketing
- [ ] Donations
- [ ] Membership
- [ ] Sponsorship
- [ ] Retail
- [ ] Social media
- [ ] Internal page links
- [ ] Telephone link

## Content

- [ ] Event information current
- [ ] Announcement information current
- [ ] Fundraising totals current
- [ ] Board information current
- [ ] Accessibility information current
- [ ] Placeholder photos identified
- [ ] Final photography added where available

---

# Current Project Status

The AC4TA redesign has progressed through the major visual and structural portions of the project.

Major completed work includes:

- Site-wide visual system
- Navigation
- Homepage
- Major informational pages
- Event pages
- Announcements
- Free Events
- Rental pages
- Support/fundraising pages
- Membership
- Sponsorship
- Gift Certificates
- Curtain Appeal
- Accessibility information
- Board of Directors layout
- Historical/mission content
- Responsive styling
- Placeholder photography system
- Arts People links and integrations

The next major stage is the **WordPress conversion/handoff**, followed by final content entry, testing, and launch preparation.

---

# Maintenance Notes

When adding a new page:

1. Place the HTML file in the appropriate section folder.
2. Add page-specific CSS under:

```text
assets/css/pages/
```

3. Use existing shared components wherever possible.
4. Use the existing color variables instead of introducing new colors.
5. Use the existing typography system.
6. Make sure the page is linked in the navigation if appropriate.
7. Test desktop and mobile.
8. Check every image path.
9. Check every external link.
10. Test interactive JavaScript functionality.

Avoid creating unnecessary one-off styles when an existing component can be reused.

---

# Project Handoff

**Organization:** A Center for the Arts (AC4TA)  
**Location:** Fergus Falls, Minnesota  
**Website:** fergusarts.org  
**Primary platform target:** WordPress  
**Hosting/Web Support:** Digital Guru

This README is intended to provide a high-level map of the project for future development, maintenance, and WordPress conversion.
