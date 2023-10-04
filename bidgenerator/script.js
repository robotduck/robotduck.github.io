window.addEventListener('load', function () {

	var generateButton = document.getElementById('generatebutton');

	console.log(phrases[1]);

	generateButton.onclick = function() {
		document.getElementById('resultfield').innerText = GenerateResult();
	};

})

function GenerateResult()
{
	var result = "";
	for (var segmentType in phrases)
	{
		result += GetRandomElement( phrases[segmentType] );
	}
	
	return result;
}

function GetRandomElement(array)
{
	return array[Math.floor(Math.random()*array.length)];
}