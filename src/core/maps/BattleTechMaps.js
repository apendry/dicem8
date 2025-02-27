import GenericRollMapping from "./GenericRollMapping"

class BattleTechRollMapping extends GenericRollMapping{

    constructor(rollMap, paired){
        super(rollMap, 6, paired)
    }
}

function CreateMap(...result){
    let keys = [2,3,4,5,6,7,8,9,10,11,12]
    return new Map(keys.map((k, i) => {
        return [k, result[i]]
    }))
}

const FrontHitLocationMap = CreateMap("Ct Crit", "RA", "RA", "RL", "RT", "CT", "LT", "LL", "LA", "LA", "HD")
const RightHitLocationMap = CreateMap("RT Crit", "RL", "RA", "RA", "RL", "RT", "CT", "LT", "LA", "LL", "HD")
const LeftHitLocationMap = CreateMap("LT Crit", "LL", "LA", "LA", "LL", "LT", "CT", "RT", "RA", "RL", "HD")
export const FrontHitLocation = new BattleTechRollMapping(FrontHitLocationMap, true)
export const RightHitLocation = new BattleTechRollMapping(RightHitLocationMap, true)
export const LeftHitLocation = new BattleTechRollMapping(LeftHitLocationMap, true)

const QuadFrontHitLocationMap = CreateMap("CT Crit", "RFL", "RFL", "RRL", "RT", "CT", "LT", "LRL", "LFL", "LFL", "HD")
const QuadRightHitLocationMap = CreateMap("RT Crit", "RRL", "RFL", "RFL", "RRL", "RT", "CT", "LT", "LFL", "LRL", "HD")
const QuadLeftHitLocationMap = CreateMap("LT Crit", "LRL", "LFL", "LFL", "LRL", "LT", "CT", "RT", "RFL", "RRL", "HD")
export const QuadFrontHitLocation = new BattleTechRollMapping(QuadFrontHitLocationMap, true)
export const QuadRightHitLocation = new BattleTechRollMapping(QuadRightHitLocationMap, true)
export const QuadLeftHitLocation = new BattleTechRollMapping(QuadLeftHitLocationMap, true)

const ClusterTwo = CreateMap(1,1,1,1,1,1,2,2,2,2,2)
const ClusterThree = CreateMap(1,1,1,2,2,2,2,2,3,3,3)
const ClusterFour = CreateMap(1,1,2,2,2,3,3,3,4,4,4)
const ClusterFive = CreateMap(2,2,2,3,3,3,4,4,4,5,5)
const ClusterSix = CreateMap(2,2,3,3,4,4,4,5,5,6,6)
const ClusterSeven = CreateMap(2,3,3,3,4,5,5,6,6,7,7)
const ClusterEight = CreateMap(2,3,3,4,5,5,6,7,7,8,8)
const ClusterNine = CreateMap(3,3,4,5,5,6,7,7,8,9,9)
const ClusterTen = CreateMap(3,3,4,5,6,7,8,8,9,9,10)
const ClusterTwelve = CreateMap(4,4,5,6,7,8,9,10,11,12,12)
const ClusterFifteen = CreateMap(5,6,7,8,9,10,11,12,13,14,15)
const ClusterTwenty = CreateMap(6,7,9,11,12,13,15,16,18,19,20)
const ClusterThirty = CreateMap(10,12,14,16,18,20,22,24,26,28,30)
const ClusterFourty = CreateMap(12,15,18,21,24,27,30,32,35,37,40)

const ClusterMatrix = new Map([
    [2, new BattleTechRollMapping(ClusterTwo, true)],
    [3, new BattleTechRollMapping(ClusterThree, true)],
    [4, new BattleTechRollMapping(ClusterFour, true)],
    [5, new BattleTechRollMapping(ClusterFive, true)],
    [6, new BattleTechRollMapping(ClusterSix, true)],
    [7, new BattleTechRollMapping(ClusterSeven, true)],
    [8, new BattleTechRollMapping(ClusterEight, true)],
    [9, new BattleTechRollMapping(ClusterNine, true)],
    [10, new BattleTechRollMapping(ClusterTen, true)],
    [12, new BattleTechRollMapping(ClusterTwelve, true)],
    [15, new BattleTechRollMapping(ClusterFifteen, true)],
    [20, new BattleTechRollMapping(ClusterTwenty, true)],
    [30, new BattleTechRollMapping(ClusterThirty, true)],
    [40, new BattleTechRollMapping(ClusterFourty, true)]
])

export function GetClusterMap(clusterSize) {
    return ClusterMatrix.get(clusterSize)
}