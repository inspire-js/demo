# inspirejs.org

The [inspirejs.org](https://inspirejs.org) website — the introductory [Inspire.js](https://github.com/inspire-js/inspire.js) demo deck (`index.html`) plus the **default theme** (`theme.css` + `style/`). The theme lives here for now.

## Develop

Dependencies (the core engine + plugins) are resolved with [nudeps](https://nudeps.dev) — no bundler, no build:

```sh
npm install        # installs deps + generates the import map via nudeps hooks
npx serve .        # or any static server
```

`index.html` loads the generated import map, then imports the core and plugins by bare specifier:

```html
<script src="importmap.js"></script>
<link href="client_modules/inspirejs.org/inspire.css" rel="stylesheet" />
<link href="theme.css" rel="stylesheet" />
...
<script type="module">
	import "inspirejs.org";
	import "@inspirejs/plugins";
</script>
```

## Deploy

Deployed to `inspirejs.org` via Netlify. The `prepare` hook runs nudeps on install, copying deps into `client_modules/` and generating `importmap.js`. [_redirects](_redirects) keeps legacy absolute URLs (`/inspire.mjs`, `/inspire.css`, `/src/*`, `/plugins/*`) resolving to their new `client_modules` locations.

## Theme

The default theme is `theme.css`, which imports `style/` (base, partials, components). Copy these into your own deck to reuse the look, or write your own.

## License

MIT © Lea Verou and contributors
