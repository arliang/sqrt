const SQRT_MAP = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

var parts = [29, 37, 00, 00],
    roots = [],
    remainders = [],
    dividers = []

function getFirstRoot(num) {
  for (var i = SQRT_MAP.length - 1; i > -1; i--) {
    if (num >= SQRT_MAP[i]) {
      return i;
    }
  }
}

function currentRoot(){
  return parseInt(roots.join(''))
}

function sqrt(){
  roots[0] = getFirstRoot(parts[0])
  remainders[0] = parts[0] - roots[0] * roots[0]

  remainders[0] = remainders[0] * remainders[0] + parts[1]

  dividers[0] = 20 * currentRoot()
  roots[1] = remainders[0] / dividers[0]

  dividers[0] = dividers[0] + roots[1]
  if(dividers[0] * currentRoot() > remainders[0]){
    dividers[0] = dividers[0] - roots[1]
    roots[1]--
    dividers[0] = dividers[0] + roots[1]
  }

  i = 1
  while(i < parts.length){
  dividers[i - 1] = 20 * currentRoot()
  roots[i] = remainders[i - 1] / dividers[i - 1]

  dividers[i - 1] = dividers[i - 1] + roots[i]
  if(dividers[i - 1] * currentRoot() > remainders[i - 1]){
    dividers[i - 1] = dividers[i - 1] - roots[i]
    roots[i]--
    dividers[i - 1] = dividers[i - 1] + roots[i]
  }
  i++
  }
  console.log(roots)
}

sqrt()