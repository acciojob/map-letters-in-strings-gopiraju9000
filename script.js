//your JS code here. If required.
function mapLetters(str) {

	let obj = new Object();

	for(let i = 0;i < str.length; i++){

		let ch = str.charAt(i);

		if(obj[ch] == null) {
			obj[ch] = [i];
		}

		else {
			obj[ch].push(i);
		}
	}

	return obj;
}

const str = prompt("Enter the str:  ")
alert(JSON.stringify(mapLetters(str)))