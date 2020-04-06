let config = {
  // url: "http://localhost:3001",
  url: "https://apps.wesleyf.net/turnips",
  // url: "",
}

console.log("window.location", window.location)

if (window.location.href.startsWith("https://apps.wesleyf.net")) {
  config = {
    url: "https://apps.wesleyf.net/turnips",
  }
}

export default config
