import React from "react";

export default class Person extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.age = 9;
    //     this.name = 'Rodrigo';
    // }
    constructor(props) {
        super(props)
        this.age = 10
    }

    render() {
        const me = new Person({age: 5})
        console.log(me)
        return (
            <p>Bye</p>
        )
    }
}