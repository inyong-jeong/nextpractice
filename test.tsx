let arr2: number[] = [1, 2, 3]

let arr: Array<number> = [1, 2, 3]

function getText<T>(text: T): T {
  return text
}
// let a: string = 3
getText<string>('hi')
