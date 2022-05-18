import { useState } from "react";

const Home = () => {
    //  let name = 'buddy';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(20);
    const handleClickMe = () => {
        setName('jay');
        setAge(age+10);
    }

    // const handleClick = (e) => {
    //     console.log("hello ninjas", e);
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClickMe}>Click me</button>
            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('cool', e)}>Click Me again</button> */}
        </div>
    );
}

export default Home;