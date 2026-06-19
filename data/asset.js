// Prefix a path to a file in /public with the GitHub Pages base path.
// Locally NEXT_PUBLIC_BASE_PATH is "" so paths stay at the site root; on
// Pages it becomes "/<repo>" so the asset resolves under the subpath.
// Use for plain <img src> — next/image would add the prefix automatically,
// but this site uses raw <img> tags.
export const asset = (path) => (process.env.NEXT_PUBLIC_BASE_PATH || "") + path;
