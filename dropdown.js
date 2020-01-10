
var dropDownLi = document.getElementById('cate24');
var caretRight = document.getElementById('main-dropdown-svg');
var caretSide  = document.getElementById('main-side-svg');

dropDownLi.onclick = function(e) {
    	document.getElementById("myDropdown").classList.toggle("show-content");
    
    };


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

	var mainDropSvg = document.getElementsByClassName('main-drop-svg');
	var mainSideSvg = document.getElementsByClassName('main-side-svg');
	var toggleSideSvg = mainSideSvg[0].classList;

	if (event.target.matches('.dropbtn')){
		
		var j;
		for (j = 0; j < mainDropSvg.length; j++) {
			var toggleCarret = mainDropSvg[j];
			if (toggleCarret.classList.contains('show-caret')){
				toggleCarret.classList.remove('show-caret');
				toggleCarret.classList.add('hide-caret');
				console.log(mainSideSvg[0].classList);
				console.log(toggleCarret);
				toggleSideSvg.remove('hide-caret');
				toggleSideSvg.add('show-caret');

			} else {
				toggleCarret.classList.remove('hide-caret');
				toggleCarret.classList.add('show-caret');
				toggleSideSvg.add('hide-caret');
				toggleSideSvg.remove('show-caret');
			}
		}

	}

	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		  var openDropdown = dropdowns[i];
		  if (openDropdown.classList.contains('show-content')) {
		    openDropdown.classList.remove('show-content');
		  }
		}
  	}
};


