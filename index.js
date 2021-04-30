// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   });

//   function handleClick(e) {
//     const timeString = document.getElementById('time').value
//     displayMessage(greet(timeString))
//   }
  
//   /* End Given Code, don't edit above here...*/
  
//   /* Write your implementation of greet() */
//   function greet(timeString) {
//       const hour = parseInt(timeString, 10);
//       if ( hour < 0)  return 'Enter an hour between 0 and 23'
//       if ( hour > 23)  return 'Enter an hour between 0 and 23'
//       if ( hour < 12) return "Good Morning"
//       if ( hour > 17) return "Good Evening"
//       return "Good Afternoon"
    
//   }
//   /* Write your implementation of displayMessage() */
//   function displayMessage(string) {
//     document.getElementById("greeting").innerText = string;
//   }
  
document.addEventListener( "DOMContentLoaded", function () {
  updateDOM()
} );


function updateDOM() {
  document.getElementById( "text" )
    .innerHTML = "This is really cool!";
}
  
 