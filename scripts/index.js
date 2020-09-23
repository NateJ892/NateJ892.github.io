var slideIndex = 0;
carousel();

function carousel()
{
	var x = document.getElementsByClassName("about-slides");

	for (var i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) slideIndex = 1;
	x[slideIndex-1].style.display = "block";
	setTimeout(carousel, 2000);
}

function onBodyLoad()
{
	console.log("Page Loaded");
}
