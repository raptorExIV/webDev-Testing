
function checkingFormats() {


    if (window.innerWidth > 670) {

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav" style="width: 100%; padding-left: 10%; padding-right: 10%;">' +

            '<tr class="tableNav">' +

                '<td id="navLogoImg" style="width: 75px; height: 75px; padding: 0%;"><img src="images/rEXiV-2.png"> </td>' +

                '<td id="navName" style="padding-left: 15px; padding-right: 15px;">BRENDAN (RAPTOR) TAN YUAN XI</td>' +

                '<td id="navHomeBtn" class="active tableBtn"><a href="">HOME</a></td>' +

                '<td id="navAboutBtn" class="tableBtn"><a href="">ABOUT</a></td>' +

                '<td id="navProjectsBtn" class="tableBtn"><a href="">PROJECTS</a></td>' +

                '<td id="navContactBtn" class="tableBtn"><a href="">CONTACT</a></td>' +

            '</tr>' +

        '</table>'
    }

    if (window.innerWidth < 670) {

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav" style="width: 100%; padding-left: 10%; padding-right: 10%;">' +

            '<tr class="tableNav">' +

                '<td id="navLogoImg" style="width: 75px; height: 75px; padding: 0%;"><img src="images/rEXiV-2.png"> </td>' +

                '<td id="navName" style="padding-left: 15px; padding-right: 15px;">BRENDAN (RAPTOR) TAN YUAN XI</td>' +

            '</tr>' +

        '</table>'
        
    }
}

window.addEventListener("resize", checkingFormats);
