async function getData(url) {
    const fetchedData = await fetch(url)
    const loadedJson = await fetchedData.json()
    return loadedJson
}

const productUrl = '../assets/api/allProducts.json'
getData(productUrl)
    .then(products => {
        renderProducts(products)
    })
    .catch(error => {
        console.log('request failed: ', error)
    });

function renderProducts(data) {
    if (data) {
        productContent = ''
        for (p of data) {
            productContent += `<div class="item">
            <div class="img"><img src="../assets/images/products/${p.imageUrl}" alt="${p.title}"></div>
            <div class="content">
                <div class="title" onclick="goUrl('../productdetail/?id=${p.id}')">
                    ${p.title}
                </div>
                <span>Túi xách</span>
                <div class="desc">
                ${p.desc}
                </div>
                <div class="price">
                    <div class="old-price">${p.removedPrice} VNĐ</div>
                    <div class="new-price">${p.price}VNĐ</div>
                </div>
            </div>
            <div class="button">
                <button class="datngay">Đặt ngay</button>
                <button class="xoa" onclick="handleThemVaoYeuThich('${p.id}');loadFavItems()">Xóa</button>
            </div>
        </div>`
        }
        document.getElementById('productContainer').innerHTML = productContent;
    }
    else return;
}

handleFilter()
function handleFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i++) {
        txtValue = item[i].innerHTML || item[i].textContent;
        // txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "flex";
        } else {
            item[i].style.display = "none";
        }
    }
    if(input.value===''){
        document.getElementById('productContainer').style.display = "none";
        document.getElementById('noResult').style.display = "block";
        // document.getElementById('productContainer').innerHTML="Khồn có gì chơn"
    }else{
        document.getElementById('productContainer').style.display = "block";
        document.getElementById('noResult').style.display = "none";
    }
}

function getRec(data){
    document.getElementById("searchInput").value = data.innerText
}