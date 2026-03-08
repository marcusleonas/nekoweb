// Example API Response:
///
// domain: 'n3bula.lol',
// title: "★ n3bula's site ★",
// updates: number,
// followers: number,
// views: number,
// created_at: unix timestamp,
// updated_at: unix timestamp

export async function getStats(domain: string) {
  const req = await fetch(`https://nekoweb.org/api/site/info/${domain}`);
  const json: APIResponse = await req.json();

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

interface APIResponse {
  domain: string;
  title: string;
  updates: number;
  followers: number;
  views: number;
  created_at: number;
  updated_at: number;
}
