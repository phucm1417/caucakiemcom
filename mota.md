# THIẾT KẾ MỞ RỘNG GAME CÂU CÁ MÀN HÌNH DỌC (VERTICAL MOBILE GDD FULL SPEC)
## 0. QUY CHUẨN TỶ LỆ KÍCH THƯỚC TRÊN MÀN HÌNH DỌC (MOBILE 9:16 - 1080x1920)

Toàn bộ sinh vật, nhân vật, UI và trang bị được thiết kế chuẩn hóa theo **% Width (Chiều rộng)** và **% Height (Chiều cao)** của màn hình mobile chuẩn (9:16):
* **Vùng HUD / Trạng thái trên:** 0% – 12% Height.
* **Vùng Background (Bầu trời, Đồi núi xa):** 12% – 50% Height.
* **Vùng Mặt nước & Thuyền câu:** 50% – 60% Height (Mặt nước nằm tại mốc 55% Height).
* **Vùng Lòng nước sâu (Underwater):** 60% – 90% Height.
* **Vùng UI Thao tác / Kỹ năng dưới:** 90% – 100% Height.

---
## I. HỆ THỐNG 100 LOÀI CÁ MỚI & BẢNG BOSS KHỔNG LỒ (CÓ KÍCH THƯỚC CHI TIẾT)
### 1. Bảng 20 BOSS Khổng Lồ (Kích Thước Khung Visual & Hiệu Ứng)

> **Quy chuẩn Boss:** Chiếm từ **30% - 55% Width** và **35% - 65% Height** để tạo cảm giác đồ sộ nhưng không đè lên UI dưới cùng (90% Height).
| STT | Tên Boss | Kích Thước Hiển Thị Màn Hình (Width x Height) | Mô Tả Visual & Dáng Bơi | Hiệu Ứng Xung Quanh (Aura / Ambient VFX) | Hiệu Ứng Phase Cuồng Nộ (Rage VFX) |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1 | **Thủy Quái Cổ Đại Leviathan** | **45% W x 60% H** (~486x1152 px) | Rắn biển khổng lồ vảy xám đen như đá núi lửa, bơi hình chữ S dọc từ lòng nước lên. | Vòng xoáy nước đen bao quanh thân, luồng sóng âm cyan định kỳ. | Mắt bốc lửa đỏ, bão lốc xoáy nước hút bọt khí đỏ xung quanh. |
| 2 | **Cá Trắm Đen Vạn Năm** | **40% W x 35% H** (~432x672 px) | Thân mập thù lù, vảy đen tuyền viền vàng đồng thau, râu quấn quanh mạn thuyền. | Hào quang kim loại màu đồng tỏa nhẹ, sương mù xám đục tích tụ quanh bụng. | Lớp vảy phát sáng chói lọi, bắn ra các mảnh vụn gai kim loại xoay tròn. |
| 3 | **Cá Sấu Đầm Lầy Bổn Nguyên** | **50% W x 40% H** (~540x768 px) | Mõm gai góc mở rộng lộ hàng răng cưa, da cá sấu kết hợp mai rùa cổ đại xù xì. | Bọt khí độc màu xanh lá mạ nổi lên sủi bọt liên tục xung quanh da. | Chuyển hiệu ứng dung nham nứt nẻ, tỏa khí nóng màu cam làm nước sôi ục ục. |
| 4 | **Bạch Độc San Hơ Kraken** | **55% W x 50% H** (~594x960 px) | Bạch tuộc khổng lồ màu trắng sữa đốm hồng, 8 vòi quét ngang kín nửa dưới màn hình. | Tia mực màu tím thẫm hòa tan tạo hiệu ứng mờ ảo xung quanh xúc giác. | Xúc giác phát sáng tím neon dạ quang, mực đen cuồn cuộn che 80% tầm nhìn. |
| 5 | **Băng Hải Long Vương** | **35% W x 65% H** (~378x1248 px) | Long ngư dạng dải lụa băng, toàn thân băng tuyết xanh lam, sừng rồng nhọn hoắt. | Tinh thể tuyết 6 cánh lơ lửng rơi chậm và quấn quanh thân cá dạng xoắn ốc. | Nước đóng băng thành các mảng băng trôi xung quanh, tia điện băng nhấp nháy. |
| 6 | **Cá Voi Thần Tinh Tú** | **50% W x 45% H** (~540x864 px) | Cá voi lưng gù màu xanh thẫm, lưng mang dải ngân hà với hàng ngàn ngôi sao. | Hạt bụi sao lấp lánh màu vàng và tím rớt xuống theo đường bơi. | Vòng tròn chòm sao ma thuật thu nhỏ quay quanh đỉnh đầu. |
| 7 | **Đại Ngạc Nướng Hỏa Ngục** | **45% W x 40% H** (~486x768 px) | Cá sấu hỏa ngục da màu than hồng nứt nẻ, đuôi có ngọn lửa cháy rực dưới nước. | Dải bọt lửa nổ tí tách và vệt khói đen cuộn phía sau đuôi. | Toàn thân rực cháy màu đỏ cam, bão lửa dưới nước xoay tròn quanh tâm phao. |
| 8 | **Rùa Thần Ngạn Cổ** | **50% W x 35% H** (~540x672 px) | Mai rùa to như hòn đảo, trên lưng mọc cây cổ thụ và đá rêu xanh phong hóa. | Sương mù cổ kính màu xanh rêu nhẹ nhàng che phủ viền mai rùa. | Cây trên mai phát sáng xanh lá, hoa văn cổ đại tỏa dải năng lượng xanh. |
| 9 | **Cá Mập Cơ Khí Titan** | **40% W x 50% H** (~432x960 px) | Cá mập bọc giáp titan xám nhám, mắt kính LED xanh lá, vây lưng là lưỡi cưa xoay. | Sóng laser hồng quét từ mắt xuống đáy nước, bọt khí áp lực cao phun ra từ mang. | Lưỡi cưa phát tia lửa điện rực rỡ, sóng âm High-tech xanh neon tỏa dạt hai bên. |
| 10 | **Vương Huyết Chép Rồng** | **35% W x 45% H** (~378x864 px) | Cá Chép hóa Rồng vảy vàng pha đỏ rực, hai râu rồng dài kéo dọc màn hình. | Vòng hào quang hoàng gia vàng 24K tỏa từ đầu, dải lụa đỏ uốn lượn quanh thân. | Triệu hồi các linh hồn cá chép vàng nhỏ bơi xoay quanh thân như vệ sĩ. |
| 11 | **Bóng Ma Hải Thần Levi-Ghost** | **40% W x 55% H** (~432x1056 px) | Dáng cá bán trong suốt màu xanh ma mị, lộ khung xương phát sáng bên trong. | Làn sương ma màu xanh da trời trôi bồng bềnh xung quanh. | Toàn thân biến đổi ẩn hiện liên tục, phát ra các bóng ma nhỏ vung vãi trên nước. |
| 12 | **Cá Đuối Bão Sét Thor** | **55% W x 35% H** (~594x672 px) | Cá đuối khổng lồ dạng đĩa tròn, da màu tím thẫm, viền vây phát ra điện cao thế. | Tia sét tím/cyan giật tạch tạch liên tục nối từ đuôi đến viền vây. | Bão sét dưới nước bùng nổ, xuất hiện vòng điện trường lan rộng xung quanh. |
| 13 | **Thần Ngư Kim Cương Vô Cực** | **35% W x 40% H** (~378x768 px) | Cá hình thoi đúc từ kim cương nhiều góc cạnh, phản chiếu ánh sáng đa sắc. | Các chùm sáng nhiều màu chiếu xuyên qua thân cá ra xung quanh. | Thân phát sáng chói lọi làm mờ màn hình, bắn ra các tinh thể kim loại nhỏ. |
| 14 | **Cá Lóc Đột Biến Toxic Max** | **40% W x 45% H** (~432x864 px) | Thân dài nhầy nhụa màu xanh chuối dạ quang, trên da nổi mụn nước bọt độc. | Bọt nước độc màu vàng xanh vỡ ra liên tục xung quanh thân cá. | Vùng nước chuyển thành màu xanh lá thẫm, làn khói độc bốc lên mạn thuyền. |
| 15 | **Bá Vương Hải Quái Kraken-Voi** | **50% W x 50% H** (~540x960 px) | Đầu cá voi kết hợp 6 vòi bạch tuộc gai, mắt đỏ rực sắc lẹm. | Luồng lốc xoáy nước sâu kéo toàn bộ rong rêu bám quanh thân. | Mực đỏ bắn ra xung quanh, 6 vòi bạch tuộc đập nước tạo sóng cuộn trào hai bên. |
| 16 | **Thái Cực Âm Dương Ngư** | **40% W x 40% H** (~432x768 px) | Hai con cá chép đen và trắng khổng lồ quấn lấy nhau thành đĩa Âm Dương tròn. | Trận đồ Bát Quái bằng ánh sáng sáng rỡ quay chậm ngay dưới chân đôi cá. | Trận đồ quay nhanh gấp 3 lần, phát ra luồng khí đen-trắng cuộn trào dạt hai bên. |
| 17 | **Chiến Thần Cá Chiết Giang** | **35% W x 45% H** (~378x864 px) | Thân dẹp mang giáp đồng cổ đại, khoác vạt vải đỏ rách rưới ở phần đuôi. | Dải khí chiến đấu màu cam rực rỡ bọc lấy thân cá. | Khí chiến đấu bộc phát thành ngọn lửa vàng thẫm, xuất hiện các bóng kiếm mờ. |
| 18 | **Cá Đầm Lầy Hư Không** | **45% W x 50% H** (~486x960 px) | Khối chất lỏng đen bóng mắt phát sáng tím, dạng biến hình không cố định. | Hố đen vũ trụ thu nhỏ hút bọt khí vào bụng cá. | Vùng không gian xung quanh bị bóp méo, phát ra các dải sóng tím. |
| 19 | **Phượng Hoàng Thủy Ngư** | **40% W x 55% H** (~432x1056 px) | Thân cá mang cặp cánh lụa nước màu đỏ cam rộng mở như chim Phượng Hoàng. | Hạt lửa lỏng lấp lánh rơi ra theo từng nhịp quạt cánh dưới nước. | Cánh mở rộng tối đa chiếm 60% màn hình, bão lửa lỏng phun trào xung quanh. |
| 20 | **Cửu Đầu Thủy Xà Hydra** | **50% W x 60% H** (~540x1152 px) | Thân mình rắn biển mang 9 chiếc đầu rồng nhỏ ngoằn ngoèo vung vẩy. | 9 luồng khí độc 9 màu khác nhau phun ra li ti từ 9 chiếc miệng. | Cả 9 đầu cùng gầm gừ, xung quanh bộc phát bão bọt khí nổ tung tóe. |
### 2. Danh Sách 80 Loài Cá Thường Mới (Kích Thước Standard: 5% - 15% Width)

> **Quy chuẩn Cá thường:**
> * **Cá Nhỏ (Chibi/Phổ thông):** 5% - 7% Width (54px - 75px).
> * **Cá Vừa (Bình thường/Hiếm):** 8% - 11% Width (86px - 118px).
> * **Cá Lớn (Huyền thoại):** 12% - 15% Width (129px - 162px).
#### A. Vùng Nước Ngọt & Sông Hồ (1–25 Old + 26–45 New)
 1. **Cá Mè Hoa Khổng Lồ**: 1.5m | 14% W x 8% H | Vảy xám bạc đốm hoa đen. *VFX*: +5% EXP.
 2. **Cá Trắm Đen Vảy Sắt**: 1.4m | 13% W x 7% H | Vảy đen giáp sắt, mắt vàng đồng. *VFX*: Giảm 10% hao mòn cần.
 3. **Cá Lóc Bông Đột Biến**: 1.2m | 12% W x 6% H | Da đỏ cam dạ quang. *VFX*: +15% Lực kéo (10s).
 4. **Cá Chép Vàng May Mắn**: 0.9m | 10% W x 6% H | Vảy vàng 24K ánh hạt kim tuyến. *VFX*: +50% Vàng.
 5. **Cá Diếc Thạch Anh**: 0.5m | 7% W x 4% H | Thân tím trong suốt. *VFX*: Hồi 10 thể lực.
 6. **Cá Bống Tượng Sấm Sét**: 0.8m | 9% W x 5% H | Thân xám, vạch điện cyan nhấp nháy. *VFX*: Tê liệt cá xung quanh.
 7. **Cá Lăng Nha Gai**: 1.1m | 11% W x 6% H | Da nâu, gai lưng đỏ dính độc. *VFX*: Gây chảy máu (-2 HP/s).
 8. **Cá Chiết Giang Ngũ Sắc**: 0.4m | 6% W x 4% H | Thân dẹp 5 dải màu. *VFX*: +5% Tốc độ câu.
 9. **Rùa Cổ Đại Khổng Lồ**: 1.6m | 15% W x 10% H | Mai đá rêu phong hóa. *VFX*: +5 Chịu đựng dây.
