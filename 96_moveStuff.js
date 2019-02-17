let storedDestination = {};
function smart_move(destination, on_done) {
    if (storedDestination[character.name] && storedDestination[character.name] !== destination) {
        stop('move');
    } else if (storedDestination[character.name] && storedDestination[character.name] === destination) {
        return;
    }
    storedDestination[character.name] = destination;
    smart.map="";
    if(is_string(destination)) destination={to:destination};
    if(is_number(destination)) destination={x:destination,y:on_done},on_done=null;
    if ("x" in destination) {
        smart.map=destination.map||character.map;
        smart.x=destination.x;
        smart.y=destination.y;
    } else if ("to" in destination || "map" in destination) {
        if (destination.to === "town") destination.to = "main";
        if (G.monsters[destination.to]) {
            for (let name in G.maps) {
                if (!G.maps[name].monsters) continue;
                (shuffle(G.maps[name].monsters) || []).forEach(function (pack) {
                    if (pack.type !== destination.to || G.maps[name].ignore || G.maps[name].instance || avoidMaps.includes(name)) return;
                    if (pack.boundaries) {
                        pack.last = pack.last || 0;
                        let boundary = pack.boundaries[pack.last % pack.boundaries.length];
                        pack.last++;
                        smart.map = boundary[0];
                        smart.x = (boundary[1] + boundary[3]) / 2;
                        smart.y = (boundary[2] + boundary[4]) / 2;
                    } else if (pack.boundary) {
                        let boundary = pack.boundary;
                        smart.map = name;
                        smart.x = (boundary[0] + boundary[2]) / 2;
                        smart.y = (boundary[1] + boundary[3]) / 2;
                    }
                });
            }
        } else if (G.maps[destination.to || destination.map]) {
            smart.map=destination.to||destination.map;
            smart.x=G.maps[smart.map].spawns[0][0];
            smart.y=G.maps[smart.map].spawns[0][1];
        }
        else if (destination.to == "upgrade" || destination.to == "compound") smart.map = "main", smart.x = -204, smart.y = -129;
        else if (destination.to == "exchange") smart.map = "main", smart.x = -26, smart.y = -432;
        else if(destination.to=="potions" && character.map=="halloween") smart.map="halloween",smart.x=149,smart.y=-182;
        else if(destination.to=="potions" && in_arr(character.map,["winterland","winter_inn","winter_cave"])) smart.map="winter_inn",smart.x=-84,smart.y=-173;
        else if (destination.to == "potions") smart.map = "main", smart.x = 56, smart.y = -122;
        else if (destination.to == "scrolls") smart.map = "main", smart.x = -465, smart.y = -71;
        else if (destination.to == "stands") smart.map = "main", smart.x = -186, smart.y = 691; // Added
        else if (destination.to == "shells") smart.map = "main", smart.x = -1499, smart.y = 629; // Added
    }
    if (!smart.map) {
        //game_log("Unrecognized","#CF5B5B");
        return;
    }
    smart.moving=true;
    smart.plot=[]; smart.flags={}; smart.searching=smart.found=false;
    if (destination.return) {
        var cx=character.real_x,cy=character.real_y,cmap=character.map;
        smart.on_done=function(){
            if(on_done) on_done();
            smart_move({map:cmap,x:cx,y:cy});
        }
    } else smart.on_done = on_done || function () {
    };
    console.log(smart.map+" "+smart.x+" "+smart.y);
}

