import React, {useState,UseEffect} from "react";
import axios from "axios";

function ApiCall(){

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [message,setMessage]=useState("");

    const getUsers = async () => {
        try{
            setLoading(true);

            const response = await axios.get("http://localhost:5000/api/users");

            console.log(response.data,'API response');

            setUsers(response.data.data);
            setMessage(response.data.message);


        }catch (error){
            console.log(error.message);
        } 
        finally {
            setLoading(false);
        }
        
    };

    const createUser = async () => {

        try {
            const requestData = {
                name:"vignesh",
                email:"vignesh@gmail.com"
            };

            const response = await axios.post("http://localhost:5000/api/users",
                                              requestData);
            console.log('Post response',response.data);
            alert(response.data.message);
        }
        catch(error){
            console.log(error);
            alert('user creation failed');
        }
        
    };

    return (
        <div style={{ padding:"30px" }}>
            <h1>ReactJS + NodeJS API Example </h1>

            <hr/>

            <button onClick={getUsers}>
                Get Users (GET API)
            </button>

            <button onClick={createUser} style={{ marginLeft:"10px" }}>
                Create User (Post  API)
            </button>

            {loading && <p>loading....</p>}

            <h2>User List</h2>

            <table border="1" cellpadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
}
export default ApiCall;