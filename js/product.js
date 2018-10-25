//宣告變數
var tagFilter = document.querySelector('.tagFilter ');
var showTable = document.querySelector('#productTable');
var tagItem = document.querySelector('.tagArea');
var addproductItem = document.querySelector('.addNewProduct');
var closeCover = document.querySelector('.closePage ');
var addproductEd = document.querySelector('.addProductPage-addBtn');
var updateImg = document.querySelector('#fileUpdata');
var showImg = document.querySelector('#showImg');
//函式宣告
//showTable
function tableShow() {
    showTable.innerHTML = `<tr>
    <!-- 商品圖片文字 -->
    <td class="productimgText">
        <img src="img/Hat.png" alt="Hat.png">
        <span class="ml-1">Vestibulum</span>
    </td>
    <!-- 原價 -->
    <td class="ordersTd">$3,200</td>
    <!-- 折購價 -->
    <td class="ordersTd">$2,800</td>
    <!-- 商品資訊 -->
    <td class="productInformation">
        <p><span class="badge badge-brighter mr-1">S</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">M</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">L</span>There are 9 item</p>
    </td>
    <!-- 商品狀態 -->
    <td class="ordersTd">
        <select class="productSelectValue" name="" id="">
            <option value="UNPUBLISHED">UNPUBLISHED</option>
            <option value="PUBLISHED">PUBLISHED</option>
        </select>
    </td>
</tr>
<tr>
    <!-- 商品圖片文字 -->
    <td class="productimgText">
        <img src="img/Sweater.png" alt="Sweater.pngs">
        <span class="ml-1">Vestibulum</span>
    </td>
    <!-- 原價 -->
    <td class="ordersTd">$3,200</td>
    <!-- 折購價 -->
    <td class="ordersTd">$2,800</td>
    <!-- 商品資訊 -->
    <td class="productInformation">
        <p><span class="badge badge-brighter mr-1">S</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">M</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">L</span>There are 9 item</p>
    </td>
    <!-- 商品狀態 -->
    <td class="ordersTd">
        <select class="productSelectValue" name="" id="">
            <option value="PUBLISHED">PUBLISHED</option>
            <option value="UNPUBLISHED">UNPUBLISHED</option>
        </select>
    </td>
</tr>
<tr>
    <!-- 商品圖片文字 -->
    <td class="productimgText">
        <img src="img/Shoes.png" alt="Shoes.png">
        <span class="ml-1">Vestibulum</span>
    </td>
    <!-- 原價 -->
    <td class="ordersTd">$3,200</td>
    <!-- 折購價 -->
    <td class="ordersTd">$2,800</td>
    <!-- 商品資訊 -->
    <td class="productInformation">
        <p><span class="badge badge-brighter mr-1">S</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">M</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">L</span>There are 9 item</p>
    </td>
    <!-- 商品狀態 -->
    <td class="ordersTd">
        <select class="productSelectValue" name="" id="">
            <option value="UNPUBLISHED">UNPUBLISHED</option>
            <option value="PUBLISHED">PUBLISHED</option>
        </select>
    </td>
</tr>
<tr>
    <!-- 商品圖片文字 -->
    <td class="productimgText">
        <img src="img/Shorts.png" alt="Shorts.png">
        <span class="ml-1">Vestibulum</span>
    </td>
    <!-- 原價 -->
    <td class="ordersTd">$3,200</td>
    <!-- 折購價 -->
    <td class="ordersTd">$2,800</td>
    <!-- 商品資訊 -->
    <td class="productInformation">
        <p><span class="badge badge-brighter mr-1">S</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">M</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">L</span>There are 9 item</p>
    </td>
    <!-- 商品狀態 -->
    <td class="ordersTd">
        <select class="productSelectValue" name="" id="">
            <option value="PUBLISHED">PUBLISHED</option>
            <option value="UNPUBLISHED">UNPUBLISHED</option>
        </select>
    </td>
</tr>
<tr>
    <!-- 商品圖片文字 -->
    <td class="productimgText">
        <img src="img/Tie.png" alt="Tie.png">
        <span class="ml-1">Vestibulum</span>
    </td>
    <!-- 原價 -->
    <td class="ordersTd">$3,200</td>
    <!-- 折購價 -->
    <td class="ordersTd">$2,800</td>
    <!-- 商品資訊 -->
    <td class="productInformation">
        <p><span class="badge badge-brighter mr-1">S</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">M</span>There are 9 item</p>
        <p><span class="badge badge-brighter mr-1">L</span>There are 9 item</p>
    </td>
    <!-- 商品狀態 -->
    <td class="ordersTd">
        <select class="productSelectValue" name="" id="">
            <option value="UNPUBLISHED">UNPUBLISHED</option>
            <option value="PUBLISHED">PUBLISHED</option>
        </select>
    </td>
</tr>`
}
//tag縮放
function tagFilterToggle(e) {
    let tagAreaShow = document.querySelector('.tagArea');
    if (tagAreaShow.style.display == "block") {
        tagAreaShow.style.display = 'none';
    }
    else {
        tagAreaShow.style.display = 'block';
    }
}
//tag選擇
function tagItemFilter(e) {
    e.stopPropagation();
    e.preventDefault();
    let FilterItemvalue = e.target.innerText;
    switch (FilterItemvalue) {
        case 'All':
            productDataStatus(FilterItemvalue);
            tagFilterToggle();
            break;
        case 'PUBLISHED':
            productDataStatus(FilterItemvalue);
            tagFilterToggle();
            break;
        case 'UNPUBLISHED':
            productDataStatus(FilterItemvalue);
            tagFilterToggle();
            break;
    }
}
//產品選擇
function productDataStatus(e) {
    tableShow();
    let product_tdSelectValue = document.querySelectorAll('.productSelectValue');
    let valueLenght = product_tdSelectValue.length;
    let newTableData = ``;
    let product_tdimgText = document.querySelectorAll('.productimgText');
    if (e == 'All') { return };
    for (let i = 0; i < valueLenght; i++) {
        let valueStatu = product_tdSelectValue[i].options[0].value;
        if (e === valueStatu) {
            newTableData += `<tr>
            <!-- 商品圖片文字 -->
            <td class="productimgText">
                ${product_tdimgText[i].innerHTML}
            </td>
            <!-- 原價 -->
            <td class="ordersTd">$3,200</td>
            <!-- 折購價 -->
            <td class="ordersTd">$2,800</td>
            <!-- 商品資訊 -->
            <td class="productInformation">
                <p><span class="badge badge-brighter mr-1">S</span>There are 9 item</p>
                <p><span class="badge badge-brighter mr-1">M</span>There are 9 item</p>
                <p><span class="badge badge-brighter mr-1">L</span>There are 9 item</p>
            </td>
            <!-- 商品狀態 -->
            <td class="ordersTd">
                <select class="productSelectValue" name="" id="">${product_tdSelectValue[i].innerHTML}</select>
            </td>
        </tr>`
        }
    }
    showTable.innerHTML = newTableData;
}
//cover縮放
function coverToggle() {
    let coverShow = document.querySelector('.cover');
    if (coverShow.style.display == "block") {
        coverShow.style.display = 'none';
    }
    else {
        coverShow.style.display = 'block';
    }
}
//監聽事件
tagFilter.addEventListener('click', tagFilterToggle, false);
tagItem.addEventListener('click', tagItemFilter, false);
addproductItem.addEventListener('click', coverToggle, false);
closeCover.addEventListener('click', coverToggle, false);
// addproductEd.addEventListener('click', coverToggle, false);/*---新增商品按鈕事件---*/
updateImg.addEventListener('change', function (e) {
    //照片區
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
        (function (file) {
            var reader = new FileReader(),
                img = document.createElement('img');

            // img.width = 300;
            img.classList.add("mr-1","mb-1");
            showImg.appendChild(img);

            reader.addEventListener('load', function (e) {
                img.src = e.target.result;
            });

            reader.readAsDataURL(file);
        })(files[i]);
    }
}, false);