//宣告變數
var ordersTagFilter = document.querySelector('#ordersTagFilter');
var ordersTagFilterItem = document.querySelector('.tagArea');
var ordersEditSection = document.querySelector('#ordersEditSection');
var ordersEditSectionItem = document.querySelector('#dateAreaItem');
var ordersTableData = document.querySelector('#ordersTableData');
var editBtn = document.querySelector('#editBtn');
//函式宣告
//tableShow
function tableShow() {
    ordersTableData.innerHTML = `<tr>
    <td>001</td>
    <td class="ordersSelectName">Mark</td>
    <td>Vestibulum
        <br>
        <p class="font-italic">$1,400</p>
        <p> 數量: <span class="font-weight-bold">1</span></p>
    </td>
    <!-- 總計 -->
    <td>$1,400</td>
    <!-- 新增時間 -->
    <td>2018/6/8
        <br>
        13:39
    </td>
    <!-- 確定時間 -->
    <td>2018/6/8
        <br>
        20:23
    </td>
    <!-- 地址 -->
    <td>386 Windler Drives
        <br>
        Apt. 358
    </td>
    <!-- 電話 -->
    <td>0912345678</td>
    <!-- 信箱 -->
    <td>qq123@google.com</td>
    <!-- 狀態 -->
    <td>
        <select class="ordersSelectValue">
            <option value="Paid">PAID</option>
            <option value="Shipping">SHIPPING</option>
            <option value="Done">DONE</option>
            <option value="Unpaid">UNPAID</option>
        </select>
    </td>
</tr>
<tr>
    <td>002</td>
    <td class="ordersSelectName">Jacob</td>
    <td>Donec facili
        <br>
        <p class="font-italic">$1,400</p>
        <p> 數量: <span class="font-weight-bold">1</span></p>
    </td>
    <!-- 總計 -->
    <td>$1,400</td>
    <!-- 新增時間 -->
    <td>2018/6/8
        <br>
        13:39
    </td>
    <!-- 確定時間 -->
    <td>2018/6/8
        <br>
        20:23
    </td>
    <!-- 地址 -->
    <td>386 Windler Drives
        <br>
        Apt. 358
    </td>
    <!-- 電話 -->
    <td>0912345678</td>
    <!-- 信箱 -->
    <td>qq123@google.com</td>
    <!-- 狀態 -->
    <td>
        <select class="ordersSelectValue">
            <option value="Shipping">SHIPPING</option>
            <option value="Paid">PAID</option>
            <option value="Done">DONE</option>
            <option value="Unpaid">UNPAID</option>
        </select>
    </td>
</tr>
<tr>
    <td>003</td>
    <td class="ordersSelectName">Larry</td>
    <td>Curabitur lo
        <br>
        <p class="font-italic">$1,400</p>
        <p> 數量: <span class="font-weight-bold">1</span></p>
    </td>
    <!-- 總計 -->
    <td>$1,400</td>
    <!-- 新增時間 -->
    <td>2018/6/8
        <br>
        13:39
    </td>
    <!-- 確定時間 -->
    <td>2018/6/8
        <br>
        20:23
    </td>
    <!-- 地址 -->
    <td>386 Windler Drives
        <br>
        Apt. 358
    </td>
    <!-- 電話 -->
    <td>0912345678</td>
    <!-- 信箱 -->
    <td>qq123@google.com</td>
    <!-- 狀態 -->
    <td>
        <select class="ordersSelectValue">
            <option value="Done">DONE</option>
            <option value="Paid">PAID</option>
            <option value="Shipping">SHIPPING</option>
            <option value="Unpaid">UNPAID</option>
        </select>
    </td>
</tr>
<tr>
    <td>004</td>
    <td class="ordersSelectName">Ada</td>
    <td>Curabitur lo
        <br>
        <p class="font-italic">$1,400</p>
        <p> 數量: <span class="font-weight-bold">1</span></p>
    </td>
    <!-- 總計 -->
    <td>$1,400</td>
    <!-- 新增時間 -->
    <td>2018/6/8
        <br>
        13:39
    </td>
    <!-- 確定時間 -->
    <td>2018/6/8
        <br>
        20:23
    </td>
    <!-- 地址 -->
    <td>386 Windler Drives
        <br>
        Apt. 358
    </td>
    <!-- 電話 -->
    <td>0912345678</td>
    <!-- 信箱 -->
    <td>qq123@google.com</td>
    <!-- 狀態 -->
    <td>
        <select class="ordersSelectValue">
            <option value="Unpaid">UNPAID</option>
            <option value="Done">DONE</option>
            <option value="Paid">PAID</option>
            <option value="Shipping">SHIPPING</option>
        </select>
    </td>
</tr>
<tr>
    <td>005</td>
    <td class="ordersSelectName">Andy</td>
    <td>Curabitur lo
        <br>
        <p class="font-italic">$1,400</p>
        <p> 數量: <span class="font-weight-bold">1</span></p>
    </td>
    <!-- 總計 -->
    <td>$1,400</td>
    <!-- 新增時間 -->
    <td>2018/6/8
        <br>
        13:39
    </td>
    <!-- 確定時間 -->
    <td>2018/6/8
        <br>
        20:23
    </td>
    <!-- 地址 -->
    <td>386 Windler Drives
        <br>
        Apt. 358
    </td>
    <!-- 電話 -->
    <td>0912345678</td>
    <!-- 信箱 -->
    <td>qq123@google.com</td>
    <!-- 狀態 -->
    <td>
        <select class="ordersSelectValue">
            <option value="Unpaid">UNPAID</option>
            <option value="Done">DONE</option>
            <option value="Paid">PAID</option>
            <option value="Shipping">SHIPPING</option>
        </select>
    </td>
</tr>`
}
//tagArea顯示縮放
function tagAreaToggle() {
    let tagAreaShow = document.querySelector('.tagArea');
    if (tagAreaShow.style.display == "block") {
        tagAreaShow.style.display = 'none';
    }
    else {
        tagAreaShow.style.display = 'block';
    }
}
//editSectiona顯示縮放
function editSectionaToggle(e) {
    // e.stopPropagation();
    let editSectionaShow = document.querySelector('.dateArea');
    if (editSectionaShow.style.display == "block") {
        editSectionaShow.style.display = 'none';
    }
    else {
        editSectionaShow.style.display = 'block';
    }
}
//圖表過濾
function ordersDataStatus(e) {
    tableShow();
    let orders_tdSelectValue = document.querySelectorAll('.ordersSelectValue');
    let valueLenght = orders_tdSelectValue.length;
    let newTableData = ``;
    let orders_tdName = document.querySelectorAll('.ordersSelectName');
    if (e == 'Select All') { return }
    for (let i = 0; i < valueLenght; i++) {
        let valueStatu = orders_tdSelectValue[i].options[0].value;
        if (e === valueStatu) {
            newTableData += `<tr>
            <td>00${i + 1}</td>
            <td>${orders_tdName[i].textContent}</td>
            <td>Vestibulum
                <br>
                <p class="font-italic">$1,400</p>
                <p> 數量: <span class="font-weight-bold">1</span></p>
            </td>
            <!-- 總計 -->
            <td>$1,400</td>
            <!-- 新增時間 -->
            <td>2018/6/8
                <br>
                13:39
            </td>
            <!-- 確定時間 -->
            <td>2018/6/8
                <br>
                20:23
            </td>
            <!-- 地址 -->
            <td>386 Windler Drives
                <br>
                Apt. 358
            </td>
            <!-- 電話 -->
            <td>0912345678</td>
            <!-- 信箱 -->
            <td>qq123@google.com</td>
            <!-- 狀態 -->
            <td><select class="ordersSelectValue">${orders_tdSelectValue[i].innerHTML}</select></td>
        </tr>`;
        }
    }
    ordersTableData.innerHTML = newTableData;
}
//TagFilterItem過濾
function TagFilterItem_Filter(e) {
    e.stopPropagation();
    e.preventDefault();
    let FilterItemvalue = e.target.innerText;
    switch (FilterItemvalue) {
        case 'Select All':
            tagAreaToggle();
            ordersDataStatus(FilterItemvalue);
            break;
        case 'Paid':
            tagAreaToggle();
            ordersDataStatus(FilterItemvalue);
            break;
        case 'Unpaid':
            tagAreaToggle();
            ordersDataStatus(FilterItemvalue);
            break;
        case 'Shipping':
            tagAreaToggle();
            ordersDataStatus(FilterItemvalue);
            break;
        case 'Done':
            tagAreaToggle();
            ordersDataStatus(FilterItemvalue);
            break;
    }
}
//EditSectionItem過濾
function EditSectionItem_Filter(e) {
    e.stopPropagation();
}
//editBtn按鈕選擇
function editBtnChecked(e) {
    e.stopPropagation();
    e.preventDefault();
    let inputValue = e.path[2].children;
    let newInputArray =[];
    // console.log(e.path[2]);
    // console.log(inputValue);
    for(let i = 0;i<(inputValue.length - 1);i++){
        let inputText = inputValue[i].innerText;
        let inputTextValue = inputValue[i].childNodes[1].checked;
        /*-做到這-*/
        // newInputArray.push({ lable: inputText , statu :inputTextValue});
        newInputArray.push(newInputArray[inputText]=inputTextValue);

        // console.log(inputValue[i].innerText);
        // console.log(inputValue[i].childNodes[1].checked);
    }
    console.log(newInputArray);
    console.log(newInputArray.length);
    // ordersTableData
    editSectionaToggle();
}
//監聽事件
/*-按鈕TagFilter收縮-*/
ordersTagFilter.addEventListener('click', tagAreaToggle, false);
/*-按鈕EditSection收縮-*/
ordersEditSection.addEventListener('click', editSectionaToggle, false);
/*-按鈕TagFilterItem效果-*/
ordersTagFilterItem.addEventListener('click', TagFilterItem_Filter, false);
/*-按鈕EditSectionItem效果-*/
ordersEditSectionItem.addEventListener('click', EditSectionItem_Filter, false);
editBtn.addEventListener('click', editBtnChecked, false);
