<script lang="ts">
  import { onDestroy } from "svelte";

  const USERNAME = "marcusleonas";
  const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

  let currentSong = $state<NowPlayingResponse | null>(null);
  let nowPlaying = $state(false);
  let loading = $state(true);

  const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json: NowPlayingResponse = await request.json();

    const isPlaying = json.track["@attr"]?.nowplaying === "true";
    nowPlaying = isPlaying;
    loading = false;

    if (!isPlaying) {
      currentSong = null;
      return;
    }

    currentSong = json;
  };

  getTrack();
  const interval = setInterval(getTrack, 10000);
  onDestroy(() => clearInterval(interval));

  type ImageSize = "small" | "medium" | "large" | "extralarge";

  interface TrackImage {
    "#text": string;
    size: ImageSize;
  }

  interface TrackAttr {
    nowplaying: string;
  }

  interface TrackArtist {
    "#text": string;
    mbid: string;
  }

  interface TrackAlbum {
    "#text": string;
    mbid: string;
  }

  interface Track {
    "@attr": TrackAttr;
    album: TrackAlbum;
    artist: TrackArtist;
    image: TrackImage[];
    mbid: string;
    name: string;
    streamable: string;
    url: string;
  }

  interface NowPlayingResponse {
    track: Track;
  }
</script>

{#if loading}
  <div class="now-playing">
    <p>Loading...</p>
  </div>
{:else if currentSong && nowPlaying}
  <div class="now-playing">
    <img
      src={currentSong.track.image.find((t) => t.size === "medium")?.["#text"]}
      alt={`Album artwork for: ${currentSong.track.name}`}
    />
    <div class="track-info">
      <p>
        <a class="track-name" href={currentSong.track.url}>
          {currentSong.track.name}
        </a>
      </p>
      <p class="track-artist">{currentSong.track.artist["#text"]}</p>
    </div>
  </div>
{:else}
  <div class="now-playing">
    <p>Not currently playing</p>
  </div>
{/if}

<style>
  .now-playing {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  .now-playing .track-info p {
    padding: 0;
  }
</style>
