function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
function setLocalStorage(value) {
    localStorage.setItem('cart', JSON.stringify(value));
}


function addCartQuantity(id, increaseValue) {
    currItems = getLocalStorage('cart')
    if (currItems.find((item) => item.id === id) == null) {
        return setLocalStorage([...currItems, { id, quantity: increaseValue }])
    } else {
        return setLocalStorage(currItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + increaseValue }
            } else {
                return item
            }
        }))
    }
}
function increaseCartQuantity(id) {
    currItems = getLocalStorage('cart')
    if (currItems.find((item) => item.id === id) == null) {
        return setLocalStorage([...currItems, { id, quantity: 1 }])
    } else {
        return setLocalStorage(currItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item
            }
        }))
    }
}
function decreaseCartQuantity(id) {
    currItems = getLocalStorage('cart')
    if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return setLocalStorage(currItems.filter((item) => item.id !== id))
    } else {
        return setLocalStorage(currItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            } else {
                return item
            }
        }))
    }
}
function removeFromCart(id) {
    currItems = getLocalStorage('cart')
    return setLocalStorage(currItems.filter((item) => item.id !== id))
}

function increaseValueButtonClick() {
    input = document.getElementById('inputCartValue')
    currentNumber = parseInt(input.value)
        input.value = currentNumber + 1
}
function decreaseValueButtonClick() {
    input = document.getElementById('inputCartValue')
    currentNumber = parseInt(input.value)
    if (currentNumber > 0) {
        input.value = currentNumber - 1
    }
}

function addCartClick() {
    const urlTokens = document.URL.split("/");
    const urlQuery = urlTokens[urlTokens.length - 1]
    const productId = urlQuery.split("=")[1]
    value = parseInt(document.getElementById('inputCartValue').value)
    console.log(productId, value)
    addCartQuantity(productId, value)
    reloadCartNumbers()
}
function changeCartClick(id, text) {
    if(text=="dec" ){
        decreaseCartQuantity(id)
    }else{
        increaseCartQuantity(id)
    }
}

function reloadCartNumbers(){
    currItems = getLocalStorage('cart')
    cartQuantity = currItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )
    document.getElementById('numberCart').innerText = cartQuantity
}