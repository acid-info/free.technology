type DataObject = {
  [key: string]: Array<any>
}

export const calculatElementCount = (data: DataObject): number => {
  if (!data) {
    return 0
  }
  return Object.keys(data).reduce(
    (sum, element) => sum + data[element].length,
    0,
  )
}
