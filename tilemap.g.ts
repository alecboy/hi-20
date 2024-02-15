// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004020202020202020202020202020203050c010f0e010a0a0a0a0d01010c01090501010101010a0a0a0a01010101010905010d010c010a0a0a0a010c010d01090501010101010a0a0a0a01010101010905010c0b0b0c0a0a0a0a0b0c01010109050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a050a0a0a0a0a0a0a0a0a0a0a0a0a0a09050a0a0a0a0a0a0a0a0a0a0a0a0a0a0a050a0a0a0a0a0a0a0a0a0a0a0a0a0a0905010101010c0a0a0a0a01010c01010905010c0101010a0a0a0a010101010109050101010d010a0a0a0a010101010c090501010101010a0a0a0a0c010d01010905010c01010c0a0a0a0a01010101010907060606060606060a0a060606060608`, img`
. . . . . . . . . . . . . . . . 
. 2 . 2 2 . . . . . . . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . 2 . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . 2 . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . 2 . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileGrass2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
