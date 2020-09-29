var data = "";

function myFunction() {
  data = document.getElementById("Test").innerHTML
  localStorage.setItem('data', data);
    window.location.href = "/res";
  }

  function store_data() {
    localStorage.setItem('Name_first', document.getElementById('firstName').value);
    localStorage.setItem('Name_last', document.getElementById('lastName').value);
    localStorage.setItem('age', document.getElementById('Age').value);
    localStorage.setItem('state', document.getElementById('State').value);
    localStorage.setItem('country', document.getElementById('country').value);

    localStorage.setItem('cough', document.getElementById('cough').checked);
    if (document.getElementById('cough').checked){
      localStorage.setItem('number-cough', document.getElementById('number-cough').value);
    }
    localStorage.setItem('fever', document.getElementById('fever').checked);
    if (document.getElementById('fever').checked){
      localStorage.setItem('number-fever', document.getElementById('number-fever').value);
      localStorage.setItem('number-fever2', document.getElementById('number-fever2').value);
    }
    localStorage.setItem('shortnessofbreath', document.getElementById('shortnessofbreath').checked);
    if (document.getElementById('shortnessofbreath').checked){
      localStorage.setItem('number-shortnessofbreath', document.getElementById('number-shortnessofbreath').value);
    }
    localStorage.setItem('sorethroat', document.getElementById('sorethroat').checked);
    if (document.getElementById('sorethroat').checked){
      localStorage.setItem('number-sorethroat', document.getElementById('number-sorethroat').value);
    }
    localStorage.setItem('pre-exist-yes', document.getElementById('yes').checked);
    localStorage.setItem('pre-exist-no', document.getElementById('no').checked);
    localStorage.setItem('prexconditions', document.getElementById('prexconditions').value);
    //localStorage.setItem('all_data', all_data);
    //if (document.getElementById('cough').value == "on") {
      //localStorage.setItem('cough', document.getElementById('cough').value);
    //} else {
      //localStorage.setItem('cough', document.getElementById('cough').value);
    //}
    //console.log(document.getElementById('cough').value);
    window.location.href = "/res";
    }


  async function response() {
    var percentage = 0.0;
    //const response=await fetch();
    //const data = await response.text();
    var age = localStorage.getItem('age');
    var state = localStorage.getItem('state');
    var pre_exist = localStorage.getItem('pre-exist-yes');
    var prexconditions = localStorage.getItem('prexconditions');
    var country = localStorage.getItem('country');
    var cough = localStorage.getItem('cough');
    var fever = localStorage.getItem('fever');
    var shortnessofbreath = localStorage.getItem('shortnessofbreath');
    var sorethroat = localStorage.getItem('sorethroat');
    if (age >= 80){
      percentage = percentage + 14.8;
    } else if (age >= 70) {
      percentage = percentage + 8.0;
    } else if (age >= 60) {
      percentage = percentage + 3.6;
    } else if (age >= 50) {
      percentage = percentage + 1.3;
    } else if (age >= 40) {
      percentage = percentage + 0.4;
    } else if (age >= 30) {
      percentage = percentage + 0.2;
    } else if (age >= 20) {
      percentage = percentage + 0.2;
    } else if (age >= 10) {
      percentage = percentage + 0.2;
    } else if (age >= 0) {
      percentage = percentage + 0.0;
    }

    if (state == "wa" || state == "ca" || state == "il" || state == "ma" || state == "wi" || state == "or" || state == "az" ) {
      console.log(percentage);
      percentage = percentage + 0.07;
    }

    if (pre_exist){
      console.log(percentage);
      if (prexconditions == "Kidney Failure"){
        percentage = percentage + 0.0;
      } else if (prexconditions == "Diabetes"){
        percentage = percentage + 7.3;
      } else if (prexconditions == "Asthma"){
        percentage = percentage + 0.0;
      } else if (prexconditions == "Lung Cancer"){
        percentage = percentage + 5.6;
      } else if (prexconditions == "Liver Failure"){
        percentage = percentage + 0.9;
      } else if (prexconditions == "Cardiovascular disease"){
        percentage = percentage + 10.5;
      } else if (prexconditions == "Hypertension"){
        percentage = percentage + 6.0;
      } 
    }

    if (country == "China"){
      percentage = percentage + 92.0;
    } else if (country == "South Korea"){
      percentage = percentage + 4.05;
    } else if (country == "Italy"){
      percentage = percentage + 1.29;
    } else if (country == "Japan"){
      percentage = percentage + 0.3;
    } else if (country == "Iran"){
      percentage = percentage + 0.68;
    } else if (country == "Singapore"){
      percentage = percentage + 0.11;
    } else if (country == "Hong Kong"){
      percentage = percentage + 0.1;
    }

    if (cough){
      console.log("working");
      var number_cough = localStorage.getItem('number-cough');
      percentage = percentage + 7.0;
      if (number_cough > 5){
        percentage = percentage + 10.0;
      }
    }
    if (fever){
      console.log("working");
      var number_fever = localStorage.getItem('number-fever');
      var number_fever2 = localStorage.getItem('number-fever2');
      percentage = percentage + 10.0;
      if (number_fever2 > 4) {
        percentage = percentage + 10.0;
      }
    }
    if (shortnessofbreath){
      console.log("working");
      var number_shortnessofbreath = localStorage.getItem('number-shortnessofbreath');
      percentage = percentage + 10.0;
      if (number_shortnessofbreath > 3) {
        percentage = percentage + 15.0;
      }
    }
    if (sorethroat){
      console.log("working");
      var number_sorethroat = localStorage.getItem('number-sorethroat');
      if (number_shortnessofbreath > 0) {
        percentage = percentage + 0.0;
      }
    }

    if (percentage >= 50) {
      document.getElementById("response").innerHTML = "You have a high risk of coronavirus infection. Calmly make your way to the nearest disease control center listed below and be sure to wear a surgical mask out to public spaces. You are encouraged to call the disease center at 1-800-232-4636 in advance to inform them of your arrival. If you need assistance, do not hesitate to call 911.";
    } else if (percentage >= 20) {
      document.getElementById("response").innerHTML = "Your risk of coronavirus infection is moderate but NOT dangerous. We advise you to self-quarantine for 14 days and continue practicing good personal hygiene. Should your symptoms persist or worsen, consult your local GP.";
    } else if (percentage >= 0){
      document.getElementById("response").innerHTML = "Your risk of coronavirus infection is very low. We advise you to wear a surgical mask when going out to public spaces while you’re still sick and continue practicing good personal hygiene. Should your symptoms persist or worsen, consult your local GP.";
    }
    //console.log(percentage);
    //document.getElementById("response").innerHTML = percentage;
    localStorage.clear();
  }
  // <script src="scripts/button.js"></script>
  //<link href="Styles/styles.css" rel="stylesheet" type="text/css">