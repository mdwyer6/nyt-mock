function expand(index) {
  return {
    type: 'EXPAND_LISTING',
    index
  }
}

function add(name) {
  return {
    type: 'ADD_DEPARTMENT',
    name
  }
}