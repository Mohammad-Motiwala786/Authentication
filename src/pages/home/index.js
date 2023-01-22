import { useState } from "react";
import Layout from "../layout";
import "./home.css";

const Home = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [active, setActive] = useState(null);

    const addData = () => {

        if (edit) {
            let copy = data;
            Object.assign(copy[active], { name, email });
            }
        else {
            setData([...data, { name, email }]);
        }
        setName("");
        setEmail("");
    }

    // const [data, setData] = useState([]);
    // const [form, setForm] = useState({});

    // const addData = () => {
    //     setData([...data, form]);
    //     setForm(form);
    //     setForm("");
    // }
    const editData = (index) => {
        const user = data[index];

        setName(user.name);
        setEmail(user.email);

        setActive(index);
        setEdit(true);
    }
    const removeData = (index) => {
        data.splice(index, 1);
        setData([...data]);
    }

    return (
        <>
            <Layout>
                <>
                    <h1>Todo List</h1>
                    <div className="main">
                        {/* <input type={"text"} name="name" value={form.name || ""} onChange={(event) => setForm({ ...form, name: event.target.value })} required /> <br /><br />
                        <input type={"email"} name="email" value={form.email || ""} onChange={(event) => setForm({ ...form, email: event.target.value })} required /> <br /><br /> */}

                        <input type={"text"} name="name" value={name || ""} onChange={(event) => setName(event.target.value)} required /> <br /><br />
                        <input type={"email"} name="email" value={email || ""} onChange={(event) => setEmail(event.target.value)} required /> <br /><br />
                        <button onClick={addData}>{edit ? "Update" : "Add"}</button>
                    </div>

                    <div className="inner">
                        {data.map((item, index) => {
                            return (
                                <div className="data" key={index}>
                                    <h2>{item.name}</h2>
                                    <h2>{item.email}</h2>
                                    <button onClick={() => editData(index)}>Edit</button>
                                    <button onClick={() => removeData(index)}>Remove</button>
                                </div>
                            )
                        })}
                    </div>
                </>
            </Layout>
        </>
    )
}
export default Home;