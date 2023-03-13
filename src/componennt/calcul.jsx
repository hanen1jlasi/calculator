import { useState } from "react"


function Calcul() {
    
    const [formula , setformula] = useState("")

    const  addtoformula =(value) =>{
        setformula(formula + value)
    }


    const resultFormula = ()=>{
      setformula(eval(formula))

    }


    const deleteFormula = () =>{
      setformula("")
    }
  return (
   
    <div className="calcul">
      
     <input type="text"  value={formula} placeholder="0"/>
   
     <div>
     <input type="button" value="1" onClick={()=> addtoformula("1")}/>
     <input type="button" value="2" onClick={()=> addtoformula("2")}/>
     <input type="button" value="3" onClick={()=> addtoformula("3")}/>
     <input type="button" value="+" onClick={()=> addtoformula("+")}/>
     </div>
     <div>
     <input type="button" value="4" onClick={()=> addtoformula("4")}/>
     <input type="button" value="5" onClick={()=> addtoformula("5")}/>
     <input type="button" value="6" onClick={()=> addtoformula("6")}/>
     <input type="button" value="-" onClick={()=> addtoformula("-")}/>
     </div>
     <div>
     <input type="button" value="7" onClick={()=> addtoformula("7")}/>
     <input type="button" value="8" onClick={()=> addtoformula("8")}/>
     <input type="button" value="9" onClick={()=> addtoformula("9")}/>
     <input type="button" value="/" onClick={()=> addtoformula("/")}/>
     </div>
     <div>
     <input type="button"  id="red" value="c" onClick={()=> deleteFormula()} />
     <input type="button" value="0" onClick={()=> addtoformula("0")}/>
     <input type="button" value="=" onClick={()=> resultFormula()}/>
     <input type="button" value="*" onClick={()=> addtoformula("*")}/>
     </div>
    </div>
  )
}

export default Calcul
