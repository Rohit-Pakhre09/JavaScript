function qrcode() {
  let input = document.getElementById("input-text").value.trim();
  if (!input) return alert("Enter text or a URL!");

  document.getElementById("qr-code").innerHTML = "";

  new QRCode(document.getElementById("qr-code"), {
    text: input,
    width: 100,
    height: 100,
  });

  document
    .getElementById("input-text")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        qrcode();
      }
    });
}
