import { LOCAL_STORAGE_KEYS } from '../constants/storage.constants'
import { getFromLocalStorage } from '../utils/storage'

interface UserState {
  factoryName: string | null
}

export const userState = $state<UserState>({
  factoryName: getFromLocalStorage(LOCAL_STORAGE_KEYS.FACTORY_NAME),
})
