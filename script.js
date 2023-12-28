function displayInfo() {
    // Get input values
    const name = document.getElementById('name').value;
    const picture = document.getElementById('picture').files[0];

    // Generate a random study hours value (between 1 and 10)
    const studyHours = Math.floor(Math.random() * 10) + 1;

    // Display information
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    // Display picture
    if (picture) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(picture);
        img.alt = 'Student Picture';
        outputDiv.appendChild(img);
    }

    // Display name
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Name: ${name}`;
    outputDiv.appendChild(nameParagraph);

    // Display random study hours
    const hoursParagraph = document.createElement('p');
    hoursParagraph.textContent = `Study Hours: ${studyHours}`;
    outputDiv.appendChild(hoursParagraph);

    // Just for Fun text
    const funText = document.createElement('p');
    funText.textContent = 'Just for Fun!';
    outputDiv.appendChild(funText);
}