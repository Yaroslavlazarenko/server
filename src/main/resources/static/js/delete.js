let $backBtn = document.querySelector("#backButton");
let $deleteButton = document.querySelector("#confirmDeleteButton");
let $success = document.querySelector(".success");

url = 'http://localhost:8080/delete/deleted';

$success.addEventListener('click', async function () {
    document.location.href = 'index';
});

$backBtn.addEventListener('click', async function () {
    document.location.href = 'index';
});

$deleteButton.addEventListener('click', async function () {

    //request information
    const information = {
        id: ((window.location.href).slice(-1))
    };

    //sending a request
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(information),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        $success.classList.remove("hide");
    } catch (error) {
        console.error('Err:', error);
    }
});


