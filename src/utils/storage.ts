import type { LOCAL_STORAGE_KEYS } from '../constants/storage.constants'

export const getFromLocalStorage = (key: LOCAL_STORAGE_KEYS) => {
  if (typeof localStorage !== 'undefined') return localStorage.getItem(key)

  return null
}

export const saveToLocalStorage = (key: LOCAL_STORAGE_KEYS, value: any) => {
  if (typeof localStorage !== 'undefined')
    return localStorage.setItem(key, value)

  return null
}
