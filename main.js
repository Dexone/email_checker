import './style.sass'
import axios from 'axios'
const input = document.getElementById("input")
const button = document.getElementById("butt")
button.onclick = function(){
  const emailvalue = input.value
  axios.get(`http://api.eva.pingutil.com/email?email=${emailvalue}`).then((res)=>{
    if (res.data.status=="success"){alert("True")}
    else(alert("False"))
  })
}





