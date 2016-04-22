# poc-map-points

Low-Fi POC for annotating maps

## Thoughts on routes

/           (Welcome Screen)
/maps       (List of Maps)     <- List maps [/api/maps] (Perhaps load preview here)
/parties    (List of Parties)  <- List parties [/api/parties] (Load into app here)
/map/:id    (Single Map)       <- Show map [/api/maps/:mapid] (Load map and points here, players overlay)
