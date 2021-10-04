var arr = [1,2,3,4,5,6,7,8]

var new_arr = arr.filter((element, index) => {
    if (element%2==0) return true
})

console.log(new_arr)