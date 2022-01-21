function Change(){
    let alldivs = document.getElementsByClassName('botcommanddiv')
    for(var i = 0; i<alldivs.length;i++){
        alldivs[i].style.display = "none"
    }
    document.getElementById(document.getElementById('botcommandselector').value).style.display = "block"
}

function ChangeLog(){
    let alldivs = document.getElementsByClassName('changelogdiv')
    for(var i = 0; i<alldivs.length;i++){
        alldivs[i].style.display = "none"
    }
    document.getElementById(document.getElementById('changelogselector').value).style.display = "block"
}