10. **Cá Lôi Băng**: 0.7m | 8% W x 5% H | Vảy trắng tinh thể băng xanh. *VFX*: Đóng băng đếm ngược 5s.
11. **Cá Trèn Bầu Rạng Rỡ**: 0.6m | 7% W x 4% H | Bụng trong chứa dịch vàng sáng. *VFX*: +10% Cắn câu ban đêm.
12. **Cá Hồi Cầu Vồng Vàng**: 1.0m | 11% W x 5% H | Vảy vàng dải cầu vồng. *VFX*: x2 EXP (5 phút).
13. **Cá Hải Tượng Bão Tố**: 3.0m | 15% W x 8% H | Vảy xám đá, mắt xoáy thiên hà. *VFX*: +20% Cá hiếm xuất hiện.
14. **Cá Tra Bào Ngư**: 1.1m | 11% W x 6% H | Da hồng viền nếp bào ngư. *VFX*: Làm mồi câu siêu cấp.
15. **Rái Cá Luyện Kim**: 0.8m | 9% W x 7% H | Bộ lông đồng thau cầm viên quặng. *VFX*: 10% Nhặt nguyên liệu.
16. **Cá Căng Ngũ Sắc**: 0.5m | 7% W x 4% H | Sọc ánh kim đổi màu. *VFX*: +2% Chí mạng.
17. **Cá Thần Đáy Hồ**: 2.0m | 14% W x 8% H | Cá Koi trắng hoa văn đỏ cổ đại. *VFX*: Hồi full thể lực.
18. **Cá Tai Kính San Hơ**: 0.4m | 6% W x 4% H | Thân tròn dẹp hoàn toàn trong suốt. *VFX*: Nhìn rõ độ nặng cá.
19. **Cá Chuối Đỏ Toxic**: 0.9m | 9% W x 5% H | Da đỏ bọc bọt chất nhờn xanh lá. *VFX*: Giảm 10% tốc độ kéo.
20. **Cá Sấu Bò Nước Ngọt**: 1.3m | 12% W x 6% H | Thân nhỏ da gai rêu thẫm. *VFX*: Kích hoạt QTE x3 tiền.
21. **Cá Chim Trắng Mắt Đỏ**: 0.6m | 7% W x 5% H | Thân đĩa màu bạc, mắt đỏ ruby. *VFX*: +15% Tốc độ cắn mồi.
22. **Cá Thỏ Hồ Núi**: 0.5m | 6% W x 4% H | Viền vây dài như tai thỏ. *VFX*: Bán x1.2 giá vào mùa xuân.
23. **Cá Hè Đáy Đá**: 0.7m | 8% W x 5% H | Màu nâu gạch ngụy trang đá. *VFX*: Giảm 5% tỉ lệ đứt dây.
24. **Cá Rồng Huyết Kim**: 1.2m | 12% W x 6% H | Vảy vàng bọc viền đỏ, râu dài. *VFX*: +1% Tiền bán cá vĩnh viễn.
25. **Cá Anh Vũ Hoàng Gia**: 0.8m | 9% W x 5% H | Môi loe hồng ngọc, vảy vàng. *VFX*: Danh hiệu Hoàng Gia.
26. **Cá Bống Cát Hoa**: 0.5kg | 5% W x 3% H | Thân nhỏ nâu sỏi. *VFX*: +2% May Mắn mồi.
27. **Cá Mè Vượn Tuyết**: 2.1kg | 8% W x 5% H | Vảy trắng muốt. *VFX*: Hồi 3 thể lực.
28. **Cá Trắm Cỏ Bạch Tạng**: 3.5kg | 10% W x 6% H | Thân hồng nhạt, mắt đỏ. *VFX*: +5% Vàng.
29. **Cá Lóc Hoàng Đế**: 4.8kg | 11% W x 6% H | Vảy hoa văn hoàng gia. *VFX*: +10% EXP.
30. **Cá Sặc Gấm Neon**: 0.8kg | 6% W x 4% H | Sọc hồng dạ quang. *VFX*: +3% Tốc độ cuộn.
31. **Cá Chép Thạch Anh Đỏ**: 3.2kg | 9% W x 5% H | Thân đỏ trong suốt như Ruby. *VFX*: Hồi 8 thể lực.
32. **Cá Rô Đồng Gai Sắt**: 1.2kg | 7% W x 4% H | Gai lưng cứng cáp. *VFX*: Giảm 3% hao mòn cần.
33. **Cá Nheo Mắt Mù**: 5.0kg | 11% W x 6% H | Da nhẵn xám tối, râu dài. *VFX*: +5% Tỉ lệ cá đêm.
34. **Cá Chiên Sông Lô**: 6.5kg | 12% W x 7% H | Đầu bẹt vàng đốm nâu. *VFX*: +12% Tiền bán.
35. **Cá Chạch Lửa Electric**: 1.5kg | 8% W x 4% H | Thân thuôn, viền đỏ phát điện. *VFX*: Làm chậm cá lân cận.
36. **Cá Hồi Ngũ Sắc Nhỏ**: 2.0kg | 9% W x 5% H | Vảy lấp lánh dải quang phổ. *VFX*: +5% EXP.
37. **Cá Tai Kính Tím**: 0.9kg | 6% W x 4% H | Thân tím trong suốt. *VFX*: Nhìn rõ độ nặng cá tiếp theo.
38. **Cá Tra Lam Dạ Quang**: 4.2kg | 10% W x 6% H | Da phát ánh sáng xanh lam. *VFX*: +10% May Mắn.
39. **Cá Ngát Độc Nước Ngọt**: 2.8kg | 9% W x 5% H | Gai mang dính độc xanh. *VFX*: Tê nhẹ cá lân cận.
40. **Cá Chuối Hoa Sen**: 3.0kg | 9% W x 5% H | Da hoa văn cánh sen hồng. *VFX*: +8% Vàng.
41. **Cá Bào Ngư Vàng**: 1.8kg | 8% W x 5% H | Vảy óng ánh ngọc trai vàng. *VFX*: +15% Vàng.
42. **Cá Căng Sọc Bạc**: 1.1kg | 7% W x 4% H | Sọc bạc dọc thân dẹp. *VFX*: +2% Chí mạng.
43. **Cá Ngựa Sông Núi**: 0.6kg | 5% W x 6% H | Dáng đứng bơi màu vàng cam. *VFX*: Tốc độ thuyền +5%.
44. **Cá Bè Trang Kim**: 4.0kg | 10% W x 6% H | Vảy to như lá kim loại bạc. *VFX*: Giảm 5% đứt dây.
45. **Cá Hè Bể Sỏi**: 2.2kg | 8% W x 5% H | Màu xám sỏi ngụy trang. *VFX*: +3% EXP.
#### B. Vùng Biển Cạn & Rạn San Hơ (46–65)
46. **Cá Thần Tiên Ba Sọc**: 1.0kg | 6% W x 5% H | Dáng đĩa, sọc đen vàng. *VFX*: +4% Vàng.
47. **Cá Hề Cam Huỳnh Quang**: 0.4kg | 5% W x 3% H | Cam sáng đốm trắng. *VFX*: Dụ cá nhỏ khác.
48. **Cá Bím Biển Ngọc Bích**: 2.5kg | 8% W x 5% H | Vảy xanh ngọc bích. *VFX*: +6% EXP.
49. **Cá Bướm Hoàng Hậu**: 1.6kg | 7% W x 5% H | Vây lưng xòe vàng tím. *VFX*: +8% Tiền bán.
50. **Cá Muống Biển Lam**: 3.1kg | 9% W x 4% H | Thân dài xanh da trời. *VFX*: +4% Tốc độ cuộn.
51. **Cá Mú Bông San Hơ**: 5.5kg | 11% W x 7% H | Đốm xanh đỏ phủ mình. *VFX*: Hồi 12 thể lực.
52. **Cá Nhồng Bạc Siêu Tốc**: 4.0kg | 10% W x 4% H | Thân như mũi tên mạ bạc. *VFX*: +10% Lực kéo.
53. **Cá Chuồn Cánh Lụa**: 1.3kg | 7% W x 5% H | Vây như cánh bướm mỏng. *VFX*: +5% Hoàn hảo.
54. **Cá Nóca Đốm Gai**: 2.0kg | 7% W x 6% H | Phình tròn gai nhọn khi kéo. *VFX*: Giảm 4% lực kéo.
55. **Cá Dòm Đáy Đại Dương**: 3.8kg | 9% W x 6% H | Mắt to tròn phát sáng vàng. *VFX*: Mở rộng tầm nhìn đáy.
56. **Cá Kín Mắt Biển Cạn**: 1.7kg | 7% W x 4% H | Thân mỏng dẹt màu cát. *VFX*: +3% Vàng.
57. **Cá Song Đỏ Hồng Ngọc**: 6.0kg | 12% W x 7% H | Da đỏ tươi đốm ngọc trai. *VFX*: +25% Vàng, +20% EXP.
58. **Cá Bảng Hồn Biển**: 2.9kg | 8% W x 5% H | Vảy óng ánh tím mờ. *VFX*: +7% EXP.
59. **Cá Dầm Vươn Vây**: 3.4kg | 9% W x 6% H | Vây lưng dài vàng chanh. *VFX*: +5% Tốc độ giật.
60. **Cá Đuối Gai Hoa**: 7.2kg | 12% W x 8% H | Dáng đĩa đốm trắng. *VFX*: Tê cá lân cận 3s.
61. **Cá Hề Đen Bão Tố**: 0.7kg | 5% W x 4% H | Đen tuyền sọc trắng neon. *VFX*: +10% May mắn bão.
62. **Cá Thỏ Biển Lam**: 1.2kg | 6% W x 4% H | Vây tai thỏ mềm mại. *VFX*: +5% Vàng.
63. **Cá Chim Đen Đại Dương**: 4.5kg | 10% W x 6% H | Vảy tròn xám đen metal. *VFX*: Giảm 5% hao thuyền.
64. **Cá Bánh Kẹp San Hơ**: 1.9kg | 7% W x 5% H | Dáng hình dẹp vuông. *VFX*: +4% EXP.
65. **Cá Mù Màu Biển**: 2.3kg | 8% W x 5% H | Biến đổi màu da ngụy trang. *VFX*: +6% May Mắn.
#### C. Vùng Biển Sâu & Vực Hư Không (66–85)
66. **Cá Lồng Đèn Đáy Biển**: 3.0kg | 9% W x 6% H | Đèn phát sáng trước đầu. *VFX*: Thắp sáng vùng tối.
67. **Cá Rồng Vực Sâu**: 8.5kg | 13% W x 7% H | Răng nanh dài, da đen tuyền. *VFX*: +30% Tiền bán.
68. **Cá Thằn Lằn Biển Thạch Anh**: 5.0kg | 11% W x 6% H | Gai lưng tinh thể tím. *VFX*: Hồi 15 thể lực.
69. **Cá Mập Cừu Cổ Đại**: 12.0kg | 14% W x 8% H | Mang xếp nếp cổ đại. *VFX*: +20% Lực kéo.
70. **Cá Thủy Tinh Vực Hẫng**: 2.2kg | 8% W x 4% H | Trong suốt, mắt đỏ rực. *VFX*: Tránh rác cắn mồi.
71. **Cá Ruy Băng Bạc**: 4.1kg | 10% W x 4% H | Thân dài kéo như dải lụa. *VFX*: +8% EXP.
72. **Cá Răng Kiếm Sâu**: 6.8kg | 12% W x 6% H | Hàm răng nhô ra ngoài. *VFX*: +15% Vàng.
73. **Cá Đĩa Vũ Trụ**: 3.3kg | 8% W x 7% H | Thân tròn đốm sao tím. *VFX*: +7% Tốc độ giật.
74. **Cá Rùa Bọc Giáp**: 9.0kg | 12% W x 8% H | Mai sắt xám nhám. *VFX*: Vĩnh viễn +2 chịu căng dây.
75. **Cá Khổng Tước Biển Sâu**: 4.7kg | 10% W x 7% H | Đuôi xòe rực rỡ dải ngân hà. *VFX*: +12% May Mắn.
76. **Cá Mập Đèn Dạ Quang**: 11.5kg | 14% W x 8% H | Vệt dạ quang xanh chạy quanh bụng. *VFX*: +25% EXP.
77. **Cá Bống Biển Sâu**: 1.5kg | 6% W x 4% H | Mắt lồi to ngơ ngác. *VFX*: +3% Vàng.
78. **Cá Mặt Quỷ Gai Gai**: 7.0kg | 12% W x 7% H | Da xù xì bám đầy độc tố. *VFX*: Rút 3% máu cá khác.
79. **Cá Lưỡi Thềm Biển**: 3.6kg | 9% W x 5% H | Thân dẹp màu nâu xám. *VFX*: +5% EXP.
80. **Cá Vảy Thép Đáy Vực**: 10.0kg | 13% W x 8% H | Vảy thép cực kỳ cứng cáp. *VFX*: Kháng đứt dây 10s.
81. **Cá Lươn Điện Tím**: 5.2kg | 10% W x 5% H | Thân dài phóng điện tím. *VFX*: Choáng cá xung quanh 4s.
82. **Cá Mực Ống Tinh Hà**: 2.8kg | 8% W x 6% H | Thân trong chứa màu tinh tú. *VFX*: +9% Tiền bán.
83. **Cá Chim Sâu Mắt Đỏ**: 4.0kg | 9% W x 6% H | Thân đen bóng mắt hồng ngọc. *VFX*: +6% May Mắn.
84. **Cá Sứa Bạc Dạ Quang**: 1.1kg | 6% W x 6% H | Dáng dù phát sáng bạc. *VFX*: Hồi 5 thể lực.
85. **Cá Ngừ Biển Sâu Titan**: 14.0kg | 15% W x 8% H | Thân hình thoi cực lớn. *VFX*: +35% Vàng.
#### D. Vùng Nước Kỳ Bí & Dung Nham / Băng Giá (86–100)
86. **Cá Băng Tinh Thủy Chi**: 2.4kg | 8% W x 5% H | Thân bằng khối băng trong suốt. *VFX*: Khóa đếm ngược 3s.
87. **Cá Dung Nham Nứt Nẻ**: 5.8kg | 11% W x 6% H | Da đá magma chảy vệt đỏ. *VFX*: Miễn nhiễm nóng.
88. **Cá Hỏa Phụng Vảy Đỏ**: 4.3kg | 9% W x 6% H | Vây xòe như ngọn lửa cháy. *VFX*: +10% EXP.
89. **Cá Tuyết Sơn Ngọc Bích**: 3.7kg | 9% W x 5% H | Xanh mạ trên da tuyết trắng. *VFX*: +8% Tiền bán.
90. **Cá Tinh Ma Hư Không**: 6.0kg | 11% W x 7% H | Dáng sương tím biến ảo. *VFX*: x2 Tiền thưởng.
91. **Cá Sấm Sét Núi Lửa**: 7.5kg | 12% W x 7% H | Phun tia điện vàng từ da lava. *VFX*: Choáng cá 5s.
92. **Cá Linh Hồn Hoa Đào**: 1.8kg | 7% W x 5% H | Vảy xếp như cánh hoa đào. *VFX*: Hồi 10 thể lực.
93. **Cá Rồng Dung Nham Mini**: 8.0kg | 13% W x 7% H | Đầu rồng vảy lửa cuồn cuộn. *VFX*: +30% EXP.
94. **Cá Băng Cửu Âm**: 4.9kg | 10% W x 6% H | Tỏa hơi lạnh ngưng đọng giọt nước. *VFX*: +12% May Mắn.
95. **Cá Quỷ Hỏa Ngục**: 6.6kg | 11% W x 7% H | Răng sừng quỷ da xám cháy. *VFX*: Rút 4% HP Boss.
96. **Cá Thạch Anh Vàng Nước Nóng**: 3.1kg | 8% W x 5% H | Thân vàng óng ấm áp. *VFX*: +7% Vàng.
97. **Cá Bão Tuyết Bạc**: 5.0kg | 10% W x 6% H | Vảy lấp lánh như bão tuyết. *VFX*: Tốc độ kéo +15%.
98. **Cá Mập Magma Khung**: 13.0kg | 14% W x 8% H | Vảy đá cháy bừng bực hung dữ. *VFX*: +40% Vàng.
99. **Cá Tiên Tinh Tú Băng**: 2.9kg | 8% W x 6% H | Vây lụa xanh băng đốm sao. *VFX*: Hồi full thể lực.
100. **Cá Hoàng Kim Cổ Tích**: 10.0kg | 13% W x 8% H | Vàng 24K tỏa hào quang thần thoại. *VFX*: +50% Vàng & EXP.
---
## II. HỆ THỐNG 50 NHÂN VẬT, KÍCH THƯỚC ICON & VFX CHIÊU CUỐI

