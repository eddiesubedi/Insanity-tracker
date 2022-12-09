<script>
  import "../app.css";
  import {loading} from "../store/stores.js";
</script>

{#if !$loading}
<main>
  <slot />
</main>
{/if}