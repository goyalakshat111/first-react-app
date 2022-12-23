import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Akshat",
            age: "20"
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("Component Did Mount:")

    }

    componentDidUpdate() {
        console.log("Component Did Update?");
    }

    componentWillUnmount() {
        console.log("Component Did Unmount");
    }

    render() {
        console.log("render");
        return (
            <div>
                <p> This is Class Component</p>
                <button
                    onClick={() =>
                        this.setState({
                            ...this.state,
                            age: 22,
                        })
                    }
                >
                    Add 1 to age
                </button>
                <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);