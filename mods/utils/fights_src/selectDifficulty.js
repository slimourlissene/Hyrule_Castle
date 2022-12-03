"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var game_1 = require("../game");
function selectDifficulty(name) {
    var answer = 0;
    var answer2 = 0;
    if (name === "0") {
        console.clear();
        console.log();
        console.log('\x1B[1mSelect difficulty\x1B[0m');
        console.log();
        console.log('[1] Normal.');
        console.log('[2] Hard.');
        console.log('[3] Insane.');
        console.log();
        answer = rl.question("\x1B[36m=> \x1B[37m");
        console.clear();
        console.log();
        console.log('\x1B[1mSelect number of floor\x1B[0m');
        console.log();
        console.log('[1] 10.');
        console.log('[2] 20.');
        console.log('[3] 50.');
        console.log('[4] 100.');
        console.log();
        answer2 = rl.question("\x1B[36m=> \x1B[37m");
    }
    else {
        answer = 2;
        answer2 = 999999999;
    }
    if (+answer2 === 1) {
        (0, game_1["default"])(+answer, 10, name);
    }
    if (+answer2 === 2) {
        (0, game_1["default"])(+answer, 20, name);
    }
    if (+answer2 === 3) {
        (0, game_1["default"])(+answer, 50, name);
    }
    if (+answer2 === 4) {
        (0, game_1["default"])(+answer, 100, name);
    }
    if (+answer2 === 999999999) {
        (0, game_1["default"])(+answer, 999999999, name);
    }
}
exports["default"] = selectDifficulty;
