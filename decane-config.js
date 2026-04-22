// =====================================================================
// CẤU HÌNH DECANE ECOSYSTEM - BAUTHINH
// Anh có thể chỉnh sửa màu sắc, giá, và tất cả các link tại file này
// thay vì phải tìm trong code HTML.
// =====================================================================

const DECANE_CONFIG = {
    // 1. CẤU HÌNH MÀU SẮC (Dùng mã HEX)
    colors: {
        primary: "#eab308",       // Màu Vàng Gold (sang trọng)
        primaryHover: "#ca8a04",  // Vàng đậm khi hover
        accent: "#22c55e",        // Màu Xanh Neon (nến tăng)
        bgDark: "#0f172a",        // Nền tối
        cardBg: "#1e293b",        // Nền card
        textMain: "#f8fafc"       // Màu chữ chính
    },

    // 2. CẤU HÌNH HỌC PHÍ (Page 1 đang viết 99, Page 2 đang viết 149, cấu hình ở đây sẽ đồng bộ toàn web)
    pricing: {
        amount: "149",
        currency: "USD" // Có thể đổi thành USDT, VNĐ...
    },

    // 3. CẤU HÌNH CÁC ĐƯỜNG LINK (Thay bằng link thật của team)
    links: {
        // Phễu Free
        teleFreeGroup: "https://t.me/your_free_group",
        
        // Link Sàn (Ref)
        mexcRef: "https://mexc.com/register?inviteCode=your_code",
        bingxRef: "https://bingx.com/invite/your_code",
        
        // Liên hệ Admin
        zaloAdmin: "https://zalo.me/your_number",
        teleAdmin: "https://t.me/your_admin_id",
        
        // Form tư vấn / Chạy Automation n8n
        registerForm: "https://forms.gle/your_form_link",
        
        // Internal Links
        page1: "bauthinh.html",
        page2: "bauthinhacademy.html"
    }
};

// =====================================================================
// SCRIPT ÁP DỤNG CẤU HÌNH VÀO TRANG HTML (KHÔNG CẦN SỬA PHẦN NÀY)
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Áp dụng biến CSS cho Màu sắc
    const root = document.documentElement;
    root.style.setProperty('--decane-primary', DECANE_CONFIG.colors.primary);
    root.style.setProperty('--decane-primary-hover', DECANE_CONFIG.colors.primaryHover);
    root.style.setProperty('--decane-accent', DECANE_CONFIG.colors.accent);
    root.style.setProperty('--decane-bg', DECANE_CONFIG.colors.bgDark);
    root.style.setProperty('--decane-card', DECANE_CONFIG.colors.cardBg);
    root.style.setProperty('--decane-text', DECANE_CONFIG.colors.textMain);

    // 2. Chèn tự động dữ liệu Text và Link vào HTML
    document.querySelectorAll('[data-config]').forEach(el => {
        const keyPath = el.getAttribute('data-config').split('.');
        let val = DECANE_CONFIG;
        keyPath.forEach(key => { if(val) val = val[key]; });
        
        if (val) {
            if (el.tagName === 'A') {
                el.href = val;
            } else {
                el.innerText = val;
            }
        }
    });

    // 3. Tự động hiển thị Giá + Loại Tiền tệ
    const priceText = `${DECANE_CONFIG.pricing.amount} ${DECANE_CONFIG.pricing.currency}`;
    document.querySelectorAll('.decane-price').forEach(el => el.innerText = priceText);
});
