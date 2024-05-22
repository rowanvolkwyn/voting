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

export default handleSubmit;