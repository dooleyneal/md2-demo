let backpack = [];

backpack.push("pokeball")
backpack.push("potion")
backpack.push("pokedollars")

// backpack.shift()
backpack.splice (0, 1)

let foundItem = "waterstone"
backpack.push(foundItem)

backpack.pop()
let itemCount = backpack.length
console.log(itemCount)

backpack.push("great ball", "antidote", "revive")

let satchel = backpack.splice(3, 2)
console.log(satchel)

for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i])

}


console.log(backpack)