> **Quy chuẩn Nhân vật & Icon Kỹ năng:**
> * **Nhân vật trên thuyền:** **18% - 25% Width** x **15% - 22% Height** (Vùng 50% - 60% Height).
> * **Icon Chiêu Cuối (UI HUD):** Kích thước cố định **72x72 px** hoặc **80x80 px** (Vị trí UI đáy màn hình 92% Height).
> * **VFX Kỹ năng phủ nước:** Rộng **40% - 90% Width** nằm gọn trong vùng lòng nước (55% - 90% Height).
### Bảng Kỹ Năng Chiêu Cuối & Kích Thước Visual (1–50)
| STT | Tên Nhân Vật | Nguồn Cảm Hứng | Visual Chiêu Cuối & Vùng Phủ VFX trên Màn Hình | Biểu Tượng Kỹ Năng HUD (72x72 px) | Hiệu Ứng Gameplay |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1 | **Tôn Thần Nhẫn Giả** | Anime / Naruto | Đĩa xoáy Rasengan cyan rộng **35% W** xoay tại phao câu. | Quả cầu khí Cyan cuộn xoáy tròn. | Choáng cá 15m trong 6s (CD: 45s). |
| 2 | **Tài Ba Khai Sáng** | Anime / Dragon Ball | Luồng Kamehameha vàng rộng **20% W x 40% H** từ bờ bắn thẳng xuống đáy. | Sóng chưởng năng lượng vàng rực chói. | Kéo thẳng cá lên bờ lập tức (CD: 60s). |
| 3 | **Hải Vương Mũ Rơm** | Anime / One Piece | Bàn tay co giãn khổng lồ **30% W x 30% H** chộp xuống nước. | Đấm đỏ khổng lồ kèm vệt rạn nứt. | Kéo ngay bỏ qua trọng lượng (CD: 50s). |
| 4 | **Thần Niệm Niệm Giả** | Anime / Hunter x Hunter | Luồng sóng Niệm tím hình vòng tròn concentric bán kính **40% W**. | Con mắt tím tỏa sóng vòng tròn. | Khóa cá tự kéo không đứt dây (CD: 40s). |
| 5 | **Ma Pháp Thiếu Nữ Card** | Anime / Cardcaptor Sakura | Thủy tinh linh xanh ngọc rộng **45% W x 35% H** nâng cá lên không trung. | Gậy ngôi sao vàng lồng thẻ bài nước. | Nâng cá cắn mồi trong 8s (CD: 45s). |
| 6 | **Mèo Máy Tương Lai** | Anime / Doraemon | Tia đóng băng xanh nhạt quét rộng **50% W** che phủ nước. | Súng đồng hồ đếm ngược đóng băng. | Ngừng thời gian chuyển động cá 10s (CD: 60s). |
| 7 | **Đao Thần Tóc Đỏ** | Anime / Kenshin | Vệt chém sóng kiếm trắng dài **70% W** rạch ngang mặt nước. | Đường kiếm chém lướt sóng ngang. | Thu hồi toàn bộ mồi & cá dính mồi (CD: 35s). |
| 8 | **Đại Bát Vương Săn Thần** | Anime / Dragon Ball | Luồng sóng Final Flash vàng rộng **30% W x 45% H** quét đáy nước. | Vệt sóng điện vàng chói lọi. | Quét vật cản, gây choáng Boss (CD: 55s). |
| 9 | **Nhãn Thuật Ma Vương** | Anime / Naruto | Lưới lửa đen Amaterasu rộng **40% W** bốc khói đen quanh phao. | Ngọn lửa đen uốn hình lưới cầu. | Rút 80% HP cá trong 5s (CD: 50s). |
| 10 | **Kiếm Sĩ Tam Đao** | Anime / One Piece | 3 dải sóng âm kiếm khí green đan chéo rộng **60% W**. | 3 đường kiếm cắt nứt mặt nước. | Thu ngắn 70% khoảng kéo (CD: 40s). |
| 11 | **Ma导 Thủy Tộc Gray** | Anime / Fairy Tail | Băng giáo nhọn rộng **15% W x 45% H** bắn cắm xuống lòng nước. | Mũi giáo băng xanh nhọn hoắt. | Đóng băng cá 6s, x2 tiền (CD: 45s). |
| 12 | **Hỏa Long Ma Đạo** | Anime / Fairy Tail | Lốc xoáy lửa cam bùng nổ rộng **50% W x 40% H** từ phao. | Ngọn lửa rồng bốc cháy rực rỡ. | Buộc cá Boss trồi lên bờ ngay (CD: 50s). |
| 13 | **Tộc Trưởng Chuột Điện** | Anime / Pokemon | Xung điện vàng lan tỏa rộng **80% W** kín vùng nước lòng hồ. | Đuôi sét vàng giật tia điện li ti. | Điện giật cá ngất xỉu ngửa bụng (CD: 60s). |
| 14 | **Khai Sáng Giả Titania** | Anime / Fairy Tail | Giáp Thủy Thần tỏa hào quang xanh phủ quanh nhân vật **25% W x 20% H**. | Bộ giáp ngực bạc viền sóng nước. | +100% lực kéo, bất tử dây 12s (CD: 60s). |
| 15 | **Bạch Nhãn Nhẫn Giả** | Anime / Naruto | Trận bát quái tròn rộng **60% W** hiện dưới mặt nước. | Vòng Bát Quái âm dương trắng mờ. | Dụ toàn bộ cá xung quanh vào phao (CD: 40s). |
| 16 | **Iron Armor Genius** | Marvel | Chưởng Unibeam xanh lam dường kính **25% W x 40% H** chiếu từ ngực xuống. | Lõi Arc Reactor xanh phát sáng. | Hút cá tiến về thuyền 15m ngay (CD: 45s). |
| 17 | **Thần Sấm Giáp Vàng** | Marvel | Luồng bão sét tím-vàng rộng **60% W x 50% H** đánh chèo từ đỉnh màn hình. | Búa sắt đập tỏa tia sét tím. | Choáng cá 8s, rút 15% HP Boss (CD: 50s). |
| 18 | **Thần Cụ Cây Bảo Hộ** | Marvel | Rễ cây gỗ mọc từ đáy rộng **40% W x 35% H** quấn chặt cá. | Rễ cây quấn viên ngọc lá xanh. | Khóa cá cố định 8s (CD: 40s). |
| 19 | **Nhện Anh Hùng Đỏ Xanh** | Marvel | Mảng lưới tơ trắng phủ rộng **55% W** tại vị trí phao thả. | Lưới tơ nhện dính bọc cầu xanh. | Khóa 5 con cá gần nhất lại với nhau (CD: 35s). |
| 20 | **Chiến Binh Vibranium** | Marvel | Sóng xung kích tím tỏa rộng **70% W** từ chân thuyền ra mặt nước. | Khiên báo bạc tỏa sóng tím. | Hất cá nổi lên bờ, choáng 6s (CD: 45s). |
| 21 | **Phù Thủy Thời Gian** | Marvel | Vòng ma thuật thời gian cam **30% W** xoay quanh phao câu. | Mắt ma thuật trong bánh răng cam. | Quay ngược 5s nếu vừa đứt dây (CD: 60s). |
| 22 | **Chiến Binh Mù Đêm** | Marvel | Vòng sóng siêu âm màu đỏ rộng **80% W** quét lòng nước. | Mắt đỏ gạch chéo tỏa dải sóng. | Định vị cá to nhất, dụ cắn mồi (CD: 30s). |
| 23 | **Người Khổng Lồ Xanh** | Marvel | Đập hai tay tạo 2 cột nước khổng lồ rộng **30% W x 50% H** dạt 2 bên màn hình. | Nắm đấm xanh lá nổ sóng nước. | Hất cá lên thuyền, rút 20% HP Boss (CD: 50s). |
| 24 | **Kiếm Sĩ Ánh Kim Cyber** | Viễn Tưởng | Hào quang neon hồng bọc lấy nhân vật **25% W x 20% H** trên thuyền. | Cuộn cước bọc lửa neon hồng. | +200% tốc độ cuộn cước trong 6s (CD: 40s). |
| 25 | **Nữ Phi Công Mecha** | Mech | Tên lửa nổ tạo quầng sáng xanh cyan rộng **35% W** dưới nước. | Tên lửa mini đỏ có tâm ngắm. | Choáng Boss 7s, làm chậm cá quanh (CD: 45s). |
| 26 | **Hacker Không Gian** | Viễn Tưởng | Ma trận chữ số xanh lá rộng **50% W x 30% H** phủ trên mặt nước. | Bàn phím Hologram cyan nhấp nháy. | Biến cá cắn mồi thành cá Epic/Mythic (CD: 75s). |
| 27 | **Chiến Binh Plasma** | Viễn Tưởng | Quả cầu plasma tím rộng **40% W** giữ chặt cá dưới nước. | Bom xám tỏa luồng sáng Plasma. | Rút thanh chịu đựng cá về 0 (CD: 50s). |
| 28 | **Sát Thủ Bionic** | Viễn Tưởng | Luồng điện bọc tay cơ khí rộng **15% W x 25% H** khi giật cần. | Tay sắt mạ chrome bốc điện xanh. | Giật kéo cá nhanh gấp 3 lần (CD: 35s). |
| 29 | **Thám Hiểm Gia Thiên Hà** | Viễn Tưởng | Đĩa ánh sáng tím không trọng lực rộng **45% W** nâng cá bồng bềnh. | Hành tinh tím có dải đai lấp lánh. | Nâng cá trôi lơ lửng, đơ 8s (CD: 40s). |
| 30 | **Tiên Phong Steampunk** | Steampunk | Luồng hơi nước trắng cam rộng **35% W x 30% H** đẩy về mạn thuyền. | Khói hơi nước bốc từ ống khói đồng. | Đẩy cá về sát vị trí đứng 10m (CD: 30s). |
| 31 | **Thánh Kiếm Tiên Tông** | Kiếm Hiệp | Cột khí kiếm xanh băng rộng **65% W x 60% H** cắm xuống lòng sông. | Kiếm xanh băng tỏa hào quang. | Khóa toàn bộ cá trong 20m trong 6s (CD: 50s). |
| 32 | **Cuồng Đao Bá Vương** | Kiếm Hiệp | Vệt chém đao lửa đỏ rộng **25% W x 50% H** nứt đôi dòng nước dọc. | Lưỡi đao nứt nẻ chảy lửa magma. | Kéo cá tiến về trước 10m (CD: 40s). |
| 33 | **Độc Ca Cửu U** | Kiếm Hiệp | Sương độc tím mờ phủ kín **80% W x 40% H** lòng nước sâu. | Khói tím bốc từ hũ bùa ma thuật. | Rút 4% HP cá mỗi giây (CD: 45s). |
| 34 | **Tiên Tử Tuyết Sơn** | Kiếm Hiệp | Mặt hồ bị đóng băng xanh lam rộng **85% W x 35% H**. | Hoa tuyết 6 cánh trên băng nứt. | Đóng băng mặt hồ trong 6s (CD: 55s). |
| 35 | **Cái Bang Bát Đẩu** | Kiếm Hiệp | Đập gậy bắn vòng sóng nước vàng rộng **50% W**. | Gậy trúc xanh đập bắn giọt vàng. | Dụ cá đắt tiền nhất trồi lên cắn mồi (CD: 35s). |
| 36 | **Thiếu Lâm La Hán** | Kiếm Hiệp | Thân thể bọc giáp phật vàng kim **25% W x 22% H** trên thuyền. | Tượng Phật mạ vàng tỏa hào quang. | Lực kéo +80%, dây bất tử 8s (CD: 60s). |
| 37 | **Hiệp Sĩ Thánh Điện** | Trung Cổ | Vạt chùm sáng trắng vàng rộng **40% W x 60% H** chiếu từ đỉnh xuống. | Khiên thập tự đỏ chiếu chùm sáng. | Làm đơ cá 6s, hồi 100% thể lực (CD: 50s). |
| 38 | **Pháp Sư Nguyên Tố** | Fantasy | Lốc xoáy nước xanh tím rộng **35% W x 45% H** cuốn cá lên trời. | Trượng ma thuật bọc lốc xoáy nước. | Cuốn cá lên không 7s, x2 tiền (CD: 45s). |
| 39 | **Thợ Săn Đầm Lầy** | Trung Cổ | Bẫy neo sắt cắm đáy nước rộng **30% W x 25% H**. | Bẫy răng cưa đính móc neo sắt. | Giữ cá cố định 1 vị trí trong 8s (CD: 40s). |
| 40 | **Nữ Vương Tiên Tộc** | Fantasy | Vòng sóng nốt nhạc ma thuật xanh mạ rộng **60% W** tỏa ra quanh phao. | Đàn hạc lá mạ tỏa nốt nhạc. | Hút cá bơi lại gần phao 15m (CD: 35s). |
| 41 | **Kỵ Sĩ Rồng Đen** | Trung Cổ | Bóng đầu rồng khè khói đỏ rộng **50% W x 30% H** gầm gừ. | Đầu rồng đen khè khói đỏ rực. | Giảm 50% tốc độ di chuyển cá (CD: 50s). |
| 42 | **Hải Tặc Bán Cơ Khí** | Steampunk | Móc cáp đồng bắn dài **15% W x 45% H** cắm phập vào mục tiêu. | Pháo móc cáp đồng phun khói đen. | Móc chặt kéo cá về tốc độ cực đại (CD: 45s). |
| 43 | **Hắc Tử Thần** | Gothic | Nhát chém hư không đen tuyền rộng **60% W x 20% H** xé nước. | Lưỡi hái tử thần tỏa khí đen rỉ máu. | Cắt đứt 50% thanh máu/chịu đựng (CD: 60s). |
| 44 | **Bách Phát Bách Trúng** | Sword Art | 16 đường kiếm khí xanh lam đan chéo rộng **70% W x 45% H**. | Đôi kiếm sáng chéo nhau xanh lam. | Kéo dây 16 đợt Perfect liên tiếp (CD: 40s). |
| 45 | **Triệu Hồi Sư Thủy Thần** | Fate | Sóng kiếm ngọc xanh lục rộng **30% W x 50% H** rạch lòng sông. | Kiếm vàng cắm xuống mặt nước. | Thu hồi cá cắn mồi lập tức (CD: 55s). |
| 46 | **Đế Vương Giáp Vàng** | Kiếm Hiệp | Cuộn chiếu thư vàng rộng **40% W x 30% H** thả xuống bọc cá. | Cuộn chiếu thư vàng đính ngọc trai. | Bắt cá chui thẳng vào túi đồ (CD: 70s). |
| 47 | **Nữ Sát Thủ Bóng Đêm** | Akame | Nhát chém bóng đêm đen lá nhọn rộng **50% W x 15% H**. | Katana đen tỏa vệt khói bóng đêm. | Kết liễu cá dưới 25% HP ngay (CD: 30s). |
| 48 | **Chủ Nhân Thẻ Bài** | Yu-Gi-Oh | Bóng Rồng Trắng khổng lồ **60% W x 45% H** sà xuống mặt nước. | Lá bài ma thuật rồng trắng tỏa sáng. | Kéo cá lớn lên bờ trong 3s (CD: 60s). |
| 49 | **Cyborg Phản Lực Titan** | Sci-Fi | Luồng bão lửa xanh cyan đẩy lùi từ hai vai kéo giật lùi cước. | Động cơ phản lực bốc lửa xanh. | Giật cá bay lên không rơi vào thuyền (CD: 40s). |
| 50 | **Ma Vương Chuyển Sinh** | Slime | Hố đen ma thuật tím đen khổng lồ rộng **55% W x 35% H** tại phao câu. | Vòng xoáy hố đen màu đen-tím. | Hút trọn cá và vật phẩm vào kho (CD: 65s). |
---
## III. HỆ THỐNG CƠ CHẾ NÂNG CẤP CHI TIẾT (CÓ KÍCH THƯỚC UI & MODEL Visual)
### 1. CẦN CÂU (Fishing Rods) - 20 Loại

