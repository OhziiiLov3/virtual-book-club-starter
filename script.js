const loadReviews = () =>{
    console.log("Load Reviews");
    fetch('reviews.json')
    .then(res => {
        if(!res.ok){
         throw new Error('Network response was not ok')
        }
        console.log(res);
        return res.json();
    })
    .then(reviews =>{
        console.log(reviews)
    })
    .catch(error =>{
        console.error('Error fetching reviews:', error);
    })
}

// Define the loadReviews function using async/await
// const loadReviews = async () => {
//     console.log("Load Reviews");
//     try {
//         const res = await fetch('reviews.json');
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const reviews = await res.json();
//         console.log(reviews);
//         // Add logic to handle the fetched reviews data
//     } catch (error) {
//         console.error('Error fetching reviews:', error);
//     }
// }

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

