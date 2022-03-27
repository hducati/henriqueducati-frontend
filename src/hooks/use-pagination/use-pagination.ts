export function usePagination<T = unknown[]>(list: T[], page = 1, limit = 6) {
  let paginatedList = []
  const endAt = page * limit
  const startAt = (page - 1) * limit

  const firstElements = list.slice(0, endAt)

  paginatedList =
    firstElements.length === list.length
      ? [...firstElements]
      : [...list.slice(startAt, endAt)]

  const indexOfLastElement = list.lastIndexOf(list[list.length - 1])

  const endOfPagination = isEndOfPagination(indexOfLastElement, endAt)
  const hasItemsToScroll = hasMoreThanSixItems(list)

  return {
    firstElements,
    paginatedList,
    endOfPagination,
    hasItemsToScroll
  }
}

function isEndOfPagination(lastIndex: number, endAt: number) {
  return endAt > lastIndex
}

function hasMoreThanSixItems<T = unknown[]>(list: T[]) {
  return list.length > 6
}
