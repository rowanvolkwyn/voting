import { useState } from 'react';
import Map from '../components/Map';
import bo2Maps from '../data/BO2';

const BO2 = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const handleSubmit = () => {
        if (count === 8) {
            document.getElementById('response').innerHTML = 'Submitted';
            // Add code to send data to backend
        } else {
           document.getElementById('response').innerHTML = `Please select ${8 - count} more maps`;
        }
    }

    return (
        <div id='component-container'>
            <h1>Black Ops 2</h1>
            <div id='container'>
                {bo2Maps.map((map => (
                    <Map 
                        key={map.name}
                        name={map.name}
                        image={map.src}
                        increment={incrementCount}
                        decrement={decrementCount}
                    />
                )))}
            </div>
            <div id='submit'>
                <h2>{count}/8 Selected</h2>
                <form>
                    <input id='user-name' type='text' placeholder='Enter your name'/>
                </form>
                <button onClick={handleSubmit}>Submit</button>
                <h3 id='response'></h3>
            </div>
        </div>
    )
}

export default BO2;