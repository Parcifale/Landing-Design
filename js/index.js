import "./Components/slider.js"
import "./Components/burger.js"
import "./Components/popupimg.js"
import "./Components/popupform.js"
import "./Components/popupinfo.js"
import "./Components/massage.js"


function store(){
let a = {
    'name': document.getElementById("name").value,
    'phone': document.getElementById("phone").value,
    'wishes': document.getElementById("wishes").value
    
 };
 localStorage.setItem('Заявка', JSON.stringify(a) );
}

const localstr = document.getElementById("in1")
   localstr.addEventListener("click", store)

   function storePopup(){
    let b = {
        'name': document.getElementById("name-popup").value,
        'phone': document.getElementById("phone-popup").value,
        
     };
     localStorage.setItem('Заявка', JSON.stringify(b) );
    }
    


const localstrPopup = document.getElementById("in2")
   localstrPopup.addEventListener("click", storePopup)
