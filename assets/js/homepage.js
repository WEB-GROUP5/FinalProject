async function getData(url) {
    const fetchedData = await fetch(url)
    const loadedJson = await fetchedData.json()
    return loadedJson
}

// render Banners
const bannerUrl = './assets/api/bannerApi.json'
getData(bannerUrl)
    .then(banners => {
        renderBanners(banners)
        var slider1 = tns({
            container: '.slider1',
            items: 1,
            nav: false,
            mouseDrag: true,
            lazyLoad: true,
            controls: false,
            nav: true,
            responsive: {
                640: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                700: {
                    gutter: 30
                },
                900: {
                    items: 2
                }
            }
        });
    })
    .catch(error => {
        console.log('request failed: ', error)
    });

function renderBanners(data) {
    if (data) {
        bannerContent = ''
        for (b of data) {
            bannerContent += `<div><img src="./assets/images/banners/${b.imgUrl}" width="100%" alt="${b.name}"></div>`
        }
        document.getElementById('bannerSec').innerHTML = bannerContent;
    }
    else return;
}


const productUrl = './assets/api/allProducts.json'
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
            yeuthichContent += `<div class="slider_item slider2_item" onclick="goUrl('/productdetail/?id=${p.id}')">
            <div class="img"><img src="./assets/images/products/${p.imageUrl}" width="100%" alt="${p.title}"></div>
            <div class="title">${p.title}</div>
            <span class="description">${p.desc}</span>
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
            tuixachContent += `<div class="slider_item slider3_item" onclick="goUrl('/productdetail/?id=${p.id}')">
                <div class="img"><img src="./assets/images/products/${p.imageUrl}" width="100%" alt="${p.title}"></div>
                <div class="title">${p.title}</div>
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
            dexuatContent += `<div class="slider_item slider4_item" onclick="goUrl('/productdetail/?id=${p.id}')">
            <div class="img"><img src="./assets/images/products/${p.imageUrl}" width="100%" alt="${p.title}"></div>
            <div class="title">${p.title}</div>
            <span class="description">${p.desc}</span>
        </div>`
        }
        document.getElementById('dexuatSection').innerHTML = dexuatContent;
    }
    else return;
}

function goUrl(url) {
    window.location.href = url;
}