const setData = (cssQuery, value) => {
    document.querySelector(cssQuery).innerHTML = value;
}

// percentage should be in range [0 .. 1]
function setRatingStar(percentage) {
    const strPercent = (1 - percentage) * 100 + "%"
    document.getElementById("star-overlay").style.width = strPercent;
}

async function loadJson() {
    const fetchedData = await fetch("../assets/api/allProducts.json")
    const loadedJson = await fetchedData.json()

    // lấy data của id truyền vào url
    // url kiểu: /index.html?id=elegant
    const urlTokens = document.URL.split("/");
    const urlQuery = urlTokens[urlTokens.length - 1]
    const productId = urlQuery.split("=")[1]

    // lấy product của id đã nhận
    const selectedProduct = loadedJson.filter(productObj => productObj.id.toString() === productId.toString())[0]

    console.log(selectedProduct);
    // render data lần đầu
    setData("h1", selectedProduct.title)
    setData("small#removedPrice", selectedProduct.removedPrice)
    setData("h3#price", `${selectedProduct.price / 1000}.<span>000</span>VNĐ`)

    const ratio = (selectedProduct.removedPrice - selectedProduct.price) / selectedProduct.removedPrice;
    setData("h3#slashedRatio", `(-${(ratio * 100).toFixed(0)}%)`)

    setRatingStar(selectedProduct.rating / 5)
    setData("span#origin", selectedProduct.origin)
    setData("span#material", selectedProduct.material)
    setData("span#size", selectedProduct.size)
    setData("p#desc", selectedProduct.desc)

    document.querySelector("img.img").src = '../assets/images/img_productdetail/' + selectedProduct.imageUrl
    console.log('Khoa test: ' + selectedProduct.imageUrl)

    const preparedColorOptions = selectedProduct.colorOptions.reduce(
        (accStr, color) => {
            console.log(accStr);
            console.log(color)
            return accStr + `
            <div class="MAU colorOption" style="background: ${color};">
                    ${color}
            </div>
            `;
        }, "")

    setData("div#colorOptions", preparedColorOptions)

    const relativeProducts = loadedJson.filter(prod => prod.id.toString() !== productId.toString())

    console.table(relativeProducts)
    let html = "";

    for (let p of relativeProducts) {

        html += `
        <li>
        <a href="/productdetail/?id=${p.id}">
            <div class='item uk-panel' >
                <div class='w.img'>
                    <img class='imgpro' src='../assets/images/img_productdetail/${p.imageUrl}'/><br/>
                </div>
                <br>
                <div class='p'> 
                    <p style="margin-bottom: 10px;"> ${p.title} </p> 
                    ${p.price / 1000}.000 VNĐ
                </div>
            </div>
        </a>
        </li>
        `
    }
    document.getElementById("items-list").innerHTML = html;

}

    loadJson();
