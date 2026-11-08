# anndtai.com

Two views of the same content, from one source:

- **`/`** - an interactive isometric 3D world (three.js)
- **`/about/`, `/qualifications/`, `/projects/`, `/research/`, `/teaching/`** - plain,
  fast, crawlable pages with identical content and no JavaScript

Both are generated from **one file**, so they can never drift apart.

## Changing the content

Everything you will normally want to edit lives in **`src/content.js`**.

- `INFO` - the detail blocks (publications, courses, testimonials, awards, the dogs...)
- `CONTENT` - the short blurbs shown on the island before you walk into a building

Edit the text, commit, and the site rebuilds and deploys itself (see below).
A change to a publication appears in the 3D room marker *and* on `/research/`
automatically - there is no second copy to keep in sync.

### Adding a publication

Open `src/content.js`, find `lib_shelves`, and add a line to the right list:

```js
'Choe (2027). Title of the paper. <i>Journal Name</i>, 12(3), 1-20. ' + A('https://doi.org/...', 'DOI'),
```

### Adding a course

Find `sch_desks` and add:

```js
'<b>SLS 999</b> Course Title <span class="muted">next semester</span>',
```

### Adding a testimonial

Find `sch_testimonials` and add:

```js
+ Q('The quote text.', 'SLS 480E · Fall 2026')
```

### Adding a whole new section

1. Add its blocks to `INFO` in `src/content.js`.
2. Add an entry to the `SECTIONS` array at the top of `build.mjs` (id, heading,
   which `INFO` keys it contains, and a meta description).

That is enough for the plain pages, the nav, and the sitemap. Putting it in the 3D
world needs a new building, which is a bigger job in `src/main.js`.

## Deploying

**This is already deployed.** The built site sits at the repo root, which is exactly
what your existing GitHub Pages setting (**Deploy from a branch -> main -> /**) serves.
No settings were changed, the custom domain and HTTPS were untouched, and there was no
downtime. v1's `index.html` is still in the git history if you ever want it back.

So: push to `main` and the site updates. That's it.

### Updating the content

Edit `src/content.js`, then rebuild and commit the output:

```bash
npm install          # first time only
npm run build        # writes ./site
cp -r site/. .       # copy the built files to the repo root
git add -A && git commit -m "Update content" && git push
```

A change to a publication appears in the 3D library *and* on `/research/` - one source,
no second copy to keep in sync.

### Optional: edit from the browser instead

If you would rather change text in GitHub's web editor and have the site rebuild itself
with no local setup, flip one setting:

**Settings -> Pages -> Build and deployment -> Source**: change **Deploy from a branch**
to **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` then builds `site/` in CI on every push
to `main` and publishes it. After that, editing `src/content.js` in the web editor and
committing is the whole job - about a minute to go live. The files at the repo root
become unused but harmless.

Do it in that order - setting first, then push. The reverse has no bad effect here,
since the root files keep serving until the setting changes.

### Preview locally

```bash
npm run serve        # http://localhost:8080
```

`file://` will not work: the pages link to each other with absolute paths like `/research/`.

### What carried over from v1

- `anndtai.com/#about`, `#qualifications`, `#projects`, `#research` and `#teaching`
  all still work - each opens the plain view scrolled to that section, so existing
  links and search results keep working.
- All four social links (LinkedIn, GitHub, Google Scholar, Dribbble) and every DOI.
- The favicon, and `profile.jpg` (kept and served, though v2 does not use it).
- `#hero`, `#grants` and `#awards` are gone as anchors - grants and awards now live
  inside `/qualifications/`.

## How the build works

`build.mjs` does three things:

1. Bundles `src/main.js` (the 3D world) with esbuild into a hashed, cacheable
   `world.<hash>.js`. `index.html` stays about 33KB so it paints immediately, and
   the world file is only requested on devices that actually support WebGL2.
2. Renders the plain view from `INFO` **at build time**, so the text is present in the
   HTML before any JavaScript runs - which is what makes it crawlable and screen-reader friendly.
3. Writes `site/` with one folder per section, plus `sitemap.xml`, `robots.txt`,
   `CNAME` and `404.html`.

## Browser support and fallbacks

The 3D world needs **WebGL2** (Safari 15+, Chrome, Firefox, Edge; iOS 15+).

If WebGL2 is missing, or the 3D fails to start for any reason, the page falls back
to the plain readable view automatically instead of hanging on the loading screen.
With JavaScript switched off entirely, the plain view still renders.

The section pages under `/about/`, `/research/` and so on use no JavaScript at all,
so they work everywhere.

## Files

```
src/content.js    all the words - this is the file you edit
src/main.js       the 3D world
src/shell.html    page shell, all CSS
build.mjs         the build, and the section/SEO config
site/             build output (gitignored; its contents are copied to the repo root)
```

## Performance

Measured on a simulated Fast 3G phone:

| | content readable | 3D ready | downloaded |
|---|---|---|---|
| first visit | 0.6s | 4.4s | ~200KB gzipped |
| repeat visit | 0.8s | 1.2s | ~11KB |
| a section page | 0.7s | - | ~22KB |

The world lives in its own hashed file so browsers cache it between visits, and the
filename changes whenever the code does, so nobody gets a stale copy.
