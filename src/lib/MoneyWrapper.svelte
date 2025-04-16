<script lang="ts">
  import { userState } from "../store/userState.svelte"

  console.log('USER STATE -> ', userState)
</script>

<div style='position: fixed; top: 1rem; right: 1rem;'>{userState.money}</div>