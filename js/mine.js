

var allProductsArray ;
if(localStorage.getItem("addedProduct" )==null)
{
    allProductsArray = [] ;
}
else
{
  allProductsArray = JSON.parse( localStorage.getItem("addedProduct"));
  displayProducts();
}




function oncclickaddproducts()
{
      //object has my data
   var oneproductobjet = {productNameValue : document.getElementById("pNameId").value,
   productPriceValue : document.getElementById("pPriceId").value,
   productCategoryValue : document.getElementById("pCatId").value,
   productDescreptionValue : document.getElementById("pDescId").value

                          };
  allProductsArray.push(oneproductobjet)    ;       
  console.log( allProductsArray)        ;
  
  
  //localStorage

  
  addtolocal();
  
  //display products

  displayProducts();

  //Clear Inputs

  clearInputs();

}

function clearInputs()
{
    document.getElementById("pNameId").value = "";
  document.getElementById("pPriceId").value = "";
  document.getElementById("pCatId").value = "";
  document.getElementById("pDescId").value = "";

}

function displayProducts()
{
    var concatObject = ``;
    for(var i=0 ; i<allProductsArray.length ; i++)
    {
        concatObject=concatObject+ ` <tr>
        <td>${i}</td>
        <td>${allProductsArray[i].productNameValue}</td>
        <td>${allProductsArray[i].productPriceValue}</td>
        <td>${allProductsArray[i].productCategoryValue}</td>
        <td>${allProductsArray[i].productDescreptionValue}</td>
        <td>
                    <button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update</button>
                </td>
                <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                </td>
    </tr> `;
    }
    document.getElementById("inTableId").innerHTML = concatObject;
}

function addtolocal()
{
    localStorage.setItem("addedProduct",JSON.stringify(allProductsArray) );

}

function updateProduct(IndexOfProduct)
{
    document.getElementById("pNameId").value = allProductsArray[IndexOfProduct].productNameValue;
    document.getElementById("pPriceId").value = allProductsArray[IndexOfProduct].productPriceValue;
    document.getElementById("pCatId").value = allProductsArray[IndexOfProduct].productCategoryValue;
    document.getElementById("pDescId").value = allProductsArray[IndexOfProduct].productDescreptionValue;

    document.getElementById("buttonDivId").innerHTML = `
    <button onclick="oncclickUpdateproducts(${IndexOfProduct})" class="btn btn-Warning my-3 text-white">Update</button>
    `;
}

function oncclickUpdateproducts(IndexOfProduct)
{
    allProductsArray[IndexOfProduct].productNameValue =  document.getElementById("pNameId").value;
    
    allProductsArray[IndexOfProduct].productPriceValue =  document.getElementById("pPriceId").value;
    allProductsArray[IndexOfProduct].productCategoryValue =  document.getElementById("pCatId").value;
    allProductsArray[IndexOfProduct].productDescreptionValue =  document.getElementById("pDescId").value;
    
    displayProducts();
    addtolocal();
    clearInputs();

    document.getElementById("buttonDivId").innerHTML =  `<button onclick="oncclickaddproducts()" class="btn btn-info my-3 text-white">Add Product</button> `;
}

function deleteProduct(IndexOfProduct)
{
    allProductsArray.splice(IndexOfProduct,1);
    displayProducts();
    addtolocal();

}

function searching(searchValue)
{
    var concatObject = ``;
    for(var i=0 ; i<allProductsArray.length ; i++)
    {
        if(allProductsArray[i].productNameValue.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        {
            concatObject=concatObject+ ` <tr>
            <td>${i}</td>
            <td>${allProductsArray[i].productNameValue}</td>
            <td>${allProductsArray[i].productPriceValue}</td>
            <td>${allProductsArray[i].productCategoryValue}</td>
            <td>${allProductsArray[i].productDescreptionValue}</td>
            <td>
                        <button onclick="updateProduct()" class="btn btn-outline-warning">Update</button>
                    </td>
                    <td>
                        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
                    </td>
        </tr> `;
        
        }
    }
    document.getElementById("inTableId").innerHTML = concatObject;
}



