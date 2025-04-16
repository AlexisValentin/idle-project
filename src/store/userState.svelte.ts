import { LOCAL_STORAGE_KEYS } from '../constants/storage.constants'
import { getFromLocalStorage } from '../utils/storage'

interface UserState {
  factoryName: string | null
  money: number
}

export const userState = $state<UserState>({
  factoryName: getFromLocalStorage(LOCAL_STORAGE_KEYS.FACTORY_NAME),
  money: Number(
    JSON.parse(getFromLocalStorage(LOCAL_STORAGE_KEYS.USER_MONEY) ?? '0'),
  ),
})