> **Kích thước Model Cần:** Dài **45% - 55% Height** khi giật thẳng đứng, độ dày thân cần **2% - 3% Width**. Icon UI: **64x64 px**.
| STT | Tên Cần Câu | Chủ Đề / Nguồn Cảm Hứng | Mô Tả Hình Ảnh & Visual Model | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- | ----- |
| 1 | **Như Ý Kim Cô Bổng** | Tây Du Ký | Màu đỏ son bọc hai đầu vàng 24K, tỏa vòng hào quang. | Lực kéo +100%, kéo không tốn lực. |
| 2 | **Lôi Thần Mjolnir Rod** | Marvel | Kim loại Uru xám bạc, dây phát điện tia tím/xanh. | Tê liệt cá 5s khi dính mồi. |
| 3 | **Cần Quang Kiếm Lightsaber** | Sci-Fi | Thanh năng lượng Plasma xanh/đỏ, cán cơ khí xám. | Cắt đôi rác/rong rêu khi giật. |
| 4 | **Trầm Hương Kiếm Cần** | Kiếm Hiệp | Hình cổ kiếm mỏng dài bằng gỗ trầm đen chạm phượng. | Tỉ lệ bắt cá Tâm Linh +30%, +20% EXP. |
| 5 | **Cần Long Ngai Trung Cổ** | Trung Cổ | Thép rèn thô ráp, cán đính đầu rồng đồng tỏa khói. | +40% Chịu tải cá huyền thoại. |
| 6 | **Cần Neon Cyberpunk 2077** | Viễn Tưởng | Nhựa trong suốt có dải LED đổi màu, cước laser. | Hiển thị màn hình Radar chỉ số cá. |
| 7 | **Cần Thần Cây Yggdrasil** | Thần Thoại | Gỗ nhánh cây thế giới bám rêu, ngọn nở hoa sáng. | Tự hồi 5% thể lực mỗi 10s. |
| 8 | **Thánh Cần Excalibur** | Trung Cổ | Màu bạc sáng chói, chuôi mạ vàng đính ngọc lam. | Cá cắn mồi nhanh +40%. |
| 9 | **Cần Thập Tự Quân Crusader** | Trung Cổ | Sơn trắng họa tiết thập tự đỏ, đầu đính chuông đồng. | +25% Sát thương cá quỷ/độc. |
| 10 | **Cần Nanotech Iron Man** | Marvel | Hợp kim đỏ-vàng Nanotech, co giãn độ dài linh hoạt. | Thay đổi độ dài dây câu linh hoạt. |
| 11 | **Gương Thần Doctor Strange** | Marvel | Gậy phép có vòng ma thuật cam xoay tròn ở đầu. | Cổng không gian thu hồi cá ngay. |
| 12 | **Cần Thần Tộc Asgard** | Thần Thoại | Kim loại vàng óng đính hoa văn runes xanh lam. | +35% Tỉ lệ cá Epic & Mythic. |
| 13 | **Cần Tử Thần Death Scythe** | Gothic | Hình lưỡi hái tử thần đen tuyền tỏa khí đen u ám. | Giảm 50% HP cá khi cắn mồi. |
| 14 | **Cần Long Phụng Đồ Long** | Kiếm Hiệp | Hai rồng quấn quanh thân gỗ đàn hương đỏ. | x2 Tiền bán cá Rồng/Hoàng Gia. |
| 15 | **Cần Hỏa Phụng Gundam** | Mech | Góc cạnh phong cách Robot, khớp phản lực cam. | Tốc độ cuộn cước +100% trong 3s đầu. |
| 16 | **Thái Cực Bát Quái Cần** | Kiếm Hiệp | Trúc đốm, đính biểu tượng Âm Dương ở chuôi. | Giảm 80% nguy cơ đứt dây do căng. |
| 17 | **Cần Thủy Thần Trident** | Thần Thoại | Đinh ba 3 chấu bọc ngọc bích, thân xanh biển. | Giật câu tạo sóng làm choáng cá 3m. |
| 18 | **Cần Hắc Sâm Binh Biến** | Gothic | Kim loại gỉ xám bọc gai nhọn và xích sắt đen. | Dây sắp đứt: +200% Lực kéo. |
| 19 | **Cần Tinh Thạch Infinity** | Marvel | Titan xám đính 6 viên đá vô cực lấp lánh. | Mở kỹ năng bắt thẳng cá vào túi. |
| 20 | **Cần Anh Hùng One Punch** | Anime | Gậy tre tối giản tỏa luồng aura vàng rực chói. | 1% Tỉ lệ giật One Hit bắt ngay cá. |
### 2. THUYỀN CÂU (Boats / Vessels) - 20 Loại

