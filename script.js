var name = 'You';
name = prompt("Hey, What's your pretty name ?");
if(name === 'null'){
    name = 'You';
}



// alert(name);
var ptag = document.createElement('p');
ptag.setAttribute('class', 'ptag');
ptag.innerHTML = "Hello " + name + ", Here you have to decide that Which Color is common in between two TEXT-MEANINGS and TEXT-COLORS and give maximum right answer by clicking on it in selected time... Good luck " + name + " :)";
document.getElementById('heading').appendChild(ptag);

var color = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'black', 'brown', 'purple', 'gray'];

var time;
var ans;
var count = 0;
var score = 0;

function getValueOfTime(timeObj) {
    time = timeObj.value;
    // console.log(time);
}

function start() {
    if(time === undefined) {
        alert("Press Reset and Select the time first..!");
    }
    else {
        timepass();
        running();
    }
}
function timepass() {
    if(count <= time){
        // console.log('game over');
        spanCount = document.createElement('span');
        spanScore = document.createElement('span');

        spanCount.setAttribute('id', 'idspanCount');
        spanScore.setAttribute('id', 'idspanScore');

        spanScore.innerHTML = "<span class ='text'>Your Score: </span><span class='num'>" + score + "</span>";
        spanCount.innerHTML = "<span class ='text'>Sec. Left: </span><span class='num'>" + (time-count) + "</span>";

        document.getElementById('score').appendChild(spanScore);
        document.getElementById('count').appendChild(spanCount);
        count++;
    }
    else {
        finish();
    }
    setTimeout(() => {
        document.getElementById('idspanCount').remove();
        document.getElementById('idspanScore').remove();
        timepass();
    },1000);
}

function running(){

    var ran = Math.floor(Math.random() * 10);
    var rannum = Math.floor(Math.random() * 10);

    ans = color[ran];
    var opt1 = color[((ran + rannum)%10)];
    var opt2 = color[((ran + rannum + 1)%10)];
    var opt3 = color[((ran + rannum + 2)%10)];

    // for the que part......
    var quearr = [opt1, opt2, opt3];
    var ranforque = Math.floor(Math.random() * 3);

    var divque1 = document.createElement('div');
    var divque2 = document.createElement('div');
    divque1.setAttribute('id', 'idque1');
    divque2.setAttribute('id', 'idque2');

    var ranforif = Math.floor(Math.random() * 200);
    // console.log(ranforif);
    if(ranforif % 2 === 0) {
        divque1.innerHTML = "<span style= 'color:" + quearr[ranforque] + ";'>" + ans + "</span>";
        divque2.innerHTML = "<span style= 'color:" + ans + ";'>" + quearr[((ranforque + 2)%3)] + "</span>";
    }
    else {
        divque2.innerHTML = "<span style= 'color:" + quearr[ranforque] + ";'>" + ans + "</span>";
        divque1.innerHTML = "<span style= 'color:" + ans + ";'>" + quearr[((ranforque + 2)%3)] + "</span>";
    }

    document.getElementById('que').appendChild(divque1);
    document.getElementById('que').appendChild(divque2);

    // for the options part......
    var optarr = [ans, opt1, opt2, opt3];
    var runforopt = Math.floor(Math.random() * 4);

    var divOpt1 = document.createElement('div');
    var divOpt2 = document.createElement('div');
    var divOpt3 = document.createElement('div');
    var divOpt4 = document.createElement('div');

    divOpt1.setAttribute('id', 'idopt1');
    divOpt2.setAttribute('id', 'idopt2');
    divOpt3.setAttribute('id', 'idopt3');
    divOpt4.setAttribute('id', 'idopt4');

    document.getElementById('opt').appendChild(divOpt1);
    document.getElementById('opt').appendChild(divOpt2);
    document.getElementById('opt').appendChild(divOpt3);
    document.getElementById('opt').appendChild(divOpt4);

    document.getElementById('idopt1').style.backgroundColor = optarr[runforopt];
    document.getElementById('idopt2').style.backgroundColor = optarr[((runforopt + 1) % 4)];
    document.getElementById('idopt3').style.backgroundColor = optarr[((runforopt + 2) % 4)];
    document.getElementById('idopt4').style.backgroundColor = optarr[((runforopt + 3) % 4)];

    divOpt1.setAttribute('onclick', 'clicked(this)');
    divOpt2.setAttribute('onclick', 'clicked(this)');
    divOpt3.setAttribute('onclick', 'clicked(this)');
    divOpt4.setAttribute('onclick', 'clicked(this)');
}

function clicked(obj){
    document.getElementById('idmsgspan').remove();

    var bgobj = obj.style.backgroundColor;
    var msgSpan = document.createElement('span');
    msgSpan.setAttribute('id', 'idmsgspan');

    if(bgobj == ans) {
        score++;
        msgSpan.innerHTML = "Right :)";
        msgSpan.style.color = "green";

    } else {
        msgSpan.innerHTML = "Wrong :(";
        msgSpan.style.color = "red";
    }
    document.getElementById('idmsg').appendChild(msgSpan);
    removing();
    running();
}
function removing(){
    document.getElementById('idque1').remove();
    document.getElementById('idque2').remove();
    document.getElementById('idopt1').remove();
    document.getElementById('idopt2').remove();
    document.getElementById('idopt3').remove();
    document.getElementById('idopt4').remove();
}
function finish() {
    alert("Well Done " + name + " !, Your score is " + score + " in " + time + " seconds, Try Again ; )");
    location.reload(true);
}
function reset() {
    location.reload(true);
}

