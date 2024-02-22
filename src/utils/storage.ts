import { STORAGE_PREFIX } from '@/config/cache'

function useStorage($storage: Storage) {
  /**
   * 根据 key 判断 storage 中是否有储存值
   * @param key storage key
   */
  const has = (key: string) => {
    return !!$storage.getItem(`${STORAGE_PREFIX}${key}`)
  }

  /**
   * 根据 key 值获取储存在 storage 中的值
   * @param key storage key
   */
  const get = (key: string): any => {
    let value = $storage.getItem(`${STORAGE_PREFIX}${key}`)
    if (value) {
      value = JSON.parse(value)
      return value
    }
    return value
  }

  /**
   * 根据 key 值向 storage 中储存值
   * @param key storage key
   * @param value 需要储存在 storage 中的值
   */
  const set = (key: string, value: any) => {
    return $storage.setItem(
      `${STORAGE_PREFIX}${key}`,
      value ? JSON.stringify(value) : value,
    )
  }

  /**
   * 根据 key 值移除储存在 storage 中的值
   * @param key storage key
   */
  const remove = (key: string) => {
    return $storage.removeItem(`${STORAGE_PREFIX}${key}`)
  }

  /**
   * 移除除了 key 之外的所有储存在 storage 中的值
   * @param key storage key
   */
  const clearExcept = (key: string) => {
    for (let i = $storage.length; i > 0; i--) {
      const itemKey: string | null = $storage.key(i)
      if (itemKey && itemKey !== `${STORAGE_PREFIX}${key}`)
        $storage.removeItem(itemKey)
    }
  }

  /**
   * 移除所有储存在 storage 中的值
   */
  const clearAll = () => {
    $storage.clear()
  }

  return {
    has,
    get,
    set,
    remove,
    clearExcept,
    clearAll,
  }
}

const SessionStorageService = useStorage(
  window.sessionStorage || sessionStorage,
)
const LocalStorageService = useStorage(window.localStorage || localStorage)

export { SessionStorageService, LocalStorageService }