> **Kích thước Model Thuyền:** Rộng **35% - 50% Width**, Cao **12% - 18% Height** (Đặt tại vị trí 50% - 60% Height). Icon UI: **64x64 px**.
| STT | Tên Thuyền | Chủ Đề | Visual Model Thuyền | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- | ----- |
| 1 | **Tàu Phi Cơ Helicarrier** | Marvel | Tàu chiến dạng đĩa bay 4 quạt phản lực xám quân sự. | Di chuyển giữa các map không tốn thời gian. |
| 2 | **Thuyền Rồng Hoàng Gia** | Kiếm Hiệp | Gỗ hương chạm đầu rồng vàng, buồm lụa đỏ thêu phượng. | +50% Giá trị bán mọi loại cá trên thuyền. |
| 3 | **Tàu Ngầm Nautilus Sci-Fi** | Viễn Tưởng | Kim loại hình mực khổng lồ, đèn pha neon vàng rực. | Mở khóa câu cá dưới đáy biển sâu. |
| 4 | **Thuyền Thousand Sunny** | Anime | Thuyền gỗ mũi đầu sư tử cười, buồm cam rực rỡ. | +30% May mắn nhặt Rương Báu Hải Tặc. |
| 5 | **Chiến Tàu Viking Longship** | Trung Cổ | Thuyền gỗ sồi thuôn dài, hông treo lá chắn tròn. | Kháng hoàn toàn Sóng Bão & Đầm Lầy. |
| 6 | **Phi Thuyền Wakanda Royal** | Marvel | Tàu không trọng lực hình chim ưng đen tuyền Vibranium. | Giảm 100% tiếng ồn, +30% cá hiếm tiếp cận. |
| 7 | **Tàu Tuần Dương Cyberpunk** | Viễn Tưởng | Thuyền góc cạnh đen nhám, dải LED hồng/cyan chạy thân. | Tự động lọc rác thành mồi câu. |
| 8 | **Thuyền Trúc Bát Nhã** | Kiếm Hiệp | Ghép từ cây trúc lớn, mái thảm rơm, đèn lồng đỏ. | +100% Tốc độ hồi thể lực nhân vật. |
| 9 | **Thuyền Ma Hà Lan Bay** | Gothic | Gỗ mục nát xám xanh, buồm rách phát quang xanh lá. | Câu được cá dạng Linh Hồn vào ban đêm. |
| 10 | **Thuyền Băng Nam Cực** | Viễn Tưởng | Khối băng vĩnh cửu tỏa hơi lạnh trắng. | Cá giữ tươi sống, +20% giá bán tươi. |
| 11 | **Bè Gỗ Sinh Tồn Raft** | Trung Cổ | Thân gỗ tròn quấn thừng, chòi rơm nhỏ ở giữa. | Giá nâng cấp rẻ, +10% chứa vật phẩm thô. |
| 12 | **Thuyền Thảm Aladin** | Thần Thoại | Thảm bay uốn lượn lơ lửng sát mặt nước viền tua vàng. | Di chuyển lướt trên mọi địa hình độc. |
| 13 | **Tàu Thiết Giáp Ironclad** | Steampunk | Bọc thép tấm xám đen, ống khói đôi bốc khói đen. | Chống va đập hoàn toàn với quái biển/đá. |
| 14 | **Phi Thuyền Milano** | Marvel | Hình chim ưng phối cam/xanh, động cơ plasma đuôi. | Mở khóa các vùng câu Vũ Trụ. |
| 15 | **Thuyền Hoa Sen Tiên Cảnh** | Kiếm Hiệp | Đóa hoa sen hồng khổng lồ đang nở rộ trên mặt nước. | Cá không bị giật mình khi quăng mồi sai. |
| 16 | **Thuyền Đua Công Nghệ F1** | Viễn Tưởng | Lướt sóng dáng F1, màu đỏ nổi bật. | Tốc độ di chuyển trên nước +200%. |
| 17 | **Thuyền Đa Chiều TARDIS** | Sci-Fi | Bốt điện thoại cảnh sát màu xanh cổ điển trôi trên nước. | Kho chứa cá bên trong VÔ HẠN. |
| 18 | **Thuyền Giáp Batman** | Marvel | Batmobile lướt sóng màu đen nhám góc cạnh. | Định vị siêu âm quét sạch bản đồ cá 100m. |
| 19 | **Thuyền Lửa Magma Dragon** | Fantasy | Đá dung nham nứt chảy vệt đỏ, mũi là sọ rồng phun lửa. | Câu an toàn trên hồ dung nham/núi lửa. |
| 20 | **Thuyền Lá Cây Elven** | Fantasy | Chiếc lá khổng lồ bằng ngọc bích uốn lượn nhẹ nhàng. | Tự động thu hút cá hệ Băng/Thảo Mộc. |
### 3. TÚI ĐỒ / KHO CHỨA (Inventory Boxes) - 20 Loại

> **Kích thước Icon UI:** **64x64 px** trong Menu Trang Bị.
| STT | Tên Túi Đồ | Visual Concept | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- |
| 1 | **Túi Thần Kỳ Doraemon** | Bán nguyệt trắng nhỏ đeo trước bụng. | Sức chứa +100 ô, trọng lượng cá = 0. |
| 2 | **Túi Không Gian Doraemon** | Hộp gỗ có vạch ma thuật tím ở nắp. | Phân loại & xếp chồng cá không giới hạn. |
| 3 | **Túi Capsule Corp** | Hộp chứa các viên Capsule nhiều màu. | Thu nhỏ cá, +500% sức chứa tổng. |
| 4 | **Hộp Lương Thực Khổng Lồ** | Hộp gỗ sồi đai sắt, khóa xích đồng. | Giữ cá không hư hỏng theo thời gian. |
| 5 | **Túi Da Rồng Huyết Sắt** | Da rồng đỏ thẫm vảy nổi, khuy xương. | +20% Giá bán cá Hỏa & Rồng. |
| 6 | **Balo Stark Nano** | Balo titan đỏ kim loại tự mở ngăn. | Phân tích & hiển thị giá tốt nhất. |
| 7 | **Hộp Luminous** | Thủy tinh trong phát sáng dạ quang. | +15% Độ bền mồi câu cất bên trong. |
| 8 | **Rương Báu Cướp Biển** | Gỗ phủ rêu nắp mạ vàng hoa văn đầu lâu. | 5% Cơ hội nhận đồng xu vàng khi mở. |
| 9 | **Túi Càn Khôn** | Túi gấm thêu chữ Càn Khôn chỉ vàng. | Chứa được các sinh vật quá khổ dễ dàng. |
| 10 | **Hộp Luyện Kim Alchemist** | Kim loại đính ống nghiệm lỏng nhiều màu. | Chuyển cá rác thành nguyên liệu mồi. |
| 11 | **Túi Lưới Thủy Thần** | Lưới bạc dệt từ sợi tơ biển lấp lánh. | Giữ cá sống & liên tục hồi phục phẩm chất. |
| 12 | **Balo Quantum Realm** | Trắng-xanh lá có lõi năng lượng Pym. | Nén kho: Chứa tối đa 1000 con cá. |
| 13 | **Hộp Cyber-Deck** | Máy tính bảng cảm ứng hiển thị danh sách. | Cho phép bán cá trực tiếp không cần shop. |
| 14 | **Túi Vải Bạt Lữ Hành** | Vải thô nâu quấn dây thừng chéo. | Giảm 10% chi phí nâng cấp trang bị khác. |
| 15 | **Balo Động Cơ Phản Lực** | Gắn 2 ống turbine bốc khí sáng bóng. | Tăng 15% tốc độ di chuyển nhân vật. |
| 16 | **Túi Thần Tài Mèo Lucky** | Red pouch hình mặt mèo Maneki-neko. | +10% Tỉ lệ nhận x2 tiền khi bán toàn bộ. |
| 17 | **Rương Băng Cửu Âm** | Khối băng vĩnh cửu tỏa khói lạnh. | Đóng băng cá sống vĩnh viễn không biến chất. |
| 18 | **Túi Thợ Săn Monster** | Da thú ghép mảnh đính nanh thú lớn. | +25% Sức chứa mồi & bẫy cá. |
| 19 | **Hộp Vibranium** | Xám bạc ánh xà cừ không vết trầy. | Bảo vệ cá không bị rớt khi dính Debuff. |
| 20 | **Túi Vũ Trụ Hư Không** | Hố đen thu nhỏ màu tím đen lơ lửng. | Sức chứa VÔ HẠN. |
### 4. THÚ CƯNG / PET CÂU CÁ - 20 Loại

