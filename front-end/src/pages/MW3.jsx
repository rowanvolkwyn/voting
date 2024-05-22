import { useState } from 'react';
import Map from '../components/Map';
import mw3Maps from '../data/MW3';

const MW3 = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    return (
        <div id='component-container'>
            <h1>Modern Warfare 3</h1>
            <div id='container'>
                {mw3Maps.map((map => (
                    <Map 
                        key={map.name}
                        name={map.name}
                        image={map.src}
                        increment={incrementCount}
                        decrement={decrementCount}
                    />
                )))}
            </div>
            <div id='selected'>
                <h2>{count}/8 Selected</h2>
            </div>
        </div>
    )
}

export default MW3;