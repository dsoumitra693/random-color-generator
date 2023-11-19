let bg = document.querySelector("#container")
let btn = document.querySelector("#btn")
let copyBtn = document.querySelector("#copyBtn")

let color = ''

function randColorGenerator() {
    copyBtn.innerHTML = "Copy"
    let colors = function () {
        let arr1 = []
        let arr2 = []
        let arr3 = []
        for (let i = 0; i < 3; i++) {
            let c1 = ~~((Math.random() * 255 + i * 255) % 255)
            let c2 = ~~(Math.random() * 255)
            let c3 = 255 - c2

            arr1.push(c1)
            arr2.push(c2)
            arr3.push(c3)
        }
        return [arr1, arr2, arr3]
    }()
    color = Color(...colors[0])
    bg.style.backgroundColor = Color(...colors[0])
    btn.style.backgroundColor = Color(...colors[1])
    btn.style.color = Color(...colors[2])
}

function Color(r, g, b) {
    let rh = r.toString(16),
        gh = g.toString(16),
        bh = b.toString(16)
    return '#' + rh + gh + bh

}


randColorGenerator()
btn.addEventListener('click', randColorGenerator)
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(color);
    copyBtn.innerHTML = "Copied !"
})