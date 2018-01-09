roots[0] = get from SQRT_MAP
remainder[0] = parts[0] - sqrt[0] * sqrt[0]

remainder[0] = remainder[0] ^ 2 + parts[1]

divider[0] = 20 * currentRoot()
try roots[1] = remainder[0] / divider[0]

divider[0] = divider[0] + roots[1]
if(divider[0] * currentRoot() > remainder[0]){
  divider[0] = divider[0] - roots[1]
  roots[1]--
  divider[0] = divider[0] + roots[1]
}

i = 1
while(i < parts.length){
divider[i - 1] = 20 * currentRoot()
try roots[i] = remainder[i - 1] / divider[i - 1]

divider[i - 1] = divider[i - 1] + roots[i]
if(divider[i - 1] * currentRoot() > remainder[i - 1]){
  divider[i - 1] = divider[i - 1] - roots[i]
  roots[i]--
  divider[i - 1] = divider[i - 1] + roots[i]
}
i++
}