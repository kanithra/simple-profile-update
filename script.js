
function showForm(){
    document.getElementById("head").style.display="block";   
}

function submitAll(event){
        event.preventDefault();
        document.getElementById("FormValue").innerHTML="Name" + " : " + document.getElementById("name").value;
        document.getElementById("FormValue1").innerHTML="Address" + " : " + document.getElementById("address").value;
        document.getElementById("FormValue2").innerHTML="DOB" + " : " + document.getElementById("date").value;
        document.getElementById("FormValue3").innerHTML="District" + " : " + document.getElementById("district").value;
        document.getElementById("FormValue4").innerHTML="Pincode" + " : " + document.getElementById("num").value;
        document.getElementById("head").style.display = "none";
        document.getElementById("successCard").style.display = "block";   
        alert("Succesfully updated")
}
