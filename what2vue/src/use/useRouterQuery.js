import { computed, nextTick, getCurrentInstance } from '@vue/composition-api'

export let pendingQuery

export function useRouteQuery(
  name,
  mode = 'single',
  { deleteIf = (searchValue) => !searchValue } = {}
) {
  const currentInstance = getCurrentInstance()

  const format = (searchKey) => {
    if (mode === 'multi') {
      if (Array.isArray(searchKey)) {
        return [...searchKey] || []
      } else {
        return (searchKey && [searchKey]) || []
      }
    } else {
      return searchKey || ''
    }
  }

  const updateQuery = (value) => {
    const newQuery = pendingQuery || { ...currentInstance.proxy.$route.query }
    newQuery[name] = value

    if (deleteIf(value)) delete newQuery[name]

    if (!pendingQuery) {
      pendingQuery = newQuery
      nextTick(() => {
        currentInstance.proxy.$router
          .push({ query: pendingQuery })
          .catch(() => null)
        pendingQuery = null
      })
  }

  return computed({
    get: () => format(currentInstance.proxy.$route.query[name]),
    set: updateQuery,
  })
}
