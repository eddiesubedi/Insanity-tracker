<script>
  import "../app.css";
  import {loading} from "../store/stores.js";
</script>

{#if !$loading}
<main class="m-10 overflow-hidden">
  <slot />
</main>
{/if}