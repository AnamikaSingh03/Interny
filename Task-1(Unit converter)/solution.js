function attachEventsListeners() {
    let ratios = {
       hours: 1,
       minutes: 60,
       seconds: 3600,
       miliseconds:3600000
   };
   
   function convertValue(value, from) {
       const inHours = value / ratios[from];
       return {
           hours: inHours,
          minutes:inHours * ratios.minutes,
          seconds: inHours * ratios.seconds,
          miliseconds: inHours*ratios.miliseconds,
          
       };
   }

   const hoursDiv = document.getElementById('hours');
   const minutesDiv = document.getElementById('minutes');
   const secondsDiv = document.getElementById('seconds');
   const milisecondsDiv = document.getElementById('miliseconds');
   

   document.getElementById('hoursBtn').addEventListener('click', convertTime);
   document.getElementById('minutesBtn').addEventListener('click', convertTime);
   document.getElementById('secondsBtn').addEventListener('click', convertTime);
   document.getElementById('secondsBtn').addEventListener('click', convertTime);
 


   function convertTime(e) {
       let value = Number(e.target.parentNode.querySelector('input[type="text"]').value);
       let from = e.target.parentNode.querySelector('input[type="text"]').id;
       const convertedValues = convertValue(value, from);
       display(convertedValues);
   }
   

   function display(valuesToDisplay) {
       hoursDiv.value = valuesToDisplay.hours;
       minutesDiv.value = valuesToDisplay.minutes;
       secondsDiv.value = valuesToDisplay.seconds;
       milisecondsDiv.value = valuesToDisplay.miliseconds;

   }
}