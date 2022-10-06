
"use strict";



$(document).ready(() => {
    
        
    
    //
    //
    //
    // //Insert scroller.
    // $("#scroller_coaster").scrollLandpage(() => {
    // //We first get references to the scroller and its content. 
    //   const scroller = $('#scroller_coaster div.innerScrollArea');
    //   const scrollerContent = scroller.children('ul');
    // //Next, we clone the list items and add them to the list 
    //   scrollerContent.children().clone().appendTo(scrollerContent);
    // //Now, it's time to lay out the slides into a horizontal row.  We create an incremental counter, curX, and then loop through all of the slides, setting the 'left' CSS position.
    //   var curX = 0;
    //   scrollerContent.children().each(() => {
    //     const $this = $(this);
    //     $this.css('left', curX);
    //     curX += $this.outerWidth(true);
    //     });
    //     // We need to calculate the overall width of the original (non-cloned) slides and the viewport width.  These will be used to determine the scrolling behavior, which we'll add in a second.
    //     const fullW = curX / 2;
    //     const viewportW = scroller.width 
    //     // scroller.css('overflow-x', 'auto');
        
    // });/// Scroller. 
    
    // Insert faq accordion. 
    $( "#technical_qa" ).accordion();
    $("#payment_processing").accordion();
    $( "#terms_policy" ).accordion();
    

    // Add mouse over events for for menu.
    $("#menu_control a").mouseover(() => {
        $("div#shopping_cart").show(); 
    })//      
    $("div#shopping_cart").mouseover(() => {
        $("div#shopping_cart").show();
    })//
    $("#instruments>li").next().mouseover((tgt) => {
        const li = 
        $("div#shopping_cart").show();
         li = tgt.currentTarget;
        li.css("color", "red");
    })///

    //
    $("#menu_control a").mouseout(() => {
        $("div#shopping_cart").hide();
    })// 
    $("div#shopping_cart").mouseout(() => {
        $("div#shopping_cart").hide();
    })//mouseout events 

    // grab h3 to add click evt 
    $("div > h3").click((isVisible) => {
        //const h3 = evt.currentTarget;
        isVisible = false;
        if(isVisible == false) {
        $("div.questions").show();
        $("div.answers").show();  
        } else {
            $("div.questions").hide();
            $("div.answers").hide();
        }
    })//


    
}) // end of DOM
// Contact Form 
$(document).ready(() => {
$("#join_newsletter").click((evt) => {

        const first_name = $("#first_name").val();
        const last_name = $("#last_name").val();
        const email = $("#email").val(); 
        let isValid = true;
        //Validate
        if(first_name == ""){
            $("#first_name").next().text("* This field is required");
            isValid = false;
        }else {
            $("#first_name").next().text("");
        }
        if(last_name == ""){
            $("#last_name").next().text("* This field is required");
            isValid = false;
        }else {
            $("#last_name").next().text("");
        }
        if(email == ""){
            $("#email").next().text("* This field is required");
            isValid = false;
        }else {
            $("#email").next().text("");
        }
        if(isValid == true){
            $("#newsletter_form").submit();
        }
        evt.preventDefault();
       
    })
})
///////////////////////
/// DATE PICKER PLUG



var en = {
    closeText: "Done", // Display text for close link
    prevText: "Prev", // Display text for previous month link
    nextText: "Next", // Display text for next month link
    currentText: "Today", // Display text for current month link
    monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"], // Names of months for drop-down and formatting
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // Column headings for days starting at Sunday
    weekHeader: "Wk", // Column header for week of the year
    dateFormat: "mm/dd/yy", // See format options on parseDate
    firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
    isRTL: false, // True if right-to-left language, false if left-to-right
    showMonthAfterYear: false, // True if the year select precedes month, false for month then year
    yearSuffix: "", // Additional text to append to the year in the month headers
    numbers: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
    }
}
//
$('#date-field').udpicker({
    drawMonth: 0,
    drawYear: 0,
    selectedDay: 0,
    selectedMonth: 0,
    selector: '#ui-udpicker-div table.ui-datepicker-calendar tbody td a',
    changeYear: false, // allows to change year
    changeMonth: false, // allows to change month
    startYear: 1960,
    endYear: new Date().getFullYear(),
    minYear: new Date().getFullYear(),
    staticView: false
  });// DATE PICKER PLUG







// ////////////////doesn't work /////////////////////////
// $(document).ready(() => {
//     const slider = $("#image_list");
//     //click event for right button
//     $("#right_button").click(() =>{
//         // get value of current left property
//         const left_property = parseInt(slider.css("left"));
//         // determine new value of left property
//         let new_leftproperty = 0;
//         if(left_property -300 > 900){
//             new_leftproperty = left_property - 300;
//         }
//         //use the animate function to change the left property
//         slider.animate({left: new_leftproperty}, 1000);
//     });//
//     //click event for left button
//     $("#left_button").click(() => {
//         //get value of current left property
//         const left_property = parseInt(slider.css("left"));

//         //determine new value of left property
//         let new_leftproperty = 0;
//         if(left_property < 0) {
//             new_leftproperty = left_property + 300;
//         }
//         //use animate function to change the left property
//         slider.animate({left: new_leftproperty}, 1000);
//     });
// });/////////
// BASIC JAVASCRIPT
// ************NEEDS REFACTORING ***************************
// const $ = (selector) => document.querySelector(selector);
// //Store value into const variable.
// document.addEventListener("DOMContentLoaded", () => {
//   const submitEntry = () => {
//     const email = $("#email").value;
//     // Validate data
//     if (enterEmail === "") {
//       alert("Message box must not be empty");
//     } else {
//       // something else 
//     }
//   };
  
//   document.addEventListener("DOMContentLoaded", () => {
//     $("#submitEmail").addEventListener("click", submitEntry);
//   });
//   // Redundant Code
//   const signOn = () => {
//     const firstName = $("#firstName").value;
//     const lastName = $("#lastName").value;
//     const email = $("#email").value;

//     if (firstName === "" || lastName === "" || email === "") {
//       alert("error");
//     } else {
//       // something else 
//     }
//   };
//   // DOM Event Listener
//   document.addEventListener("DOMContentLoaded", () => {
//     $("#joinNewsLetter").addEventListener("click", signOn);
//   });
//   // proccess contact
//   const submitContact = () => {
//     const email = $("#email").value;
//     const phone = $("#phone").value;
//     const message = $("#message").value;
//     // Validate entries
//     if (email === "" || phone === "" || message === "") {
//       alert("error!");
//     } else {
//       // something else. 
//     }
//   };
//   // document.addEventListener
//   document.addEventListener("DOMContentLoaded", () => {// $("#submitContact").addEventListener
//     $("#submitContact").addEventListener("click", submitContact);
//   });
// });
