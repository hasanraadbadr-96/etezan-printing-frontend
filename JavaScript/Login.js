const btn = document.getElementById("myBtn");
const lion = document.getElementById("myLion");

// عند دخول الماوس على الزر، يكبر الأسد بنفس القيمة المحددة بالـ CSS مالتك (2.1)
btn.addEventListener("mouseenter", () => {
  lion.style.transform = "scale(2.1)";
});

// عند خروج الماوس من الزر، يرجع الأسد لحجمه الطبيعي
btn.addEventListener("mouseleave", () => {
  lion.style.transform = "none";
});
