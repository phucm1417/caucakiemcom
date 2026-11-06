# Prompt và tài nguyên sảnh

Phong cách chung: 2D chibi anime, viền xanh xám rõ, cel shading pastel, ánh sáng ấm từ trên trái; nền kem, nước xanh ngọc, gỗ mật ong. Tham chiếu nhân vật nhẫn giả tóc bạc và tài nguyên hiện có.

- harbour_lobby_garden: bản đồ làng câu cá dọc góc nhìn chéo từ trên; không trời, không chữ, không nhân vật. Lối vào phủ cỏ phía trên, quảng trường tròn giữa, sàn gỗ và hồ xanh phía dưới; 65% nền trống để di chuyển, trang trí ở mép.
- harbour_crown_podium: bục vinh danh tròn đá kem, khảm xanh ngọc, vỏ sò vàng phía trước và vương miện nhỏ, mặt bục để trống; ảnh tách nền alpha thật. Bản đầu bị nền trắng; đã yêu cầu sửa alpha.
- harbour_wardrobe: tủ gỗ mở mái xanh, mũ câu cá và áo gấp bên trong, gương nhỏ, cần câu dựa bên cạnh; vật thể đơn tách nền alpha thật. Bản đầu bị nền trắng; đã yêu cầu sửa alpha.
- harbour_ninja_walk: tham chiếu fishing_ninja_no_line_anchor đã kiểm tra; nhẫn giả tóc bạc đi sang phải, hai chân luân phiên tiếp đất, đầu gối gập tự nhiên, vai chuyển động nhẹ, cần giữ ổn định; vòng lặp 16 khung yêu cầu.
- harbour_ninja_idle: cùng nhân vật đứng thở nhẹ, chân cố định, 12 khung yêu cầu. Runtime đọc số khung/FPS được trả về.

Các icon cảm xúc, mũ và khăn là glyph giao diện; skin, pet, cần, chân dung dùng ảnh có sẵn. Không tạo lại những ảnh từng bị từ chối.

## Bản vật thể alpha được chọn
Hai bản vật thể qua công cụ đầu vẫn RGB, không dùng trong game. Bản native PNG được chọn: exec-e30d4607-03ae-4fd2-88f6-f1be4b710cd4.png. Prompt: “Create one landscape 1536x1024 PNG with TRUE transparent alpha background. Two isolated assets each in its own half: LEFT empty round cream stone podium, teal mosaic shell crest and small golden crown finial; RIGHT open honey wood wardrobe kiosk, teal rounded roof, straw hat, folded clothes and rod. Preserve reference designs, crisp sage outlines, soft cel shading, warm upper-left light. No text or painted checkerboard.” Game dùng WebP alpha của cùng tấm, đọc từng nửa bằng source rectangle.

Biểu cảm và nút sảnh dùng các SVG trong icon-*.svg (vẽ bằng mã, không phải ảnh AI) để không phụ thuộc font emoji trên thiết bị.

Canvas raster hóa icon SVG thành PNG trong bộ nhớ một lần khi khởi động; không tải ảnh SVG bằng URL. Bản SVG gốc vẫn có trong gói tài nguyên.
