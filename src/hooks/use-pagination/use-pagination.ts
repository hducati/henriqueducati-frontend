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

  return {
    firstElements,
    paginatedList,
    endOfPagination
  }
}

function isEndOfPagination(lastIndex: number, endAt: number) {
  return endAt > lastIndex
}