> **Kích thước Pet:** Rộng **8% - 12% Width** x Cao **8% - 12% Height** (Đứng mạn thuyền hoặc bay lơ lửng quanh nhân vật). Icon UI: **64x64 px**.
| STT | Tên Pet | Visual Concept | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- |
| 1 | **Mèo Máy Doraemon** | Mèo xanh dương không tai đeo chuông vàng. | Tự động nhặt rác & vật phẩm trên nước. |
| 2 | **Rồng Con Goose** | Mèo cam dễ thương phun tua vòi ngoài hành tinh. | Nuốt quái vật hung dữ, thưởng tiền. |
| 3 | **Chopper Bác Sĩ** | Tuần lộc nhỏ đội mũ hồng đeo túi y tế. | Tự hồi 20 HP/thể lực khi kiệt sức. |
| 4 | **Pikachu Điện Quang** | Chuột vàng đuôi sét má đỏ phát điện. | Điện giật cá giúp giật câu dễ hơn 30%. |
| 5 | **Tiên Nữ Tinkerbell** | Tinh linh có cánh bướm vàng phát sáng. | +20% May mắn giật cá hiếm & rương. |
| 6 | **Rồng Con Baby Dragon** | Rồng nhỏ màu đỏ mắt to khè lửa nhỏ. | Tự động nướng chín cá vừa câu (+30% giá). |
| 7 | **Cú Mèo Phép Thuật** | Cú tuyết đeo kính tròn quàng khăn đỏ. | Báo hiệu vị trí cá lớn bằng âm thanh. |
| 8 | **Groot Baby** | Người cây nhỏ nhảy múa trong chậu. | Tự nhặt gỗ & nguyên liệu trôi nổi. |
| 9 | **Rái Cá Cyber** | Rái cá đeo kính neon, giáp xám bạc. | +25% Tốc độ cuộn cước câu. |
| 10 | **Chim Ưng Điêu Sư** | Đại bàng lông xám bạc sắc lẹm. | Phát hiện bóng cá ẩn dưới tầng nước sâu. |
| 11 | **Mèo Cướp Biển Palico** | Mèo đứng 2 chân mặc giáp lá sồi cầm cần. | Tự câu thêm 1 con cá phụ định kỳ. |
| 12 | **Bạch Hổ Nhỏ** | Hổ trắng có vằn đen tỏa sương mù chân. | +15% Lực giật cần ban đầu. |
| 13 | **Sứa Băng Dạ Quang** | Sứa ngọc bích lơ lửng tỏa sáng dịu. | Mở rộng tầm nhìn khi câu ban đêm. |
| 14 | **Chó Robot K-9** | Chó cơ khí mạ chrome mắt laser đỏ. | Quét & cảnh báo đứt dây trước 2s. |
| 15 | **Bạch Tuộc Kraken Nhỏ** | Bạch tuộc tím búp bẫm bám vai. | Phun mực giảm 40% tốc độ cá chạy. |
| 16 | **Thằn Lằn Dung Nham** | Da đá xám nứt nẻ chảy đường magma. | Miễn nhiễm bỏng/nóng khu vực dung nham. |
| 17 | **Sói Băng Fenrir Con** | Sói tuyết xanh trắng thở ra hơi lạnh. | Làm chậm 30% thanh nhịp điệu Minigame. |
| 18 | **Khỉ Ngộ Không Nhỏ** | Khỉ giáp vàng cưỡi mây Cân Đẩu Vân. | Kích hoạt Phân Thân: Nhân đôi mồi thả. |
| 19 | **Phượng Hoàng Baby** | Chim cam đỏ tỏa hạt lửa lấp lánh. | Tự phục hồi dây bị đứt 1 lần/5 phút. |
| 20 | **Symbiote Venom** | Giọt chất lỏng đen bám tay mắt trắng xếch. | Hợp thể: +50% Sức kéo khi đánh Boss. |
### 5. HỒ CÁ TRƯNG BÀY (Aquariums) - 20 Loại

> **Kích thước Hồ cá (Nhà riêng UI):** Rộng **70% - 90% Width** x Cao **40% - 50% Height**. Icon UI: **64x64 px**.
| STT | Tên Hồ Cá | Visual Concept | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- |
| 1 | **Bể Asgard Hoàng Gia** | Vòm mạ vàng 24K có cầu Bifrost thu nhỏ. | Cá nuôi sinh vàng theo thời gian (+50/h). |
| 2 | **Bể Thủy Cung Atlantis** | Đá vôi cổ kính chạm hoa văn Hy Lạp. | +30% Tốc độ tăng trưởng & kích thước cá. |
| 3 | **Hồ Sơn Thủy Kiếm Hiệp** | Tranh thủy mặc 3D có núi đá mây vờn. | +20% Điểm Vẻ Đẹp cho nhà riêng. |
| 4 | **Bể Cyberpunk Neon** | Đèn dạ quang xanh/hồng có biển neon. | Tự nhân bản cá phổ thông sau 24h. |
| 5 | **Bể Cầu Thạch Anh Tím** | Khối thạch anh tím tự nhiên khoét rỗng. | Tự thu thập EXP kể cả khi Offline. |
| 6 | **Bể Băng Nam Cực** | Khung gỗ thông có đá băng & chim cánh cụt. | +40% Giá bán cá hệ Băng/Lạnh. |
| 7 | **Hồ Dung Nham Hỏa Ngục** | Kính chịu nhiệt viền thép, đáy magma đỏ. | Chuyên dụng nuôi sinh vật núi lửa. |
| 8 | **Bể Cổ Tích Lâu Đài** | Kính uốn cong chứa lâu đài trung cổ. | +15% Tỉ lệ cá đẻ trứng. |
| 9 | **Bể Vũ Trụ Ngân Hà** | Trong suốt không khung chứa dải ngân hà. | Nuôi loài cá hệ Vũ Trụ & Tinh Tú. |
| 10 | **Hồ Trúc Nhàn Cảnh** | Gốm sứ Bát Tràng xanh ngọc trồng trúc. | Giảm 50% thời gian chờ sinh sản cá Koi. |
| 11 | **Bể Tàu Cướp Biển Chìm** | Đáy phủ cát vàng & xác tàu gỗ chìm. | 25% Cơ hội thu hoạch kim cương từ cá. |
| 12 | **Bể Phòng Tí Hon Pym** | Bể nhỏ bằng bàn tay chứa đại dương thu nhỏ. | Nuôi tối đa 50 con cá cùng lúc. |
| 13 | **Bể Thần Cây Yggdrasil** | Nằm trong hốc gốc cây cổ thụ phủ rêu. | Cá nuôi không bao giờ bị bệnh. |
| 14 | **Hồ Sen Trắng Tây Vực** | Bàn gốm tròn có bông sen trắng nở rộ. | +10% May Mắn tổng thể khi ra khơi. |
| 15 | **Bể Kim Cương Đế Vương** | Khối kim cương sắc nhọn chân mạ kim loại. | x2 Tiền khi bán cá đạt size MAX. |
| 16 | **Bể Ma Thuật Wakanda** | Hình trụ đứng có dải năng lượng xanh lá. | Cho phép chuyển đổi thuộc tính cá. |
| 17 | **Hồ Đầm Lầy Biển Chết** | Nước đục xanh mạ phát sáng, đáy xương rùa. | Nuôi & nhân giống cá hệ Độc/Ma Thuật. |
| 18 | **Bể Đĩa Bay UFO** | Hình đĩa bay lơ lửng nhờ từ tính. | Cá nuôi bơi lơ lửng trong không trung. |
| 19 | **Hồ Long Môn Phong Thủy** | Có cổng Long Môn thu nhỏ nước chảy ngược. | +50% Tỉ lệ cá tiến hóa cấp cao hơn. |
| 20 | **Bể Thời Gian Chrono** | Bánh răng đồng hồ xoay chậm quanh thân. | Tăng tốc độ lớn của cá lên x5 lần. |
### 6. MỒI CÂU (Fishing Baits) - 20 Loại

> **Kích thước Icon Mồi:** **48x48 px** hoặc **64x64 px** (UI chọn mồi góc phải dưới).
| STT | Tên Mồi Câu | Visual Concept | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- |
| 1 | **Mồi Viên Senzu** | Viên đậu xanh lá tỏa hương dịu mát. | Cá cắn mồi ngay lập tức trong 1s. |
| 2 | **Mồi Tinh Thạch Pym** | Viên mồi đỏ phát sáng tỏa hạt vi mô. | Biến cá nhỏ thành cá lớn x2 trọng lượng. |
| 3 | **Mồi Linh Dược Thiên Sơn** | Viên đông y bọc lá vàng 24K tỏa khói. | Thu hút 100% cá Linh Hồn/Huyền Thoại. |
| 4 | **Mồi Bọ Biển Cyberpunk** | Bọ cơ khí nhấp nháy đèn LED. | Phát sóng âm dụ cá trong bán kính 20m. |
| 5 | **Mồi Bánh Ngọt Sanji** | Miếng bánh trang trí dâu tây tỏa hương. | +50% Tỉ lệ bắt cá hệ Nước Ngọt. |
| 6 | **Mồi Thịt Bizon** | Đùi nướng màu xám rưới sốt béo ngậy. | Dùng riêng săn cá hung dữ/Cá Mập. |
| 7 | **Mồi Dạ Quang Biển Sâu** | Phát ánh sáng huỳnh quang xanh dạ quang. | +80% Tỉ lệ cắn câu ban đêm/vực sâu. |
| 8 | **Mồi Tơ Nhện Spider** | Bọc trong mạng nhện dính bọ nhỏ. | Giữ chặt miệng cá, không bị sút lưỡi. |
| 9 | **Mồi Trùng Huyết Đột Biến** | Trùng đỏ tươi uốn lượn tự tạo bọt. | +30% Tỉ lệ xuất hiện cá biến dị đốm. |
| 10 | **Mồi Bát Tiên Tửu** | Giọt rượu vàng bọc trong bong bóng. | Giảm 60% lực phản kháng cá (Say rượu). |
| 11 | **Mồi Tinh Hà Vũ Trụ** | Màu tím thẫm chứa hạt lấp lánh như sao. | Chỉ thu hút loài cá Epic trở lên. |
| 12 | **Mồi Vỏ Hàu Hoàng Gia** | Vỏ hàu chứa ngọc trai vàng óng ánh. | x2 Tiền vàng từ con cá cắn mồi này. |
| 13 | **Mồi Bánh Mỳ Lembas** | Miếng bánh gói trong lá xanh dịu mát. | Mồi vô hạn cho cá rác (không tốn mồi). |
| 14 | **Mồi Rắn Độc Ngũ Sắc** | Rắn 5 màu quấn quanh móc câu tỏa mùi. | Cá trúng độc, rút 5% HP mỗi giây. |
| 15 | **Mồi Hạt Nhân Plasma** | Pin năng lượng màu xanh lá phát điện. | Câu an toàn trong môi trường Magma/Acid. |
| 16 | **Mồi Tim Rồng Hỏa Ngục** | Trái tim đỏ đập phập phồng bốc hơi nóng. | Mồi duy nhất dụ Cá Boss/Leviathan. |
| 17 | **Mồi Bánh Quy Dạng Bọt** | Bánh quy hình con cá màu cam xinh xắn. | +100% EXP nhận được từ cá. |
| 18 | **Mồi Kim Cương Vô Cực** | Kim loại đa sắc lấp lánh phản chiếu. | +50% Tỉ lệ rơi đồ nâng cấp khi bắt cá. |
| 19 | **Mồi Cỏ Tuyết Sơn** | Nhành cỏ trắng băng giá tỏa hơi lạnh. | Dụ cá thuộc vùng nước băng giá/bão tuyết. |
| 20 | **Mồi Giun Đất Khổng Lồ** | Giun nâu to bằng ngón tay vảy bóng. | Mồi phổ thông: +20% Tốc độ cắn câu. |
### 7. DÂY CÂU (Fishing Lines) - 20 Loại

