var list = document.querySelector('ul')

var arr = ['Go the GYM', 'cook oat', 'Eat']

arr.push('Complete the assignment')

for(var i=0; i<arr.length;i++){

    var element= document.createElement('li')
    var tetxtNode = document.createTextNode(arr[i])
    element.appendChild(tetxtNode)
    list.appendChild(element)

}