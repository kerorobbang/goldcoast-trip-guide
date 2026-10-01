
(function(){
var LANG=window.APP_LANG||'ko',TRIP='2026-10-04';
var P={
central:{n:'Brisbane Central Station',lat:-27.46585,lng:153.02584,ic:'🚆',type:'transport'},
boggo:{n:'Boggo Road station',lat:-27.49389,lng:153.03028,ic:'🚌',type:'transport'},
helensvale:{n:'Helensvale station',lat:-27.92541,lng:153.33897,ic:'🚋',type:'transport'},
burleigh:{n:'Burleigh Heads',lat:-28.09034,lng:153.45840,ic:'🏊',type:'tour'},
southport:{n:'Southport station',lat:-27.96767,lng:153.41373,ic:'🔁',type:'transport'},
charis:{n:'Charis Seafoods / Labrador',lat:-27.94134,lng:153.40872,ic:'🍤',type:'tour'},
surfers:{n:'Surfers Paradise',lat:-28.00629,lng:153.42912,ic:'🏙️',type:'tour'},
skypoint:{n:'SkyPoint Observation Deck',lat:-28.00628,lng:153.42975,ic:'🌇',type:'tour'},
rick:{n:'Rick Shores',lat:-28.08945,lng:153.45473,ic:'🍽️',type:'tour'}};

var D={
ko:{
title:'골드코스트 당일 여행 가이드',eyebrow:'당일치기 · 수영 + 점심 + 전망 + 저녁',intro:'OpenStreetMap, GPS 현재 위치, 승·하차, 관광 포인트를 휴대폰 한 페이지에 모았습니다.',s1:'Central 출발 권장',s2:'Burleigh 도착 목표',s3:'Rick Shores',
alert:'10월 4일 Gold Coast/Beenleigh선 공사로 Varsity Lakes ↔ Boggo Road 구간은 railbus 대체 운행입니다. 기본 동선은 Central → Boggo Road → R772 → Helensvale → L1 입니다.',alertLink:'공사 안내',
preview:'여행 미리보기',today:'지금 해야 할 일',ended:'여행 종료',ready:'준비',done:'완료',minutes:'분',next:'다음 목적지',gpsHint:'GPS를 켜면 현재 위치와 다음 목적지까지 거리가 계속 갱신됩니다.',gpsOn:'내 위치 켜기',google:'Google 길찾기',translink:'Translink',focusNext:'다음 목적지',
mapTitle:'실제 지도',mapTiny:'OpenStreetMap · 실시간 GPS',wholeRoute:'전체 동선',gpsOff:'GPS 꺼짐',gpsSecure:'HTTPS에서 위치 권한을 허용하세요.',track:'위치 추적',followOn:'따라가기 ON',followOff:'따라가기 OFF',transport:'교통',tourism:'관광',myLoc:'내 위치',whereLabel:'현재 위치',speed:'이동 속도',near:'인근',from:'에서',arrival:'도착권역',toNext:'다음 목적지까지',
schedule:'현실화한 일정표',schedTiny:'파랑=교통 · 주황=관광',places:'장소별 무엇을 할지',placesTiny:'주황 카드 = 관광',transportDetail:'승·하차 상세',transportTiny:'파랑 카드 = 교통',takeAt:'타는 곳',takeWhat:'타는 것',getOff:'내리는 곳',dayLinks:'당일 체크 링크',dayTiny:'출발 직전 다시 확인',map:'지도',scheduleNav:'일정',placesNav:'관광',transportNav:'교통',nowNav:'지금',
footer:'지도 경로선은 여행 순서를 보여주는 안내선입니다. 실제 출발시각·플랫폼·운행변경은 Translink와 현장 안내가 우선입니다. GPS는 페이지가 화면에 열려 있을 때 가장 안정적으로 갱신됩니다.',dirs:['북','북동','동','남동','남','남서','서','북서'],gpsChecking:'현재 위치 확인 중…',gpsUnavailable:'GPS 사용 불가',gpsUnsupported:'이 브라우저는 위치 기능을 지원하지 않습니다.',gpsHttps:'GPS는 HTTPS에서만 안정적으로 동작합니다.',
schedules:[
['06:45','07:05','Central → Boggo Road','TRAIN','train','Central에서 Boggo Road까지 남행 열차. 전광판에서 Boggo Road 정차를 확인.','boggo','transport'],
['07:05','07:30','R772 승차 준비','TRANSFER','railbus','Boggo Road busway에서 R772 표지 확인. 공사일 대기시간 포함.','boggo','transport'],
['07:30','08:58','R772 → Helensvale','R772','railbus','Rail Replacement Bus. 공사일에는 약 85분 수준을 예상.','helensvale','transport'],
['09:00','10:05','L1 → Burleigh Heads','L1','tram','Helensvale에서 Burleigh Heads 방향 G:link L1 직통.','burleigh','transport'],
['10:05','11:20','Burleigh Beach 수영','SWIM','fun','빨강·노랑 깃발 사이에서 수영. 샤워·환복 포함.','burleigh','tour'],
['11:25','12:10','L1 → Southport','L1','tram','Burleigh에서 Helensvale 방향 L1, Southport 하차.','southport','transport'],
['12:10','12:35','704 → Labrador','704','bus','Southport에서 704 Helensvale 방향. Charis 인근에서 하차.','charis','transport'],
['12:35','13:20','Charis Seafoods 점심','LUNCH','fun','피시앤칩스 중심으로 빠르게 점심. 13:20 전후 수변으로 이동.','charis','tour'],
['13:30','13:45','Pelican Feeding','PELICAN','fun','Charis 앞 Broadwater 수변. 현장 시작 시각은 당일 확인.','charis','tour'],
['13:50','14:35','704 + L1 → Surfers','704+L1','bus','704 Sea World 방향 → Southport → L1 Burleigh Heads 방향.','surfers','transport'],
['14:35','16:15','Surfers Paradise 자유시간','WALK','fun','해변 산책, Cavill Avenue, 카페·쇼핑 위주.','surfers','tour'],
['16:20','18:00','SkyPoint','VIEW','fun','낮 풍경부터 일몰 전후까지.','skypoint','tour'],
['18:05','18:55','L1 → Burleigh + 도보','L1','tram','Surfers에서 Burleigh Heads 방향 L1 → Rick Shores 도보.','rick','transport'],
['19:00','20:15','Rick Shores 저녁','DINNER','fun','해변 전망 저녁. 귀가 railbus 때문에 20:15 전후 마무리 권장.','rick','tour'],
['20:20','21:30','L1 → Helensvale','L1','tram','Burleigh Heads에서 Helensvale 방향.','helensvale','transport'],
['21:30','23:10','R772 + 환승 대기','R772','railbus','Helensvale에서 Boggo Road 방향. 야간 운행은 당일 재확인.','boggo','transport'],
['23:10','23:45','Boggo Road → Central','TRAIN','train','연결 열차에 따라 Central 도착은 약 23:15~23:45 예상.','central','transport']],
places:[
['burleigh','Burleigh Heads','골드코스트다운 바다 수영과 헤드랜드 풍경을 한 번에 보기 좋은 곳. 곶 쪽은 비교적 차분해 보일 수 있지만 당일 파도와 이안류를 반드시 확인.',['빨강·노랑 깃발 사이 수영','해변 샤워·환복','Headland 짧은 산책','해변 사진']],
['charis','Charis Seafoods + Broadwater','Labrador 수변에서 피시앤칩스를 먹고 펠리컨 피딩을 보기 좋은 정류점. Broadwater 쪽이라 오픈비치보다 분위기가 잔잔함.',['12:35 점심','피시앤칩스','13:30 전후 Pelican Feeding','수변 산책']],
['surfers','Surfers Paradise','골드코스트 대표 관광 중심지. 해변, Cavill Avenue, 상점과 카페를 묶어서 짧게 보는 구간.',['해변 산책','Cavill Avenue','카페/쇼핑','Q1 외관 사진']],
['skypoint','SkyPoint','Q1 상층 전망대에서 해안선과 내륙을 한 번에 보는 구간. 낮 풍경부터 일몰, 초저녁까지 이어서 보기 좋음.',['16:20 입장 목표','해안선 전망','일몰 관람','18:00 전후 이동']],
['rick','Rick Shores','Burleigh 해변 바로 앞에서 마무리하는 저녁. 식사 뒤 곧바로 긴 귀가 동선으로 연결.',['19:00 예약 권장','해변 전망','20:15 전후 마무리','귀가 R772 재확인']]],
legs:[
['Central → Boggo Road','15~20분','TRAIN','train','Brisbane Central Station','남행 열차 · Boggo Road 하차','Boggo Road station','10월 4일 Gold Coast선 직통열차 대신 Boggo Road에서 railbus 환승.','central','boggo'],
['Boggo Road → Helensvale','약 85분 + 대기','R772','railbus','Boggo Road busway station','R772 Rail Replacement Bus · Helensvale 방향','Helensvale station','가장 중요한 환승. 임시 승차 위치는 현장 R772 표지와 직원 안내 우선.','boggo','helensvale'],
['Helensvale → Burleigh Heads','60~65분','L1','tram','Helensvale G:link','L1 · Burleigh Heads 방향','Burleigh Heads','직통 이동. 도착 후 해변 쪽으로 이동.','helensvale','burleigh'],
['Burleigh → Southport','40~45분','L1','tram','Burleigh Heads','L1 · Helensvale 방향','Southport station','Southport에서 704번 버스로 환승.','burleigh','southport'],
['Southport → Charis','15~25분','704','bus','Southport 인근 704 정류장','704 · Helensvale 방향','Labrador / Charis 인근','Charis는 트램에서 떨어져 있으므로 704 환승 필요.','southport','charis'],
['Charis → Surfers','40~50분','704 + L1','bus','Labrador / Marine Pde','704 Sea World 방향 → Southport → L1 남행','Surfers Paradise','704로 Southport 복귀 후 L1 Burleigh Heads 방향.','charis','surfers'],
['SkyPoint → Rick Shores','45~50분','L1 + WALK','tram','Surfers Paradise','L1 · Burleigh Heads 방향','Burleigh Heads → Rick Shores 도보','18시 전후 바로 이동하면 19시 식사에 여유.','skypoint','rick'],
['Rick Shores → Central','약 3시간+','L1 + R772 + TRAIN','railbus','Rick Shores → Burleigh Heads','L1 → R772 → Brisbane 열차','Brisbane Central','귀가가 가장 변동성이 큼. Helensvale 도착 전 R772 재확인.','rick','central']]
},
en:{
title:'Gold Coast Day Trip Guide',eyebrow:'Day trip · Swim + Lunch + Views + Dinner',intro:'OpenStreetMap, live GPS, boarding details and sightseeing notes in one mobile guide.',s1:'Leave Central',s2:'Reach Burleigh',s3:'Rick Shores',
alert:'On 4 Oct, rail replacement buses operate between Varsity Lakes and Boggo Road. Planned route: Central → Boggo Road → R772 → Helensvale → L1.',alertLink:'Service update',preview:'Trip preview',today:'What to do now',ended:'Trip finished',ready:'Ready',done:'Done',minutes:' min',next:'Next destination',gpsHint:'Turn on GPS to continuously update your location and distance to the next stop.',gpsOn:'Turn on GPS',google:'Google Maps',translink:'Translink',focusNext:'Next stop',
mapTitle:'Live map',mapTiny:'OpenStreetMap · Live GPS',wholeRoute:'Full route',gpsOff:'GPS off',gpsSecure:'Allow location access on HTTPS.',track:'Track',followOn:'Follow ON',followOff:'Follow OFF',transport:'Transport',tourism:'Sightseeing',myLoc:'My location',whereLabel:'Current location',speed:'Speed',near:'near',from:'from',arrival:'Arrival zone',toNext:'To next stop',
schedule:'Realistic itinerary',schedTiny:'Blue = transport · Orange = sightseeing',places:'What to do at each place',placesTiny:'Orange cards = sightseeing',transportDetail:'Boarding & transfer details',transportTiny:'Blue cards = transport',takeAt:'Board at',takeWhat:'Take',getOff:'Get off at',dayLinks:'Day-of links',dayTiny:'Check again before departure',map:'Map',scheduleNav:'Schedule',placesNav:'Places',transportNav:'Transit',nowNav:'Now',
footer:'Route lines show the trip sequence, not turn-by-turn navigation. Actual departure times, platforms and disruptions from Translink and on-site signs take priority. GPS updates most reliably while this page stays open.',dirs:['N','NE','E','SE','S','SW','W','NW'],gpsChecking:'Finding your location…',gpsUnavailable:'GPS unavailable',gpsUnsupported:'This browser does not support geolocation.',gpsHttps:'GPS works reliably only on HTTPS.',
schedules:[
['06:45','07:05','Central → Boggo Road','TRAIN','train','Take a southbound train and confirm it stops at Boggo Road.','boggo','transport'],
['07:05','07:30','Prepare for R772','TRANSFER','railbus','Follow R772 railbus signs at Boggo Road busway. Buffer included.','boggo','transport'],
['07:30','08:58','R772 → Helensvale','R772','railbus','Rail replacement bus. Allow about 85 minutes on the works day.','helensvale','transport'],
['09:00','10:05','L1 → Burleigh Heads','L1','tram','Direct G:link L1 from Helensvale toward Burleigh Heads.','burleigh','transport'],
['10:05','11:20','Swim at Burleigh Beach','SWIM','fun','Swim between the red-and-yellow flags. Shower and change included.','burleigh','tour'],
['11:25','12:10','L1 → Southport','L1','tram','L1 toward Helensvale, get off at Southport.','southport','transport'],
['12:10','12:35','704 → Labrador','704','bus','Bus 704 toward Helensvale, get off near Charis.','charis','transport'],
['12:35','13:20','Lunch at Charis Seafoods','LUNCH','fun','Quick fish-and-chips lunch, then move to the waterfront.','charis','tour'],
['13:30','13:45','Pelican Feeding','PELICAN','fun','Broadwater waterfront by Charis. Confirm start time on the day.','charis','tour'],
['13:50','14:35','704 + L1 → Surfers','704+L1','bus','704 toward Sea World → Southport → L1 southbound.','surfers','transport'],
['14:35','16:15','Surfers Paradise free time','WALK','fun','Beach walk, Cavill Avenue, cafés and shopping.','surfers','tour'],
['16:20','18:00','SkyPoint','VIEW','fun','Stay from daylight through sunset into early evening.','skypoint','tour'],
['18:05','18:55','L1 → Burleigh + walk','L1','tram','L1 toward Burleigh Heads, then walk to Rick Shores.','rick','transport'],
['19:00','20:15','Dinner at Rick Shores','DINNER','fun','Beachfront dinner. Finish around 20:15 for the railbus trip home.','rick','tour'],
['20:20','21:30','L1 → Helensvale','L1','tram','L1 toward Helensvale.','helensvale','transport'],
['21:30','23:10','R772 + transfer buffer','R772','railbus','Railbus toward Boggo Road. Re-check the evening service.','boggo','transport'],
['23:10','23:45','Boggo Road → Central','TRAIN','train','Depending on the connection, reach Central around 23:15–23:45.','central','transport']],
places:[
['burleigh','Burleigh Heads','A good Gold Coast mix of ocean swimming and headland scenery. Conditions can still be surfy, so check flags and rips on arrival.',['Swim between flags','Shower/change','Short headland walk','Beach photos']],
['charis','Charis Seafoods + Broadwater','A relaxed Broadwater stop for fish and chips and the pelican feeding. The waterfront here feels calmer than the open surf beaches.',['Lunch 12:35','Fish & chips','Pelicans around 13:30','Waterfront walk']],
['surfers','Surfers Paradise','The main tourist hub. Use this block for the beach, Cavill Avenue, cafés and a little shopping.',['Beach walk','Cavill Avenue','Café/shopping','Q1 photos']],
['skypoint','SkyPoint','Q1 observation deck with broad coastal and inland views. Timing is designed for daylight, sunset and early evening.',['Aim for 16:20','Coast panorama','Sunset','Leave around 18:00']],
['rick','Rick Shores','Beachfront dinner at Burleigh to close the day, then transition into the long trip back to Brisbane.',['19:00 booking','Beachfront view','Finish ~20:15','Re-check R772']]],
legs:[
['Central → Boggo Road','15–20 min','TRAIN','train','Brisbane Central Station','Southbound train · Boggo Road stop','Boggo Road station','Gold Coast line is disrupted; transfer to the railbus at Boggo Road.','central','boggo'],
['Boggo Road → Helensvale','~85 min + wait','R772','railbus','Boggo Road busway station','R772 Rail Replacement Bus · Helensvale','Helensvale station','Critical transfer. Follow temporary R772 signs and staff directions.','boggo','helensvale'],
['Helensvale → Burleigh Heads','60–65 min','L1','tram','Helensvale G:link','L1 · Burleigh Heads direction','Burleigh Heads','Direct tram ride, then walk toward the beach.','helensvale','burleigh'],
['Burleigh → Southport','40–45 min','L1','tram','Burleigh Heads','L1 · Helensvale direction','Southport station','Transfer to bus 704 at Southport.','burleigh','southport'],
['Southport → Charis','15–25 min','704','bus','704 stop near Southport','704 · Helensvale direction','Labrador / near Charis','Charis is off the tram corridor, so bus 704 is required.','southport','charis'],
['Charis → Surfers','40–50 min','704 + L1','bus','Labrador / Marine Pde','704 toward Sea World → Southport → L1 south','Surfers Paradise','Return to Southport, then take L1 toward Burleigh Heads.','charis','surfers'],
['SkyPoint → Rick Shores','45–50 min','L1 + WALK','tram','Surfers Paradise','L1 · Burleigh Heads direction','Burleigh Heads → walk to Rick Shores','Leaving around 18:00 gives useful dinner buffer.','skypoint','rick'],
['Rick Shores → Central','~3 hr+','L1 + R772 + TRAIN','railbus','Rick Shores → Burleigh Heads','L1 → R772 → Brisbane train','Brisbane Central','Most variable leg. Re-check R772 before reaching Helensvale.','rick','central']]
},
zh:{
title:'黃金海岸一日旅行指南',eyebrow:'一日遊 · 游泳 + 午餐 + 景觀 + 晚餐',intro:'把 OpenStreetMap、即時 GPS、上下車資訊與景點安排整合在同一個手機頁面。',s1:'建議離開 Central',s2:'抵達 Burleigh',s3:'Rick Shores',
alert:'10 月 4 日 Gold Coast/Beenleigh 線施工，Varsity Lakes ↔ Boggo Road 改搭接駁巴士。基本路線：Central → Boggo Road → R772 → Helensvale → L1。',alertLink:'施工資訊',preview:'行程預覽',today:'現在要做什麼',ended:'行程結束',ready:'準備',done:'完成',minutes:' 分',next:'下一站',gpsHint:'開啟 GPS 後，現在位置與到下一站的距離會持續更新。',gpsOn:'開啟定位',google:'Google 導航',translink:'Translink',focusNext:'下一站',
mapTitle:'即時地圖',mapTiny:'OpenStreetMap · 即時 GPS',wholeRoute:'完整路線',gpsOff:'GPS 關閉',gpsSecure:'請在 HTTPS 頁面允許定位權限。',track:'追蹤位置',followOn:'跟隨 ON',followOff:'跟隨 OFF',transport:'交通',tourism:'觀光',myLoc:'我的位置',whereLabel:'目前位置',speed:'移動速度',near:'附近',from:'距離',arrival:'已到達附近',toNext:'距下一站',
schedule:'較實際的行程表',schedTiny:'藍色＝交通 · 橘色＝觀光',places:'每個景點要做什麼',placesTiny:'橘色卡片＝觀光',transportDetail:'上下車與轉乘詳情',transportTiny:'藍色卡片＝交通',takeAt:'上車地點',takeWhat:'搭乘',getOff:'下車地點',dayLinks:'當日確認連結',dayTiny:'出發前再確認',map:'地圖',scheduleNav:'行程',placesNav:'景點',transportNav:'交通',nowNav:'現在',
footer:'地圖路線僅表示行程順序，不是逐轉彎導航。實際發車時間、月台與臨時變更以 Translink 與現場公告為準。GPS 在頁面保持開啟時最穩定。',dirs:['北','東北','東','東南','南','西南','西','西北'],gpsChecking:'正在取得目前位置…',gpsUnavailable:'GPS 無法使用',gpsUnsupported:'此瀏覽器不支援定位功能。',gpsHttps:'GPS 在 HTTPS 上才能穩定運作。',
schedules:[
['06:45','07:05','Central → Boggo Road','TRAIN','train','搭南向列車，確認有停 Boggo Road。','boggo','transport'],
['07:05','07:30','準備搭 R772','TRANSFER','railbus','在 Boggo Road busway 找 R772 接駁巴士標示，保留等待時間。','boggo','transport'],
['07:30','08:58','R772 → Helensvale','R772','railbus','鐵路接駁巴士，施工日預留約 85 分鐘。','helensvale','transport'],
['09:00','10:05','L1 → Burleigh Heads','L1','tram','從 Helensvale 搭 G:link L1 直達 Burleigh Heads。','burleigh','transport'],
['10:05','11:20','Burleigh Beach 游泳','SWIM','fun','只在紅黃旗之間游泳，包含沖洗與換衣時間。','burleigh','tour'],
['11:25','12:10','L1 → Southport','L1','tram','搭往 Helensvale 方向的 L1，在 Southport 下車。','southport','transport'],
['12:10','12:35','704 → Labrador','704','bus','Southport 搭 704 往 Helensvale，在 Charis 附近下車。','charis','transport'],
['12:35','13:20','Charis Seafoods 午餐','LUNCH','fun','快速吃魚薯條，13:20 左右移動到水邊。','charis','tour'],
['13:30','13:45','Pelican Feeding','PELICAN','fun','Charis 前方 Broadwater 水岸，當天再確認開始時間。','charis','tour'],
['13:50','14:35','704 + L1 → Surfers','704+L1','bus','704 往 Sea World → Southport → L1 南向。','surfers','transport'],
['14:35','16:15','Surfers Paradise 自由時間','WALK','fun','海灘散步、Cavill Avenue、咖啡與逛街。','surfers','tour'],
['16:20','18:00','SkyPoint','VIEW','fun','從白天景色一路看到夕陽與傍晚。','skypoint','tour'],
['18:05','18:55','L1 → Burleigh + 步行','L1','tram','Surfers 搭 L1 往 Burleigh Heads，再步行到 Rick Shores。','rick','transport'],
['19:00','20:15','Rick Shores 晚餐','DINNER','fun','海邊晚餐，建議 20:15 左右結束。','rick','tour'],
['20:20','21:30','L1 → Helensvale','L1','tram','Burleigh Heads 搭 L1 往 Helensvale。','helensvale','transport'],
['21:30','23:10','R772 + 轉乘緩衝','R772','railbus','Helensvale 搭 R772 往 Boggo Road，晚間班次當天再確認。','boggo','transport'],
['23:10','23:45','Boggo Road → Central','TRAIN','train','依轉乘銜接，預計 23:15–23:45 抵達 Central。','central','transport']],
places:[
['burleigh','Burleigh Heads','很適合一次體驗黃金海岸的海泳與岬角景色。仍要依當天浪況與離岸流決定是否下水。',['紅黃旗間游泳','沖洗換衣','岬角短程散步','海灘拍照']],
['charis','Charis Seafoods + Broadwater','在 Labrador 的 Broadwater 水岸吃魚薯條，再看鵜鶘餵食。這裡比外海衝浪海灘感覺平靜。',['12:35 午餐','魚薯條','約 13:30 鵜鶘餵食','水岸散步']],
['surfers','Surfers Paradise','黃金海岸最具代表性的觀光中心。這段以海灘、Cavill Avenue、咖啡與簡單購物為主。',['海灘散步','Cavill Avenue','咖啡/逛街','Q1 拍照']],
['skypoint','SkyPoint','位於 Q1 高樓層的觀景台，可同時看海岸線與內陸。安排白天、夕陽到入夜的景色。',['16:20 進場','海岸全景','夕陽','18:00 左右離開']],
['rick','Rick Shores','在 Burleigh 海邊用晚餐收尾，吃完直接銜接返回 Brisbane 的長程交通。',['建議 19:00 訂位','海景座位','約 20:15 結束','再次確認 R772']]],
legs:[
['Central → Boggo Road','15–20 分','TRAIN','train','Brisbane Central Station','南向列車 · Boggo Road 下車','Boggo Road station','Gold Coast 線施工，需在 Boggo Road 轉乘接駁巴士。','central','boggo'],
['Boggo Road → Helensvale','約 85 分 + 等候','R772','railbus','Boggo Road busway station','R772 鐵路接駁巴士 · Helensvale 方向','Helensvale station','最重要的轉乘。臨時上車點以 R772 標示與工作人員指示為準。','boggo','helensvale'],
['Helensvale → Burleigh Heads','60–65 分','L1','tram','Helensvale G:link','L1 · Burleigh Heads 方向','Burleigh Heads','直達電車，到站後走向海灘。','helensvale','burleigh'],
['Burleigh → Southport','40–45 分','L1','tram','Burleigh Heads','L1 · Helensvale 方向','Southport station','在 Southport 轉 704。','burleigh','southport'],
['Southport → Charis','15–25 分','704','bus','Southport 附近 704 站牌','704 · Helensvale 方向','Labrador / Charis 附近','Charis 不在電車線上，需要轉 704。','southport','charis'],
['Charis → Surfers','40–50 分','704 + L1','bus','Labrador / Marine Pde','704 往 Sea World → Southport → L1 南向','Surfers Paradise','先回 Southport，再搭 L1 往 Burleigh Heads。','charis','surfers'],
['SkyPoint → Rick Shores','45–50 分','L1 + WALK','tram','Surfers Paradise','L1 · Burleigh Heads 方向','Burleigh Heads → 步行至 Rick Shores','18:00 左右離開可保留晚餐緩衝。','skypoint','rick'],
['Rick Shores → Central','約 3 小時以上','L1 + R772 + TRAIN','railbus','Rick Shores → Burleigh Heads','L1 → R772 → Brisbane 列車','Brisbane Central','回程變動最大，抵達 Helensvale 前再確認 R772。','rick','central']]
}};

var d=D[LANG]||D.ko,S=d.schedules,G=d.legs;
var map=null,markers={},routeLine=null,userMarker=null,accCircle=null,watchId=null,user=null,active=0,follow=true;
function el(id){return document.getElementById(id)}
function mins(t){var a=t.split(':');return Number(a[0])*60+Number(a[1])}
function nowB(){var dt=new Date(),p=new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Brisbane',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(dt),o={};p.forEach(function(x){o[x.type]=x.value});return{date:o.year+'-'+o.month+'-'+o.day,h:Number(o.hour),m:Number(o.minute)}}
function gTo(id,mode){var p=P[id],org=user?(user.lat+','+user.lng):'Current Location';return'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(org)+'&destination='+p.lat+','+p.lng+'&travelmode='+(mode||'transit')}
function gAB(a,b){return'https://www.google.com/maps/dir/?api=1&origin='+P[a].lat+','+P[a].lng+'&destination='+P[b].lat+','+P[b].lng+'&travelmode=transit'}
function hav(a,b,c,e){var R=6371,r=function(x){return x*Math.PI/180},da=r(c-a),db=r(e-b),q=Math.sin(da/2)*Math.sin(da/2)+Math.cos(r(a))*Math.cos(r(c))*Math.sin(db/2)*Math.sin(db/2);return 2*R*Math.asin(Math.sqrt(q))}
function dist(k){return k<1?Math.round(k*1000)+' m':k.toFixed(1)+' km'}
function bearing(a,b,c,e){var y=Math.sin((e-b)*Math.PI/180)*Math.cos(c*Math.PI/180),x=Math.cos(a*Math.PI/180)*Math.sin(c*Math.PI/180)-Math.sin(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.cos((e-b)*Math.PI/180);return(Math.atan2(y,x)*180/Math.PI+360)%360}
function dirName(deg){return d.dirs[Math.round(deg/45)%8]}
function icon(p,next){var cls=p.type==='transport'?'transportPin':'';return L.divIcon({className:'',html:'<div class="pin '+cls+' '+(next?'next':'')+'">'+p.ic+'</div>',iconSize:[31,31],iconAnchor:[15,15],popupAnchor:[0,-16]})}
function localPlaceName(id){for(var i=0;i<d.places.length;i++)if(d.places[i][0]===id)return d.places[i][1];return P[id].n}

function setStatic(){
document.documentElement.lang=LANG==='zh'?'zh-TW':LANG;el('heroEyebrow').textContent=d.eyebrow;el('heroTitle').textContent=d.title;el('heroIntro').textContent=d.intro;el('stat1').textContent=d.s1;el('stat2').textContent=d.s2;el('stat3').textContent=d.s3;el('alertText').textContent=d.alert;el('alertLink').textContent=d.alertLink;
el('gpsOnBtn').innerHTML='📍 '+d.gpsOn;el('gBtn').textContent='🧭 '+d.google;el('tBtn').textContent='🚌 '+d.translink;el('nextBtn').textContent='🗺 '+d.focusNext;el('mapTitle').textContent=d.mapTitle;el('mapTiny').textContent=d.mapTiny;el('mapStatus').textContent=d.wholeRoute;el('gpsMain').textContent=d.gpsOff;el('gpsSub').textContent=d.gpsSecure;el('trackBtn').textContent=d.track;el('followBtn').textContent=d.followOn;
el('scheduleTitle').textContent=d.schedule;el('scheduleTiny').textContent=d.schedTiny;el('placesTitle').textContent=d.places;el('placesTiny').textContent=d.placesTiny;el('legsTitle').textContent=d.transportDetail;el('legsTiny').textContent=d.transportTiny;el('linksTitle').textContent=d.dayLinks;el('linksTiny').textContent=d.dayTiny;el('legendTransport').textContent=d.transport;el('legendTour').textContent=d.tourism;el('legendGps').textContent=d.myLoc;el('legendTransport2').textContent=d.transport;el('legendTour2').textContent=d.tourism;el('navNow').textContent=d.nowNav;el('navMap').textContent=d.map;el('navSchedule').textContent=d.scheduleNav;el('navPlaces').textContent=d.placesNav;el('navTransit').textContent=d.transportNav;el('footer').textContent=d.footer;el('distanceText').textContent=d.gpsHint;
}
function initMap(){
if(!window.L){el('mapFail').style.display='flex';return}
map=L.map('map',{zoomControl:true,preferCanvas:true});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
Object.keys(P).forEach(function(id){var p=P[id];markers[id]=L.marker([p.lat,p.lng],{icon:icon(p,false)}).addTo(map).bindPopup('<b>'+localPlaceName(id)+'</b><br><a href="'+gTo(id)+'" target="_blank">'+d.google+'</a>')});
var ids=['central','boggo','helensvale','burleigh','southport','charis','southport','surfers','skypoint','rick','burleigh','helensvale','boggo','central'];
routeLine=L.polyline(ids.map(function(id){return[P[id].lat,P[id].lng]}),{color:'#2563eb',weight:5,opacity:.75,dashArray:'10 8'}).addTo(map);fitAll();highlight();setTimeout(function(){map.invalidateSize()},300)
}
window.fitAll=function(){if(!map)return;map.fitBounds(routeLine.getBounds(),{padding:[22,22]});el('mapStatus').textContent=d.wholeRoute};
window.focusPlace=function(id){if(!map)return;var p=P[id];map.setView([p.lat,p.lng],14,{animate:true});markers[id].openPopup();el('mapStatus').textContent=localPlaceName(id)};
window.focusNext=function(){el('mapsec').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(function(){window.focusPlace(S[active][6])},350)};
window.locateMe=function(){if(!user){window.startGPS();return}if(map)map.setView([user.lat,user.lng],15,{animate:true})};
window.toggleFollow=function(){follow=!follow;el('followBtn').textContent=follow?d.followOn:d.followOff;if(follow&&user&&map)map.setView([user.lat,user.lng],15)};
function highlight(){if(!map)return;var n=S[active][6];Object.keys(markers).forEach(function(id){markers[id].setIcon(icon(P[id],id===n))})}
function renderSchedule(){el('scheduleList').innerHTML=S.map(function(x){return'<div class="sched '+(x[7]==='tour'?'tourItem':'')+'"><div class="stime">'+x[0]+'<small>~ '+x[1]+'</small></div><div class="sbody"><div class="shead"><div class="stitle">'+x[2]+'</div><span class="badge '+x[4]+'">'+x[3]+'</span></div><div class="sdesc">'+x[5]+'</div></div></div>'}).join('')}
function renderPlaces(){el('placeList').innerHTML=d.places.map(function(x){return'<div class="place"><div class="placeTop"><div class="placeIcon">'+P[x[0]].ic+'</div><div><h3>'+x[1]+'</h3><p>'+x[2]+'</p></div></div><div class="todo">'+x[3].map(function(t){return'<span>'+t+'</span>'}).join('')+'</div><div class="placeActions"><button onclick="focusPlace(\''+x[0]+'\');document.getElementById(\'mapsec\').scrollIntoView()">'+d.map+'</button><a class="g" href="'+gTo(x[0],x[0]==='burleigh'?'walking':'transit')+'" target="_blank">'+d.google+'</a></div></div>'}).join('')}
function tLink(code){if(code.indexOf('R772')>=0)return'https://jp.translink.com.au/plan-your-journey/timetables/bus/t/r772';if(code.indexOf('704')>=0)return'https://jp.translink.com.au/plan-your-journey/timetables/bus/T/704';if(code.indexOf('L1')>=0)return'https://jp.translink.com.au/plan-your-journey/timetables/tram/t/l1';return'https://jp.translink.com.au/plan-your-journey/journey-planner'}
function renderLegs(){el('legList').innerHTML=G.map(function(x,i){return'<div class="leg"><div class="legTop"><div class="legTitle">'+(i+1)+'. '+x[0]+' <span class="badge '+x[3]+'">'+x[2]+'</span></div><div class="dur">'+x[1]+'</div></div><div class="routeGrid"><b>'+d.takeAt+'</b><span>'+x[4]+'</span><b>'+d.takeWhat+'</b><span>'+x[5]+'</span><b>'+d.getOff+'</b><span>'+x[6]+'</span></div><div class="tip">'+x[7]+'</div><div class="links"><a class="g" href="'+gAB(x[8],x[9])+'" target="_blank">'+d.google+'</a><a class="t" href="'+tLink(x[2])+'" target="_blank">'+d.translink+'</a></div></div>'}).join('')}
function nearestInfo(){if(!user)return null;var best=null;Object.keys(P).forEach(function(id){var p=P[id],k=hav(user.lat,user.lng,p.lat,p.lng);if(!best||k<best.k)best={id:id,k:k,p:p}});var br=bearing(best.p.lat,best.p.lng,user.lat,user.lng);return{id:best.id,k:best.k,p:best.p,dir:dirName(br)}}
function gpsInfo(){if(!user)return;var dest=P[S[active][6]],k=hav(user.lat,user.lng,dest.lat,dest.lng),n=nearestInfo(),nearText;if(n.k<0.3)nearText=localPlaceName(n.id)+' '+d.near+' ('+dist(n.k)+')';else nearText=localPlaceName(n.id)+' '+d.from+' '+n.dir+' '+dist(n.k);var sp=user.speed!=null&&user.speed>=0?Math.round(user.speed*3.6):null;el('whereText').innerHTML='<b>'+d.whereLabel+':</b> '+nearText+(sp!==null?' · '+d.speed+' '+sp+' km/h':'');el('distanceText').innerHTML=d.toNext+' <b>'+dist(k)+'</b>'+(k<0.25?' <span class="arrived">'+d.arrival+'</span>':'');el('gpsMain').textContent=d.myLoc+' · ±'+Math.round(user.acc)+'m';el('gpsSub').textContent=d.next+': '+localPlaceName(S[active][6])+' · '+dist(k);el('gBtn').href=gTo(S[active][6])}
function update(){var n=nowB(),nm=n.h*60+n.m;el('clock').innerHTML=String(n.h).padStart(2,'0')+':'+String(n.m).padStart(2,'0')+'<small>Queensland · '+n.date+'</small>';if(n.date<TRIP){active=0;el('nowKicker').textContent=d.preview;el('count').textContent=d.ready}else if(n.date>TRIP){active=S.length-1;el('nowKicker').textContent=d.ended;el('count').textContent=d.done}else{active=S.findIndex(function(x){return nm<mins(x[1])});if(active<0)active=S.length-1;var left=mins(S[active][1])-nm;el('nowKicker').textContent=d.today;el('count').textContent=left>0?left+d.minutes:''}var x=S[active];el('nowTitle').textContent=x[2];el('nowDesc').textContent=x[5];el('nextText').textContent=d.next+': '+localPlaceName(x[6]);el('gBtn').href=gTo(x[6],x[4]==='walk'?'walking':'transit');document.querySelectorAll('.sched').forEach(function(e,i){e.classList.toggle('active',i===active);e.classList.toggle('done',i<active)});highlight();gpsInfo()}
window.startGPS=function(){if(!navigator.geolocation){fail(d.gpsUnsupported);return}if(!window.isSecureContext){fail(d.gpsHttps);return}if(watchId!==null){window.locateMe();return}el('gpsMain').textContent=d.gpsChecking;watchId=navigator.geolocation.watchPosition(function(pos){user={lat:pos.coords.latitude,lng:pos.coords.longitude,acc:pos.coords.accuracy,speed:pos.coords.speed,heading:pos.coords.heading,time:pos.timestamp};el('gpsDot').classList.add('on');if(map){if(!userMarker){userMarker=L.circleMarker([user.lat,user.lng],{radius:8,color:'#fff',weight:3,fillColor:'#12b886',fillOpacity:1}).addTo(map).bindPopup(d.myLoc);accCircle=L.circle([user.lat,user.lng],{radius:user.acc,color:'#12b886',weight:1,fillColor:'#12b886',fillOpacity:.08}).addTo(map)}else{userMarker.setLatLng([user.lat,user.lng]);accCircle.setLatLng([user.lat,user.lng]).setRadius(user.acc)}if(follow)map.panTo([user.lat,user.lng],{animate:true,duration:.5})}gpsInfo()},function(e){fail(e.message)},{enableHighAccuracy:true,maximumAge:2000,timeout:20000})};
function fail(msg){el('gpsDot').classList.remove('on');el('gpsMain').textContent=d.gpsUnavailable;el('gpsSub').textContent=msg}
setStatic();renderSchedule();renderPlaces();renderLegs();initMap();update();setInterval(update,30000);
})();