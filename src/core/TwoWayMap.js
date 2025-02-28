export default class TwoWayMap extends Map {
    constructor(entries) {
        super(entries)
        this.reverseMap = new Map(
            entries.map(([k,v]) => [v,k])
        );
    }

    revGet(key) { 
        return this.reverseMap.get(key); 
    }
}