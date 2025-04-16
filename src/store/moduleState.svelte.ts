import type { MiningModuleType } from '../constants/modules.constants'
import { LOCAL_STORAGE_KEYS } from '../constants/storage.constants'
import { getFromLocalStorage } from '../utils/storage'

type MiningModuleStateType = MiningModuleType & {
  level: number
}

interface ModuleState {
  mining: MiningModuleStateType[]
}

const initialModuleState = [
  { id: 1, label: 'Iron', level: 0 },
  { id: 2, label: 'Aluminium', level: 0 },
  { id: 3, label: 'Zinc', level: 0 },
  { id: 4, label: 'Copper', level: 0 },
  { id: 5, label: 'Nickel', level: 0 },
]

export const moduleState = $state<ModuleState>({
  mining: JSON.parse(
    getFromLocalStorage(LOCAL_STORAGE_KEYS.MINING_MODULES) ??
      JSON.stringify(initialModuleState),
  ),
})
