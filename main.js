var output = document.getElementById("span");
var clicker = parseInt(output.innerText);
var poulax;
function Poulax()
{
	poulax = document.getElementById("poulax").value;
	if (poulax == "oui")
	{
		alert("Ok, Ok");
	}
	if (poulax == "Oui")
	{
		alert("Ok, Ok");
	}
	if (poulax == "non")
	{
		alert("Allez casse toi");
	}
	if (poulax == "Non")
	{
		alert("Allez casse toi");
	}
	if (poulax == "mms")
	{
		alert("ldo");
	}
	if (poulax == "Mms")
	{
		alert("ldo");
	}
	if (poulax == "667")
	{
		alert("ekipafond");
	}

}

function Clicker()
{
	clicker = clicker + 1; 
	output.innerHTML = clicker;
	if(clicker >= 1000)
	{
		alert("He, oh calmos tu vas casser le compteur");
		clicker = 0; 
		output.innerHTML = clicker;
	}


}