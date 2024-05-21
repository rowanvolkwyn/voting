import { useState } from 'react';

import tick from '../assets/tick.png';
import cross from '../assets/cross.png'

const Map = (props) => {

    const { name, image, decrement, increment } = props;

    const [ selected, setSelected ] = useState(false);

    const changeSelection = () => {
        if (selected) {
            setSelected(false);
            decrement();
        } else {
            setSelected(true);
            increment();
        }
    }

    return (
        <div id='map-container'>
            <img className='map-image' src={image} onClick={changeSelection}/>
            <div id='info'>
                <img className='status'src={selected ? tick : cross} onClick={changeSelection}/>
                <h2 className={selected ? 'selectedH2' : 'unselectedH2'} onClick={changeSelection}>{name}</h2>
                {selected && (
                    <form>
                        <select>
                            <option value="TDM">Team Deathmatch</option>
                            <option value="KC">Kill Confirmed</option>
                            <option value="DOM">Domination</option>
                            <option value="HP">Hardpoint</option>
                            <option value="SND">Search and Destroy</option>
                            <option value="CTF">Capture the Flag</option>
                            <option value="HQ">Headquarters</option>
                            <option value="DEM">Demolition</option>
                            <option value="FFA">Free-for-All</option>
                        </select>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Map;