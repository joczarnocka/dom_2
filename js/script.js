const btnAddItem = (event) => {
    let elemUl = document.querySelector("ul");
    let childrenCnt = elemUl.childElementCount; 
    childrenCnt++;
    let elemLi = document.createElement('li');
    let textLi = document.createTextNode("Item " + childrenCnt);
    elemLi.appendChild(textLi);
    elemLi.setAttribute("class","item")
    elemUl.appendChild(elemLi);
}

let buttonItem=document.querySelector("button");
buttonItem.addEventListener('click',btnAddItem)

