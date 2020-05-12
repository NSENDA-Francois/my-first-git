document.addEventListener("DOMContentLoaded",()=>{
    console.log("ok")
        //script de test

        let login = document.getElementsByName("login")
        let mdp = document.getElementsByName("password")
        console.log(login[0].value="")
        //condition pour vérifier si le champ login est rempli
        let btn = document.getElementsByTagName("input")[2]
        //event document
        let warning = document.querySelector('section:nth-child(2) p')

        let User = ({
            username : "admin@gamil.com",
            password : 3615

        })
        console.log(typeof User.password)
        
        
       
       //event
        btn.addEventListener("click",(event)=>{
            event.preventDefault()
            if(login[0].value == User.username && parseInt(mgp[0].value) === User.password){
                warning.getElementsByClassName.display="block"
                warning.classList.add("success")
                warning.innerText = '${User.username} vous êtes connecté'
            }
            else
                warning.getElementsByClassName.display="block"
                warning.classList.add("warning")
        }
        event.stopPropagation()
        