var divid = 0;
/**
 * 
 * @param {*} left 
 * @param {*} top 
 * @param {*} content 
 * @param {*} color 
 * @param {*} parent 
 */
function createBubble(left, top, content, parent, color){
  console.log(parent);
  divid ++;
  var bid = "bubble" + divid;
  var divBubble = document.createElement("div");
  var pContent = document.createElement("p");
  divBubble.setAttribute("class", "bubble");
  divBubble.setAttribute("id", bid);
  divBubble.setAttribute("draggable", "true");
  divBubble.style.top = top;
  divBubble.style.left = left;
  divBubble.style.background = color;
  pContent.innerHTML = content;
  
  divBubble.appendChild(pContent);
  parent.appendChild(divBubble);
}
