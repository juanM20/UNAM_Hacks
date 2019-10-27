let check1 = document.getElementById("check1");



function Set_checked() {

    if(check1.checked == false){
        check1.checked = true;
        console.log(check1.checked);
    }else{
        check1.checked = false; 
        console.log(check1.checked);
    }
}