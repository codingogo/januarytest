BootsSwitch=new Array();
    BootsSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/b1.jpg';
    BootsSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/b2.jpg';
    BootsSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/b3.jpg';
    BootsSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/b4.jpg';
    BootsSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/b5.jpg';

function swapImage(){ document.getElementById("theBoots").setAttribute("src", BootsSwitch[Math.round(Math.random()*4)]);}

FlatsSwitch=new Array();
    FlatsSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/f1.jpg';
    FlatsSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/f2.jpg';
    FlatsSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/f3.jpg';
    FlatsSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/f4.jpg';
    FlatsSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/f5.jpg';

function swapFlats() {document.getElementById("theFlats").setAttribute("src", FlatsSwitch[Math.round(Math.random()*4)]); } 

MulesSwitch=new Array();
    MulesSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/m1.jpg';
    MulesSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/m2.jpg';
    MulesSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/m3.jpg';
    MulesSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/m4.jpg';
    MulesSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/m5.jpg';

function swapMules() {document.getElementById("theMules").setAttribute("src", MulesSwitch[Math.round(Math.random()*4)]); } 

SlingbackSwitch=new Array();
    SlingbackSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/sb1.jpg';
    SlingbackSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/sb2.jpg';
    SlingbackSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/sb3.jpg';
    SlingbackSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/sb4.jpg';
    SlingbackSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/sb5.jpg';

function swapSlingbacks()  {document.getElementById("theSlingbacks").setAttribute("src", SlingbackSwitch[Math.round(Math.random()*4)]);} 

StilettosSwitch=new Array();
    StilettosSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/st1.jpg';
    StilettosSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/st2.jpg';
    StilettosSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/st3.jpg';
    StilettosSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/st4.jpg';
    StilettosSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/st5.jpg';

function swapStilettos() { document.getElementById("theStilettos").setAttribute("src", StilettosSwitch[Math.round(Math.random()*4)]); } 

CollectorsSwitch=new Array();
    CollectorsSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/c1.jpg';
    CollectorsSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/c2.jpg';
    CollectorsSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/c3.jpg';
    CollectorsSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/c4.jpg';
    CollectorsSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/mainCat/cnds/c5.jpg';

function swapCollectors()  {document.getElementById("theCollectors").setAttribute("src", CollectorsSwitch[Math.round(Math.random()*4)]); }  

SandalsSwitch=new Array();
    SandalsSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/sandals/d1.jpg';
    SandalsSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/sandals/d2.jpg';
    SandalsSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/sandals/d3.jpg';
    SandalsSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/sandals/d4.jpg';
    SandalsSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/categories/sandals/d5.jpg';

function swapSandals()  {document.getElementById("theSandals").setAttribute("src", SandalsSwitch[Math.round(Math.random()*4)]); }     

swapFlats();
swapImage();
swapMules();
swapSlingbacks();
swapStilettos();
swapCollectors();
swapSandals();

// Main Showcase
ShowcaseSwitch=new Array();
    ShowcaseSwitch[0]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/mainbanner/lisam/lisab.jpg';
    ShowcaseSwitch[1]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/mainbanner/lisam/lisad.jpg';
    ShowcaseSwitch[2]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/mainbanner/lisam/lisam.jpg';
    ShowcaseSwitch[3]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/mainbanner/lisam/lisapink.jpg';
	ShowcaseSwitch[4]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/mainbanner/lisam/lisay.jpg';
    ShowcaseSwitch[5]='https://sixandahalf.s3.ap-northeast-2.amazonaws.com/mainbanner/lisam/lisar.jpg';

function swapMainShowcase() { document.getElementById("theMainShowcase").setAttribute("src", ShowcaseSwitch[Math.round(Math.random()*5)]);}  

swapMainShowcase();


