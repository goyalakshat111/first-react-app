import React, { useState, useEffect } from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    const subtractConst = () => {
        setCount(count - 1);
    }

    const { name, age, company, setName } = props;

    useEffect(() => {
        console.log("Component did mount");
    }, []);

    useEffect(() => {
        console.log("Component did update");
    });

    useEffect(() => {
        console.log("Only on changing name");
    }, [changeName]);

    useEffect(() => {
        console.log("Only on props change");
    }, [setName]);

    useEffect(() => {
        return console.log("Component did unmount");
    }, []);

    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)} >Click me to Add 1</button>
            <button onClick={subtractConst} >Click me to Subtract 1</button>
            <h1>
                {count}
            </h1>
            <h1>My name is {name} My age is {age}, I work for {company}</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}>Change name to Ram</button>
        </div>
    );
}

export default BaseHoc(FunctionalComponent);