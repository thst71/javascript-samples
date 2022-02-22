console.log("Ich bin im async 2 - vor der Pause");
let nowa2 = new Date().getTime();
while (new Date().getTime() < nowa2 + 1000) {
}
console.log("Ich bin im async 2 - nach 1Sek Pause", new Date());