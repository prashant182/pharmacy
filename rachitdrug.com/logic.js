var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var jsonResponse = JSON.parse(xhttp.responseText);

    var pharmacyName = document.getElementsByClassName("pharmacyName");
    var pharmacyPhone = document.getElementsByClassName("pharmacyPhone");
    var pharmacyEmail = document.getElementsByClassName("pharmacyEmail");
    var aboutPharmacy = document.getElementsByClassName("aboutPharmacy");
    var address1 = document.getElementsByClassName("address1");
    var address2 = document.getElementsByClassName("address2");
    var pharmacyHoursWeek = document.getElementsByClassName("pharmacyHoursWeek");
    var pharmacyHoursWeekend= document.getElementsByClassName("pharmacyHoursWeekend");
    var otcDesc= document.getElementsByClassName("otcDesc");
    var medicalDesc= document.getElementsByClassName("medicalDesc");
    var prescriptioDesc= document.getElementsByClassName("prescriptioDesc");
    var refillDesc= document.getElementsByClassName("refillDesc");
    var transferRxDesc= document.getElementsByClassName("transferRxDesc");
    var pickupDesc= document.getElementsByClassName("pickupDesc");

    var i;
    for (i = 0; i < pharmacyPhone.length; i++) {
      pharmacyPhone[i].innerHTML = jsonResponse["PharmacyPhone"];
    }

    var i;
    for (i = 0; i < pharmacyEmail.length; i++) {
      pharmacyEmail[i].innerHTML = jsonResponse["PharmacyEmail"];
    }
    var i;
    for (i = 0; i < aboutPharmacy.length; i++) {
      aboutPharmacy[i].innerHTML = jsonResponse["AboutPharmacy"];
    }
    var i;
    for (i = 0; i < address1.length; i++) {
      address1[i].innerHTML = jsonResponse["Address1"];
    }
    var i;
    for (i = 0; i < address2.length; i++) {
      address2[i].innerHTML = jsonResponse["Address2"];
    }
    var i;
    for (i = 0; i < pharmacyHoursWeek.length; i++) {
      pharmacyHoursWeek[i].innerHTML = jsonResponse["PharmacyHoursWeek"];
    }
    var i;
    for (i = 0; i < pharmacyHoursWeekend.length; i++) {
      pharmacyHoursWeekend[i].innerHTML = jsonResponse["PharmacyHoursWeekend"];
    }
    var i;
    for (i = 0; i < otcDesc.length; i++) {
      otcDesc[i].innerHTML = jsonResponse["OtcDesc"];
    }
    var i;
    for (i = 0; i < medicalDesc.length; i++) {
      medicalDesc[i].innerHTML = jsonResponse["MedicalDesc"];
    }
    var i;
    for (i = 0; i < prescriptioDesc.length; i++) {
      prescriptioDesc[i].innerHTML = jsonResponse["PrescriptioDesc"];
    }
    var i;
    for (i = 0; i < refillDesc.length; i++) {
      refillDesc[i].innerHTML = jsonResponse["RefillDesc"];
    }
    var i;
    for (i = 0; i < transferRxDesc.length; i++) {
      transferRxDesc[i].innerHTML = jsonResponse["TransferRxDesc"];
    }
    var i;
    for (i = 0; i < pickupDesc.length; i++) {
      pickupDesc[i].innerHTML = jsonResponse["PickupDesc"];
    }
    var i;
    for (i = 0; i < pharmacyName.length; i++) {
      pharmacyName[i].innerHTML = jsonResponse["PharmacyName"];
    }


  }
};
xhttp.open("GET", "http://rachitdrug.com.s3-website.us-east-2.amazonaws.com/backend/constants.json", true);
xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
xhttp.setRequestHeader('Content-type', 'application/ecmascript');
xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xhttp.send();
