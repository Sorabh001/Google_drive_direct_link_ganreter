document.getElementById('addBtn').addEventListener('click', function() {
    // Create a new input group
    let inputGroup = document.createElement('div');
    inputGroup.classList.add('input-wrapper');

    // Create the quality input
    let qualityInput = document.createElement('input');
    qualityInput.type = 'number';
    qualityInput.placeholder = 'Quality (e.g., 480p)';
    inputGroup.appendChild(qualityInput);

    // Create the size input
    let sizeInput = document.createElement('input');
    sizeInput.type = 'number';
    sizeInput.placeholder = 'Size';
    inputGroup.appendChild(sizeInput);

    // Create the size dropdown
    let sizeSelect = document.createElement('select');
    let optionMB = document.createElement('option');
    optionMB.value = 'MB';
    optionMB.text = 'MB';
    sizeSelect.appendChild(optionMB);

    let optionGB = document.createElement('option');
    optionGB.value = 'GB';
    optionGB.text = 'GB';
    sizeSelect.appendChild(optionGB);

    inputGroup.appendChild(sizeSelect);

    // Create the URL input
    let urlInput = document.createElement('input');
    urlInput.type = 'url';
    urlInput.placeholder = 'Enter URL';
    inputGroup.appendChild(urlInput);

    // Append the new input group to the inputGroup container
    document.getElementById('inputGroup').appendChild(inputGroup);
});

document.getElementById('submitBtn').addEventListener('click', function() {
    // Collect all input values
    let outputBox = document.getElementById('outputBox');
    let inputs = document.querySelectorAll('.input-wrapper');
    let outputContent = '';

    inputs.forEach((inputWrapper, index) => {
        let quality = inputWrapper.querySelector('input[type="number"]').value;
        let size = inputWrapper.querySelector('input[type="number"]').value;
        let unit = inputWrapper.querySelector('select').value;
        let url = inputWrapper.querySelector('input[type="url"]').value;

        outputContent += ` Quality: ${quality}p, Size: ${size} ${unit}, - ${url}<br>`;
    });

    // Display the output
    outputBox.innerHTML = outputContent;
    outputBox.style.display = 'block';
});
