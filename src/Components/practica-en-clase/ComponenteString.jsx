import { useState } from "react";


function StringChange(){
    const [nombre,setnombre] = useState("agustin");
    
    
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Cambiar de nombre</h1>
            <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => nombre === "agustin" ? setnombre("guille") : setnombre("agustin")

                }
            >
                Cambiar
            </button>
             
            
            <h2>{nombre}</h2>
        </div>
    );
     

    


}

export default StringChange;