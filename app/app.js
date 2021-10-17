function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");
    
    if(!pageID){
        navToPage("home");
    } else if (pageID == "product1") {
        $.get(`pages/productlist/${pageID}.html`, function(data) {
            console.log(data);
            $("#app").html(data);
        });
    } else if (pageID == "product2") {
        $.get(`pages/productlist/${pageID}.html`, function(data) {
            console.log(data);
            $("#app").html(data);
        });
    } else if (pageID == "product3") {
        $.get(`pages/productlist/${pageID}.html`, function(data) {
            console.log(data);
            $("#app").html(data);
        });
    } else if (pageID == "product4") {
        $.get(`pages/productlist/${pageID}.html`, function(data) {
            console.log(data);
            $("#app").html(data);
        });
    } else if (pageID == "product5") {
        $.get(`pages/productlist/${pageID}.html`, function(data) {
            console.log(data);
            $("#app").html(data);
        });
    } else if (pageID == "product6") {
        $.get(`pages/productlist/${pageID}.html`, function(data) {
            console.log(data);
            $("#app").html(data);
        });
    } else {
        navToPage(pageID);
    }
}

function navToPage(pageName) {
    $.get(`pages/${pageName}/${pageName}.html`, function(data) {
        console.log(data);
        $("#app").html(data);
    });
}

function navToProductList(pageName) {
    
}

function initListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function() {
    initListeners();
    //navToPage("home");
});