function smart_move_logic()
{
    if(!smart.moving) return;
    if(!smart.searching && !smart.found) {
        start_pathfinding();
    }
    else if(!smart.found) {
        if(Math.random()<0.1) {
            move(character.real_x+Math.random()*0.0002-0.0001,character.real_y+Math.random()*0.0002-0.0001);
            parent.d_text(shuffle(["Hmm","...","???","Definitely left","No right!","Is it?","I can do this!","I think ...","What If","Should be","I'm Sure","Nope","Wait a min!","Oh my"])[0],character,{color:shuffle(["#68B3D1","#D06F99","#6ED5A3","#D2CF5A"])[0]});
        }
        continue_pathfinding();
    }
    else if(!character.moving && can_walk(character) && !is_transporting(character)) {
        if(!smart.plot.length) {
            smart.moving=false;
            smart.on_done(true);
            return;
        }
        var current=smart.plot[0];
        smart.plot.splice(0,1);
        // game_log(JSON.stringify(current));
        if(current.town) {
            use("town");
        }
        else if(current.transport) {
            parent.socket.emit("transport",{to:current.map,s:current.s});
            // use("transporter",current.map);
        }
        else if(character.map==current.map && can_move_to(current.x,current.y)) {
            move(current.x,current.y);
        }
        else {
            //game_log("Lost the path...","#CF5B5B");
            smart_move({map:smart.map,x:smart.x,y:smart.y},smart.on_done);
        }
    }
}

function start_pathfinding() {
    smart.searching=true;
    queue=[],visited={},start=0,best=null;
    qpush({x:character.real_x,y:character.real_y,map:character.map,i:-1});
    //game_log("Searching for a path...","#89D4A2");
    bfs();
}

function bfs() {
    var timer=new Date(),result=null,optimal=true;

    while(start<queue.length) {
        var current=queue[start];
        var map=G.maps[current.map];
        if(current.map==smart.map) {
            smart.flags.map=true;
            if(abs(current.x-smart.x)+abs(current.y-smart.y)<smart.edge) {
                result=start;
                break;
            }
            else if(best===null || abs(current.x-smart.x)+abs(current.y-smart.y)<abs(queue[best].x-smart.x)+abs(queue[best].y-smart.y)) {
                best=start;
            }
        }
        else if(current.map!=smart.map) {
            if(smart.prune.map && smart.flags.map) {start++; continue;}
            map.doors.forEach(function(door){
                // if(simple_distance({x:map.spawns[door[6]][0],y:map.spawns[door[6]][1]},{x:current.x,y:current.y})<30)
                if(is_door_close(current.map,door,current.x,current.y) && can_use_door(current.map,door,current.x,current.y))
                    qpush({map:door[4],x:G.maps[door[4]].spawns[door[5]||0][0],y:G.maps[door[4]].spawns[door[5]||0][1],transport:true,s:door[5]||0});
            });
            map.npcs.forEach(function(npc){
                if(npc.id=="transporter" && simple_distance({x:npc.position[0],y:npc.position[1]},{x:current.x,y:current.y})<75) {
                    for(var place in G.npcs.transporter.places) {
                        qpush({map:place,x:G.maps[place].spawns[G.npcs.transporter.places[place]][0],y:G.maps[place].spawns[G.npcs.transporter.places[place]][1],transport:true,s:G.npcs.transporter.places[place]});
                    }
                }
            });
        }

        if(smart.use_town) qpush({map:current.map,x:map.spawns[0][0],y:map.spawns[0][1],town:true}); // "town"

        shuffle(moves);
        moves.forEach(function(m){
            var new_x=parseInt(current.x+m[0]),new_y=parseInt(current.y+m[1]);
            // utilise can_move - game itself uses can_move too - smart_move is slow as can_move checks all the lines at each step
            if(can_move({map:current.map,x:current.x,y:current.y,going_x:new_x,going_y:new_y,base:character.base}))
                qpush({map:current.map,x:new_x,y:new_y});
        });

        start++;
        if(mssince(timer)>(!parent.is_hidden()&&40||500)) return;
    }

    if(result===null) result=best,optimal=false;
    if(result===null) {
        //game_log("Path not found!","#CF575F");
        smart.moving=false;
        smart.on_done(false);
    }
    else {
        plot(result);
        smart.found=true;
        if(smart.prune.smooth) smooth_path();
        //if(optimal) game_log("Path found!","#C882D1");
        //else game_log("Path found~","#C882D1");
        // game_log(queue.length);
        //parent.d_text("Yes!",character,{color:"#58D685"});
    }
}