import React, {useState} from "react";
function InputForm(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage]=useState("");


    const handleSubmit = async() => {
        try{
            const response = await fetch("http://localhost:5000/api/submit",{

                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({name,email}),
            });
            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message || "Submission failed");
            }
            setMessage(data.message || "Submitted succssfully");
            setName("");
            setEmail("");
        }
        catch(error){
            console.error(error);
            setMessage(error.message || "Server connection failed");

        }


    };

    return (
        <div>
            <h2>Input Validation</h2>
            <input type="text" 
                   placeholder="Enter name" 
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
            />
            <br/> <br/>

            <input type="text" 
                   placeholder="Enter email" 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
            />

            <br/> <br/>

            <button onClick={handleSubmit} disabled={!name.trim() || !email.trim()}>
                Submit
            </button>
            </div>
    );
}
export default InputForm;
