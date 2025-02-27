export function RollNdS(nDie, dieType) {
    let rolls = [];
    let total = 0;
    for(let i = 0; i < nDie; i++) {
        let roll = Math.floor(Math.random() * dieType) + 1;
        total += roll
        rolls.push(roll)
    } 
    return [rolls, total]
}

export function RollPairs(nPairs, dieType) {
    let pairedRolls = []
    for(let i = 0; i < nPairs; i++) {
        let [,total] = RollNdS(2, dieType)
        pairedRolls.push(total)
    }
    return pairedRolls
}

export function RollMapped(numberOfRolls, rollMapping) {
    let paired = rollMapping.paired
    let dieType = rollMapping.dieType
    let rollMap = rollMapping.rollMap
    let [rolls,] = paired ? RollPairs(numberOfRolls, dieType) : RollNdS(numberOfRolls, dieType)
    return rolls.map(roll => `${paired ? 2 : 1}d${dieType}: ${roll}\t-> ${rollMap.has(roll) ? rollMap.get(roll) : "Unknown"}`)
}