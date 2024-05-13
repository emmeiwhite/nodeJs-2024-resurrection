console.log(__dirname)
let num = 0
let interval = setInterval(() => {
  console.log(num)
  num++

  if (num > 10) {
    clearInterval(interval)
  }
}, 1000)
