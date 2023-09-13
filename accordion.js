//first try for automatic accordion
        
        // const accordionElements = document.querySelectorAll('.accordion-button');
        // const accordionCollapseElements = document.querySelectorAll('.accordion-collapse');
        // console.log(accordionElements)
        //         let index = 0;

        //         function toggleClass() {
        //         // Remove the class from the previous element
        //             accordionElements[index - 1].classList.remove('collapsed');
        //             accordionCollapseElements[index - 1].classList.add('show');

        //              // Add the class to the current element
        //             accordionElements[index].classList.add('collapsed');
        //             accordionCollapseElements[index].classList.remove('show');

        //         }
        //  // Increment the index or reset it to 0 when it reaches the end
        //  index = (index + 1) % accordionElements.length;

        //         // Initially, set the class for the first element
        //         toggleClass();

        //         // Set an interval to toggle the class every 4 seconds
        //         const intervalId = setInterval(toggleClass, 3000);
// end of first try

        document.addEventListener("DOMContentLoaded", function () {
            const accordionItems = document.querySelectorAll(".accordion-item");
            let currentIndex = 0;
    
            function showNextAccordion() {
                console.log("current button")
                console.log(accordionItems[currentIndex].querySelector(".accordion-button"))
                accordionItems[currentIndex].querySelector(".accordion-button").click();
                currentIndex = (currentIndex + 1) % accordionItems.length;
                console.log("current index")
                console.log(currentIndex)
            }
    
            // Initially show the first accordion
            showNextAccordion();
    
            // Automatically switch to the next accordion every 4 seconds
            const intervalId = setInterval(showNextAccordion, 4000);
    
            });
    