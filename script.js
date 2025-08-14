// script.js
// Thẻ <script> nên gắn cuối thẻ <body>, để các đối tượng được load hết vào DOM trước tiên

function watch() {
  alert(
    "Phim thì không xem được rồi!\nNhưng nếu bạn có lòng thì hãy đô nết cho tôi! Link đô nết ở cuối trang web, ❤️❤️❤️😍😍😍"
  );
}

const cards = document.querySelectorAll(".trends__card");

if (cards) {
  cards.forEach((card) => {
    card.addEventListener("click", watch);
    console.log("Adding click event to cards successfully");
  });
}
else {
  console.log("No cards");
}
