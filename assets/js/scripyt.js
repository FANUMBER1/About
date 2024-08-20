
var giohang=new Array();


    function addcart(x){
        var product=x.parentElement.parentElement
        var Img=product.querySelector("img").src
        var name=product.querySelector("h2").innerText
        var price=product.querySelector("span").innerText
        var quantity=product.querySelector("#quantity").value
        if(sessionStorage.getItem("giohang")){
            giohang=JSON.parse(sessionStorage.getItem("giohang"));
        }
        const errorMessage = document.getElementById('errorMessage');
        if (quantity==''){
            errorMessage.textContent = 'Vui lòng nhập số lượng.';
        }else{
            errorMessage.textContent = '';
            console.log(checkgh(Img,name,price))
            if(checkgh(Img,name,price) >= 0 ){
                console.log(1)
                 capnhatsl(checkgh(Img,name,price),quantity)
            }else{
                console.log(2)
                var item=new Array(Img,name,price,quantity);
                giohang.push(item)
            }
        }           
        sessionStorage.setItem("giohang",JSON.stringify(giohang)); 
        showgiohang()
    };

function showgiohang(){
    giohang=JSON.parse(sessionStorage.getItem("giohang"));
    var kq='';
    var quantityItem=0;
    if(giohang!=null){
        for(i=0; i< giohang.length; i++){
            quantityItem=quantityItem + (parseInt(giohang[i][2])*parseInt(giohang[i][3]));
           kq+=`
      <div id="cart" class="row g-2 p-2 border-bottom">
        <div class="col-4"><input type="checkbox" value=""><img class="rounded-2 bg-light p-2 col-12 w-75"
            src="`+giohang[i][0]+`" alt="avatar"></div>
        <div class="col-8">
          <p id="name" class="heading-color fw-semibold mb-1">`+giohang[i][1]+`</p>
          <p id="price" class="heading-color fw-semibold mb-1">`+giohang[i][2]+`</p>
          <div class="d-flex justify-content-between align-items-center"><input type="number" id="quantity"
              name="quantity" min="1" max="100" value="`+giohang[i][3]+`"><a type="button" onclick="xoa(this)" class="btn btn-sm  p-0 fs-4"> X </a>
          </div>
        </div>
      </div>`
        }
    }
    document.getElementById("cartItem").innerHTML=kq;
    document.getElementById("quantityItem").innerHTML=quantityItem;

}

 function xoa(x){
    giohang=JSON.parse(sessionStorage.getItem("giohang"));
    var item=x.parentElement.parentElement.parentElement
    var img=item.querySelector("img").src;
    var name=item.querySelector("#name").innerText;
    var price=item.querySelector("#price").innerText;
    item.remove()
    for(i=0; i< giohang.length;i++){
        if(img==giohang[i][0] && name==giohang[i][1] && price==giohang[i][2]){
            giohang.splice(i,1);
            sessionStorage.setItem("giohang",JSON.stringify(giohang)); 
        }
    }
}

function checkgh(img,name,price){
    if(sessionStorage.getItem("giohang")){
        giohang=JSON.parse(sessionStorage.getItem("giohang"));
    }
    var k
    for(i=0; i < giohang.length; i++){
        if(img==giohang[i][0] && name==giohang[i][1] && price==giohang[i][2]){
           k=i;
        } 
    }
    return k;
}

function capnhatsl(vt,sl){
    if(sessionStorage.getItem("giohang")){
        giohang=JSON.parse(sessionStorage.getItem("giohang"));
    }
    for(i=0; i < giohang.length; i++){
       if(i==vt){
        console.log(3)
        console.log(sl)
        giohang[vt][3]=parseInt(giohang[vt][3])+ parseInt(sl)
        break;
       }
}
}


