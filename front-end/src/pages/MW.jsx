import { useState } from 'react';
import Map from '../components/Map';
import mwMaps from '../data/MW';

const MW = () => {

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
        } else if (count < 8) {
           document.getElementById('response').innerHTML = `Please select ${8 - count} more maps`;
        } else {
            document.getElementById('response').innerHTML = `You selected ${count - 8} too many maps`;
        }
    }

    return (
        <div id='component-container'>
            <h1>Modern Warfare</h1>
            <div id='container'>
                {mwMaps.map((map => (
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

export default MW;