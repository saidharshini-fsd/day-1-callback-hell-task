let timer = document.createElement("div")
document.body.append(timer)
    timer.innerHTML="10"
    setTimeout(()=>{timer.innerHTML="9"},1000)
    setTimeout(()=>{timer.innerHTML="8"},2000)
    setTimeout(()=>{timer.innerHTML="7"},3000)
    setTimeout(()=>{timer.innerHTML="6"},4000)
    setTimeout(()=>{timer.innerHTML="5"},5000)
    setTimeout(()=>{timer.innerHTML="4"},6000)
    setTimeout(()=>{timer.innerHTML="3"},7000)
    setTimeout(()=>{timer.innerHTML="2"},8000)
    setTimeout(()=>{timer.innerHTML="1"},9000)
    setTimeout(()=>{const newLocal = timer.innerHTML = "✨HAPPY INDEPENDENCE DAY!!✨"},10000)
    