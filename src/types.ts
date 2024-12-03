export type JsonableObj = { [key: string]: Jsonable }
export type JsonableArr = Jsonable[]
export type Jsonable =
  | JsonableArr
  | JsonableObj
  | string
  | number
  | boolean
  | null
