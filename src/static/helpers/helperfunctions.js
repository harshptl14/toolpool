//Function to copy text to clipboard
export function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

//Function to copy text as JSON
export function copyAsJSON(json) {
  navigator.clipboard.writeText(JSON.stringify(json));
}