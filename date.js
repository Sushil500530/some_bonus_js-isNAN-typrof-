// 1. amon vabe time set korte hobe jeno duniyar je kono smoyer sathe mile jay bar desh onujayi smoy ta k dekhay...
// 2. kaj korar jonno compare korar khettre problem hoy seta thik korte hobe
const toDate = new Date('1971-03-26')
const toDate2 = new Date('1971-12-16')
console.log(toDate.getFullYear())
if(toDate.getFullYear() > toDate2.getFullYear()){
    console.log('march was before december')
}
else{
    console.log('march was not before december')
}