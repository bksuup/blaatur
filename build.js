// Renders INFO.md into public/index.html between the INFO:START/END markers.
import { readFileSync, writeFileSync } from "node:fs";
import { marked } from "marked";

marked.use({
  renderer: {
    // Tickable task items; the <label> makes the text clickable and names the checkbox for screen readers.
    listitem(item) {
      if (!item.task) return false;
      // first block is the item text (a "paragraph" in loose lists); the rest is e.g. a nested list
      const [first, ...rest] = item.tokens;
      const checked = item.checked ? " checked" : "";
      return `<li><label><input type="checkbox"${checked}> ${this.parser.parseInline(first.tokens)}</label>${this.parser.parse(rest)}</li>\n`;
    },
  },
});

const page = "public/index.html";
const html = marked.parse(readFileSync("INFO.md", "utf8"));
const out = readFileSync(page, "utf8").replace(
  /(<!-- INFO:START -->\n)[\s\S]*(<!-- INFO:END -->)/,
  // function replacement so "$" in INFO.md isn't treated as a pattern
  (_, start, end) => start + html + end,
);
if (!out.includes(html)) throw new Error(`INFO markers not found in ${page}`);
writeFileSync(page, out);
