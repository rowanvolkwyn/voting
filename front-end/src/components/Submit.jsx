import handleSubmit from "../functions/handleSubmit";

const Submit = () => {

    return (
        <>
            <h1 id='title'>Rovo's LAN Party</h1>
            <p id='instructions'>Select a map by clicking on it. Once a map is selected, 
            you can choose the gamemode you'd like to play on that map. Please choose 8 maps for each game. 
            The most popular maps will be added to the schedule. Game modes may be reallocated to make sure each 
            mode is played roughly the same amount. Once you've made your selections, enter your name and click Submit. <br></br>
            <br></br>
            Please only vote once.</p>
            <div id='submit'>
                <form>
                    <input id='user-name' type='text' placeholder='Enter your name'/>
                </form>
                <button onClick={handleSubmit}>Submit</button>
                <h3 id='response'></h3>
            </div>  
        </>      
    )
}

export default Submit;