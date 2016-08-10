var parkingId;

$(document).ready(function(){
    $("#rateparking").css("display", "none");
    $("#reportparking").css("display", "none");
    $("#finding").css("display", "none");
    $("#refundmsg").css("display", "none");
    $("#newparkspace").css("display", "none");
    $("#theratings").css("display", "none");
    $("#ratebtn").click(function(){
         $("#rateparking").css("display", "block");
    });

    $("#issuebtn").click(function(){
         $("#reportparking").css("display", "block");
    });

    $('input:radio[name="proboptions"]').change(
    function(){
        if (this.checked && this.value == 'altpark') {
            $("#refundmsg").css("display", "none");
            $("#finding").css("display", "block");
            setTimeout(function() {
                // Do something after 2 seconds                
                 $("#finding").css("display", "none");
                 $("#newparkspace").css("display", "block");
        }, 2000);
        }
        else if(this.checked && this.value == 'refund'){
                $("#finding").css("display", "none");
                $("#newparkspace").css("display", "none");
                $("#refundmsg").css("display", "block");
        }
    });

    $("#rateus").click(function(){
         $("#theratings").css("display", "block");
         
    });

    console.log("innerHTML test 15");
    var access_token;
    //document.querySelector('.parkingId').innerHTML = String(parkingId);


});
function generateParkingId(){
        //parkingId = generateId();
        //parkingId = "FP"+parkingId;
        parkingId = sessionStorage.getItem("parkingId");
        console.log("Parking iD is:"+parkingId);
        document.getElementById('parkingId').innerHTML = parkingId;
}

function generateId(){
        console.log("ID GENERATED");
        var id = Math.floor((Math.random() * 3986371923));
        return id;
}
function upsertCase(type, description){
        console.log("type from html: "+type);
        console.log("description from html: "+description);
        console.log("Parking iD is:"+parkingId);
        parkingId = generateId();
        parkingId = "FP"+parkingId;
        console.log("Parking iD is:"+parkingId);
        sessionStorage.setItem("parkingId", parkingId);

        var caseInfo = {
            "description" : description,
            "status" : "unresolved",
            "parkingId" : parkingId,
            "type": type
        }

        var caseInfoJson = JSON.stringify(caseInfo);

        $.ajax({

            headers: {
                "Authorization"    : "Bearer "+access_token/*00D50000000adDr!ARwAQJfmwqv4VpQCbjF6kWvWXa1IsHUSgWPGnBKblTPHY2qHQOOLYoHALd6gR5BMZG6MQjwE6Hp7bA86UDcQGsF6p_lGw11W */,
                "Content-Type" : "application/json"
            },
            type: 'POST',
            url: 'https://sfdc-cors.herokuapp.com/services/apexrest/alti_snapin/FieldCase',
            data : caseInfoJson,
            success : function (dataa) {
                dataa = JSON.parse(dataa);
                console.log(dataa);
                sessionStorage.setItem("case_id", dataa);
                location.href='../pages/serviceticket.html'
            },
            error : function (data, errorThrown,status) {
                alert('ERROR: ' + data);
            }
        });
    }
function loginSalesforce(){
    $.ajax({
            type: 'POST',
            crossOrigin: true,
            url: 'https://sfdc-cors.herokuapp.com/services/oauth2/token',
            dataType: 'json',
            cache :false,
            data : {
                "grant_type"    : "password",
                "client_id"     : "3MVG9Km_cBLhsuPz64ndIorsnNZWr1IYg_udMlNtexUI_0BKxrkQsEwouyVmvgwlCLEZvsUpnjVgr3Gqvwped",
                "client_secret" : "6078691371474040753",
                "username"      : "ajay.krj@altimetrik.com.snapin",
                "password"      : "Maxpl0re1KFSn1rlMAOWJygr0E8jc9QTst"
            },
            success : function (data) {
                access_token = data.access_token;
                console.log(data.access_token);
                getvalues();
            },
            error : function (data, errorThrown,status) {
                console.log(data.responseText);
                //alert(data.responseText);
            }
    });
}
function generateIssueTypes(typeData){
    console.log(typeData.length);
    for (var i = 0; i < typeData.length; i++){
        var x = document.createElement("OPTION");
        x.setAttribute("value", "issuetype");

        var t = document.createTextNode(typeData[i]);

        x.appendChild(t);

        document.getElementById("issuetype").appendChild(x);
    }

}
function getvalues(){
    $.ajax({

        headers: {
            "Authorization"    : "Bearer "+access_token/*00D50000000adDr!ARwAQJfmwqv4VpQCbjF6kWvWXa1IsHUSgWPGnBKblTPHY2qHQOOLYoHALd6gR5BMZG6MQjwE6Hp7bA86UDcQGsF6p_lGw11W" */
        },
        type: 'GET',
        crossOrigin: true,
        url: 'https://sfdc-cors.herokuapp.com/services/apexrest/alti_snapin/FieldCase',
        dataType: 'json',
        cache :false,
        data : {
            
        },
        success : function (datas) {
            console.log(datas);
            datas = JSON.parse(datas);
            generateIssueTypes(datas);
        },
        error : function (data, errorThrown,status) {
            $('#token').text('ERROR: ' + data);
        }
    });
}
function upsertCaseGetRequest(){
    $.ajax({

        headers: {
            "Authorization"    : "Bearer 00D50000000adDr!ARwAQJfmwqv4VpQCbjF6kWvWXa1IsHUSgWPGnBKblTPHY2qHQOOLYoHALd6gR5BMZG6MQjwE6Hp7bA86UDcQGsF6p_lGw11W"
        },
        type: 'GET',
        url: 'https://sfdc-cors.herokuapp.com/services/apexrest/alti_snapin/FieldCase2?description=Done&city=Montevideo&parkingId=123UnPasito2',
        data : {
        },
        success : function (dataa) {
            alert(dataa);
        },
        error : function (data, errorThrown,status) {
            alert(data);
        }
    });
}