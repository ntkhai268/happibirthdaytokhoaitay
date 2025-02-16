(function($){
    $.fn.timeline = function(){
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );

        var itemLength = selectors.item.length;
        var lastScrollTop = 0;

        function updateBackground(pos) {
            var max, min;
            selectors.item.each(function(i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                if (pos <= max - 40 && pos >= min) {
                    if (!$(this).hasClass(selectors.activeClass)) {
                        selectors.item.removeClass(selectors.activeClass);
                        $(this).addClass(selectors.activeClass);
                        selectors.id.css(
                            "background-image",
                            "url(" + $(this).find(selectors.img).attr("src") + ")"
                        );
                    }
                    return false; // Break the loop
                }
            });
        }

        $(window).on('scroll', function() {
            var pos = $(this).scrollTop();
            if (Math.abs(lastScrollTop - pos) <= 5) return; // Throttle scroll events.
            window.requestAnimationFrame(function() {
                updateBackground(pos);
            });
            lastScrollTop = pos;
        });
    };
})(jQuery);

$("#timeline-1").timeline();

// Khởi tạo ngày bắt đầu (ví dụ: ngày 1 tháng 1 năm 2020)
const startDate = new Date('2024-11-28T00:00:00');

// Hàm cập nhật thời gian trôi qua
function updateElapsedTime() {
    const now = new Date();
    const elapsedTime = now - startDate;

    // Tính toán ngày, giờ, phút, giây
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Định dạng chuỗi hiển thị
    const formattedTime = `${days}d ${hours % 24}h ${minutes % 60}m  ${seconds % 60}s`;
    document.getElementById('time-elapsed').innerText = formattedTime;
}

// Cập nhật thời gian mỗi giây
setInterval(updateElapsedTime, 1000);


