function a() {
    console.log("A")
}

setTimeout(() => {
    console.log("B")
})

a();

console.log("C")

Promise.resolve.then(() => console.log("D"))