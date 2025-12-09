const postBtn = document.getElementById("post-btn");
const postContainer = document.getElementById("post-container");

if (postBtn) {
  postBtn.addEventListener("click", () => {
    const name = document.getElementById("username").value.trim();
    const text = document.getElementById("post-text").value.trim();

    if (name && text) {
      const post = document.createElement("div");
      post.classList.add("post");
      post.innerHTML = `<h4>${name}</h4><p>${text}</p>`;
      postContainer.prepend(post);
      document.getElementById("username").value = "";
      document.getElementById("post-text").value = "";
    } else {
      alert("Please enter your name and a post!");
    }
  });
}
