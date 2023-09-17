
var formatA = true;
var formatB = false;

function checkingFormats() {

    if (formatA) {
        console.log("Format A present.");

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav" style="width:100%; table-layout: fixed;">' +

            '<tr class="tableNav">' +

                '<td style="padding: 0%; width: 55px; height: 55px;"><img src="images/rEXiV-2.png"> </td>' +

                '<td style="padding-left: 15px; padding-right: 15px;">Brendan Tan Yuan Xi</td>' +

                '<td class="active tableBtn"><a href="">Home</a></td>' +

                '<td class="tableBtn"><a href="index2-platform.html">Delta</a></td>' +

                '<td class="tableBtn"><a href="">Echo</a></td>' +

                '<td class="tableBtn"><a href="">Proto-One</a></td>' +

            '</tr>' +

        '</table>'
    }

    else if (formatB) {
        console.log("Format B present.");

        document.getElementById("navigationBarBlk").innerHTML =

        '<table class="tableNav" style="width:100%; table-layout: fixed;">' +

            '<tr class="tableNav">' +

                '<td style="padding: 0%; width: 55px; height: 55px;"><img src="images/rEXiV-2.png"> </td>' +

                '<td style="padding-left: 15px; padding-right: 15px;">Brendan Tan Yuan Xi</td>' +

                '<td class="active tableBtn"><a href="">rXz</a></td>' +

                '<td class="tableBtn"><a href="index2-platform.html">RZII</a></td>' +

                '<td class="tableBtn"><a href="">AxIOn</a></td>' +

                '<td class="tableBtn"><a href="">Orion</a></td>' +

            '</tr>' +

        '</table>'
        
    }
}

function switchFormat() {

    if (formatA && !formatB) {
        formatA = false;
        formatB = true;
    }

    else if (formatB && !formatA) {
        formatB = false;
        formatA = true;
    }

    checkingFormats();
}