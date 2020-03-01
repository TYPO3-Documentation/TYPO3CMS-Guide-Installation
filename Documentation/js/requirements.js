document.addEventListener("DOMContentLoaded", function() {
    updateRequirements(10);
});

const updateRequirements = function(version) {
    const api = 'https://get.typo3.org/v1/api/major/' + version + '/requirements';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api);
    xhr.send();
    xhr.onreadystatechange = function() {
        const DONE = 4;
        const OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                const response = JSON.parse(xhr.responseText);
                Object.keys(response).forEach(requirement => {
                    const outputContainers = document.getElementsByClassName('js-' + requirement);
                    Object.keys(outputContainers).forEach(container => {
                        outputContainers[container].innerHTML = response[requirement];
                    });
                });
            } else {
                console.error('Requirements Helper Error: ' + xhr.status + ' - ' + xhr.statusText);
            }
        }
    };
};
