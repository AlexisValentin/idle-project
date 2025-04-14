<script lang="ts">
  import { LOCAL_STORAGE_KEYS } from "../constants/storage.constants"
  import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage"

  let factoryName = $state<string | null>(getFromLocalStorage(LOCAL_STORAGE_KEYS.FACORY_NAME))

  const getNewFactoryName = () => { 
    if (!document) return null

    const htmlElement = document.getElementById('factoryName') as HTMLInputElement

    if (htmlElement?.value) {
      saveToLocalStorage(LOCAL_STORAGE_KEYS.FACORY_NAME, htmlElement.value)
      
      return htmlElement.value
    }

    return null
  }
</script>

<h1>Welcome to the idle project</h1>

{#if factoryName}
  <h2>Your factory name is {factoryName}</h2>
{:else}
  <form>
    <label for="factoryName">Please give your factory a name:</label>
    <input id="factoryName" name="factoryName" type="text" />
    <button onclick={() => factoryName = getNewFactoryName()}>Validate</button>
  </form>
{/if}