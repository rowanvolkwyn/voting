import { useState } from 'react';
import Map from '../components/Map';
import boMaps from '../data/BO';

const BO = () => {

    const [count, setCount] = useState(0);
    const [mapSelection, setMapSelection] = useState({
        Array: { selected: false, gameMode: null },
        Cracked: { selected: false, gameMode: null },
        Crisis: { selected: false, gameMode: null },
        FiringRange: { selected: false, gameMode: null },
        Grid: { selected: false, gameMode: null },
        Hanoi: { selected: false, gameMode: null },
        Havana: { selected: false, gameMode: null },
        Jungle: { selected: false, gameMode: null },
        Launch: { selected: false, gameMode: null },
        Nuketown: { selected: false, gameMode: null },
        Radiation: { selected: false, gameMode: null },
        Summit: { selected: false, gameMode: null },
        Villa: { selected: false, gameMode: null },
        WMD: { selected: false, gameMode: null }
    });

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const updateSelectMap = (mapData) => {
        const { name, selectedGameMode } = mapData;
        setMapSelection(prevSelection => {
            // Ensure the map exists in the selection state
            if (prevSelection[name]) {
                return {
                    ...prevSelection,
                    [name]: {
                        selected: !prevSelection[name].selected,
                        gameMode: selectedGameMode
                    }
                };
            } else {
                // Handle the case where the map does not exist in the selection state
                console.error(`Map ${name} does not exist in the selection state`);
                return prevSelection;
            }
        });
    }

    const handleGet = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/vote', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData); // Handle the response from the server
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmit = async () => {
        let name = document.getElementById('user-name').value;
        let boVotes = mapSelection;
        let officialVote = { name, boVotes };
        
        try {
            const response = await fetch('http://localhost:4000/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(officialVote),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData); // Handle the response from the server
            document.getElementById('response').textContent = 'Vote submitted successfully!';
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('response').textContent = 'Error submitting vote.';
        }
    }

    return (
        <div id='component-container'>
            <h1>Black Ops</h1>
            <button onClick={handleGet}>GET</button>
            <div id='container'>
                {boMaps.map((map => (
                    <Map 
                        key={map.name}
                        name={map.name}
                        image={map.src}
                        increment={incrementCount}
                        decrement={decrementCount}
                        updateMap={updateSelectMap}
                    />
                )))}
            </div>
            <div id='selected'>
                <h2>{count}/8 Selected</h2>
            </div>
            <div id='submit'>
                <form>
                    <input id='user-name' type='text' placeholder='Enter your name'/>
                </form>
                <button onClick={handleSubmit}>Submit</button>
                <h3 id='response'></h3>
            </div>
        </div>
    )
}

export default BO;