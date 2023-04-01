let seconds = 2;
let secondsA = 8;
var interval;



function gacha(){
    var imgCard = document.getElementById("imgCard")
    var btnOpen = document.getElementById("btnOpen")
    const countDown = setInterval(()=>{
        secondsA--;
        switch (secondsA){
            case 8:
                imgCard.src="./img/flashgacha1.png"
            break
            case 7:
                imgCard.src="./img/flashgacha2.png"
            break
            case 6:
                imgCard.src="./img/flashgacha3.png"
            break
            case 5:
                imgCard.src="./img/flashgacha4.png"
            break
            case 4:
                imgCard.src="./img/flashgacha5.png"
            break
            case 3:
                imgCard.src="./img/flashgacha6.png"
            break
            case 2:
                imgCard.src="./img/flashgacha7.png"
            break
            case 1:
                imgCard.src="./img/flashgacha8.png"
            break
            case 0:
                $("#imgCard").addClass("flip");
                animationGacha();
                secondsA=8;
                clearInterval(countDown);
            break
        }
      },12) 
    $("#btnOpen").css({  "display": "none"})
      interval = countDown;
}
function animationGacha(){
    var imgCard = document.getElementById("imgCard")
    const countDown = setInterval(()=>{
        seconds--;
        switch(seconds){
            case 1:
                $("#imgCard").addClass("zomm");
                break;
            case 0:
                $(".card").removeClass("eff");
                $("#imgCard").removeClass("flip");
                $("#imgCard").removeClass("zomm");
                imgCard.src="./img/gachacard2.png"
                seconds=5;
                clearInterval(countDown);
                ItemArray();
            break;
        }
    },400)
    $(".card").addClass("eff");
    imgCard.src="./img/gachacard1.png"
    interval = countDown;
}


function reseta(){
    clearInterval(interval);
    $(".card").removeClass("eff");
    $("#imgCard").removeClass("flip");
    $("#imgCard").removeClass("zomm");
    $("#imgCard").removeClass("shadow-cm shadow-ucm shadow-rare shadow-epic shadow-lgd shadow-mtl");
    itemGacha.src=" "
    imgCard.src="./img/gachacard.png"
    $("#btnOpen").css({  "display": "block"})
    $("#nameFruist").html("")
}



function ItemArray(){
    //put chances and user object in the same object, in an array
    let userChances = [
        {userObj: 'Kilo', chance: 7992000,colr:'cm'},
        {userObj: 'Spin', chance: 7992000,colr:'cm'},
        {userObj: 'Chop', chance: 7992000,colr:'cm'},
        {userObj: 'Spring', chance: 7992000,colr:'cm'},
        {userObj: 'Bomb', chance: 7992000,colr:'cm'},
        {userObj: 'Smoke', chance: 7992000,colr:'cm'},
        {userObj: 'Spike', chance: 7992000,colr:'cm'},
        {userObj: 'Flame', chance: 1598000,colr:'ucm'},
        {userObj: 'Falcon', chance: 1598000,colr:'ucm'},
        {userObj: 'Ice', chance: 1598000,colr:'ucm'},
        {userObj: 'Sand', chance: 1598000,colr:'ucm'},
        {userObj: 'Dark', chance: 1598000,colr:'ucm'},
        {userObj: 'Revive', chance: 1598000,colr:'ucm'},
        {userObj: 'Diamond', chance: 1598000,colr:'ucm'},
        {userObj: 'Light', chance: 32000,colr:'rare'},
        {userObj: 'Rubber', chance: 32000,colr:'rare'},
        {userObj: 'Barrier', chance: 32000,colr:'rare'},
        {userObj: 'Magma', chance: 32000,colr:'rare'},
        {userObj: 'Quake', chance: 6400,colr:'epic'},
        {userObj: 'Love', chance: 6400,colr:'epic'},
        {userObj: 'Spider', chance: 6400,colr:'epic'},
        {userObj: 'Phoenix', chance: 6400,colr:'epic'},
        {userObj: 'Portal', chance: 6400,colr:'epic'},
        {userObj: 'Buddha', chance: 6400,colr:'epic'},
        {userObj: 'Rumble', chance: 6400,colr:'epic'},
        {userObj: 'Paw', chance: 6400,colr:'epic'},
        {userObj: 'Blizzard Physical', chance: 640,colr:'epic'},
        {userObj: 'Gravity', chance: 260,colr:'lgd'},
        {userObj: 'Shadow', chance: 260,colr:'lgd'},
        {userObj: 'Venom', chance: 260,colr:'lgd'},
        {userObj: 'Control', chance: 260,colr:'lgd'},
        {userObj: 'Spirit', chance: 260,colr:'lgd'},
        {userObj: 'Dragon', chance: 260,colr:'lgd'},
        {userObj: 'Leopard', chance: 260,colr:'lgd'},
    ];
    //we loop the items and turn the chance into a running total...
    for (let i = 0; i < userChances.length; i++) {
        if (i > 0) {
            userChances[i] = {
                userObj: userChances[i].userObj,
                chance: userChances[i].chance + userChances[i - 1].chance,
                colr:userChances[i].colr
            };
        }
    }
    //we get the total available chance, which is now the value of the chance property of the last element in the array
    let totalChances = userChances[userChances.length - 1].chance;
    let yourChance = Math.floor((Math.random() * totalChances) + 1);
    //loop one last time
    for (let i= 0; i < userChances.length; i ++) {
        //if our number is less than the current user chance, we found the user! return it! otherwise, proceed to check the next user...
        if (yourChance <= userChances[i].chance) {
            imgCard.src="./img/gachacard2.png"
            $("#nameFruist").html(` `+userChances[i].userObj);
            $("#imgCard").removeClass("shadow-cm shadow-ucm shadow-rare shadow-epic shadow-lgd shadow-mtl");
            $(".card .itemImg").html(`<img id="itemGacha" draggable="false" val=`+ userChances[i].userObj+` style="" src=./img/` +  userChances[i].userObj + `.webp>`)
            $("#imgCard").addClass(`shadow-`+userChances[i].colr)
            break;
        }
        //please note that if this does not return or break the loop, every user after this will be logged as a winner too!
    }
}
