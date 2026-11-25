let bagItems;
onLoad();
function onLoad(){
    let bagitemsStr = localStorage.getItem('bagitems');
    bagItems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
}
function addToBag(itemId){
      bagItems.push(itemId);
      localStorage.setItem('bagitems', JSON.stringify(bagItems));
      displayBagIcon();
}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-ItemCount');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility ='visible';
        bagItemCountElement.innerText= bagItems.length;
    } else
        {
            bagItemCountElement.style.visibility ='hidden';
        }
}
function displayItemsOnHomePage(item){
let itemContainerElements = document.querySelector('.items_container');
if(!itemContainerElements){
    return;
}
let innerHtml = '';
items.forEach(item => {
    innerHtml+=`
        <div class="item_container">
        <img class="item_image" src="${item.image}" alt="red cloth">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="Company_name">${item.company}</div>
        <div class="item_name">${item.item_name}
</div>
        <div class="price">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="origional_price">Rs ${item.origional_price}</span>
            <span class="discount">(${item.discount_percentage} % oFF)</span>
        </div>
        <button class="btn_add_bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;
});
itemContainerElements.innerHTML = innerHtml;
}