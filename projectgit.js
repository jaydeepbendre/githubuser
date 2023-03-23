fetch("https://api.github.com/users")
.then((res) => res.json())
.then((data) => {
    console.log(data[0].login);

    document
        .getElementById("profilepic")
        .setAttribute("src",data[0].avatar_url);

    document.getElementById("title").innerText= data[0].login;
    
    document
        .getElementById("profilelink")
        .setAttribute("href",data[0].html_url);
  

/*---------------------------------------------------------------------------*/

        document
        .getElementById("profilepic1")
        .setAttribute("src",data[1].avatar_url);

    document.getElementById("title1").innerText= data[1].login;

    
    document
        .getElementById("profilelink1")
        .setAttribute("href",data[1].html_url);   
     
/*---------------------------------------------------------------------------*/


        document
        .getElementById("profilepic2")
        .setAttribute("src",data[2].avatar_url);

    document.getElementById("title2").innerText= data[2].login;

    
    document
        .getElementById("profilelink2")
        .setAttribute("href",data[2].html_url);           
            

/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic3")
.setAttribute("src",data[3].avatar_url);

document.getElementById("title3").innerText= data[3].login;


document
.getElementById("profilelink3")
.setAttribute("href",data[3].html_url);           
    

/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic4")
.setAttribute("src",data[14].avatar_url);

document.getElementById("title4").innerText= data[14].login;


document
.getElementById("profilelink4")
.setAttribute("href",data[14].html_url);           
    
/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic5")
.setAttribute("src",data[5].avatar_url);

document.getElementById("title5").innerText= data[5].login;


document
.getElementById("profilelink5")
.setAttribute("href",data[5].html_url);           
    


/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic6")
.setAttribute("src",data[6].avatar_url);

document.getElementById("title6").innerText= data[6].login;


document
.getElementById("profilelink6")
.setAttribute("href",data[6].html_url);           
    

/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic7")
.setAttribute("src",data[7].avatar_url);

document.getElementById("title7").innerText= data[7].login;


document
.getElementById("profilelink7")
.setAttribute("href",data[7].html_url);           
    


/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic8")
.setAttribute("src",data[8].avatar_url);

document.getElementById("title8").innerText= data[8].login;


document
.getElementById("profilelink8")
.setAttribute("href",data[8].html_url);           
    

/*---------------------------------------------------------------------------*/


document
.getElementById("profilepic9")
.setAttribute("src",data[9].avatar_url);

document.getElementById("title9").innerText= data[9].login;


document
.getElementById("profilelink9")
.setAttribute("href",data[9].html_url);           
    












    
}) 