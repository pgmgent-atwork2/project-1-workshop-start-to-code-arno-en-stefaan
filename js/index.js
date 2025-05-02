document.querySelectorAll(".copy-btn").forEach(($btn) => {
  $btn.addEventListener("click", () => {
    const $code = $btn.nextElementSibling.querySelector("code");
    const text = $code.innerText;

    navigator.clipboard.writeText(text).then(() => {
      $btn.textContent = "Copied!";
      setTimeout(() => ($btn.textContent = "Copy"), 1500);
    });
  });
});
