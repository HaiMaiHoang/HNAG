const map = L.map('map').setView([20.9836, 105.7875], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let markers = [];

const places = [
  { name: "Bún bò huế An Cựu - Duy Tân", lat: 20.98411, lon: 105.78643, type: "Quán ăn", address: "Ngõ 36 Duy Tân (37 Cốm Vòng), P. Dịch Vọng Hậu, Cầu Giấy, Hà Nội." },
  { name: "Quán Bún Đậu Mắm Tôm Mỗ Lao", lat: 20.98329, lon: 105.78594, type: "Quán ăn", address: "38 Mỗ Lao, Hà Đông" },
  { name: "Phở 24 Mỗ Lao", lat: 20.98360, lon: 105.78720, type: "Quán ăn", address: "80 Mỗ Lao, Hà Đông" },
  { name: "Bánh Mì Chảo Mỗ Lao", lat: 20.98383, lon: 105.78802, type: "Quán ăn", address: "12 Mỗ Lao, Hà Đông" },
  { name: "Nhà Hàng Mỗ Lao Garden", lat: 20.98427, lon: 105.78674, type: "Nhà hàng", address: "15 Mỗ Lao, Hà Đông" },
  { name: "Nhà Hàng Sen Việt", lat: 20.98365, lon: 105.78612, type: "Nhà hàng", address: "50 Mỗ Lao, Hà Đông" },
  { name: "Nhà Hàng Hải Sản Mỗ Lao", lat: 20.98398, lon: 105.78555, type: "Nhà hàng", address: "65 Mỗ Lao, Hà Đông" },
  { name: "Nhà Hàng Hoa Lâm Viên", lat: 20.98312, lon: 105.78488, type: "Nhà hàng", address: "72 Mỗ Lao, Hà Đông" },
  { name: "Cafe Mỗ Lao Coffee", lat: 20.98485, lon: 105.78650, type: "Cafe", address: "27 Mỗ Lao, Hà Đông" },
  { name: "Highlands Coffee", lat: 20.98460, lon: 105.78710, type: "Cafe", address: "35 Mỗ Lao, Hà Đông" },
  { name: "Trần Coffee", lat: 20.98390, lon: 105.78730, type: "Cafe", address: "55 Mỗ Lao, Hà Đông" },
  { name: "The Coffee House", lat: 20.98410, lon: 105.78800, type: "Cafe", address: "44 Mỗ Lao, Hà Đông" },
  { name: "Ding Tea", lat: 20.98420, lon: 105.78690, type: "Trà sữa", address: "30 Mỗ Lao, Hà Đông" },
  { name: "Tocotoco", lat: 20.98375, lon: 105.78750, type: "Trà sữa", address: "40 Mỗ Lao, Hà Đông" },
  { name: "Royaltea", lat: 20.98380, lon: 105.78680, type: "Trà sữa", address: "50 Mỗ Lao, Hà Đông" },
  { name: "Bobapop", lat: 20.98360, lon: 105.78780, type: "Trà sữa", address: "60 Mỗ Lao, Hà Đông" },
  { name: "Ăn Vặt Mỗ Lao", lat: 20.98400, lon: 105.78550, type: "Ăn vặt", address: "20 Mỗ Lao, Hà Đông" },
  { name: "Ăn Vặt Quán Xinh", lat: 20.98350, lon: 105.78590, type: "Ăn vặt", address: "45 Mỗ Lao, Hà Đông" },
  { name: "Ăn Vặt Bé Bé", lat: 20.98370, lon: 105.78640, type: "Ăn vặt", address: "37 Mỗ Lao, Hà Đông" },
  { name: "Ăn Vặt Nhà Làm", lat: 20.98450, lon: 105.78740, type: "Ăn vặt", address: "18 Mỗ Lao, Hà Đông" },
  { name: "Buffet Nhà Hàng Mỗ Lao", lat: 20.98390, lon: 105.78700, type: "Buffet", address: "55 Mỗ Lao, Hà Đông" },
  { name: "Buffet Lẩu Nướng", lat: 20.98330, lon: 105.78660, type: "Buffet", address: "33 Mỗ Lao, Hà Đông" },
  { name: "Buffet Hải Sản", lat: 20.98410, lon: 105.78580, type: "Buffet", address: "29 Mỗ Lao, Hà Đông" },
  { name: "Buffet Mỗ Lao", lat: 20.98440, lon: 105.78620, type: "Buffet", address: "41 Mỗ Lao, Hà Đông" },
  { name: "Quán Nhậu 24/7", lat: 20.98420, lon: 105.78730, type: "Nhậu", address: "53 Mỗ Lao, Hà Đông" },
  { name: "Quán Nhậu Ngon", lat: 20.98370, lon: 105.78760, type: "Nhậu", address: "61 Mỗ Lao, Hà Đông" },
  { name: "Quán Nhậu Bình Dân", lat: 20.98310, lon: 105.78710, type: "Nhậu", address: "38 Mỗ Lao, Hà Đông" },
  { name: "Quán Nhậu Quê Nhà", lat: 20.98350, lon: 105.78680, type: "Nhậu", address: "26 Mỗ Lao, Hà Đông" }
];


function clearMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];
}

