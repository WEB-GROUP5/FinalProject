yeuthichArr = JSON.parse(localStorage.getItem('yeuthich')) || [];
console.log(yeuthichArr)
function handleThemVaoYeuThich(id) {
    if (yeuthichArr.length == 1) {
        if (yeuthichArr[0] == id) {
            yeuthichArr = []
            newArr = JSON.stringify(yeuthichArr)
            localStorage.setItem('yeuthich', newArr)
            alert(`Đã xóa sản phẩm ${id} ra khỏi yêu thích`)
            return;
        }
        else {
            yeuthichArr.push(id)
            newArr = JSON.stringify(yeuthichArr)
            localStorage.setItem('yeuthich', newArr)
            alert(`Đã thêm sản phẩm ${id} vào yêu thích`)
        }

    }
    else
        if (yeuthichArr.find(y => y === id)) {
            // xóa khỏi yêu thích
            for (var i = 0; i < yeuthichArr.length - 1; i++) {
                if (yeuthichArr[i] === id) {
                    yeuthichArr.splice(i, 1);
                    newArr = JSON.stringify(yeuthichArr)
                    localStorage.setItem('yeuthich', newArr)
                    alert(`Đã xóa sản phẩm ${id} ra khỏi yêu thích`)
                    return;
                }
            }
        } else {
            yeuthichArr.push(id)
            newArr = JSON.stringify(yeuthichArr)
            localStorage.setItem('yeuthich', newArr)
            alert(`Đã thêm sản phẩm ${id} vào yêu thích`)
        }

}