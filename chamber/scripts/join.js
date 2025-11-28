import { getLevelInfo, displayLevelCards, displayLevelInfo } from "./levels.mjs";

getLevelInfo(displayLevelCards);

const timestamp = document.querySelector("#timestamp");
const dt = new Date;
const dtStr = dt.toISOString()

timestamp.value = `${dtStr.substring(11, 16)} on ${dtStr.substring(0, 10)}`;