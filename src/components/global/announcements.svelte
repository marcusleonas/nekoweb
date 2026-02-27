<script lang="ts">
  import { SITE_ANNOUNCEMENT } from "../../consts";
  let closed = $state(false);
</script>

{#if SITE_ANNOUNCEMENT.enabled}
  {#if !closed}
    <div>
      <p>
        {SITE_ANNOUNCEMENT.message}
      </p>
      <button onclick={() => (closed = true)}>close</button>
    </div>
  {/if}
{/if}

<style>
  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 14px;
    align-items: center;
    justify-content: center;

    padding: 15px;
    background: var(--background);
    border: 1px solid var(--border);
    backdrop-filter: blur(3px);
    border-radius: 3px;
  }

  p {
    padding: 0;
  }

  button {
    background: var(--heading-colour);
    border: 1px solid var(--border);
    color: var(--foreground);
    height: max-content;
    padding: 4px 8px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Iosevka", monospace;
  }

  button:hover {
    background: var(--glow);
    animation: link-flicker 0.6s steps(1) forwards;
  }
</style>