> **Kích thước Sợi dây Visual trên màn hình:** Độ dày **2px - 4px** trải từ đầu cần xuống mặt nước.
| STT | Tên Dây Câu | Visual Concept | Hiệu Ứng Game |
| ----- | ----- | ----- | ----- |
| 1 | **Dây Tơ Nhện Vibranium** | Tơ nhện kết hợp sợi Vibranium xám bạc. | Chịu lực cực đại, +150% độ bền dây. |
| 2 | **Dây Băng Tinh Cửu Âm** | Trong suốt tỏa sáng xanh băng phủ tuyết. | Đóng băng cá khi dây căng tối đa. |
| 3 | **Dây Cáp Laser Cyber** | Dải ánh sáng Laser đỏ rực dưới nước. | Cắt đứt hoàn toàn chướng ngại vật rác. |
| 4 | **Dây Tơ Tằm Càn Khôn** | Sợi tơ tằm màu vàng óng mềm mại. | Giảm 50% lực căng dây khi cá vùng vẫy. |
| 5 | **Dây Xích Sắt Hỏa Ngục** | Chuỗi xích sắt đen nhỏ chảy vệt lửa. | Gây sát thương liên tục khi kéo câu. |
| 6 | **Dây Plasma Nano** | Sợi siêu mảnh xanh dạ quang vô hình. | Cá không phát hiện: +30% cắn mồi. |
| 7 | **Dây Thừng Cướp Biển** | Dây thừng bện từ sợi đay chắc chắn. | Rẻ tiền, chịu lực tốt với cá nặng kg. |
| 8 | **Dây Kim Cương Asgard** | Hạt tinh thể kim loại Asgard lấp lánh. | Tự hồi 10% độ bền dây mỗi 3s. |
| 9 | **Dây Tơ Thiên Long** | Sợi râu rồng đỏ son tỏa hào quang. | x2 May mắn khi câu cá Boss/Huyền Thoại. |
| 10 | **Dây Phép Thuật Arcane** | Sợi màu tím phát sáng ký tự ma thuật. | Cho phép kéo cá xuyên qua vật cản đá. |
| 11 | **Dây Cáp Steampunk** | Cáp kim loại quấn lõi màu đồng thau. | Không bao giờ bị răng nhọn cắn đứt. |
| 12 | **Dây Tơ Black Widow** | Màu đen tuyền mỏng dính có chất nhờn. | Làm chậm 20% tốc độ bơi của cá. |
| 13 | **Dây Bạc Thánh Giá** | Sợi màu bạc chói lọi tỏa ánh sáng thánh. | +40% Lực kéo khi đánh cá Ma/Quỷ. |
| 14 | **Dây Điện Cao Thế** | Dây vàng có các tia điện giật tạch tạch. | Phóng điện làm giật mình cá khi đổi hướng. |
| 15 | **Dây Lụa Hà Đông** | Sợi lụa trắng mềm mại lướt nhẹ trên nước. | +25% Tốc độ cuộn cước máy câu. |
| 16 | **Dây Hạt Nhân Quantum** | Màu xanh lá mạ tự co giãn độ dài. | Chiều dài vô hạn, thả xa bất kỳ đâu. |
| 17 | **Dây Da Thằn Lằn Độc** | Màu xám rêu sần sùi có bọt khí độc. | Giảm 30% sức chịu đựng cá sau 5s. |
| 18 | **Dây Âm Dương Thái Cực** | 2 sợi đen và trắng quấn uốn lượn. | Tự cân bằng lực: Phao luôn chuẩn xác. |
| 19 | **Dây Băng Vĩnh Cửu** | Sợi thủy tinh lạnh xanh da trời. | Kháng ảnh hưởng từ nước nóng/acid. |
| 20 | **Dây Vô Cực Infinity** | Trong suốt tỏa ánh sáng 6 màu đá vô cực. | BẤT TỬ dây câu (Không thể đứt). |
---
## IV. GIAO DIỆN & HIỆU ỨNG THỰC TẾ TRÊN MÀN CHƠI (IN-GAME SCREEN & PARTICLE VFX FOR BUFFS & DEBUFFS)

> **Quy chuẩn hiển thị trực quan (In-Game Visual Overlay):**
> * **Icon HUD (48x48 px):** Xuất hiện góc trái dưới Avatar nhân vật kèm số đếm ngược thời gian.
> * **Screen VFX & Aura:** Phát ra trực tiếp trên cơ thể Nhân Vật (Vùng 55% H), Cần Câu, Dây Cước hoặc toàn bộ khung hình chơi (Overlay 9:16).
### 1. Buff In-Game Visual Effects (Hiệu Ứng Trực Quan Có Lợi Trên Màn Chơi)
| STT | Tên Trạng Thái Buff | Icon UI (48x48) | Hiệu Ứng Chỉ Số | Hiệu Ứng Hình Ảnh Trực Quan Trên Màn Chơi (In-Game Screen & Particle VFX) |
| ----- | ----- | ----- | ----- | ----- |
| 1 | **Xuất Thần (Flow State)** | Đôi cánh năng lượng Xanh Dương. | +20% Tốc độ giật câu. | Vòng aura gió xoáy màu xanh cyan cuộn tròn quanh nhân vật. Tay cầm cần xuất hiện các dải vệt sáng (Speed lines) bứt phá. |
| 2 | **Tay Đô (Adrenaline Rush)** | Bắp tay bốc lửa Cam-Đỏ. | +30% Lực kéo cần. | Thân trên nhân vật ửng đỏ bốc ngọn lửa cam rực rỡ. Cần câu uốn cong phát ra các hạt lửa rơi vãi xuống mạn thuyền. |
| 3 | **Mắt Đại Bàng (Eagle Eye)** | Con mắt Vàng Kim có tâm ngắm. | Nhìn rõ bóng cá & độ nặng. | Viền màn hình xuất hiện ống ngắm mờ (Vignette) vàng chói. Nước hồ chuyển trong veo, xung quanh bóng cá hiện vòng định vị màu vàng. |
| 4 | **May Mắn Biển Cả** | Cỏ 4 lá ngọc bích tỏa hào quang. | +15% Tỉ lệ cá hiếm. | Các hạt sáng màu xanh ngọc bích và lá cỏ may mắn lơ lửng rơi nhẹ rải rác từ đỉnh màn hình xuống nước. |
| 5 | **Dây Kim Cương** | Cuộn dây trong khối Kim Cương. | Dây bất tử trong 10s. | Sợi dây câu phát sáng xanh băng bọc trong lớp vỏ tinh thể kim cương trong suốt sắc nhọn. Phát âm thanh ngọc va đập tạch tạch. |
| 6 | **Mắt Thần Radar** | Màn hình Radar xanh lá mạ. | Hiển thị loại cá đang cắn mồi. | Sóng vòng tròn Radar xanh lá mạ quét từ phao câu ra dạt 2 bên. Bên cạnh phao hiển thị Hologram tên và độ hiếm cá 3D. |
| 7 | **Sức Mạnh Titan** | Găng tay kim loại vàng tỏa sáng. | Giảm 50% thể lực tiêu hao. | Đôi tay nhân vật biến thành giáp titan vàng óng 24K. Mỗi lần cuộn cước phát ra hiệu ứng sóng xung kích mini dập xuống mạn thuyền. |
| 8 | **Tốc Độ Ánh Sáng** | Đôi giày có cánh vàng kim. | Cuộn cước nhanh x2. | Tay quay máy cước xoay tròn siêu tốc tạo thành đĩa sáng vàng rực. Xuất hiện các hạt tia điện vàng giật tí tách quanh máy câu. |
| 9 | **Hồ Biển Luyện Kim** | Đòn đao mạ vàng. | x2 Tiền bán cá thành công. | Toàn bộ con cá dính mồi phủ lớp ánh sáng kim loại mạ vàng chói lọi. Giọt tiền xu vàng liên tục nổ tí tách quanh phao. |
| 10 | **Lá Chắn Linh Hồn** | Khiên năng lượng mờ lam. | Miễn nhiễm 1 lần Debuff. | Quả cầu khiên năng lượng màu xanh lam bán trong suốt bao bọc xung quanh thuyền và nhân vật chơi. |
### 2. Debuff In-Game Visual Effects (Hiệu Ứng Trực Quan Bất Lợi Trên Màn Chơi)
| STT | Tên Trạng Thái Debuff | Icon UI (48x48) | Hiệu Ứng Chỉ Số | Hiệu Ứng Hình Ảnh Trực Quan Trên Màn Chơi (In-Game Screen & Particle VFX) |
| ----- | ----- | ----- | ----- | ----- |
| 1 | **Kiệt Sức (Exhaustion)** | Quả tim xám vỡ kèm giọt mồ hôi. | Giảm 50% lực kéo. | Nhân vật gục lưng rủ đầu, khí thở màu xám ngắt bốc lên. Màn hình hạ tông màu xám u tối, phím cuộn cước chuyển xám xịt. |
| 2 | **Hoa Mắt (Sea Sickness)** | Mặt xanh lá có xoáy ốc ở mắt. | Màn hình rung lắc, méo méo. | Toàn bộ khung cảnh chơi bị hiệu ứng méo ống kính (Fisheye Distortion) và rung lắc liên tục. Hai bên viền màn hình nổi bóng khí xanh mề nheo. |
| 3 | **Dây Rỉ Sét (Corrosion)** | Sợi cước bị gãy rơi mảnh rỉ. | Độ bền dây -5%/s. | Sợi dây câu bị phủ một lớp rỉ sắt màu nâu đỏ sần sùi. Các mảnh vụn rỉ rơi vung vãi xuống mặt nước kèm khói rỉ xám đục. |
| 4 | **Bão Điện (Electro-Shock)** | Bàn tay bị giật tia sét tím. | Choáng 1.5s không bấm được. | Màn hình chớp nháy tia sét tím. Bàn tay nhân vật và nút cuộn cước bị bao bọc trong lồng điện tím, vung ra các tia điện giật tạch tạch. |
| 5 | **Tê Băng (Frostbite)** | Bàn tay bọc trong khối băng. | Tốc độ cuộn cước -40%. | Bàn tay cầm cần bọc trong khối băng giá xanh lam nứt nẻ. Viền màn hình bị đóng lớp băng tuyết mỏng dầy dần theo thời gian. |
| 6 | **Mù Sương (Blindness)** | Con mắt bị gạch chéo u tối. | Che 80% tầm nhìn nước. | Lớp sương mù đen xám đục ngầu phủ kín 80% màn hình chơi (chỉ chừa lại một đường tròn nhỏ sáng mờ ngay tại vị trí phao câu). |
| 7 | **Say Rượu (Inverted Control)**| Chai rượu nghiêng rơi giọt đỏ. | Ngược phím (Trái thành Phải). | Màn hình nghiêng ngả lắc lượn theo góc 15 độ. Xuất hiện các bong bóng hồng và trái tim xoay tròn lướt qua mắt nhân vật. |
| 8 | **Cá Mập Tấn Công** | Hàm răng cá mập đỏ rực. | Gây hao mòn độ bền thuyền. | Mạn thuyền bị đập rung lắc dữ dội, nước bắn tung tóe màu đỏ máu. Xuất hiện hiệu ứng vết cào răng sọc đỏ xé dọc màn hình. |
| 9 | **Dung Nham Nóng (Overheat)** | Ngọn lửa cam đen bốc khói. | Cháy mồi nếu ném sai. | Mồi câu bốc cháy ngọn lửa màu cam đen cuồn cuộn. Mặt nước nơi ném phao bốc hơi nước xèo xèo và nổi bọt khí sôi ục ục. |
| 10 | **Bẫy Rong Rêu (Entangled)**| Tảo biển đen quấn móc câu. | Khóa phao không kéo được 3s. | Đám tảo biển dây rêu đen chùm chặt lấy phao câu dưới nước. Dây câu bị kéo căng cứng và rung giật liên tục nhưng phao không nhúc nhích. |
---
## V. GIAO DIỆN ICON & TẢI TRỌNG TỰ THIẾT KẾ
### 1. Currency & Resource Icons (Tỷ lệ 48x48 px trên UI)
* **Đồng Vàng Vảy Cá**: Đồng xu vàng 24K chạm nổi vảy cá, có vệt sáng chéo lóe sáng 3s/lần.
* **Kim Cương Biển Sâu**: Viên ngọc giọt nước xanh bích (Teal Blue) trong suốt tỏa hào quang nhẹ.
* **Cột Thể Lực**: Quả tim xanh lá neon dạng pin ma thuật nhịp đập phập phồng 1.2s/lần.
* **Huy Chương EXP**: Ngôi sao 5 cánh lồng trong bánh răng đồng thau viền tím bắn tia sáng.
* **Điểm Danh Vọng**: Vương miện mạ vàng nịt đỏ thẫm đính 3 viên ngọc trai lơ lửng hạt sáng.
### 2. HUD Buttons Khi Câu Trực Tiếp
* **Nút Quăng Mồi (Cast Button)**: Nút tròn **120x120 px** màu Xanh Lá, icon tay vung cần câu.
* **Nút Cuộn Cước (Reel Button)**: Nút tròn **140x140 px** màu Cam bộc lộ vòng quay máy cước.
* **Phao Câu Normal**: Phao oval 2 nửa Đỏ-Trắng floating (Kích thước **32x32 px** trên mặt nước).
* **Phao Câu Boss**: Phao đầu rồng vàng mắt đỏ phát sáng chớp nháy (**48x48 px** trên mặt nước).
* **Thanh Căng Dây (Tension Indicator)**: Thanh ngang **300x24 px** đổi màu Xanh -> Vàng -> Đỏ.

