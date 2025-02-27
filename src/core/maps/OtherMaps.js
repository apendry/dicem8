import GenericRollMapping from "./GenericRollMapping";

const GaslandsMap = new Map([
    [1, "Hazard Token"],
    [2, "Slide"],
    [3, "Spin"],
    [4, "Shift"],
    [5, "Shift"],
    [6, "Shift"]
])

export const GaslandsSkidDie = new GenericRollMapping(GaslandsMap, 6, false)