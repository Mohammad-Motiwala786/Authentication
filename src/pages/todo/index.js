import { useState } from "react";
import Layout from "../layout";

const ToDo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [edit, setEdit] = useState(false);
    const [active, setActive] = useState(null);


    const addData = () => {
        if (edit) {
            const user = users;
            Object.assign(user[active], { name, email });
        }
        else {
            setUsers([...users, { name, email }]);
        }
        setName("");
        setEmail("");
        setEdit(false)
    }
    const editData = (index) => {
        const user = users[index];
        setName(user.name);
        setEmail(user.email);

        setEdit(true);
        setActive(index);
    }
    const removeData = (index) => {
        users.splice(index, 1);
        setUsers([...users]);
    }

    return (
        <Layout>
            <h1>ToDo List</h1>
            <div className="main">
                <input type={"text"} required={false} value={name} onChange={(event) => setName(event.target.value)} name="name" /><br /><br />
                <input type={"email"} value={email} onChange={(event) => setEmail(event.target.value)} name="email" /><br /><br />
                <button onClick={addData}>{edit ? "Update" : "Add"}</button>
                <br /><br />
            </div>
            <div className="inner">
                <h2>Result</h2><br />
                {users.map((user, index) => {
                    return (
                        <div className="data" key={index}>
                            <h3>{user.name}</h3>
                            <h3>{user.email}</h3>
                            <button onClick={() => editData(index)}>Edit</button>
                            <button onClick={() => removeData(index)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default ToDo;