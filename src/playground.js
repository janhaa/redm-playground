"use strict";
/// <reference path='../node_modules/@citizenfx/client/natives_universal.d.ts'/>
/// <reference path='../node_modules/@citizenfx/client/index.d.ts'/>
var spawnPos = [-278.2138, 807.0493, 119.38];
on('onClientGameTypeStart', function () {
    emit('chat:addMessage', {
        args: [
            'Welcome to the party!~'
        ]
    });
    // exports.spawnmanager.setAutoSpawnCallback(() => {
    //   exports.spawnmanager.spawnPlayer({
    //     x: spawnPos[0],
    //     y: spawnPos[1],
    //     z: spawnPos[2],
    //     model: 'a_m_m_skater_01'
    //   }, () => {
    //     emit('chat:addMessage', {
    //       args: [
    //         'Welcome to the party!~'
    //       ]
    //     })
    //   });
    // });
    // exports.spawnmanager.setAutoSpawn(true)
    // exports.spawnmanager.forceRespawn()
});
RegisterCommand("pg", function () {
    emit('chat:addMessage', {
        args: [
            'Welcome to the party!~'
        ]
    });
    exports.spawnmanager.setAutoSpawnCallback(function () {
        exports.spawnmanager.spawnPlayer({
            x: spawnPos[0],
            y: spawnPos[1],
            z: spawnPos[2],
	    model: 'a_m_m_skater_01'
        }, function () {
            emit('chat:addMessage', {
                args: [
                    'Welcome to the party!~'
                ]
            });
        });
    });
    exports.spawnmanager.setAutoSpawn(true);
    exports.spawnmanager.forceRespawn();
}, false);
