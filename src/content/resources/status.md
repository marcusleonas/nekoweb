---
title: nekoweb status
date: 2026-03-15
---

A simple script to fetch your site stats. Based off [maxpixel](https://maxpixels.moe/resources/nekoweb-stats/)'s script, but edited to support TypeScript
better.

```ts
// Remove ": string" if not using typescript
export async function getStats(domain: string) {
  const viewsEl = document.querySelector("#sitestats-views");
  const followersEl = document.querySelector("#sitestats-followers");
  const createdAtEl = document.querySelector("#sitestats-created");
  const updatedAtEl = document.querySelector("#sitestats-updated");

  try {
    const req = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
    const json: APIResponse = await req.json(); // Remove ": APIResponse" if not using typescript

    const createdAt = new Date(json.created_at).toLocaleDateString("en-GB");
    const updatedAt = new Date(json.updated_at).toLocaleDateString("en-GB");

    if (viewsEl) viewsEl.innerHTML = json.views.toString();
    if (followersEl) followersEl.innerHTML = json.followers.toString();
    if (createdAtEl) createdAtEl.innerHTML = createdAt;
    if (updatedAtEl) updatedAtEl.innerHTML = updatedAt;
  } catch (error) {
    console.error("something went wrong", error);
    if (viewsEl) viewsEl.innerHTML = "please refresh the page";
    if (followersEl) followersEl.innerHTML = "please refresh the page";
    if (createdAtEl) createdAtEl.innerHTML = "please refresh the page";
    if (updatedAtEl) updatedAtEl.innerHTML = "please refresh the page";
  }
}

// REMOVE IF NOT USING TYPESCRIPT
interface APIResponse {
  domain: string;
  title: string;
  updates: number;
  followers: number;
  views: number;
  created_at: number;
  updated_at: number;
}
```

```html
<p>views: <span id="sitestats-views">loading...</span></p>
<p>followers: <span id="sitestats-followers">loading...</span></p>
<p>created: <span id="sitestats-created">loading...</span></p>
<p>updated: <span id="sitestats-updated">loading...</span></p>
```
