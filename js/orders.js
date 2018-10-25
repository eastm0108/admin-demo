var fakeData=['<td scope="col">Order ID</td>','<td scope="col">Customer</td>','<td scope="col">Product List</td>','<td scope="col">Total</td>','<td scope="col">Add to Cart</td>','<td scope="col">Check-out</td>','<td scope="col">Address</td>','<td scope="col">Phone</td>','<td scope="col">Emaill</td>','<td scope="col">Status</td>',
'<td>001</td>','<td class="ordersSelectName">Mark</td>','<td>Vestibulum<br><p class="font-italic">$1,400</p><p> 數量: <span class="font-weight-bold">1</span></p></td>','<td>$1,400</td>','<td>2018/6/8<br>13:39</td>','<td>2018/6/8<br>20:23</td>','<td>386 Windler Drives<br>Apt. 358</td>','<td>0912345678</td>','<td>qq123@google.com</td>','<td><select class="ordersSelectValue"><option value="Paid">PAID</option><option value="Shipping">SHIPPING</option><option value="Done">DONE</option><option value="Unpaid">UNPAID</option></select></td>',
'<td>002</td>','<td class="ordersSelectName">Jacob</td>','<td>Vestibulum<br><p class="font-italic">$1,400</p><p> 數量: <span class="font-weight-bold">1</span></p></td>','<td>$1,400</td>','<td>2018/6/8<br>13:39</td>','<td>2018/6/8<br>20:23</td>','<td>386 Windler Drives<br>Apt. 358</td>','<td>0912345678</td>','<td>qq123@google.com</td>','<td><select class="ordersSelectValue"><option value="Shipping">SHIPPING</option><option value="Paid">PAID</option><option value="Done">DONE</option><option value="Unpaid">UNPAID</option></select></td>',
'<td>003</td>','<td class="ordersSelectName">Larry</td>','<td>Vestibulum<br><p class="font-italic">$1,400</p><p> 數量: <span class="font-weight-bold">1</span></p></td>','<td>$1,400</td>','<td>2018/6/8<br>13:39</td>','<td>2018/6/8<br>20:23</td>','<td>386 Windler Drives<br>Apt. 358</td>','<td>0912345678</td>','<td>qq123@google.com</td>','<td><select class="ordersSelectValue"><option value="Done">DONE</option><option value="Paid">PAID</option><option value="Shipping">SHIPPING</option><option value="Unpaid">UNPAID</option></select></td>',
'<td>004</td>','<td class="ordersSelectName">Ada</td>','<td>Vestibulum<br><p class="font-italic">$1,400</p><p> 數量: <span class="font-weight-bold">1</span></p></td>','<td>$1,400</td>','<td>2018/6/8<br>13:39</td>','<td>2018/6/8<br>20:23</td>','<td>386 Windler Drives<br>Apt. 358</td>','<td>0912345678</td>','<td>qq123@google.com</td>','<td><select class="ordersSelectValue"><option value="Unpaid">UNPAID</option><option value="Done">DONE</option><option value="Paid">PAID</option><option value="Shipping">SHIPPING</option></select></td>',
'<td>005</td>','<td class="ordersSelectName">Andy</td>','<td>Vestibulum<br><p class="font-italic">$1,400</p><p> 數量: <span class="font-weight-bold">1</span></p></td>','<td>$1,400</td>','<td>2018/6/8<br>13:39</td>','<td>2018/6/8<br>20:23</td>','<td>386 Windler Drives<br>Apt. 358</td>','<td>0912345678</td>','<td>qq123@google.com</td>','<td><select class="ordersSelectValue"><option value="Unpaid">UNPAID</option><option value="Done">DONE</option><option value="Paid">PAID</option><option value="Shipping">SHIPPING</option></select></td>',



]

//宣告變數
var ordersTagFilter = document.querySelector('#ordersTagFilter');
var ordersTagFilterItem = document.querySelector('.tagArea');
var ordersEditSection = document.querySelector('#ordersEditSection');
var ordersEditSectionItem = document.querySelector('#dateAreaItem');
var ordersTableData = document.querySelector('#ordersTableData');
var editBtn = document.querySelector('#editBtn');
var ordersTable = document.querySelector('#ordersTable');
//函式宣告
//tableShow
function tableShow() {
    ordersTable.innerHTML = `
    <table id="ordersTable"class="table table-striped table-bordered">
            <thead class="bg-brighter">
                <tr class="font-weight-bold">
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Product List</th>
                    <th scope="col">Total</th>
                    <th scope="col">Add to Cart</th>
                    <th scope="col">Check-out</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Emaill</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
    <tbody id="ordersTableData">
    <tr>
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
</tr> </tbody>
</table>`

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
    let addTable='';
    let orders_tdSelectValue = document.querySelectorAll('.ordersSelectValue');
    let valueLenght = orders_tdSelectValue.length;
    let newTableData = ``;
    let orders_tdName = document.querySelectorAll('.ordersSelectName');
    if (e == 'Select All') { return tableShow() }
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
    addTable = `<table id="ordersTable"class="table table-striped table-bordered">
    <thead class="bg-brighter">
        <tr class="font-weight-bold">
            <th scope="col">Order ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Product List</th>
            <th scope="col">Total</th>
            <th scope="col">Add to Cart</th>
            <th scope="col">Check-out</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Emaill</th>
            <th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
    ${newTableData}
    </tbody>
    </table>`
    // <tbody></tbody>
    ordersTable.innerHTML = addTable;
    // ordersTableData.innerHTML = newTableData;
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
    // let rowtd ='';
    let newTable ='';
    let inputValue = e.path[2].children;
    let newInputArray =[];
    for(let i = 0;i<=(inputValue.length - 1);i++){
        let inputText = inputValue[i].innerText;
        let inputTextValue = inputValue[i].childNodes[1].checked;
        /*-確認表單上面的那些項目被勾選-*/
        newInputArray.push(newInputArray.inputText=inputTextValue);
    }
    for(let i= 0; i<((fakeData.length)/(newInputArray.length));i++){
        let row ='';
        for(let j = 0;j <(newInputArray.length-1);j++){
            if(newInputArray[j]===true){
                row +=`${fakeData[(i*10+j)]}`
            }
        }
        newTable += `<tr>${row}</tr>`;
    }
    ordersTable.innerHTML=newTable;
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
