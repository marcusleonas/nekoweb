<script lang="ts">
  function getCookie(n: string) {
    var match = document.cookie.match(new RegExp("(^| )" + n + "=([^;]+)"));
    if (match) return match[2];
  }

  let name = $state<string>("Resident");

  const returnedName = getCookie("name");
  if (returnedName && returnedName !== "") {
    name = returnedName;
  }
</script>

<span>{name}</span>
