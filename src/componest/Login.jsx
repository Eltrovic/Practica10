import { isValidElement } from "react";


const Login = () => {

let Validacion=()=>{

    
   let Usuario=document.getElementById('Usuario').value;
   


    if(Usuario=== ''){

        alert("debe introducir un Usuario")
    }
    else{

        alert(Usuario)
    }

    let Password=document.getElementById('Password').value;
   


    if(Password=== ''){

        alert("debe introducir un Password")
    }
    else{

        alert(Password)
    }

}

    return (  
       <form onSubmit={Validacion} >


            <div>

                    <h1>Registro de Usuario</h1>

                <label htmlFor="Usuario">Usuario</label>
                <input type="text" id="Usuario"/>
                <br />
                <label htmlFor="Password">Pasword</label>
                <input type="Password" id="Password" />
                <input type="submit"value="click"/>
                
        

             </div>

        </form>
       
    );
}
 
export default Login;