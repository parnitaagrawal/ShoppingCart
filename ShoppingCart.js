var txtItem= document.querySelector("#txtItemName");
var txtPrice= document.querySelector("#txtPrice");
var ddlQuantity= document.querySelector("#ddlQuantity");
var btnAddItem= document.querySelector("#btnAdd");

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
  
}
