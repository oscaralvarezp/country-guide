// input: 252135 output: 252,135
export function formatNumber(number) {
  return number.toLocaleString('en-US')
}

// input: United Kingdom output: united-kingdom
export function slugify(text) {
  return text
    .toString()                           // Cast to string (optional)
    // .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase()                  // Convert the string to lowercase letters
    .trim()                                  // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-')            // Replace spaces with -
    // .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

// input: united-kingdom output: united kingdom
export function quitDashes(text) {
  return text
          .toString()
          .toLowerCase()
          .trim()
          .replace(/-/g, ' ')
}