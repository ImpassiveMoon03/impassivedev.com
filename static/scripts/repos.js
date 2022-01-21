const elems = {}
elems.Python = document.getElementsByClassName('Python')
elems.HTML = document.getElementsByClassName('HTML')
elems.JavaScript = document.getElementsByClassName('JavaScript')

function swap(){
    let cls = document.getElementById('selector').value
    if(cls.startsWith('All')){
        for(var i = 0; i<elems.Python.length; i++){
            elems.Python[i].style.display = "block"
        }
        for(var i = 0; i<elems.HTML.length; i++){
            elems.HTML[i].style.display = "block"
        }
        for(var i = 0; i<elems.JavaScript.length; i++){
            elems.JavaScript[i].style.display = "block"
        }
    }else if(cls.startsWith('Python')){
        for(var i = 0; i<elems.Python.length; i++){
            elems.Python[i].style.display = "block"
        }
        for(var i = 0; i<elems.HTML.length; i++){
            elems.HTML[i].style.display = "none"
        }
        for(var i = 0; i<elems.JavaScript.length; i++){
            elems.JavaScript[i].style.display = "none"
        }
    }else if(cls.startsWith('HTML')){
        for(var i = 0; i<elems.Python.length; i++){
            elems.Python[i].style.display = "none"
        }
        for(var i = 0; i<elems.HTML.length; i++){
            elems.HTML[i].style.display = "block"
        }
        for(var i = 0; i<elems.JavaScript.length; i++){
            elems.JavaScript[i].style.display = "none"
        }
    }else if(cls.startsWith('JavaScript')){
        for(var i = 0; i<elems.Python.length; i++){
            elems.Python[i].style.display = "none"
        }
        for(var i = 0; i<elems.HTML.length; i++){
            elems.HTML[i].style.display = "none"
        }
        for(var i = 0; i<elems.JavaScript.length; i++){
            elems.JavaScript[i].style.display = "block"
        }
    }
}