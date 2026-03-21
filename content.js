function rewrite(url) {
  return url
    .replace(/^https?:\/\/(www\.)?x\.com\//, "https://fxtwitter.com/")
    .replace(/^https?:\/\/(www\.)?twitter\.com\//, "https://fxtwitter.com/");
}

document.addEventListener("copy", (event) => {
  const selection = document.getSelection()?.toString();
  if (!selection) return;

  if (/https?:\/\/(www\.)?(x|twitter)\.com\//.test(selection)) {
    event.preventDefault();
    event.clipboardData.setData("text/plain", rewrite(selection));
  }
});
