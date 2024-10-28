const bnt = document.querySelector('#bnt');

bnt.addEventListener('click', function(){
    const checkboxes = document.querySelectorAll('.seat-checkbox');
    let total = 0;
    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            total += parseInt(checkbox.value);
        }
    });
    document.getElementById('razem').innerHTML = `Całkowity koszt ${total} zł`
})
