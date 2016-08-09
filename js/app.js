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


    var access_token;
    console.log("try getvalues()");







});
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
                    alert(data.access_token);
                    getvalues();
                },
                error : function (data, errorThrown,status) {
                    alert(data.responseText);
                }
        });
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
                alert(datas);
            },
            error : function (data, errorThrown,status) {
                $('#token').text('ERROR: ' + data);
            }
        });
    }