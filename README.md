# SUGI Retreats – Website

A clean, modern, fully responsive single-page website for **SUGI Retreats**.

## Quick Start

1. Open `index.html` in any browser (or host the folder on any web server / Netlify / Vercel / GitHub Pages).
2. All files are self-contained — no build step required.

## Folder Structure

```
sugi-retreats/
├── index.html          ← Main page (edit content here)
├── css/
│   └── styles.css      ← All styling (colors, layout)
├── js/
│   └── main.js         ← Navigation & scroll effects
├── images/             ← Put your photos here
│   ├── hero.jpg
│   ├── about.jpg
│   ├── villa.jpg
│   ├── cottage.jpg
│   ├── dorm.jpg
│   ├── gallery-1.jpg … gallery-6.jpg
│   └── favicon.png
└── README.md
```

## How to Add / Replace Photos

1. Export your photos as JPG or WebP (recommended width: 1200–1920 px for hero, 800 px for cards).
2. Name them exactly as shown above (or update the `src` attributes in `index.html`).
3. Drop the files into the `images/` folder.
4. Refresh the page — done!

**Placeholder images** are already set with Unsplash fallbacks, so the site looks good even before you add your own photos.

## How to Edit Content

- **Text / descriptions** → Edit directly in `index.html` (search for the section you want).
- **Phone number / WhatsApp** → Search for `7760103261` and replace everywhere.
- **Map** → The Google Maps embed and links already point to your location (`https://maps.app.goo.gl/NHAf7XRVvAtQZvk7A`).
- **Colors** → Open `css/styles.css` and change the values under `:root`.

## Key Features

- Clear **Call** and **WhatsApp** CTAs in header, hero, location, contact section + floating WhatsApp button
- Embedded Google Map with “Open in Google Maps” & “Get Directions”
- Mobile-friendly responsive design
- Smooth scrolling navigation
- Easy-to-extend gallery (just copy a gallery-item block)

## Hosting Suggestions

- **Free & easy**: Drag the whole folder to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com)
- GitHub Pages, Cloudflare Pages, or any traditional hosting also work perfectly.

---

Made for SUGI Retreats · Near Mysore, Karnataka
