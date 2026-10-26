# Portfolio Website

A responsive, accessible personal portfolio for **Agnetta Mawia**, built with plain HTML, CSS and JavaScript (no frameworks or build tools).

## Features

- Responsive layout that works on phones, tablets and desktops
- Light and dark theme that remembers your choice
- Mobile navigation menu and highlighted current section
- Smooth scroll and reveal-on-scroll animations (respects reduced-motion settings)
- Contact form with validation that opens the visitor's email app
- Semantic HTML, keyboard focus styles and ARIA labels for accessibility

## Tech stack

HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript (ES6)

## Project structure

```
portfolio-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── LICENSE
└── README.md
```

## Run locally

No installation needed. Open `index.html` in your browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push this project to a repository named `portfolio-website`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
4. After a minute your site will be live at `https://agnettamawia927-afk.github.io/portfolio-website/`.

## Customise

- Edit your details, projects and links in `index.html`.
- Change colours in the `:root` and `[data-theme="dark"]` blocks at the top of `css/style.css`.

## Author

**Agnetta Mawia** · [GitHub](https://github.com/agnettamawia927-afk) · agnettamawia927@gmail.com

## License

Released under the [MIT License](LICENSE).
