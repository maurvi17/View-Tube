// var videoThumbnails = [
//   "I AM IN LOVE LYRICAL VIDEO | ONCE UPON A TIME IN MUMBAI | LYRICAL VIDEO ",
//   "Video 2",
//   "Video 3",
  
// ];

// function searchVideos() {
//   var searchTerm = document.getElementById("searchInput").value.toLowerCase();
//   var searchResults = [];

//   // Loop through videoThumbnails array to find matches
//   for (var i = 0; i < videoThumbnails.length; i++) {
//       if (videoThumbnails[i].toLowerCase().includes(searchTerm)) {
//           searchResults.push(videoThumbnails[i]);
//       }
//   }

//   // Display search results
//   displaySearchResults(searchResults);
// }

// function displaySearchResults(results) {
//   // Clear previous search results
//   var searchResultsContainer = document.getElementById("searchResults");
//   searchResultsContainer.innerHTML = "";

//   // Display new search results
//   results.forEach(function(result) {
//       var resultItem = document.createElement("div");
//       resultItem.textContent = result;
//       searchResultsContainer.appendChild(resultItem);
//   });
// }

function searchVideos() {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    const videoBlocks = document.getElementsByClassName("video-block");

    // Hide all video blocks initially

    for (let i = 0; i < videoBlocks.length; i++) {
        videoBlocks[i].style.display = "none";
    }

    // Show the video block containing the matching video, if any

    for (let i = 0; i < videoBlocks.length; i++) {
        const videoLink = videoBlocks[i].querySelector(".video-link");
        if (videoLink && videoLink.textContent.toLowerCase().includes(searchInput)) {
            videoBlocks[i].style.display = "block";
            break; 
            // Stop searching after finding the first matching video

        }
    }
}
// var 
// let 
// const 