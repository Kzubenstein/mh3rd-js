//1
 const createRomNum = (n) => {
   return (n === 1) ?  'I' : 'I' + createRomNum(n-1)
}

 function CreateRomNum(str) {
   const V = (str) => {
      if (str.length <= 3) {
         return str
      } else if (str.length === 4) {
         return 'IV'
      } else if (str.length === 9) {
         return 'IX'
      } else {
         return 'V' + str.slice(0, -5)
      }
   }
   const X = (str) => {
      if (str.length <= 10) {
         return V(str)
      } else {
         let n = 1 
         str = str.slice(0, -10*n)
         return 'X' + X(str)
      }
   }
   
   const index = X(createRomNum(57)).lastIndexOf("X")
   
   const LC = (n, str) => {
      if (n === 9) {
         return 'C' + str.substring(10)
      } else if (n === 8) {
         return 'XC' + str.substring(9)
      } else if (n === 3) {
         return 'XL' + str.substring(4)
      } else if (n === 2) {
         return str
      } else {
         return 'L' + str.substring(5)
      }
   }
   romNumObj = {}
   romNumObj[str] = LC(index, X(str));
   return romNumObj
   
}
console.log(CreateRomNum(createRomNum(54)))  
//2 
function Time () {
   const now = () => {
      let nowTime = new Date ()
      let h = nowTime.getHours()
      let m = nowTime.getMinutes()
      let s = nowTime.getSeconds()
      return () => {
         return arr = [h + ' часов', m + ' минут', s + ' секунд']
      }
   }
   const collNow = now()
   const interval = setInterval(() => {
         console.log(collNow())
         
   }, 5000)
   const timeOut = setTimeout(() => {
      clearInterval(interval)
   }, 20000)
}

Time()