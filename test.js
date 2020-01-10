

    var ninaSlingbackBtn = document.getElementById('nina-btn');
    var renaStilettoBtn = document.getElementById('rena-btn');
    var remyAnkleBtn = document.getElementById('remy-btn');
    var classicFlatBtn = document.getElementById('classic-flat-btn');
    var muleBtn = document.getElementById('mule-btn');
    var anklebootBtn = document.getElementById('ankleboot-btn');
    var ssBtn = document.getElementById('ss-btn');
    var psBtn = document.getElementById('ps-btn');
    var fbmBtn = document.getElementById('fbm-btn');
    var rtsBtn = document.getElementById('rts-btn');
    var rtabBtn = document.getElementById('rtab-btn');
    var lilyBtn = document.getElementById('lily-btn');

    var ninaDiv = document.getElementById('nina-div');
    var renaDiv = document.getElementById('rena-div') ;
    var remyDiv = document.getElementById('remy-div');
    var classicFlatDiv = document.getElementById('classicflat-div');
    var muleDiv = document.getElementById('mule-div');
    var anklebootDiv = document.getElementById('ankleboot-div');
    var ssDiv = document.getElementById('ss-div');
    var psDiv = document.getElementById('ps-div');
    var fbmDiv = document.getElementById('fbm-div');
    var rtsDiv = document.getElementById('rts-div');
    var rtabDiv = document.getElementById('rtab-div');
    var lilyDiv = document.getElementById('lily-div');

    ninaSlingbackBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'visible');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'selected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected');
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected');
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');
    };

    renaStilettoBtn.onclick = function() {
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	renaDiv.setAttribute('class', 'visible');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'selected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected');  
    	rtabBtn.setAttribute('class', 'unselected'); 
    	lilyBtn.setAttribute('class', 'unselected');	
    };

    remyAnkleBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'visible');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'selected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected');  
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');  
    	lilyBtn.setAttribute('class', 'unselected');
 	
    };

    classicFlatBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
		classicFlatDiv.setAttribute('class', 'visible');
		lilyDiv.setAttribute('class', 'hidden');
    	
    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'selected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');

    };

    muleBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'visible');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');


    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'selected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');

    }; 

    anklebootBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'visible');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'selected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');

    }; 

    ssBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'visible');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'selected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');

    }; 

    psBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'visible');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'selected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected');
    	rtabBtn.setAttribute('class', 'unselected'); 
    	lilyBtn.setAttribute('class', 'unselected');

    };   

    fbmBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'visible');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'selected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');

    };         

    rtsBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'visible');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'selected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'unselected');
    }; 

    rtabBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'visible');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'hidden');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'selected');
    	lilyBtn.setAttribute('class', 'unselected');
    }; 

    lilyBtn.onclick = function() {
    	renaDiv.setAttribute('class', 'hidden');
    	remyDiv.setAttribute('class', 'hidden');
    	classicFlatDiv.setAttribute('class', 'hidden');
    	ninaDiv.setAttribute('class', 'hidden');
    	muleDiv.setAttribute('class', 'hidden');
    	anklebootDiv.setAttribute('class', 'hidden');
    	ssDiv.setAttribute('class', 'hidden');
    	rtabDiv.setAttribute('class', 'hidden');
    	psDiv.setAttribute('class', 'hidden');
    	fbmDiv.setAttribute('class', 'hidden');
    	rtsDiv.setAttribute('class', 'hidden');
    	lilyDiv.setAttribute('class', 'visible');

    	ninaSlingbackBtn.setAttribute('class', 'unselected');
    	renaStilettoBtn.setAttribute('class', 'unselected');
    	remyAnkleBtn.setAttribute('class', 'unselected');
    	classicFlatBtn.setAttribute('class', 'unselected');
    	muleBtn.setAttribute('class', 'unselected'); 
    	anklebootBtn.setAttribute('class', 'unselected');
    	ssBtn.setAttribute('class', 'unselected');
    	psBtn.setAttribute('class', 'unselected');
    	fbmBtn.setAttribute('class', 'unselected');
    	rtsBtn.setAttribute('class', 'unselected'); 
    	rtabBtn.setAttribute('class', 'unselected');
    	lilyBtn.setAttribute('class', 'selected');
    };    













// BootsSwitch=new Array();
//     BootsSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/boots1.png';
//     BootsSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/boots2.png';
//     BootsSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/boots3.png';
//     BootsSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/boots4.png';
//     BootsSwitch[4]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/boots5.png';

// function swapImage() 
//     {
//         document.getElementById("theBoots").setAttribute("src", BootsSwitch[Math.round(Math.random()*4)]);
//     }

// FlatsSwitch=new Array();
//     FlatsSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/flat1.png';
//     FlatsSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/flat2.png';
//     FlatsSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/flat3.png';
//     FlatsSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/flat4.png';
//     FlatsSwitch[4]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/flat5.png';

// function swapFlats() 
//     {
//         document.getElementById("theFlats").setAttribute("src", FlatsSwitch[Math.round(Math.random()*4)]);
//     } 

// MulesSwitch=new Array();
//     MulesSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/mule1.png';
//     MulesSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/mule2.png';
//     MulesSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/mule3.png';
//     MulesSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/mule4.png';
//     MulesSwitch[4]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/mule5.png';

// function swapMules() 
//     {
//         document.getElementById("theMules").setAttribute("src", MulesSwitch[Math.round(Math.random()*4)]);
//     } 

// SlingbackSwitch=new Array();
//     SlingbackSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/nina1.png';
//     SlingbackSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/nina2.png';
//     SlingbackSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/nina3.png';
//     SlingbackSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/nina4.png';
//     SlingbackSwitch[4]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/nina5.png';

// function swapSlingbacks() 
//     {
//         document.getElementById("theSlingbacks").setAttribute("src", SlingbackSwitch[Math.round(Math.random()*4)]);
//     } 

// StilettosSwitch=new Array();
//     StilettosSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/stiletto1.png';
//     StilettosSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/stiletto2.png';
//     StilettosSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/stiletto3.png';
//     StilettosSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/stiletto4.png';
//     StilettosSwitch[4]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/stiletto5.png';

// function swapStilettos() 
//     {                     
//         document.getElementById("theStilettos").setAttribute("src", StilettosSwitch[Math.round(Math.random()*4)]);
//     } 

// CollectorsSwitch=new Array();
//     CollectorsSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/collector1.png';
//     CollectorsSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/collector2.png';
//     CollectorsSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/collector3.png';
//     CollectorsSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/collector4.png';
//     CollectorsSwitch[4]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/categories/mainCat/collector5.png';

// function swapCollectors() 
//     {                     
//         document.getElementById("theCollectors").setAttribute("src", CollectorsSwitch[Math.round(Math.random()*4)]);
//     }     

// swapFlats();
// swapImage();
// swapMules();
// swapSlingbacks();
// swapStilettos();
// swapCollectors();










// Main Showcase

// ShowcaseSwitch=new Array();
// ShowcaseSwitch[0]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/mainbanner/mb-blue.jpg';
// ShowcaseSwitch[1]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/mainbanner/mb-coral.jpg';
// ShowcaseSwitch[2]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/mainbanner/mb-croc.jpg';
// ShowcaseSwitch[3]='https://s3.ap-northeast-2.amazonaws.com/sixandahalf/mainbanner/mb-white.jpg';

// function swapMainShowcase() 
//     {                     
//         document.getElementById("theMainShowcase").setAttribute("src", ShowcaseSwitch[Math.round(Math.random()*3)]);
//     }  

// swapMainShowcase();






















