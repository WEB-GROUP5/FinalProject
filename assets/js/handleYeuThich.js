yeuthichArr = JSON.parse(localStorage.getItem('yeuthich')) || [];
console.log(yeuthichArr)
function handleThemVaoYeuThich(id) {
    if (yeuthichArr.find(y => y === id)) {
        // xóa khỏi yêu thích
        for (var i = 0; i < yeuthichArr.length - 1; i++) {
            if (yeuthichArr[i] === id) {
                yeuthichArr.splice(i, 1);
                alert(`Đã xóa sản phẩm ${id} ra khỏi yêu thích`)
                return;
            }
        }
    }
    else {
        yeuthichArr.push(id)
        newArr = JSON.stringify(yeuthichArr)
        localStorage.setItem('yeuthich', newArr)
        alert(`Đã thêm sản phẩm ${id} ra khỏi yêu thích`)
    }


}