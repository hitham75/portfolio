document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // منع الرابط من إعادة تحميل الصفحة

            // 1. إزالة كلاس active من أزرار القائمة كلها
            menuItems.forEach(nav => nav.classList.remove('active'));
            
            // 2. إضافة كلاس active للزر الذي ضغطت عليه ليتحول للون البنفسجي
            item.classList.add('active');

            // 3. إخفاء كل صفحات الأقسام
            tabContents.forEach(content => content.classList.remove('active'));

            // 4. إظهار القسم المرتبط بالزر الذي ضغطت عليه
            const targetTabId = item.getAttribute('data-tab');
            const targetTab = document.getElementById(targetTabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
});