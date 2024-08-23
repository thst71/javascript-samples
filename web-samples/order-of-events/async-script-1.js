console.log("Ich bin im async 1 - vor der Pause", new Date());
let nowa1 = new Date().getTime();
while (new Date().getTime() < nowa1 + 2000) {
}
console.log("Ich bin im async 1 - nach 2Sek Pause", new Date());

