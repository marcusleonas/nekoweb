<script lang="ts">
  function handleSubmit(e: SubmitEvent) {
    const form = e.currentTarget as HTMLFormElement;

    const formData = new FormData(form);
    document.cookie = `name=${formData.get("name")}`;

    window.location.href = "/home";
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="field">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div class="field">
    <label for="password">Password:</label>
    <input type="password" disabled value="***************" />
  </div>

  <button type="submit">Enter</button>
</form>

<style>
  .field {
    display: inline;
    padding-right: 6px;
  }
  .field label {
    font-size: 16px;
  }
</style>
