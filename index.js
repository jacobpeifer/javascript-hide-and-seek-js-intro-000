function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')
  
  for (let i = 0, l = rankedList.length; i < l; i++){
    let children = rankedList[i].children

    for (let a = 0, b = children.length; a < b; a++){
      children[a].innerHTML = parseInt(children[a].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nodeChild = node.children[0]
  while (nodeChild){
    node = nodeChild
    nodeChild = node.children[0]
  }
  return node
}
