// Hiệu ứng hoa rơi
for (let i = 0; i < 50; i++) {
    let snow = document.createElement('div');
    snow.classList.add('snow');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.animationDuration = Math.random() * 3 + 3 + 's';
    document.body.appendChild(snow);
}

// Hiển thị lời chúc ngẫu nhiên khi bấm nút và phóng các ô vuông ra
const greetings = [
    "Chúc cậu luôn xinh đẹp và thành công!",
    "Chúc cậu có ngày 20/10 thật vui vẻ!",
    "Cậu là bông hoa đẹp nhất, luôn rạng ngời nhé!",
    "Cảm ơn cậu đã luôn mạnh mẽ và đáng yêu!",
    "Chúc mọi điều tốt lành nhất sẽ đến với cậu hôm nay và mãi về sau!",
    "Chúc cậu có một ngày 20/10 thật nhiều niềm vui và tiếng cười!",
    "Cậu xứng đáng với tất cả những điều tuyệt vời nhất trong cuộc sống!",
    "Chúc cậu mãi hạnh phúc và thành công trên con đường mình chọn!",
    "Cảm ơn cậu đã mang lại sắc màu cho cuộc sống của mọi người!",
    "Chúc cậu luôn rạng ngời như ánh mặt trời!",
    "Chúc cậu gặp nhiều may mắn và bình an trong cuộc sống!",
    "Chúc cậu luôn tự tin và yêu đời!",
    "Chúc mừng ngày phụ nữ Việt Nam!",
    "Cậu là niềm tự hào của gia đình và những người xung quanh!",
    "Chúc cậu luôn mạnh mẽ và kiên cường trước mọi thử thách!",
    "Hãy luôn giữ nụ cười tươi đẹp trên môi nhé!",
    "Chúc cậu luôn được yêu thương và trân trọng!",
    "Mong cậu có những khoảnh khắc đáng nhớ bên người thân yêu!",
    "Chúc cậu luôn là ngọn lửa ấm áp trong lòng mọi người!",
    "Mọi điều tốt đẹp nhất đang chờ cậu phía trước, hãy vững bước nhé!",
    "Chúc cậu thành công trong mọi việc cậu làm!",
    "Cảm ơn cậu vì đã luôn mang lại nguồn cảm hứng cho những người xung quanh!",
    "Chúc cậu có những khoảnh khắc thật vui vẻ và hạnh phúc hôm nay!",
    "Cậu là nguồn sức mạnh và niềm tin của rất nhiều người, chúc cậu thành công!",
    "Chúc cậu luôn được yêu thương và có một cuộc sống viên mãn!",
    "Cậu là người phụ nữ tuyệt vời, chúc cậu luôn rạng ngời và hạnh phúc!",
    "Cậu là một người rất tuyệt vời",
    "Chúc cậu sẽ luôn là chính cậu, không bị ảnh hưởng bởi bất cứ ai!",
    "Mong cậu luôn kiên trì theo đuổi ước mơ của mình",
    "Hãy luôn là người phụ nữ xinh đẹp và mạnh mẽ nhất!",
    "Hãy luôn kiên cường và vững vàng trước mọi khó khăn!",
    "Hãy là hậu phương vững chắc của mọi người",
    "Cố gắng theo đuổi đam mê nhé!",
    "Hãy yêu bản thân nhiều hơn",
    "Không ngần ngại thử thách bản thân",
    "Cười mỗi ngày nhé!",
    "Hãy luôn là người con ngoan của gia đình",
    "Chúc cậu gặp 20 khách/ngày",
    "Chúc cậu sau này mở chi nhánh gấp 10 lần Mailisa",
    "Chúc cậu trúng vé số 2 tỷ",
    "Mai đi đường nhặt được tiền",
    "Nếu mệt quá thì uống nước cam nhé, không đỡ mệt đâu nhưng nó ngon",
    "Luôn nhớ phải ăn sáng nhé",
    "Lớn rồi bắt nạt cháu ít thôi"
];

document.getElementById('btn-greetings').addEventListener('click', function() {
    //Xóa nút nhận lời chúc
    document.getElementById('btn-greetings').style.display = 'none';
});
// Các vị trí đã sử dụng để tránh chồng chéo
const usedPositions = [];

