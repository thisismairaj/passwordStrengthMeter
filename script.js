const pass = document.querySelector('#password');
const reasons = document.querySelector('#reasons');
const strengthmeter = document.querySelector('#strength-meter');

pass.addEventListener('input', updateMeter);
updateMeter();

function updateMeter(){
    const weaknesses = calculatePasswordStrength(pass.value)
    let strength = 100;
    reasons.innerHTML = '';
    weaknesses.forEach(weakness => {
        if(weakness == null)return
            strength -= weakness.deduction;
            const messageElement = document.createElement('div');
            messageElement.innerText = weakness.message;
            reasons.appendChild(messageElement);
    })
    strengthmeter.style.setProperty('--strength', strength);
}

function calculatePasswordStrength(password){
    const weaknesses = [];
    weaknesses.push(lengthWeakness(password))
    weaknesses.push(lowercaseWeakness(password));
    return weaknesses;
}

function lengthWeakness

function lowercaseWeakness(password){
    const matches = password.match(/[a-z]/g);
    if(matches == null)return null;
    const deduction = (matches.length / password.length) * 100;
    return {
        message: 'Use lowercase letters',
        deduction: deduction
    }
}