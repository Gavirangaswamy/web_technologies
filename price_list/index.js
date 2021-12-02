function price(name){
    console.log(name);
    if(name=="lays"){
        console.log(name);
        var price = 10;
        var qty = document.getElementById("lays").value;
        var total = price*qty;
        document.getElementById("print").innerHTML=total;  
        console.log(total);   
    }
    if(name=="cocacola"){
        var price = 15;
        var qty = document.getElementById("cocacola-qty").value;
        var total = price*qty;
        document.getElementById("cocacola-total").innerHTML=total;
    }
    if(name=="chocolate"){
        var price = 100;
        var qty = document.getElementById("chocolate-qty").value;
        var total = price*qty;
        document.getElementById("chocolate-total").innerHTML=total;
    }
    if(name=="biscuits"){
        var price = 20;
        var qty = document.getElementById("biscuits-qty").value;
        var total = price*qty;
        document.getElementById("biscuits-total").innerHTML=total;
    }
    if(name=="oreo"){
        var price = 30;
        var qty = document.getElementById("oreo-qty").value;
        var total = price*qty;
        document.getElementById("oreo-total").innerHTML=total;
    }
    if(name=="chacobar"){
        var price = 80;
        var qty = document.getElementById("chacobar-qty").value;
        console.log(qty);
        var total = price*qty;
        document.getElementById("chacobar-total").innerHTML=total;
    }
    if(name=="apple"){
        var price = 250;
        var qty = document.getElementById("Orange-qty").value;
        var total = price*qty;
        document.getElementById("Orange-total").innerHTML=total;
    }
    if(name=="Orange"){
        var price = 150;
        var qty = document.getElementById("lays-qty").value;
        var total = price*qty;
        document.getElementById("lays-total").innerHTML=total;
    }
    if(name=="cake"){
        var price = 350;
        var qty = document.getElementById("cake-qty").value;
        var total = price*qty;
        document.getElementById("cake-total").innerHTML=total;
    }
    if(name=="butter"){
        var price = 300;
        var qty = document.getElementById("butter-qty").value;
        var total = price*qty;
        document.getElementById("butter-total").innerHTML=total;
    }
}
