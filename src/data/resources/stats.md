---
title: nekoweb stats
category: script
date: 2026-03-08
---

a simple script to fetch your site stats. based off [maxpixel's](https://maxpixels.moe/resources/nekoweb-stats/) script,
but edited to work with typescript.

```ts
// Remove ": string" if not using typescript
export async function getStats(domain: string) {
  const req = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
  const json: APIResponse = await req.json(); // Remove ": APIResponse" if not using typescript

  const createdAt = new Date(json.created_at).toLocaleDateString("en-GB");
  const updatedAt = new Date(json.updated_at).toLocaleDateString("en-GB");

  const viewsEl = document.querySelector("#sitestats-views");
  const followersEl = document.querySelector("#sitestats-followers");
  const createdAtEl = document.querySelector("#sitestats-created");
  const updatedAtEl = document.querySelector("#sitestats-updated");

  if (viewsEl) viewsEl.innerHTML = json.views.toString();
  if (followersEl) followersEl.innerHTML = json.followers.toString();
  if (createdAtEl) createdAtEl.innerHTML = createdAt;
  if (updatedAtEl) updatedAtEl.innerHTML = updatedAt;
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

## usage

NOTE: for vanilla js, remove all the types (the interface at the bottom, and the ": string" after some variables)!!

add a script tag to the bottom of your page, like this:

```html
<script src="/path/to/script.js">
  await getStats("yourdomain.nekoweb.org")
</script>
```

**or for frameworks like astro:**

```html
<script>
  import { getStats } from "../../js/getStats";
  await getStats("n3bula.lol");
</script>
```
