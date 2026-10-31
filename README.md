# Blåtur 2027

Static info page for the blåtur. The page content lives in `INFO.md` and is rendered into `public/index.html`.

## Usage (locally)

1. Install dependencies (once): `npm install`
2. Edit `INFO.md` with the meetup time, location, packing list, etc.
3. Build the page: `npm run build`
4. Commit both `INFO.md` and `public/index.html`.

`public/index.html` is the whole site and can be served by any static host.

## Deploy

When you push changes to `INFO.md` (or the build files) to `main`, `.github/workflows/build.yml` rebuilds `public/index.html` and commits it back if it changed. So you can edit `INFO.md` directly on GitHub and skip steps 1, 3 and 4; run `git pull` afterwards before editing locally.

## Markdown tips

- `## Heading` creates a section.
- Lines directly below each other are joined into one line. Leave a blank line between them, or make them a list (`- Tid: 07:00`).
- Tables work well for time and place:

  ```markdown
  | Når   | Hvor                       |
  |-------|----------------------------|
  | 07:00 | Starbucks, Oslo Gardermoen |
  ```

- `- [ ] Sovepose` creates a checkbox item for the packing list.
- `> Husk godt humør` creates a highlighted note.

## Styling

The CSS is in the `<style>` block in `public/index.html`. The build only replaces the content between `<!-- INFO:START -->` and `<!-- INFO:END -->`, so style changes are kept.