function showPlaces(type = null) {
  clearMarkers();
  if (!type) {
    map.setView([20.9836, 105.7875], 16);
    return;
  }
  let filtered = places.filter(p => p.type.toLowerCase() === type.toLowerCase());
  filtered.forEach(addMarker);
  if (filtered.length > 0) {
    const first = filtered[0];
    map.setView([first.lat, first.lon], 17);
  }
}

const filterButtons = document.querySelectorAll('#filter-buttons button[data-type]');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.getAttribute('data-type');
    showPlaces(type);
  });
});

const searchInput = document.getElementById('search-input');
const headerSearch = document.getElementById('header-search');

function searchPlaceByName(query) {
  clearMarkers();
  if (!query) {
    map.setView([20.9836, 105.7875], 16);
    return;
  }
  const q = query.toLowerCase();
  const matched = places.filter(p => p.name.toLowerCase().includes(q));
  if (matched.length === 0) {
    alert('Không tìm thấy địa điểm phù hợp');
    return;
  }
  matched.forEach(addMarker);
  map.setView([matched[0].lat, matched[0].lon], 17);
}

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    searchPlaceByName(searchInput.value.trim());
  }
});

headerSearch.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = headerSearch.value.trim();
    searchInput.value = val;
    searchPlaceByName(val);
  }
});

showPlaces();

function addMarker(place) {
  const marker = L.marker([place.lat, place.lon]).addTo(map);

  marker.on('click', () => {
  const popup = document.getElementById('fixed-popup');
  if (place.name === "Bún bò huế An Cựu - Duy Tân") {
    popup.innerHTML = `
      <img src="https://dienmaynewsun.com/wp-content/uploads/2023/09/mo-quan-com-nieu-1.jpg" alt="Ảnh quán">
      <h3>${place.name}</h3>
      <div class="address">📍 ${place.address}</div>
      <div class="rating">⭐ 5.0/5.0</div>
      <div class="description">Bún Bò Huế An Cựu - Duy Tân là một món ăn đường phố nổi tiếng ở Huế, tỉnh Thừa Thiên Huế, Việt Nam. Bún Bò Huế là một loại bún có sợi mỏng, thường được phục vụ với thịt bò và nước dùng màu đỏ sáng.</div>

      <div class="button-group" style="margin-top: 12px;">
        <button id="btn-directions" style="margin-right: 8px;">Chỉ đường</button>
        <button id="btn-favorite" style="margin-right: 8px;">Ưa thích</button>
        <button id="btn-visit-website">Đến trang quán</button>
      </div>

      <div class="review-section">
        <h4>Review</h4>
        <div class="review-score">
          <div class="score-number">5.0</div>
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <div class="total">200 đánh giá</div>
        </div>
        <div class="review-bars">
          <div><strong>5</strong> <div class="bar bar-5"></div></div>
          <div><strong>4</strong> <div class="bar bar-4"></div></div>
          <div><strong>3</strong> <div class="bar bar-3"></div></div>
          <div><strong>2</strong> <div class="bar bar-2"></div></div>
          <div><strong>1</strong> <div class="bar bar-1"></div></div>
        </div>
        <button class="write-review-btn">Viết đánh giá</button>
        <div class="review-detail">
          <strong>Anonymous đã đánh giá</strong><br>
          ⭐⭐⭐⭐⭐<br>
          <p>Điểm quán rõ sạch sẽ không gian kiểu nhà Việt cổ.<br>
          Quán có không gian tầng 1 thoáng mát lịch sự, anh nhân viên khá thân thiện, order và lên món nhanh.<br>
          Món phở rất thơm, nạp vị nước vừa vặn, đầy đặn lượng thịt lớn mềm mại. Giá dao động 60-70K, đáng để trải nghiệm.<br>
          Tôi thích nhất có thể gọi thêm lòng dê thêm lưỡi để đổi món mà vẫn phù hợp khẩu vị chung gia đình.</p>
        </div>
      </div>
    `;

    // Thêm sự kiện cho 3 nút:
    document.getElementById('btn-directions').onclick = () => {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;
      window.open(url, '_blank');
    };
    document.getElementById('btn-favorite').onclick = () => {
      addFavoritePlace(place);
      alert(`Đã thêm "${place.name}" vào ưa thích!`);
    };
    document.getElementById('btn-visit-website').onclick = () => {
      // Thay URL trang quán theo thực tế, ví dụ tạm:
      window.open('quan.html', '_blank');
    };
  } else {
    popup.innerHTML = `
      <h3>${place.name}</h3>
      <div class="type">🍽️ ${place.type}</div>
      <div class="address">📍 ${place.address}</div>
    `;
  }
  popup.classList.remove('hidden');
});

  markers.push(marker);
}

map.on('click', () => {
  document.getElementById('fixed-popup').classList.add('hidden');
});

function addFavoritePlace(place) {
  let favorites = JSON.parse(localStorage.getItem('favoritePlaces') || '[]');
  if (!favorites.some(p => p.name === place.name)) {
    favorites.push(place);
    localStorage.setItem('favoritePlaces', JSON.stringify(favorites));
  }
}



