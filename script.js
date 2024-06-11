const loadReviews = () =>{
    console.log("Load Reviews");
}



const handleReviewSubmit = (event) =>{
    event.preventDefault()
    console.log("handleReveiwSubmit");
}




// Load event listeners

document.addEventListener("DOMContentLoaded", ()=>{
    loadReviews();
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener("submit", handleReviewSubmit )
})

