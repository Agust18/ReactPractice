import  { useState}  from "react";

function  Input(){
    const [inputValue,setinputValue] = useState("");
    const [label,setlabel] = useState("");
    
    const cargar = ()=>{
        if (inputValue.trim() !== ""){
            setlabel(inputValue);
            setinputValue("");
        }
    } 

    const reset = () => {
        setlabel(""  );

    }    
    
    console.log (inputValue)

    return (
        <div className="flex flex-col items-start border p-6 mb-12 gap-4 rounded-lg shadow-sm"> 
    {/* Input Estilizado */}
    <input 
        type="text"  
        value={inputValue} 
        onChange={(e) => setinputValue(e.target.value)} 
        name="name"
        placeholder="Escribe algo..."
        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <div className="flex gap-2">
       
        <button 
            onClick={cargar}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
        >
            Cargar
        </button>

        <button onClick={reset}className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition" >reset</button>

       
        
    </div>

    {/* Label / Resultado */}
    <label className="text-sm font-medium text-gray-700 bg-gray-100 p-2 rounded w-full">
        <span className="text-gray-400">Resultado:</span> {label || "Vacío"}
    </label>
</div>

    )

}

export default Input;