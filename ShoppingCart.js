var txtItem= document.querySelector("#txtItemName");
var txtPrice= document.querySelector("#txtPrice");
var ddlQuantity= document.querySelector("#ddlQuantity");
var btnAddItem= document.querySelector("#btnAdd");
var mainDivList= document.querySelector("#divAllItem");

btnAddItem.addEventListener("click", addItem, false)

function addItem()
{
  if(txtItem.value!=="" && txtPrice.value!==0 && ddlQuantity.options.lenght!==0)
  {
    createTheListSection();
  }
  else
  {
    alert("please enter all the field - Item, quantity and price.");
  }
}

function createTheListSection()
{
  let divRow= createNewElement("div", ["row","SetRow"]);
  let divCol1= createNewElement("div",["col-sm-6","SetCol1"]);
  let divCol2= createNewElement("div",["col-sm-6","SetCol2"]);
  divcol1=createFirstColumnStructure(divCol1);
 // divcol2=createSecondColumnStructure(divCol2);
  divRow.appendChild(divCol1);
  divRow.appendChild(divCol2);
  mainDivList.appendChild(divRow);
  console.log(divCol1+divCol2+divRow);
}

function createFirstColumnStructure(divCol1)
{
  console.log("insidefirstcol:" +divCol1);
  var h4= createNewElement("h4","");
  h4.innerHTML=txtItem.value;
  var divQuantity= createNewElement("div" ,["SetQuantity"]);
  // divQuantity.appendChild(ddlQuantity.options.value)+ '&nbsp&nbsp&nbsp';
  var buttonup= createNewElement("button","");
  buttonup.innerHTML="<i class='fas fa-sort-up'></i>";
  var buttondown= createNewElement("button","");
  buttondown.innerHTML="<i class='fas fa-sort-down'></i>";
  divQuantity.appendChild(buttonup);
  divQuantity.appendChild(buttondown);
  
  divCol1.appendChild(h4);
  divCol1.appendChild(divQuantity);

}

function createSecondColumnStructure(divCol2)
{

}

function createNewElement(element, classNameArrayList)
{
  let newElement= document.createElement(element);
console.log("element::"+element +"classArraylist::"+classNameArrayList);
if(classNameArrayList!="")
{
  classNameArrayList.forEach(el => {
    newElement.classList.add(el);
  });
}
  return newElement;
}
