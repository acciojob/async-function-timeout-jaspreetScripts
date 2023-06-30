//your JS code here. If required.
const form = document.querySelector('form');
const inputText= document.getElementById('text');
const inputDelay =  document.getElementById('Delay')
const outputDiv= document.getElementById('output')

form.addEventListener('submit',async(event)=>{
	event.preventDefault();

	const text= inputText.value;
	const delay  = inputDelay.value;

	await displayTextAfterDelay(text,delay)
});

async displayTextAfterDelay(text,delay){
	await sleep(delay)


	outputDiv.textContent= text
}

function sleep(ms){
		return new Promise(resolve=> setTimeout(resolve,ms));

	
}




