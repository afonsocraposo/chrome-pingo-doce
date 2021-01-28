function sortProducts() {
    var list = document.getElementsByClassName('_35DP2XbY0vnDR6ntQlSXMJ')[0];
    var products = document.getElementsByClassName('_35DP2XbY0vnDR6ntQlSXMJ')[0].children;

    var priceA, priceB;
    [].slice.call(products).sort(function(a, b) {
        priceA = parseFloat(a.getElementsByTagName("pdo-product-price-per-unit")[0].children[0].lastChild.data.match(/\|\s+(\d+,\d+).€/)[1].replace(",","."));
        priceB = parseFloat(b.getElementsByTagName("pdo-product-price-per-unit")[0].children[0].lastChild.data.match(/\|\s+(\d+,\d+).€/)[1].replace(",","."));
        return priceA > priceB ? 1 : -1;
    }).forEach(function(val,_) {
        list.appendChild(val);
    });
}

sortProducts();
