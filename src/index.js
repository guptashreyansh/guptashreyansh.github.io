import "./assets";
import "./style.css"

import * as RSSParser from "../node_modules/rss-parser/dist/rss-parser.min.js";
import { RSS_URL, CORS_PROXY } from "./constants.js";

function getBlogFeedContainer() {
  return document.querySelector("#blog-feed-container")
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const selectedDate = date.toDateString().split(" ").slice(1)
  selectedDate[1] = `${selectedDate[1]},`
  return `${selectedDate.join(" ")}`
}

function appendBlog(item) {
  const container = document.createElement("div");
  container.classList.add("mb-6")
  const html = `
    <h3 class="blog-title"><a class="hover:underline" target="_blank" href=${item.guid}>${item.title}</a></h3>
    <div class="blog-content">
      <div class="mb-1">${formatDate(item.pubDate)}</div>
      <p class="mb-2">${item.content}</p>
      <div>${item.categories.map(category => `<div class="blog-category">${category}</div>`).join("")}</div>
    </div>
  `;

  container.innerHTML = html;
  getBlogFeedContainer().appendChild(container)
}

function queryHashnodeFeed() {
  let parser = new RSSParser();
  parser.parseURL(CORS_PROXY + RSS_URL, function (err, feed) {
    if (err) throw err;

    getBlogFeedContainer().innerHTML = "";
    feed.items.slice(0, 5).forEach(function (entry) {
      appendBlog(entry)
    })
  })
}

function addOnLoadListener() {
  window.addEventListener("load", queryHashnodeFeed)
}

function main() {
  addOnLoadListener()
}

main()
