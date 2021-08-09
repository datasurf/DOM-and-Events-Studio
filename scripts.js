// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    let takeOffButton = document.getElementById("takeoff");
    let spaceShuttleStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("upB");
    let downButton = document.getElementById("downB");
    let rightButton = document.getElementById("rightB");
    let leftButton = document.getElementById("leftB");
    let rocket = document.getElementById("rocket");

    takeOffButton.addEventListener('click', event => {
        if ( confirm('Confirm that the shuttle is ready for takeoff.') ){
            spaceShuttleStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = 10000;
          };
        });

    landingButton.addEventListener('click', event => {
        alert('The shuttle is landing. Landing gear engaged.');
        spaceShuttleStatus.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
    })

    abortButton.addEventListener('click', event => {
        if ( confirm('Confirm that you want to abort the mission.') ){
            spaceShuttleStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
          };
        });
    
    upButton.addEventListener('click', event => {
        let conversion = Number(shuttleHeight.innerHTML)
        shuttleHeight.innerHTML = conversion + Number(10000);
    });

    downButton.addEventListener('click', event => {
        shuttleHeight.innerHTML -= Number(10000);
    });

    rightButton.addEventListener('click', event => { 
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px'
    });

    leftButton.addEventListener('click', event => {
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px'
    });
}    

window.addEventListener("load", init);
