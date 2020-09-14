var txtItem= document.querySelector("#txtItemName");
var txtPrice= document.querySelector("#txtPrice");
var ddlQuantity= document.querySelector("#ddlQuantity");
var btnAddItem= document.querySelector("#btnAdd");
var mainDivList= document.querySelector("#divAllItem");
var finalQuantity=0;

btnAddItem.addEventListener("click", addItem, false)

function addItem()
{  
  if(txtItem.value!=="" && (txtPrice.value!==0 && txtPrice.value !=="") && ddlQuantity.value!=="Select the quantity")
  {    
    createTheListSection();
    txtPrice.value="";
    txtItem.value="";
    ddlQuantity.value="Select the quantity";
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
 divcol2=createSecondColumnStructure(divCol2);
  divRow.appendChild(divCol1);
  divRow.appendChild(divCol2);
  mainDivList.appendChild(divRow);
  console.log(divCol1+divCol2+divRow);
}

function createFirstColumnStructure(divCol1)
{
  console.log("insidefirstcol:" +divCol1);
  console.log("quantity:"+ddlQuantity.value);

  let label= createNewElement("label","");
  label.innerHTML=txtItem.value;

  //divQuantity Structure starts
  let divQuantity= createNewElement("div" ,["SetQuantity"]);
  let labelQuantity= createNewElement("label","");
  labelQuantity.innerHTML= ddlQuantity.value;
  finalQuantity= labelQuantity;

  let buttonup= createNewElement("button","");
  let buttondown= createNewElement("button","");

  buttonup.innerHTML="<i class='fas fa-sort-up'></i>";
  buttondown.innerHTML="<i class='fas fa-sort-down'></i>";

  buttonup.addEventListener("click",function()
  {
    buttondown.removeAttribute("disabled");
    labelQuantity.innerHTML= Number(labelQuantity.innerHTML)+1;
    finalQuantity= labelQuantity;
  }); 
 
  buttondown.addEventListener("click",function(){
    let qua= Number(labelQuantity.innerHTML);
    if(qua !==1)
    {
    labelQuantity.innerHTML= Number(labelQuantity.innerHTML)-1;
    finalQuantity= labelQuantity;
    }
    else
    {
      buttondown.setAttribute("disabled", "true");
    }
  });
  
  divQuantity.appendChild(buttonup);
  divQuantity.appendChild(labelQuantity);
  divQuantity.appendChild(buttondown);
  // divQuantity structure end

  divCol1.appendChild(label);
  divCol1.appendChild(divQuantity);

}



function createSecondColumnStructure(divCol2)
{
  let divDelete= createNewElement("divDelete",["ShowDeleteButton"]);
  let btnDelete= createNewElement("button","");
  btnDelete.innerHTML="<i class='fas fa-trash-alt'></i>";

  btnDelete.addEventListener("click",function(){
    let row= this.closest(".row");
    console.log("row to delete:"+row);
    row.remove();
   
  });

  let divPrice= createNewElement("divPrice",["ShowPrice"]);
  let lblPrice= createNewElement("label","");
  lblPrice.innerHTML= txtPrice.value;
  divDelete.appendChild(btnDelete);
  divPrice.appendChild(lblPrice);

  divCol2.appendChild(divDelete);
  divCol2.appendChild(divPrice);
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
