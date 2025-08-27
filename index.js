const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    alert("calling");
    console.log("clicked");

    const title = callBtn.parentNode.parentNode.children[2].innerText;
    const number = callBtn.parentNode.parentNode.children[3].innerText;

    // cantainer call
    const callHistory = document.getElementById("history-container");

    const newHistory = document.createElement("div");
    newHistory.innerHTML = ` <div class="call-history">
              <div class="bg-gray-100 rounded-[6px] p-2 mt-2 mb-2">
                <h1>${title}</h1>
                <p>${number}</p>
              </div>
            </div>`;
    // append
    callHistory.append(newHistory);
  });
}

// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});

// heart count
const headerHeart = document.getElementById("count");
const cardHearts = document.getElementsByClassName("icon");
for (const heart of cardHearts) {
  heart.addEventListener("click", function () {
    let count = headerHeart.innerText;
    count++;
    headerHeart.innerText = count;
  });
}
