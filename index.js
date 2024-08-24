
function checkingFormats() {


    if (window.innerWidth > 670) {

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav" style="width: 100%; padding-left: 10%; padding-right: 10%;">' +

            '<tr class="tableNav">' +

                '<td id="navLogoImg" style="width: 75px; height: 75px; padding: 0%;"><img src="images/rEXiV-2.png"> </td>' +

                '<td id="navName" style="padding-left: 15px; padding-right: 15px;">BRENDAN (RAPTOR) TAN YUAN XI</td>' +

                '<td id="navHomeBtn" class="tableBtn"><a href="">HOME</a></td>' +

                '<td id="navAboutBtn" class="tableBtn"><a href="">ABOUT</a></td>' +

                '<td id="navProjectsBtn" class="tableBtn"><a href="">PROJECTS</a></td>' +

                '<td id="navContactBtn" class="tableBtn"><a href="contact-platform.html">CONTACT</a></td>' +

            '</tr>' +

        '</table>'
    }

    if (window.innerWidth < 670) {

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav" style="width: 100%; padding-left: 10%; padding-right: 10%;">' +

            '<tr class="tableNav">' +

                '<td id="navLogoImg" style="width: 75px; height: 75px; padding: 0%;"><img src="images/rEXiV-2.png"> </td>' +

                '<td id="navName" style="padding-left: 15px; padding-right: 15px;">BRENDAN (RAPTOR) TAN YUAN XI</td>' +

                '<td style="width: 75px; height: 75px;"><img src="images/HamBurger.png" onclick="enterExcel()"></td>' +

            '</tr>' +

        '</table>'
        
    }
}

window.addEventListener("resize", checkingFormats);

var mobileNavExpand = false;

function enterExcel(){

    if (!mobileNavExpand){

        mobileNavExpand = true;

    }

    else if (mobileNavExpand){

        mobileNavExpand = false;
    }

    expandMobileNav();

    activePageID();

}

function expandMobileNav(){

    if (mobileNavExpand) {

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav">' +

            '<tr class="tableNav">' +

                '<td id="navLogoImg" style="width: 75px; height: 75px;"><img src="images/rEXiV-2.png"> </td>' +

                '<td id="navName" style="padding-left: 5%; padding-right: 5%;">BRENDAN (RAPTOR) TAN YUAN XI</td>' +

                '<td style="width: 75px; height: 75px;"><img src="images/HamBurger.png" onclick="enterExcel()"></td>' +

            '</tr>' +

            '<tr id="navExpandList" class="tableNav aniHover">' +

                '<td id="" class="tableBtn"><a href="">HOME</a></td>' +

            '</tr>' +

            '<tr id="navExpandList" class="tableNav aniHover">' +

                '<td id="" class="tableBtn"><a href="">ABOUT</a></td>' +

            '</tr>' +

            '<tr id="navExpandList" class="tableNav aniHover">' +

                '<td id="" class="tableBtn"><a href="">PROEJCTS</a></td>' +

            '</tr>' +

            '<tr id="navExpandList" class="tableNav aniHover">' +

                '<td id="" class="tableBtn"><a href="contact-platform.html">CONTACT</a></td>' +

            '</tr>' +

        '</table>'
    }

    if (!mobileNavExpand) {

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav">' +

        '<tr class="tableNav">' +

            '<td id="navLogoImg" style="width: 75px; height: 75px;"><img src="images/rEXiV-2.png"> </td>' +

            '<td id="navName" style="padding-left: 5%; padding-right: 5%;">BRENDAN (RAPTOR) TAN YUAN XI</td>' +

            '<td style="width: 75px; height: 75px;"><img src="images/HamBurger.png" onclick="enterExcel()"></td>' +

        '</tr>'
    }
}

function activePageID(){

    const pageID = document.body.id;

    const targetNav = "nav" + pageID + "Btn";

    if (document.getElementById(targetNav).attributes[1] != "tableBtn active"){

        document.getElementById(targetNav).classList.add("active");

        return;

    }

    if (document.getElementById(targetNav).attributes[1] == "tableBtn active"){

        document.getElementById(targetNav).classList.remove("active")

        return;
    }

}

activePageID();

let alertBody = document.getElementById('alertBody');

function alertPop(){
            
    alertBody.style.display = 'none';
    alertStatus = false;

}

function alertGone(){

    if (!alertStatus){
        
        alertBody.style.display = 'none';

    }
}