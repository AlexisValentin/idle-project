<script lang="ts">
  import { LOCAL_STORAGE_KEYS } from '../constants/storage.constants'
  import { userState } from '../store/userState.svelte'
  import { saveToLocalStorage } from '../utils/storage'

  let isEditingFactoryName = $state(false)

  const getNewFactoryName = () => {
    if (!document) return null

    const htmlElement = document.getElementById(
      'factoryName',
    ) as HTMLInputElement

    if (htmlElement?.value) {
      if (isEditingFactoryName) isEditingFactoryName = false
      saveToLocalStorage(LOCAL_STORAGE_KEYS.FACTORY_NAME, htmlElement.value)

      return htmlElement.value
    }

    return null
  }
</script>

{#if userState.factoryName && !isEditingFactoryName}
  <h2>Your factory name is {userState.factoryName}</h2>
  <button onclick={() => (isEditingFactoryName = true)}>Edit name</button>
{:else}
  <form>
    <label for="factoryName">Please provide a name to your factory:</label>
    <input
      id="factoryName"
      name="factoryName"
      type="text"
      placeholder={userState.factoryName ?? ''}
    />
    <button onclick={() => (userState.factoryName = getNewFactoryName())}
      >Validate</button
    >
    {#if isEditingFactoryName}
      <button onclick={() => (isEditingFactoryName = false)}>Cancel</button>
    {/if}
  </form>
{/if}
