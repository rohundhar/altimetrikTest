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
});