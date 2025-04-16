<script lang="ts">
  import { browser } from '$app/environment'
  
  import FactoryName from '$lib/FactoryName.svelte'
  import MiningModule from '$lib/MiningModule.svelte'
    import MoneyWrapper from '$lib/MoneyWrapper.svelte'
    
  import { MINING_MODULES } from '../constants/modules.constants'
    import { userState } from '../store/userState.svelte'
</script>

<h1>Idle project</h1>

{#if browser}
  <FactoryName />
  {#if userState.factoryName}
    <MoneyWrapper />
    <section style='margin-top: 3rem;'>
      <h2>Mining modules </h2>
      {#each MINING_MODULES as miningModule (miningModule.id)}
        <MiningModule name={miningModule.label} />
      {/each}
    </section>
  {/if}
{/if}
