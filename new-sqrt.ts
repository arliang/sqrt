namespace newSqrt{
  type numbers = number[]

  interface resultSet {
    parts: numbers,
    roots: numbers,
    remainders: numbers,
    index: number,
    reducers: numbers,
    origin_number: number
  }

  // --- start ---

  const SQRT_MAP = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

  var set:resultSet = {
    parts: [],
    roots: [],
    remainders: [],
    index: -1,
    reducers: [],
    origin_number: 0
  }

  function getParts() {
    var result = [], { origin_number: tmp } = set
    var i = 100
    while (tmp > 0) {
      result.unshift(tmp % i)
      tmp = Math.floor(tmp / i)
    }
    return result
  }

  function getFirstRoot() {
    const {origin_number: num} = set
    for (let i = SQRT_MAP.length - 1; i > -1; i--) {
      if (num >= SQRT_MAP[i]) {
        return i
      }
    }
    return 0
  }


  function tryRoot() {

  }

  function getPreRoot(){
    return parseInt(set.roots.join(''))
  }

  function getDivider(){

  }

  function main(num:number){
    set.origin_number = num
    set.parts = getParts()
  }
}