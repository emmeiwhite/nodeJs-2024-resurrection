const num1 = 10
const num2 = 20

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

// If we call the function addValues() here but do not export, let's see what happens it we import the file

addValues()
