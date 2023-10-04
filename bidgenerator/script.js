window.addEventListener('load', function () {

	var generateButton = document.getElementById('generatebutton');

	generateButton.onclick = function() {
		ShowResult();
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


function ShowResult() {

	var result = GenerateResult();
	var resultField = document.getElementById('resultfield');

	var speed = 35; 
	
	resultField.innerHTML = "...";
	
	setTimeout(function(){
		resultField.innerHTML = "";
		TypeResult(resultField, result, speed)
	}, 1000);
	
}

function TypeResult(resultField, result, speed)
{
	var i = resultField.innerHTML.length;
	console.log(result,speed,i);

	if (i < result.length) {
		i++;
		resultField.innerHTML = result.substring(0,i);
		setTimeout(function(){
			TypeResult(resultField, result, speed)
		}, speed);
	}
}


