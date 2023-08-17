function showSummary(index) {
    // Get the corresponding summary element based on the index
    const summaryElement = document.getElementById('summary-' + index);

    // Hide all summaries
    const summaries = document.querySelectorAll('.summary');
    summaries.forEach((summary) => {
        summary.style.display = 'none';
    });

    // Show the selected summary
    summaryElement.style.display = 'block';
}
const summaryLinks = document.querySelectorAll(".summary-link");

summaryLinks.forEach((link) => {
    link.addEventListener("click", function() {
        // Remove the 'active' class from all summary links
        summaryLinks.forEach((link) => {
            link.classList.remove("selected");
        });

        // Add the 'active' class to the clicked summary link
        link.classList.add("selected");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const arrowList = document.querySelectorAll(".arrow");
    const reviewContentList = document.querySelectorAll(".review-content");

    for (let i = 0; i < arrowList.length; i++) {
        arrowList[i].addEventListener("click", function() {
            if (reviewContentList[i].classList.contains("show-content")) {
                reviewContentList[i].classList.remove("show-content");
                arrowList[i].classList.remove("rotate");
            } else {
                reviewContentList[i].classList.add("show-content");
                arrowList[i].classList.add("rotate");
            }
        });
    }
});
