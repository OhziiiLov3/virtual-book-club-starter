const loadReviews = () => {
  fetch("reviews.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((reviews) => {
      const reviewsList = document.querySelector("#reviews-list");
      reviews.forEach(review =>{
        const reviewEl = createReviewElement(review);
        reviewsList.appendChild(reviewEl);
        });
    console.log(reviewsList);
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
    });
};

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

const handleReviewSubmit = (event) => {
  event.preventDefault();
   // Extract values from the form fields
   const bookTitle = document.getElementById("book-title").value;
   const reviewText = document.getElementById("review-text").value;
   const rating = document.getElementById("rating").value;

   
   // Create a new review object with a unique ID
   const newReview = {
    id: Date.now(), // Unique ID based on current timestamp
    title: bookTitle,
    reviewText: reviewText,
    rating: rating
  };

 // Create an HTML element for the new review
  const newReviewElement = createReviewElement(newReview);

  // Insert the new review element at the beginning of the reviews list
  const reviewsList = document.getElementById("reviews-list");
  const firstReview = reviewsList.firstChild;
  reviewsList.insertBefore(newReviewElement, firstReview);

  // Reset the form fields to clear the input after submission
  document.getElementById("book-title").value = "";
  document.getElementById("review-text").value = "";
  document.getElementById("rating").value = "1"; // Reset to default rating
  console.log("handleReveiwSubmit");
};

const createReviewElement = (review) => {
//   console.log("Create Review", review);
  const reviewElement = document.createElement('div');
  reviewElement.setAttribute('id','review-item');
   reviewElement.innerHTML = `
    <h3>${review.title}</h3>
    <p>${review.reviewText}</p>
    <p><strong>Rating:${review.rating}</strong></p>
    <button id="like-${review.id}" data-liked="false" onclick="toggleLike(${review.id})">Like</button>
    <button id="repost-${review.id}" onclick="repostReview(${review.id})">Repost</button>
   `;
   console.log(reviewElement);
   return reviewElement;
};



const toggleLike = (reviewId) =>{
console.log('Like Button clicked');
const likeButton = document.getElementById(`like-${reviewId}`);
  const liked = likeButton.getAttribute('data-liked') === 'true';
  likeButton.setAttribute('data-liked', !liked);
  console.log(`Review ${reviewId} like status: ${!liked}`);
};

const repostReview = () =>{
console.log('Repost button clicked');
};

// Load event listeners

document.addEventListener("DOMContentLoaded", () => {
  loadReviews();
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", handleReviewSubmit);
});
