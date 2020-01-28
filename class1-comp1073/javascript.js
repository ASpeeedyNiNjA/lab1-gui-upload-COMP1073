var em = document.querySelector("em");
em.addEventListener("click", doSomething);
function doSomething() {
			console.log('JS functioning so far!');
var input = prompt('Please enter something'
var newString = 'Prof. ' + input;
			em.textContent = newString
		}