function checkReady(counter=10) {
    if(counter>0){
        var products = document.getElementsByClassName('_35DP2XbY0vnDR6ntQlSXMJ');
        if(products.length==0 || products[0].children.length==0){
            console.log(0);
            setTimeout(function(){
                checkReady(counter-1);
            }, 1000);
        }else{
            console.log(products[0].children.length);
            sortProducts();
        }
    }
}

function sortProducts() {
    var list = document.getElementsByClassName('_35DP2XbY0vnDR6ntQlSXMJ')[0];
    var products = document.getElementsByClassName('_35DP2XbY0vnDR6ntQlSXMJ')[0].getElementsByTagName("pdo-product-item");

    var priceA, priceB;
    [].slice.call(products).sort(function(a, b) {
        priceA = parseFloat(a.getElementsByTagName("pdo-product-price-per-unit")[0].children[0].lastChild.data.match(/\|\s+(\d+,\d+).€/)[1].replace(",","."));
        priceB = parseFloat(b.getElementsByTagName("pdo-product-price-per-unit")[0].children[0].lastChild.data.match(/\|\s+(\d+,\d+).€/)[1].replace(",","."));
        return priceA > priceB ? 1 : -1;
    }).forEach(function(val,_) {
        list.appendChild(val);
    });
}

checkReady();


function getMessage(request, _, _) {
    if (request.message === 'sort') {
        setTimeout(function(){
            checkReady();
        }, 1000);
    }
}

if(!chrome.runtime.onMessage.hasListeners()) chrome.runtime.onMessage.addListener(getMessage);
