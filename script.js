// Load the Google API client library
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

// Initialize the API client library and set up sign-in state listeners
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyC1cDMnTasYgPTFsJmfgbZ3uUAwKumQBfo',
        clientId: '538857908875-hj18r6te9v0rrdhkabcigu8h7h113h2a.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'https://www.googleapis.com/auth/drive'
    }).then(() => {
        const authButton = document.getElementById('btn-authenticate');
        const createButton = document.getElementById('btn-create-drive');

        // Set up click listeners
        authButton.onclick = handleAuthClick;
        createButton.onclick = createSharedDrive;
    });
}

// Sign in the user upon button click
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
}

// Create a shared drive
function createSharedDrive() {
    const driveName = document.getElementById('drive-name').value;

    if (!driveName) {
        alert('Please enter a name for the shared drive.');
        return;
    }

    gapi.client.drive.drives.create({
        requestId: Math.random().toString(36).substring(7),
        resource: {
            name: driveName
        }
    }).then((response) => {
        alert(`Shared Drive "${driveName}" created successfully!`);
        console.log(response);
    }, (error) => {
        console.error(error);
        alert('Error creating shared drive.');
    });
}

// Load the API and make an API call.
handleClientLoad();
