export function getCurrency(p) {
    const sPrice = p.toString();
    if(sPrice.length > 3) {
        let result = [];
  
        for (let i in sPrice) {
          result[i] = sPrice[i];
        }
      
        for (let j = sPrice.length - 3; j > 0; j -= 3) {
          result.splice(j, 0, ",");
        }
        return result.join('')
    } else {
        return sPrice
    }
}

export function getDate(someDay) {
    const y = someDay.getFullYear();
    const m = (someDay.getMonth() + 1).toString().padStart(2, "0");
    const d = someDay.getDate().toString().padStart(2, "0");
    const hh = someDay.getHours().toString().padStart(2, "0");
    const mm = someDay.getMinutes().toString().padStart(2, "0");
    return "" + y + m + d + hh + mm;
  }