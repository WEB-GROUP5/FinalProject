async function getData(url) {
    const fetchedData = await fetch(url)
    const loadedJson = await fetchedData.json()
    return loadedJson
}

const heartSvg = `
<svg id='heart' className="like-icon" viewBox="0 0 16.02 13.99" height="14px" width="14px">
  <path className="heart-inner" fill="none" d="M14.56,1.75a3.31,3.31,0,0,0-4.47.34L8.78,3.47,7.43,2.09A3.32,3.32,0,0,0,3,1.75a3.5,3.5,0,0,0-.25,5L8.78,13l6-6.25A3.48,3.48,0,0,0,14.56,1.75Z"/>
  <path className="heart-outer" fill="rgba(64, 64, 64, .9)" d="M15.21,1a4.27,4.27,0,0,0-5.84.44L8.78,2l-.63-.62A4.3,4.3,0,0,0,2.31,1,4.49,4.49,0,0,0,2,7.47l6.06,6.25a1,1,0,0,0,.69.28,1,1,0,0,0,.71-.28l6.07-6.25A4.49,4.49,0,0,0,15.21,1Zm-.4,5.81L8.78,13,2.71,6.78a3.5,3.5,0,0,1,.25-5,3.32,3.32,0,0,1,4.47.34L8.78,3.47l1.31-1.38a3.31,3.31,0,0,1,4.47-.34A3.48,3.48,0,0,1,14.81,6.78Z" transform="translate(-0.75 -0.01)" />
</svg>
`


const productUrl = '../assets/api/allProducts.json'
getData(productUrl)
    .then(products => {
        // render Yeuthich
        renderYeuThichProducts(products)
        var slider2 = tns({
            container: '.slider2',
            items: 1,
            nav: false,
            mouseDrag: true,
            lazyLoad: true,
            controls: false,
            responsive: {
                300: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                380: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                480: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                640: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 3
                },
                700: {
                    gutter: 30,
                    items: 3
                },
                900: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });

        // render Túi xách
        renderTuiXachProducts(products)
        var slider3 = tns({
            container: '.slider3',
            items: 1,
            nav: false,
            mouseDrag: true,
            lazyLoad: true,
            controls: false,
            responsive: {
                300: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                380: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 3
                },
                480: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                640: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 3
                },
                700: {
                    gutter: 30,
                    items: 4
                },
                900: {
                    items: 6
                },
                1200: {
                    items: 8
                }
            }
        });

        // render Đề xuất
        renderDeXuatProducts(products)
        var slider4 = tns({
            container: '.slider4',
            items: 1,
            nav: false,
            mouseDrag: true,
            lazyLoad: true,
            controls: false,
            responsive: {
                300: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                380: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                480: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                640: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 3
                },
                700: {
                    gutter: 30,
                    items: 3
                },
                900: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    })
    .catch(error => {
        console.log('request failed: ', error)
    });




function renderYeuThichProducts(data) {
    if (data) {
        yeuthichContent = ''
        for (p of data) {
            yeuthichContent += `<div class="slider_item slider2_item">
                                    <div onclick="goUrl('/productdetail/?id=${p.id}')">
                                    <div class="img"><img src="../assets/images/products/${p.imageUrl}" width="100%" alt="${p.title}"></div>
                                    <div class="title">${p.title}</div>
                                    <span class="description">${p.desc}</span>
                                    <div class="price">
                                        <span class="old-price">${p.removedPrice} VNĐ</span>
                                        <span class="new-price">${p.price} VNĐ</span>
                                    </div>
                                    </div>
                                    <div onclick="handleThemVaoYeuThich('${p.id}');loadFavItems()">${heartSvg}</div>
                                </div>`
        }
        document.getElementById('yeuthichSection').innerHTML = yeuthichContent;
    }
    else return;
}


function renderTuiXachProducts(data) {
    if (data) {
        tuixachContent = ''
        for (p of data) {
            tuixachContent += `<div class="slider_item slider3_item" >
                <div class="img" onclick="goUrl('/productdetail/?id=${p.id}')"><img src="../assets/images/products/${p.imageUrl}" width="100%" alt="${p.title}"></div>
                <div class="title" onclick="goUrl('/productdetail/?id=${p.id}')">${p.title}</div>
                <div onclick="handleThemVaoYeuThich('${p.id}');loadFavItems()">${heartSvg}</div>
                <div class="price">
                                        <span class="new-price">${p.price} VNĐ</span>
                                    </div>
            </div>`
        }
        document.getElementById('tuixachSection').innerHTML = tuixachContent;
    }
    else return;
}

function renderDeXuatProducts(data) {
    if (data) {
        dexuatContent = ''
        for (p of data) {
            dexuatContent += `<div class="slider_item slider4_item">
           <div  onclick="goUrl('/productdetail/?id=${p.id}')">
           <div class="img" ><img src="../assets/images/products/${p.imageUrl}" width="100%" alt="${p.title}"></div>
           <div class="title">${p.title}</div>
           <span class="description">${p.desc}</span>
           </div>
            <div onclick="handleThemVaoYeuThich('${p.id}');loadFavItems()">${heartSvg}</div>
        </div>`
        }
        document.getElementById('dexuatSection').innerHTML = dexuatContent;
    }
    else return;
}

function goUrl(url) {
    window.location.href = url;
}


// Get FavItems
function loadFavItems() {
    getData(productUrl)
        .then(products => {
            renderFavItems(products)
        })
        .catch(error => {
            console.log('request failed: ', error)
        });
}

function renderFavItems(products) {
    favContent = ''
    if (yeuthichArr.length == 0) {
        document.getElementById('yeuthichContainer').innerHTML = `<div class="text-center">
                                                                        <img src="../assets/images/icons/PNG-images-Love-Heart-58png.png" width="60px" alt="" />
                                                                        Chưa có sản phẩm yêu thích của bạn
                                                                    </div>`;
        return;
    }
    for (p of products) {
        for (f of yeuthichArr) {
            if (p.id == f) {
                favContent += `<div class="item">
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
        }
    }
    document.getElementById('yeuthichContainer').innerHTML = favContent
    console.log(products)
}
loadFavItems()