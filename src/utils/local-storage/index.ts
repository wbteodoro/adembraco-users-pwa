export function getStorageItem(key: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(key)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: unknown) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(key, data)
}
