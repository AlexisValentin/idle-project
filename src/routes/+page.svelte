<script lang="ts">
  import { browser } from '$app/environment'
  import FactoryName from '$lib/FactoryName.svelte'
</script>

<h1>Welcome to the idle project</h1>

{#if browser}
  <FactoryName />
{/if}
