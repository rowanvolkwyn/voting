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
            <div id='selected'>
                <h2>{count}/8 Selected</h2>
            </div>
        </div>
    )
}

export default MW;