// Hàm để kiểm tra vị trí ngẫu nhiên không bị chồng lấn
function getRandomPosition() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let position;
    let overlap;

    do {
        overlap = false;
        const x = Math.floor(Math.random() * (screenWidth - 100)); // Trừ bớt 100 để tránh ô vuông vượt màn hình
        const y = Math.floor(Math.random() * (screenHeight - 100));

        // Kiểm tra nếu vị trí này đã được sử dụng
        position = { x, y };

        // Kiểm tra nếu vị trí bị trùng
        for (let i = 0; i < usedPositions.length; i++) {
            const usedPos = usedPositions[i];
            const distance = Math.sqrt(Math.pow(position.x - usedPos.x, 2) + Math.pow(position.y - usedPos.y, 2));
            if (distance < 100) { // Khoảng cách tối thiểu để tránh chồng chéo
                overlap = true;
                break;
            }
        }
    } while (overlap);

    usedPositions.push(position);
    return position;
}

// Tạo 20 ô vuông tại các vị trí ngẫu nhiên và xuất hiện dần trong 3 giây
document.getElementById('btn-greetings').addEventListener('click', function() {
    const squareContainer = document.createElement('div');
    squareContainer.id = 'square-container';
    document.body.appendChild(squareContainer);
    
    // Thời gian tổng cộng là 3 giây, mỗi ô sẽ xuất hiện sau một khoảng thời gian
    const totalSquares = 44;
    const totalDuration = 3000; // 3 giây
    const interval = totalDuration / totalSquares; // Khoảng thời gian giữa mỗi ô

    // Tạo 20 ô vuông
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = greetings[Math.floor(Math.random() * greetings.length)];
        
        // Lấy vị trí ngẫu nhiên không chồng chéo
        const position = getRandomPosition();

        // Đặt vị trí cho ô vuông
        square.style.left = position.x + 'px';
        square.style.top = position.y + 'px';
        square.style.opacity = 0; // Ban đầu ẩn

        // Thêm ô vuông vào container
        squareContainer.appendChild(square);

        // Sử dụng setTimeout để xuất hiện dần
        setTimeout(() => {
            square.style.opacity = 1;
        }, i * interval); // Mỗi ô sẽ xuất hiện dần sau khoảng thời gian nhất định

        setTimeout(() => {
            square.remove(); // Xóa từng ô sau khi đã hiển thị
        }, totalDuration + 11000); // Hiển thị ô trong 3 giây sau khi xuất hiện
    
    }
    setTimeout(() => {
        document.getElementById('gift-container').style.display = 'block';
        }, totalDuration + 11000); // Hiện nút sau khi tất cả ô vuông đã bị xóa
});



const letterText = "Chào cậu, năm nay thì tớ chẳng chuẩn bị hoa gì đâu. Mà hoa thì chắc cậu cũng nhận nhiều rồi, nhưng tớ cá chắc là chưa ai tặng thứ này cho cậu đâu nhỉ. Đây là lần đầu tớ viết một trang web hoàn chỉnh (nên có khá nhiều sai sót) và tớ đã dành khá nhiều tâm huyết vào đây nên mong cậu hãy vui vẻ đón nhận nhé, dù nó chưa được tuyệt vời lắm (theo ý cá nhân của tớ). Chúc thì tớ đã chúc rất nhiều ở trước đó rồi nên...ummm, chúc mừng ngày phụ nữ Việt Nam.";

document.getElementById('gift-image').addEventListener('click', function() {
    this.style.display = 'none';
    
    const letter = document.getElementById('letter');
    letter.style.display = 'block';
    
    // Gọi hàm typeWriterEffect
    typeWriterEffect(letterText, 'letter-content', 100);
});

// Cập nhật hàm typeWriterEffect để hiển thị nút sau khi gõ xong
function typeWriterEffect(text, elementId, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        } else {
            // Hiển thị nút sau khi hoàn tất việc gõ
            document.getElementById('action-buttons').style.display = 'flex';
        }
    }

    type();
}
document.getElementById('btn-feedback').addEventListener('click', function() {
    document.getElementById('center-textarea').style.display = 'block'; 
});

document.getElementById('btn-dance').addEventListener('click', function() {
    console.log("Dance button clicked!"); // Debugging line
    document.getElementById('letter-background').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Ngăn chặn hành động mặc định của form
        event.preventDefault();

        // Hiển thị thông báo gửi thành công
        alert('Trang web đến đây là hết, hãy tắt tab này đi và bấm lại đường link để chạy lại trang web.');

        // Gửi form đến Formspree
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Xóa nội dung của các trường trong form
                form.reset();
            } else {
                alert('Đã xảy ra lỗi. Vui lòng thử lại.');
            }
        })
        .catch(error => {
            alert('Đã xảy ra lỗi. Vui lòng thử lại.');
            console.error('Error:', error);
        });
    });
});









