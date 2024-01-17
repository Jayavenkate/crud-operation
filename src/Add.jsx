import { useState } from "react";

export default function AddForm() {
    const [data, setData] = useState([
        { name: "jaya", age: "23", gender: "female" }
    ]);
    const [name, setname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const addData = () => {
        const newData = {
            name,
            age,
            gender
        };

        if (editIndex !== null) {

            const updatedData = [...data];
            updatedData[editIndex] = newData;
            setData(updatedData);
            setEditIndex(null);
        } else {

            setData([...data, newData]);
        }


        setname("");
        setAge("");
        setGender("");
    };

    const deleteData = (index) => {
        setData((prevData) => prevData.filter((item, i) => i !== index));
    };

    const editData = (index) => {

        setEditIndex(index);


        const itemToEdit = data[index];
        setname(itemToEdit.name);
        setAge(itemToEdit.age);
        setGender(itemToEdit.gender);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <input
                type="text"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />
            <button onClick={() => addData()}> {editIndex !== null ? "Update" : "Add"}</button>
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h1>name: {item.name}</h1>
                        <h1>age: {item.age}</h1>
                        <h1>gender: {item.gender}</h1>
                        <button onClick={() => deleteData(index)}>Delete</button>
                        <button onClick={() => editData(index)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
