<script lang="ts">
    import { LOCAL_STORAGE_KEYS } from "../constants/storage.constants"
    import { moduleState } from "../store/moduleState.svelte"
    import { saveToLocalStorage } from "../utils/storage"

  let { name } = $props()
  
  const miningState = moduleState.mining

  const miningModuleData = moduleState.mining.find(miningModule => miningModule.label === name)

  const buyMiningModule = () => {
    miningState.forEach(miningModule => {
      if (miningModule.label === name) {
        miningModule.level++
        saveToLocalStorage(LOCAL_STORAGE_KEYS.MINING_MODULES, miningState)
      }
    })
  }
</script>

<button onclick={buyMiningModule} style='display: flex; flex-direction: column; margin: 1rem 0;'>{name} | lvl {miningModuleData?.level ?? 0}</button>

