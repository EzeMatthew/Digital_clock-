const hoursEl = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const secondEl = document.getElementById('second')
const ampmEl = document.getElementById('ampm')

function Updateclock(){

const date = new Date()


   let h = date.getHours()
   let m = date.getMinutes()
   let s = date.getSeconds()

   // CONDITIONAL STATEMENTS
   let ampm = h >= 12 ? 'PM' : 'AM'
   if (h > 12) h -= 12;

   h = h<10 ? '0' + h : h
   m = m<10 ? '0' + m : m
   s = s<10 ? '0' + s : s


   hoursEl.innerText = h;
   minutes.innerText = m;
   secondEl.innerText = s;
   ampmEl.innerText = ampm;


 setTimeout(Updateclock,1000)

}
Updateclock()




