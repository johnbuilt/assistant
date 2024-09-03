document.getElementById('assistant-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;

    // Display loading message
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '<p>Loading...</p>';

    try {
        // Call your server-side function here to handle API request
        const response = await fetch('YOUR_SERVER_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: userInput })
        });
        const data = await response.json();
        responseDiv.innerHTML = `<p>${data.response}</p>`;
    } catch (error) {
        responseDiv.innerHTML = '<p>There was an error processing your request.</p>';
        console.error('Error:', error);
    }
});
