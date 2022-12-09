reloadCartContent()
function reloadCartContent() {
    const productUrl = '../assets/api/allProducts.json'
    getData(productUrl)
        .then(product => {
            renderCartContent(product)
        })
        .catch(error => {
            console.log('request failed: ', error)
        });

    function renderCartContent(data) {
        if (data) {
            cartContent = ''
            currItems = getLocalStorage('cart')
            for (let i = 0; i < currItems.length; i++) {
                for (p of data) {
                    if (p.id == currItems[i].id) {
                        cartContent += `<div class="product-item">
                    <div class="img">
                        <img src="../assets/images/products/${p.imageUrl}" alt="${p.title}" width="150px">
                    </div>
                    <div class="mota">
                        <h4>${p.title}</h4>
                        <p>
                            Chất liệu: Táo thừa<br>
                            Kích thước: 40x30cm<br>
                            Màu sắc: Đen<br>
                            Xuất xứ: Việt Nam<br>
                             <span style="color:red"><b> ${p.price} VNĐ</b></span>
                        </p>
                    </div>
                    <div class="addCart">
                        <button onclick="decreaseValueButtonClick();changeCartClick('${p.id}','dec');reloadCartContent()" id="decrease" class="decrease">-</button>
                        <input id="inputCartValue" type="number" step="1" min="0" readonly value="${currItems[i].quantity}">
                        <button id="increase" class="increase" onclick="increaseValueButtonClick();changeCartClick('${p.id}','inc');reloadCartContent()">+</button>
                    </div>
                </div>
                <hr color="gray" width="90%">`
                    }
                }
            }


            document.getElementById('cartContent').innerHTML = cartContent;
        }
        else return;
    }
}
