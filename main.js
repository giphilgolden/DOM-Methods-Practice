let bodyElement = document.querySelector("body")
let mainElement = document.createElement("main")
let button = document.createElement("button")
let sentence = "Extinction"
let picture = document.createElement("img")
picture.src = "rex.jpg"
let link = document.createElement("a")
link.href = "https://www.google.com/search?q=red+trex&sxsrf=ALeKk0386OLpGHg5VjfTY2NNpBmrfiE9sA:1592331703882&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjD6Mvs-YbqAhXWSDABHc65AoMQ_AUoAXoECA4QAw&biw=1680&bih=907"


bodyElement.prepend(button)
button.append(sentence)
bodyElement.prepend(mainElement)
mainElement.append(picture)
mainElement.append(link)
link.append("This is the link to google")

button.addEventListener("click", function(){
    console.log("yes")
    mainElement.remove()
})