---
## VI. HỆ THỐNG 20 BẢN ĐỒ CÂU MÀN HÌNH DỌC (CÓ KÍCH THƯỚC PHÂN VÙNG)

> **Phân Vùng Bản Đồ 9:16 (Top to Bottom):**
> * **Vùng Background Phía Sau (12% - 50% H):** Đồi núi, Bầu trời, Mây, Kiến trúc.
> * **Vùng Mặt Nước & Bờ Thuyền (50% - 60% H):** Thuyền người chơi (vị trí 55% H).
> * **Vùng Lòng Nước Sâu (60% - 90% H):** Đá ngầm, rong rêu, san hơ, bóng cá bơi.
```
+-------------------------------------------------------+  0% Height
|  [TOP UI: EXP / Currency / Weather Icon / Settings]   |
|-------------------------------------------------------| 12% Height
|                                                       |
|             KHUNG CẢNH NỀN PHÍA SAU (45%)             |
|   (Bầu trời, Mây, Đồi núi, Mặt trời / Mặt trăng)      |
|                                                       |
|=======================================================| 50% Height
|             ĐƯỜNG BỜ NƯỚC & THUYỀN (10%)              |
|        [Nhân vật đứng trên Thuyền / Bè câu]          |
|-------------------------------------------------------| 60% Height
|             LÒNG NƯỚC SÂU UNDERWATER (30%)            |
|       (Rêu đá, San hơ, Bóng cá bơi dọc màn hình)      |
|                                                       |
|=======================================================| 90% Height
|  [BOTTOM UI: Skill Buttons / Cast / Reel / Rod Status]|
+-------------------------------------------------------+ 100% Height
```
### Bảng Thiết Kế Chi Tiết 20 Map
| STT | Tên Map | Tông Màu | Background (12%-50% H) | Mây & Sky (12%-30% H) | Cảnh Quan Đáy Nước (60%-90% H) |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1 | **Sông Vang Rồng Cổ** | Cam Đất - Xanh | Núi đá vôi nhấp nhô sương, rừng trúc dạt 2 bên. | Mây mỏng trắng xốp, trời lam nhạt nắng sớm. | Cát vàng rải rác đá cuội tròn, rễ cổ thụ cắm xuống. |
| 2 | **Hồ Băng Cửu Âm** | Xanh Lam - Tuyết | Dãy núi tuyết trùng điệp nhọn, rừng thông phủ tuyết. | Bầu trời xanh băng, mây bão tuyết cuộn xoay. | Khối băng vĩnh cửu đâm từ đáy lên, tuyết chìm rải rác. |
| 3 | **Biển Cạn San Hơ** | Xanh Ngọc - Cát | Quần đảo đá vôi nhỏ, ngọn hải đăng trắng viền đỏ. | Sky xanh hoàng hôn pha cam, mây ửng hồng. | Rạn san hơ đa sắc (đỏ, tím), sao biển & vỏ hàu bám đá. |
| 4 | **Vực Hư Không Tinh Hà** | Tím Thẫm - Neon | Thung lũng đá tinh thể tím, đá lơ lửng không đáy. | Sky đêm dải ngân hà lấp lánh, cực quang tím xanh. | Tinh thể thạch anh sáng tím, khe nứt dạ quang. |
| 5 | **Đầm Lầy Độc Toxic** | Xanh Chuối - Rêu | Rừng cây mục nát quăn queo, chòi gỗ xập xệ. | Bầu trời u tối mù sương mờ xanh mạ, mây xám đè. | Đáy bùn đục ngầu sủi bọt khí, thân cây đao chìm rêu. |
| 6 | **Hồ Dung Nham Hỏa Ngục** | Đỏ Cam - Đen | Dãy núi lửa phun khói, vách đá đen chảy đường lava. | Sky đỏ thẫm bão tro bụi, mây đen cuộn ngọn lửa cam. | Đá dung nham nóng đỏ rực, các dòng magma chảy ngầm. |
| 7 | **Thủy Cung Atlantis** | Xanh Lam - Vàng Kim | Cột đá cẩm thạch vỡ cổ kính, đền Hy Lạp chìm. | Sunrays vệt sáng nắng chiếu xuyên mặt nước. | Đền cổ phủ tảo biển, rương kho báu bám đầy vỏ hàu. |
| 8 | **Đảo Cướp Biển Skull** | Nâu Đất - Xanh | Núi đá hình đầu lâu khổng lồ, xác tàu mắc kẹt. | Sky bão giông mây đen chẻ đôi tia sét vàng chói. | Xác tàu gỗ chìm nứt đôi, pháo đồng & tiền vàng rơi. |
| 9 | **Thác Nước Tiên Cảnh** | Hồng Phấn - Ngọc | Thác nước trắng xóa đổ từ núi cao mờ sương hồng. | Sky xanh ngọc mỏng manh, mây hồng hình cánh hoa. | Thảm cỏ nước mềm mại, đá thạch anh hồng phát sáng. |
| 10 | **Vùng Biển Sâu Deep** | Xanh Đen - Dạ Quang | Vực sâu thăm thẳm không đáy, rãnh núi tối om. | Tối đen hoàn toàn, chỉ có sáng từ phao & cá dạ quang. | Đáy vực đá đen nứt nẻ, sinh vật thân mềm dạ quang. |
| 11 | **Hồ Trúc Nhàn Lâm** | Xanh Mạ - Vàng Cát | Đồi trúc xanh bạt ngàn lay động, mái đình ẩn hiện. | Sky lam nhạt thanh bình, mây trắng như dải lụa. | Đáy sỏi trắng tinh khôi, lá trúc rơi lơ lửng chìm. |
| 12 | **Thành Phố Cyber 2077** | Hồng Neon - Cyan | Tòa nhà cao tầng phát đèn LED, cầu vượt viễn tưởng. | Sky đêm đỏ tía mưa neon, mây đen dạ quang tím. | Dây cáp quang rỉ sét chìm đáy, phế liệu máy móc. |
| 13 | **Vùng Băng Nam Cực** | Trắng Tuyết - Băng | Tảng băng trôi khổng lồ như lâu đài xa xa. | Sky cực quang xanh da trời nhạt, mây băng trong. | Hang đá băng xanh lam trong suốt, vỏ ốc băng giá. |
| 14 | **Hồ Sen Hoàng Cung** | Đỏ Son - Hoàng Gia | Cung điện mái uốn mạ vàng, cầu ô thước bắc qua. | Sky chiều đỏ ngọc pha tím, mây ngũ sắc trôi chậm. | Rễ sen quấn quít, lá sen tròn che mát, bình sứ cổ. |
| 15 | **Sa Mạc Ảo Vọng Oasis** | Vàng Cát - Cam | Đồi cát mênh mông uốn lượn, tàn tích kim tự tháp. | Sky nắng gắt vàng chói, mây vệt gió thổi sa mạc. | Đáy cát vàng gợn sóng мел, vỏ xương cổ đại ngụy trang. |
| 16 | **Rừng Nguyên Sinh** | Xanh Thẫm - Nâu | Thảm rừng rậm rạp nhiều tầng, dây leo quấn vách. | Sky nhiệt đới ẩm ướt, mây mưa tích tụ cuồn cuộn. | Dây leo chìm dưới nước, thảm lá mục đỏ & gốc đại thụ. |
| 17 | **Hồ Núi Lửa Bão Sét** | Tím Đen - Vàng | Núi đá đen sương mù phủ, trụ điện cao thế cổ cắm. | Sky bão điện tím ngắt, tia sét chẻ đôi không trung. | Đáy đá kim loại bọc điện tích, bọt khí giật điện. |
| 18 | **Vườn Tiên Elven Woods** | Xanh Bích - Vàng | Cổ thụ khổng lồ phát sáng lá ngọc, đền đá trắng. | Sky dạ quang lung linh hạt tiên, mây xanh mạ dịu. | Thảm nấm phát sáng dạ quang, hoa thủy sinh nở rộ. |
| 19 | **Đền Cổ Maya Thần Biển** | Xanh Biển - Nâu | Kim tự tháp Maya đá phủ rêu, tượng thần đá to. | Sky u tối mù sương hoàng hôn, mây xám bao phủ. | Tượng thần đá nứt chìm đáy, phiến đá chạm khắc cổ. |
| 20 | **Biển Ngân Hà Vũ Trụ** | Tím Đen - Hồng Neon | Các hành tinh tí hon lơ lửng, vành đai thiên thể. | Sky không gian vô tận đầy sao, mây tinh vân. | Đá thiên thạch rơi chìm, bụi vũ trụ tím lơ lửng. |
---
## VII. THỜI TIẾT ĐA DẠNG & HIỆU ỨNG TỶ LỆ
| STT | Thời Tiết | Hiệu Ứng Visual (VFX màn hình 9:16) | Hiệu Ứng Âm Thanh | Ảnh Hưởng Gameplay |
| ----- | ----- | ----- | ----- | ----- |
| 1 | **Bão Sét Điện Vũ** | Tia sét chẻ dọc màn hình, mưa nghiêng 45 độ, chớp sáng trắng. | Tiếng sấm vang gầm ừ, mưa dồn dập vào mạn thuyền. | Lực kéo +30%, đứt dây +20%. Cá Lôi cắn mồi +50%. |
| 2 | **Bão Tuyết Đóng Băng** | Hạt tuyết thổi tạt ngang, viền màn hình đóng lớp băng mỏng. | Tiếng gió hú rít lạnh lẽo, tiếng băng nứt tạch tạch. | Tốc độ cuộn cước -25%. Khóa đếm ngược minigame +2s. |
| 3 | **Mù Sương Đêm Tối** | Dải sương mù che **70% tầm nhìn** mặt nước, phao phát sáng mờ. | Tiếng gió thổi đìu hiu, sóng vỗ nhẹ róc rách. | Nhìn không rõ bóng cá. +40% Giá trị tiền bán cá đêm. |
| 4 | **Mưa Dung Nham Tro** | Than hồng nổ rơi từ trên xuống, mặt nước bốc khói xám bọt nổ. | Tiếng lửa cháy xèo xèo, bọt khí magma ục ục. | Mồi câu hỏng sau 10s nếu không cắn. Cá Hỏa +60%. |
| 5 | **Nắng Rực Rỡ** | Tia sáng Sunbeams chiếu chéo từ góc trên xuống lòng nước. | Tiếng chim biển hót, tiếng sóng nhẹ nhàng êm dịu. | Nhìn rõ bóng cá & độ nặng. Tốc độ cắn mồi +20%. |
| 6 | **Mưa Hoa Đào Tiên** | Cánh hoa đào hồng lơ lửng rơi chậm từ đỉnh xuống mặt nước. | Tiếng sáo trúc du dương tĩnh lặng nhẹ nhàng. | Tự hồi 2% thể lực/s. +15% Tỉ lệ xuất hiện cá Hiếm. |
| 7 | **Bão Mực Hắc Ám** | Mực đen bắn mờ màn hình, nước chuyển sang màu tím đen đục. | Tiếng nước sủi bọt ùng ục, tiếng bạch tuộc quạt vòi. | Ngược phím điều khiển (Trái thành Phải). Dây -5%/s. |
| 8 | **Mưa Sao Băng** | Vệt sao băng vút nhanh từ trên xuống, bắn dải bụi Stardust. | Tiếng ngân chuông ma thuật trong trẻo, tiếng vút gió. | Kích hoạt "Vô Cực": 100% giật câu thành công (15s). |
