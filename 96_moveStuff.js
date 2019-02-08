function smart_move(destination,on_done) // despite the name, smart_move isn't very smart or efficient, it's up to the players to implement a better movement method [05/02/17]
{
    smart.map="";
    if(is_string(destination)) destination={to:destination};
    if(is_number(destination)) destination={x:destination,y:on_done},on_done=null;
    if("x" in destination)
    {
        smart.map=destination.map||character.map;
        smart.x=destination.x;
        smart.y=destination.y;
    }
    else if("to" in destination || "map" in destination)
    {
        if(destination.to=="town") destination.to="main";
        if(G.monsters[destination.to])
        {
            for(var name in G.maps)
                (G.maps[name].monsters||[]).forEach(function(pack){
                    if(pack.type!=destination.to || G.maps[name].ignore || G.maps[name].instance) return;
                    if(pack.boundaries) // boundaries: for phoenix, mvampire
                    {
                        pack.last=pack.last||0;
                        var boundary=pack.boundaries[pack.last%pack.boundaries.length];
                        pack.last++;
                        smart.map=boundary[0];
                        smart.x=(boundary[1]+boundary[3])/2;
                        smart.y=(boundary[2]+boundary[4])/2;
                    }
                    else if(pack.boundary)
                    {
                        var boundary=pack.boundary;
                        smart.map=name;
                        smart.x=(boundary[0]+boundary[2])/2;
                        smart.y=(boundary[1]+boundary[3])/2;
                    }
                });
        }
        else if(G.maps[destination.to||destination.map])
        {
            smart.map=destination.to||destination.map;
            smart.x=G.maps[smart.map].spawns[0][0];
            smart.y=G.maps[smart.map].spawns[0][1];
        }
        else if(destination.to=="upgrade" || destination.to=="compound") smart.map="main",smart.x=-204,smart.y=-129;
        else if(destination.to=="exchange") smart.map="main",smart.x=-26,smart.y=-432;
        else if(destination.to=="potions" && character.map=="halloween") smart.map="halloween",smart.x=149,smart.y=-182;
        else if(destination.to=="potions" && in_arr(character.map,["winterland","winter_inn","winter_cave"])) smart.map="winter_inn",smart.x=-84,smart.y=-173;
        else if(destination.to=="potions") smart.map="main",smart.x=56,smart.y=-122;
        else if(destination.to=="scrolls") smart.map="main",smart.x=-465,smart.y=-71;
        else if(destination.to=="stands") smart.map="main",smart.x=-186,smart.y=691; // Added
    }
    if(!smart.map)
    {
        game_log("Unrecognized","#CF5B5B");
        return;
    }
    smart.moving=true;
    smart.plot=[]; smart.flags={}; smart.searching=smart.found=false;
    if(destination.return)
    {
        var cx=character.real_x,cy=character.real_y,cmap=character.map;
        smart.on_done=function(){
            if(on_done) on_done();
            smart_move({map:cmap,x:cx,y:cy});
        }
    }
    else smart.on_done=on_done||function(){};
    console.log(smart.map+" "+smart.x+" "+smart.y);
}