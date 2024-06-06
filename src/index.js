/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {  
    event.preventDefault()
    const form = event.target
    document.getElementById('results-username').textContent = form.username.value;
    document.getElementById('results-coding-level').textContent = form.codingLevel.value;
    document.getElementById('results-location').textContent = form.location.value;
    document.getElementById('results-did-like-assignment').textContent = form.didLikeAssignment.checked;

    if(form.didLikeAssignment.checked) {
        document.getElementById('results-did-like-assignment').textContent = "Yes"
    } else {
        document.getElementById('results-did-like-assignment').textContent = "No"
    }
form.reset();
}


const main = () => {
    document.querySelector('form').addEventListener('submit', handleSubmit)
}

main();
