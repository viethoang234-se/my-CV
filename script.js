// Thêm hiệu ứng cho thanh kỹ năng khi cuộn trang
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Hiển thị thanh kỹ năng với hiệu ứng
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }
    
    // Kích hoạt hiệu ứng khi trang được tải
    setTimeout(animateSkillBars, 500);
    
    // Thêm hiệu ứng hover cho các mục
    const items = document.querySelectorAll('.experience-item, .education-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('project-item')) {
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('project-item')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });

    // Thêm cursor pointer cho các link
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.cursor = 'pointer';
    });
});