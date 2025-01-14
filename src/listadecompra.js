let NewArticleName ='flanes'
let totalAmount = 0
let productInformation = {
  qty: 0,
  name: '',
  price: 0
}

let shoppingListWithObjects = [
  {
    qty: 1,
    name: 'carne',
    price: 10
  },
  {
    qty: 2,
    name: 'fruta',
    price: 2
  },
  {
    qty: 3,
    name: 'pescado',
    price: 20
  },
{
    qty: 4,
    name: 'mantequilla',
    price:15
}
]

shoppingListWithObjects.push('nuevo artículo')
console.log(shoppingListWithObjects)

// TOMORROW:
function addToShoppingList() {
  // Add to shopping list as text string
  let newArticle = document.getElementById('articulo').value
  let articleQty = document.getElementById('qty').value
  let articlePrice = document.getElementById('precio').value
}

  if (articulo === '') {
    console.error('Falta el nombre del articulo')
  } else {
    articulo= articulo.toUpperCase()
  }

//Add to shopping list
