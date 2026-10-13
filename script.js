```javascript
// Показываем текущий год внизу сайта
const footer = document.querySelector("footer");

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} КрымКлимат. Все права защищены.`;
}

// Плавная прокрутка при нажатии на ссылки меню
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

console.log("КрымКлимат: JavaScript подключён!");
```