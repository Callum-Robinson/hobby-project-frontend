(function() {
    const requestSelector = document.querySelector('#method');
    const dataTable = document.querySelector('#data-table');
    const dataForm = document.querySelector('#data-form');
    const id = document.querySelector('#id');

    function deleteCharacter() {
        fetch (`http://localhost:8080/character/${id.value}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Something went wrong');
        }).then(character => {
            renderCharacterTable([character], dataTable);
        }).catch(error => {
            console.error(error);
        });
    }
    
    function deleteWeapon() {
        fetch (`http://localhost:8080/weapon/${id.value}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) return response.json();
            else throw new Error('Something went wrong');
        }).then(weapon => {
            renderWeaponTable([weapon], dataTable);
        }).catch(error => {
            console.error(error);
        });
    }

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (requestSelector.value == 'CHARACTER') deleteCharacter();
        else if (requestSelector.value == 'WEAPON') deleteWeapon();
    });
})();