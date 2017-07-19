var baseRegisterSystemSingUpUrl = "api/Account/SignUp";
var baseRegisterSystemLoginUrl = "api/Account/Login";
var baseResendEmailUrl = "api/Account/ResendEmail";
var ChuPredictUrl = "http://predict.chu.edu.tw/2017/ast/predict.html";

function getLoginData() {
  var login_email      = document.getElementById('signin-email').value;
  return login_email;
}

function getRegisterData() {
  //取得資料
  var input_email      = document.getElementById('register-email').value;
  var select_location  = document.getElementById('select-location').value;
  var select_school    = document.getElementById('select-school').value;
  var select_identity  = document.getElementById('select-identity').value;

  // 製作JSON
  var register_data = {

      "email": input_email,
      "location": select_location,
      "schoolName": select_school,
      "identity": select_identity

  };

  return register_data;
}
function successDialogAlertMsg(text) {
  var alertArea = $(".Message");
  alertArea.empty();
  // alertArea.append('<div class="modal-header modal-header-success"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myMessageModalLabel">'+text+'</h4></div>');
  alertArea.append('<div data-alert class="alert-box success radius">    '+text+'    <a href="#" class="close">&times;</a>  </div>');
  $(document).foundation('alert', 'reflow');
}

function errorDialogAlertMsg(text) {
  var alertArea = $(".Message");
  alertArea.empty();
  // alertArea.append('<div class="modal-header modal-header-danger"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myMessageModalLabel">'+text+'</h4></div>');
  alertArea.append('<div data-alert class="alert-box alert radius">    '+text+'    <a href="#" class="close">&times;</a>  </div>');
  $(document).foundation('alert', 'reflow');
}

function resendDialogAlertMsg(text) {
  var alertArea = $(".Message");
  alertArea.empty();
  alertArea.append('<div data-alert class="alert-box warning radius">    '+text+'    <a href="#" id="resend-btn" onclick="resendEmail()">重新發送驗證信</a><a href="#" class="close">&times;</a>  </div>');
  $(document).foundation('alert', 'reflow');
}

//增加縣市option標籤
function addLocationOption(value, text){
  $('#select-location').append($('<option>', {
    value: value,
    text: text
  }));
}

//增加學校option標籤
function addSchoolOption(value, text){
  $('#select-school').append($('<option>', {
    value: value,
    text: text
  }));
}

//增加身份option標籤
function addIdentityOption(value, text){
  $('#select-identity').append($('<option>', {
    value: value,
    text: text
  }));
}

//縣市對應高中

  $('#select-location').change(function(e) {
    if($('#select-location').val() == "基隆市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立基隆高中','國立基隆高中');
      addSchoolOption('國立基隆女中','國立基隆女中');
      addSchoolOption('國立基隆商工','國立基隆商工');
      addSchoolOption('國立基隆海事','國立基隆海事');
      addSchoolOption('輔大聖心高中','輔大聖心高中');
      addSchoolOption('私立光隆家商','私立光隆家商');
      addSchoolOption('市立中山高中','市立中山高中');
      addSchoolOption('私立二信高中','私立二信高中');
      addSchoolOption('私立培德工家','私立培德工家');
      addSchoolOption('市立安樂高中','市立安樂高中');
      addSchoolOption('市立暖暖高中','市立暖暖高中');
      addSchoolOption('市立八斗高中','市立八斗高中');
    }
    else if($('#select-location').val() == "臺北市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立師大附中','國立師大附中');
      addSchoolOption('市立第一女中','市立第一女中');
      addSchoolOption('市立建國高中','市立建國高中');
      addSchoolOption('市立中山女中','市立中山女中');
      addSchoolOption('市立景美女中','市立景美女中');
      addSchoolOption('市立成功高中','市立成功高中');
      addSchoolOption('市立復興高中','市立復興高中');
      addSchoolOption('市立中正高中','市立中正高中');
      addSchoolOption('市立內湖高中','市立內湖高中');
      addSchoolOption('市立松山高中','市立松山高中');
      addSchoolOption('市立大同高中','市立大同高中');
      addSchoolOption('市立松山家商','市立松山家商');
      addSchoolOption('市立大安高工','市立大安高工');
      addSchoolOption('市立松山工農','市立松山工農');
      addSchoolOption('市立成淵高中','市立成淵高中');
      addSchoolOption('國立政大附中','國立政大附中');
      addSchoolOption('私立衛理女中','私立衛理女中');
      addSchoolOption('私立華興高中','私立華興高中');
      addSchoolOption('私立景文高中','私立景文高中');
      addSchoolOption('私立再興高中','私立再興高中');
      addSchoolOption('私立大誠高中','私立大誠高中');
      addSchoolOption('私立延平高中','私立延平高中');
      addSchoolOption('私立協和祐德高中','私立協和祐德高中');
      addSchoolOption('私立滬江高中','私立滬江高中');
      addSchoolOption('私立強恕高中','私立強恕高中');
      addSchoolOption('私立靜修女中','私立靜修女中');
      addSchoolOption('私立方濟高中','私立方濟高中');
      addSchoolOption('私立薇閣高中','私立薇閣高中');
      addSchoolOption('私立惇敘工商','私立惇敘工商');
      addSchoolOption('私立文德女中','私立文德女中');
      addSchoolOption('私立泰北高中','私立泰北高中');
      addSchoolOption('私立開平餐飲職業學校','私立開平餐飲職業學校');
      addSchoolOption('私立復興實驗高中','私立復興實驗高中');
      addSchoolOption('私立東方工商','私立東方工商');
      addSchoolOption('私立中興高中','私立中興高中');
      addSchoolOption('私立喬治工商','私立喬治工商');
      addSchoolOption('私立東山高中','私立東山高中');
      addSchoolOption('私立十信高中','私立十信高中');
      addSchoolOption('私立開南商工','私立開南商工');
      addSchoolOption('私立金甌女中','私立金甌女中');
      addSchoolOption('私立稻江高商','私立稻江高商');
      addSchoolOption('私立育達家商','私立育達家商');
      addSchoolOption('私立立人高中','私立立人高中');
      addSchoolOption('私立大同高中','私立大同高中');
      addSchoolOption('私立稻江護家','私立稻江護家');
      addSchoolOption('私立華岡藝校','私立華岡藝校');
      addSchoolOption('私立達人女中','私立達人女中');
      addSchoolOption('市立南港高工','市立南港高工');
      addSchoolOption('市立士林高商','市立士林高商');
      addSchoolOption('市立木柵高工','市立木柵高工');
      addSchoolOption('市立內湖高工','市立內湖高工');
      addSchoolOption('市立明倫高中','市立明倫高中');
      addSchoolOption('市立華江高中','市立華江高中');
      addSchoolOption('市立陽明高中','市立陽明高中');
      addSchoolOption('市立永春高中','市立永春高中');
      addSchoolOption('市立和平高中','市立和平高中');
      addSchoolOption('市立西松高中','市立西松高中');
      addSchoolOption('市立大理高中','市立大理高中');
      addSchoolOption('市立啟明學校','市立啟明學校');
      addSchoolOption('市立大直高中','市立大直高中');
      addSchoolOption('市立萬芳高中','市立萬芳高中');
      addSchoolOption('市立百齡高中','市立百齡高中');
      addSchoolOption('市立南港高中','市立南港高中');
      addSchoolOption('市立麗山高中','市立麗山高中');
      addSchoolOption('市立啟聰學校','市立啟聰學校');
      addSchoolOption('市立育成高中','市立育成高中');
      addSchoolOption('市立中崙高中','市立中崙高中');
      addSchoolOption('市立南湖高中','市立南湖高中');
      addSchoolOption('市立文山特殊教育學校','市立文山特殊教育學校');
      addSchoolOption('市立啟智學校','市立啟智學校');
      addSchoolOption('南華高中職業進修學校','南華高中職業進修學校');
      addSchoolOption('志仁高中職業進修學校','志仁高中職業進修學校');
      addSchoolOption('國立臺灣戲曲學院','國立臺灣戲曲學院');
    }
    else if($('#select-location').val() == "新北市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('市立鶯歌工商','市立鶯歌工商');
      addSchoolOption('國立華僑高中','國立華僑高中');
      addSchoolOption('市立北大高中','市立北大高中');
      addSchoolOption('市立新北高中','市立新北高中');
      addSchoolOption('市立新莊高中','市立新莊高中');
      addSchoolOption('市立板橋高中','市立板橋高中');
      addSchoolOption('市立泰山高中','市立泰山高中');
      addSchoolOption('市立新店高中','市立新店高中');
      addSchoolOption('市立中和高中','市立中和高中');
      addSchoolOption('市立瑞芳高工','市立瑞芳高工');
      addSchoolOption('市立丹鳳高中','市立丹鳳高中');
      addSchoolOption('市立竹圍高中','市立竹圍高中');
      addSchoolOption('私立時雨高中','私立時雨高中');
      addSchoolOption('市立光復高中','市立光復高中');
      addSchoolOption('市立新北高工','市立新北高工');
      addSchoolOption('市立三重商工','市立三重商工');
      addSchoolOption('市立淡水商工','市立淡水商工');
      addSchoolOption('私立格致高中','私立格致高中');
      addSchoolOption('私立南強工商','私立南強工商');
      addSchoolOption('私立竹林高中','私立竹林高中');
      addSchoolOption('私立淡江高中','私立淡江高中');
      addSchoolOption('私立崇光女中','私立崇光女中');
      addSchoolOption('私立醒吾高中','私立醒吾高中');
      addSchoolOption('私立穀保家商','私立穀保家商');
      addSchoolOption('私立聖心女中','私立聖心女中');
      addSchoolOption('私立徐匯高中','私立徐匯高中');
      addSchoolOption('私立及人高中','私立及人高中');
      addSchoolOption('私立東海高中','私立東海高中');
      addSchoolOption('私立中華高中','私立中華高中');
      addSchoolOption('私立莊敬工家','私立莊敬工家');
      addSchoolOption('私立光仁高中','私立光仁高中');
      addSchoolOption('私立恆毅高中','私立恆毅高中');
      addSchoolOption('私立崇義高中','私立崇義高中');
      addSchoolOption('市立永平高中','市立永平高中');
      addSchoolOption('私立金陵女中','私立金陵女中');
      addSchoolOption('私立樹人家商','私立樹人家商');
      addSchoolOption('私立辭修高中','私立辭修高中');
      addSchoolOption('私立能仁家商','私立能仁家商');
      addSchoolOption('私立豫章工商','私立豫章工商');
      addSchoolOption('私立開明工商','私立開明工商');
      addSchoolOption('私立復興商工','私立復興商工');
      addSchoolOption('私立智光商工','私立智光商工');
      addSchoolOption('市立明德高中','市立明德高中');
      addSchoolOption('私立清傳高商','私立清傳高商');
      addSchoolOption('市立樹林高中','市立樹林高中');
      addSchoolOption('私立中華商海','私立中華商海');
      addSchoolOption('私立南山高中','私立南山高中');
      addSchoolOption('市立雙溪高中','市立雙溪高中');
      addSchoolOption('市立金山高中','市立金山高中');
      addSchoolOption('市立清水高中','市立清水高中');
      addSchoolOption('市立三民高中','市立三民高中');
      addSchoolOption('市立海山高中','市立海山高中');
      addSchoolOption('市立秀峰高中','市立秀峰高中');
      addSchoolOption('市立三重高中','市立三重高中');
      addSchoolOption('市立錦和高中','市立錦和高中');
      addSchoolOption('市立安康高中','市立安康高中');
      addSchoolOption('市立石碇高中','市立石碇高中');
      addSchoolOption('市立林口高中','市立林口高中');
      addSchoolOption('私立康橋高中','私立康橋高中');
    }
    else if($('#select-location').val() == "宜蘭縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立宜蘭高中','國立宜蘭高中');
      addSchoolOption('國立蘭陽女中','國立蘭陽女中');
      addSchoolOption('國立宜蘭高商','國立宜蘭高商');
      addSchoolOption('私立中道高中','私立中道高中');
      addSchoolOption('私立慧燈高中','私立慧燈高中');
      addSchoolOption('縣立南澳高中','縣立南澳高中');
      addSchoolOption('縣立慈心華德福實驗高中','縣立慈心華德福實驗高中');
      addSchoolOption('國立羅東高工','國立羅東高工');
      addSchoolOption('國立蘇澳海事','國立蘇澳海事');
      addSchoolOption('國立頭城家商','國立頭城家商');
      addSchoolOption('國立羅東高中','國立羅東高中');
      addSchoolOption('國立羅東高商','國立羅東高商');
    }
    else if($('#select-location').val() == "桃園市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('市立觀音高中','市立觀音高中');
      addSchoolOption('國立中央大學附屬中壢高中','國立中央大學附屬中壢高中');
      addSchoolOption('國立楊梅高中','國立楊梅高中');
      addSchoolOption('國立武陵高中','國立武陵高中');
      addSchoolOption('市立大園國際高中','市立大園國際高中');
      addSchoolOption('國立桃園高中','國立桃園高中');
      addSchoolOption('市立平鎮高中','市立平鎮高中');
      addSchoolOption('私立大華高中','私立大華高中');
      addSchoolOption('國立內壢高中','國立內壢高中');
      addSchoolOption('市立永豐高中','市立永豐高中');
      addSchoolOption('市立南崁高中','市立南崁高中');
      addSchoolOption('市立大溪高中','市立大溪高中');
      addSchoolOption('市立壽山高中','市立壽山高中');
      addSchoolOption('國立陽明高中','國立陽明高中');
      addSchoolOption('國立中壢家商','國立中壢家商');
      addSchoolOption('國立中壢高商','國立中壢高商');
      addSchoolOption('國立北科大附屬桃園農工','國立北科大附屬桃園農工');
      addSchoolOption('國立龍潭高中','國立龍潭高中');
      addSchoolOption('私立振聲高中','私立振聲高中');
      addSchoolOption('私立治平高中','私立治平高中');
      addSchoolOption('私立漢英高中','私立漢英高中');
      addSchoolOption('私立復旦高中','私立復旦高中');
      addSchoolOption('私立光啟高中','私立光啟高中');
      addSchoolOption('私立方曙商工','私立方曙商工');
      addSchoolOption('私立成功工商','私立成功工商');
      addSchoolOption('私立永平工商','私立永平工商');
      addSchoolOption('私立新興高中','私立新興高中');
      addSchoolOption('私立清華高中','私立清華高中');
      addSchoolOption('私立大興高中','私立大興高中');
      addSchoolOption('私立至善高中','私立至善高中');
      addSchoolOption('私立啟英高中','私立啟英高中');
      addSchoolOption('私立六和高中','私立六和高中');
      addSchoolOption('私立育達高中','私立育達高中');
    }
    else if($('#select-location').val() == "新竹縣市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立科學工業園區實驗高中','國立科學工業園區實驗高中');
      addSchoolOption('國立新竹高中','國立新竹高中');
      addSchoolOption('國立新竹女中','國立新竹女中');
      addSchoolOption('國立竹東高中','國立竹東高中');
      addSchoolOption('國立竹北高中','國立竹北高中');
      addSchoolOption('市立成德高中','市立成德高中');
      addSchoolOption('市立香山高中','市立香山高中');
      addSchoolOption('縣立湖口高中','縣立湖口高中');
      addSchoolOption('國立新竹高工','國立新竹高工');
      addSchoolOption('國立新竹高商','國立新竹高商');
      addSchoolOption('國立關西高中','國立關西高中');
      addSchoolOption('市立建功高中','市立建功高中');
      addSchoolOption('私立光復高中','私立光復高中');
      addSchoolOption('私立磐石高中','私立磐石高中');
      addSchoolOption('私立曙光女中','私立曙光女中');
      addSchoolOption('私立義民高中','私立義民高中');
      addSchoolOption('私立仰德高中','私立仰德高中');
      addSchoolOption('國立新竹特殊教育學校','國立新竹特殊教育學校');
      addSchoolOption('私立忠信高中','私立忠信高中');
      addSchoolOption('私立東泰高中','私立東泰高中');
      addSchoolOption('私立世界高中','私立世界高中');
      addSchoolOption('私立內思高工','私立內思高工');
    }
    else if($('#select-location').val() == "苗栗縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立竹南高中','國立竹南高中');
      addSchoolOption('國立卓蘭高中','國立卓蘭高中');
      addSchoolOption('國立苗栗高中','國立苗栗高中');
      addSchoolOption('縣立興華高中','縣立興華高中');
      addSchoolOption('縣立苑裡高中','縣立苑裡高中');
      addSchoolOption('國立苑裡高中','國立苑裡高中');
      addSchoolOption('國立苗栗高商','國立苗栗高商');
      addSchoolOption('國立苗栗農工','國立苗栗農工');
      addSchoolOption('國立大湖農工','國立大湖農工');
      addSchoolOption('私立建臺高中','私立建臺高中');
      addSchoolOption('私立全人實驗高中','私立全人實驗高中');
      addSchoolOption('縣立三義高中','縣立三義高中');
      addSchoolOption('縣立大同高中','縣立大同高中');
      addSchoolOption('私立大成高中','私立大成高中');
      addSchoolOption('私立君毅高中','私立君毅高中');
      addSchoolOption('私立賢德工商','私立賢德工商');
      addSchoolOption('私立育民工家','私立育民工家');
      addSchoolOption('私立龍德家商','私立龍德家商');
      addSchoolOption('私立中興商工','私立中興商工');
    }
    else if($('#select-location').val() == "臺中市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('市立臺中一中','市立臺中一中');
      addSchoolOption('市立臺中二中','市立臺中二中');
      addSchoolOption('市立臺中女中','市立臺中女中');
      addSchoolOption('市立清水高中','市立清水高中');
      addSchoolOption('市立豐原高中','市立豐原高中');
      addSchoolOption('市立大甲高中','市立大甲高中');
      addSchoolOption('市立文華高中','市立文華高中');
      addSchoolOption('市立新社高中','市立新社高中');
      addSchoolOption('市立長億高中','市立長億高中');
      addSchoolOption('市立西苑高中','市立西苑高中');
      addSchoolOption('市立忠明高中','市立忠明高中');
      addSchoolOption('國立興大附農','國立興大附農');
      addSchoolOption('市立臺中家商','市立臺中家商');
      addSchoolOption('市立臺中高工','市立臺中高工');
      addSchoolOption('市立豐原高商','市立豐原高商');
      addSchoolOption('市立大甲高工','市立大甲高工');
      addSchoolOption('市立沙鹿高工','市立沙鹿高工');
      addSchoolOption('市立東勢高工','市立東勢高工');
      addSchoolOption('市立霧峰農工','市立霧峰農工');
      addSchoolOption('臺中市立啟明學校','臺中市立啟明學校');
      addSchoolOption('市立惠文高中','市立惠文高中');
      addSchoolOption('國立中興大學附中','國立中興大學附中');
      addSchoolOption('市立中港高中','市立中港高中');
      addSchoolOption('市立后綜高中','市立后綜高中');
      addSchoolOption('私立明道高中','私立明道高中');
      addSchoolOption('私立明台高中','私立明台高中');
      addSchoolOption('私立大明高中','私立大明高中');
      addSchoolOption('私立宜寧高中','私立宜寧高中');
      addSchoolOption('私立曉明女中','私立曉明女中');
      addSchoolOption('私立衛道高中','私立衛道高中');
      addSchoolOption('私立青年高中','私立青年高中');
      addSchoolOption('私立立人高中','私立立人高中');
      addSchoolOption('私立弘文高中','私立弘文高中');
      addSchoolOption('私立慈明高中','私立慈明高中');
      addSchoolOption('私立華盛頓高中','私立華盛頓高中');
      addSchoolOption('私立嘉陽高中','私立嘉陽高中');
      addSchoolOption('市立大里高中','市立大里高中');
      addSchoolOption('私立常春藤高中','私立常春藤高中');
      addSchoolOption('臺中市立啟聰學校','臺中市立啟聰學校');
      addSchoolOption('私立明德高中','私立明德高中');
      addSchoolOption('私立玉山高中','私立玉山高中');
      addSchoolOption('私立嶺東高中','私立嶺東高中');
      addSchoolOption('私立僑泰高中','私立僑泰高中');
      addSchoolOption('私立新民高中','私立新民高中');
      addSchoolOption('私立致用高中','私立致用高中');
      addSchoolOption('私立東海大學附中','私立東海大學附中');
      addSchoolOption('私立光華高工','私立光華高工');
      addSchoolOption('市立臺中特殊教育學校','市立臺中特殊教育學校');
      addSchoolOption('市立東山高中','市立東山高中');
      addSchoolOption('國立中科實驗高中','國立中科實驗高中');
      addSchoolOption('私立葳格高中','私立葳格高中');
    }
    else if($('#select-location').val() == "南投縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立南投高中','國立南投高中');
      addSchoolOption('國立暨南國際大學附中','國立暨南國際大學附中');
      addSchoolOption('國立竹山高中','國立竹山高中');
      addSchoolOption('國立中興高中','國立中興高中');
      addSchoolOption('私立三育高中','私立三育高中');
      addSchoolOption('私立五育高中','私立五育高中');
      addSchoolOption('國立仁愛高農','國立仁愛高農');
      addSchoolOption('國立草屯商工','國立草屯商工');
      addSchoolOption('國立南投高商','國立南投高商');
      addSchoolOption('國立埔里高工','國立埔里高工');
      addSchoolOption('國立水里商工','國立水里商工');
      addSchoolOption('私立同德家商','私立同德家商');
      addSchoolOption('縣立旭光高中','縣立旭光高中');
      addSchoolOption('私立弘明實驗高中','私立弘明實驗高中');
      addSchoolOption('私立普台高中','私立普台高中');
    }
    else if($('#select-location').val() == "彰化縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立彰化師大附屬高工','國立彰化師大附屬高工');
      addSchoolOption('國立和美實驗學校','國立和美實驗學校');
      addSchoolOption('國立彰化高中','國立彰化高中');
      addSchoolOption('國立員林高中','國立員林高中');
      addSchoolOption('國立彰化女中','國立彰化女中');
      addSchoolOption('國立員林家商','國立員林家商');
      addSchoolOption('國立永靖高工','國立永靖高工');
      addSchoolOption('國立北斗家商','國立北斗家商');
      addSchoolOption('國立鹿港高中','國立鹿港高中');
      addSchoolOption('國立員林崇實高工','國立員林崇實高工');
      addSchoolOption('縣立二林高中','縣立二林高中');
      addSchoolOption('國立二林工商','國立二林工商');
      addSchoolOption('國立彰化高商','國立彰化高商');
      addSchoolOption('國立秀水高工','國立秀水高工');
      addSchoolOption('國立員林農工','國立員林農工');
      addSchoolOption('私立達德商工','私立達德商工');
      addSchoolOption('私立大慶商工','私立大慶商工');
      addSchoolOption('私立正德高中','私立正德高中');
      addSchoolOption('私立精誠高中','私立精誠高中');
      addSchoolOption('私立文興高中','私立文興高中');
      addSchoolOption('國立溪湖高中','國立溪湖高中');
      addSchoolOption('縣立彰化藝術高中','縣立彰化藝術高中');
      addSchoolOption('縣立成功高中','縣立成功高中');
      addSchoolOption('縣立田中高中','縣立田中高中');
      addSchoolOption('縣立和美高中','縣立和美高中');
    }
    else if($('#select-location').val() == "嘉義縣市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立嘉義高中','國立嘉義高中');
      addSchoolOption('國立嘉義女中','國立嘉義女中');
      addSchoolOption('國立民雄農工','國立民雄農工');
      addSchoolOption('國立東石高中','國立東石高中');
      addSchoolOption('國立嘉義高工','國立嘉義高工');
      addSchoolOption('國立華南高商','國立華南高商');
      addSchoolOption('國立嘉義高商','國立嘉義高商');
      addSchoolOption('國立嘉義家職','國立嘉義家職');
      addSchoolOption('私立萬能工商','私立萬能工商');
      addSchoolOption('縣立竹崎高中','縣立竹崎高中');
      addSchoolOption('縣立永慶高中','縣立永慶高中');
      addSchoolOption('私立協同高中','私立協同高中');
      addSchoolOption('私立同濟高中','私立同濟高中');
      addSchoolOption('私立東吳工家','私立東吳工家');
      addSchoolOption('私立興華高中','私立興華高中');
      addSchoolOption('私立宏仁女中','私立宏仁女中');
      addSchoolOption('私立輔仁高中','私立輔仁高中');
      addSchoolOption('私立嘉華高中','私立嘉華高中');
      addSchoolOption('私立仁義高中','私立仁義高中');
      addSchoolOption('私立協志工商','私立協志工商');
      addSchoolOption('私立立仁高中','私立立仁高中');
      addSchoolOption('私立弘德工商','私立弘德工商');
      addSchoolOption('國立新港藝術高中','國立新港藝術高中');
    }
    else if($('#select-location').val() == "雲林縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立西螺農工','國立西螺農工');
      addSchoolOption('國立虎尾高中','國立虎尾高中');
      addSchoolOption('國立北港高中','國立北港高中');
      addSchoolOption('國立斗六高中','國立斗六高中');
      addSchoolOption('國立土庫商工','國立土庫商工');
      addSchoolOption('國立北港農工','國立北港農工');
      addSchoolOption('國立斗六家商','國立斗六家商');
      addSchoolOption('國立虎尾農工','國立虎尾農工');
      addSchoolOption('縣立麥寮高中','縣立麥寮高中');
      addSchoolOption('縣立斗南高中','縣立斗南高中');
      addSchoolOption('私立文生高中','私立文生高中');
      addSchoolOption('私立正心高中','私立正心高中');
      addSchoolOption('私立永年高中','私立永年高中');
      addSchoolOption('私立揚子高中','私立揚子高中');
      addSchoolOption('私立維多利亞實驗高中','私立維多利亞實驗高中');
      addSchoolOption('縣立古坑華德福實驗高中','縣立古坑華德福實驗高中');
      addSchoolOption('私立巨人高中','私立巨人高中');
      addSchoolOption('私立大成商工','私立大成商工');
      addSchoolOption('私立大德工商','私立大德工商');
      addSchoolOption('私立義峰高中','私立義峰高中');
      addSchoolOption('私立福智高中','私立福智高中');
    }
    else if($('#select-location').val() == "臺南市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立臺南一中','國立臺南一中');
      addSchoolOption('國立臺南女中','國立臺南女中');
      addSchoolOption('國立臺南二中','國立臺南二中');
      addSchoolOption('國立家齊高中','國立家齊高中');
      addSchoolOption('國立新營高中','國立新營高中');
      addSchoolOption('國立後壁高中','國立後壁高中');
      addSchoolOption('國立善化高中','國立善化高中');
      addSchoolOption('國立玉井工商','國立玉井工商');
      addSchoolOption('國立北門高中','國立北門高中');
      addSchoolOption('國立曾文農工','國立曾文農工');
      addSchoolOption('國立新化高中','國立新化高中');
      addSchoolOption('國立新豐高中','國立新豐高中');
      addSchoolOption('市立大灣高中','市立大灣高中');
      addSchoolOption('市立永仁高中','市立永仁高中');
      addSchoolOption('國立臺南大學附屬啟聰學校','國立臺南大學附屬啟聰學校');
      addSchoolOption('國立新化高工','國立新化高工');
      addSchoolOption('國立北門農工','國立北門農工');
      addSchoolOption('國立曾文家商','國立曾文家商');
      addSchoolOption('國立臺南海事','國立臺南海事');
      addSchoolOption('國立白河商工','國立白河商工');
      addSchoolOption('國立新營高工','國立新營高工');
      addSchoolOption('國立臺南高商','國立臺南高商');
      addSchoolOption('國立臺南高工','國立臺南高工');
      addSchoolOption('國立臺南大學附中','國立臺南大學附中');
      addSchoolOption('市立土城高中','市立土城高中');
      addSchoolOption('市立南寧高中','市立南寧高中');
      addSchoolOption('私立瀛海高中','私立瀛海高中');
      addSchoolOption('私立聖功女中','私立聖功女中');
      addSchoolOption('私立長榮高中','私立長榮高中');
      addSchoolOption('私立德光高中','私立德光高中');
      addSchoolOption('私立崑山高中','私立崑山高中');
      addSchoolOption('私立長榮女中','私立長榮女中');
      addSchoolOption('私立光華高中','私立光華高中');
      addSchoolOption('私立黎明高中','私立黎明高中');
      addSchoolOption('私立南光高中','私立南光高中');
      addSchoolOption('私立興國高中','私立興國高中');
      addSchoolOption('私立明達高中','私立明達高中');
      addSchoolOption('私立港明高中','私立港明高中');
      addSchoolOption('私立鳳和高中','私立鳳和高中');
      addSchoolOption('私立六信高中','私立六信高中');
      addSchoolOption('私立慈幼工商','私立慈幼工商');
      addSchoolOption('私立南英商工','私立南英商工');
      addSchoolOption('私立陽明工商','私立陽明工商');
      addSchoolOption('私立新榮高中','私立新榮高中');
      addSchoolOption('私立育德工家','私立育德工家');
      addSchoolOption('私立亞洲餐旅學校','私立亞洲餐旅學校');
      addSchoolOption('私立慈濟高中','私立慈濟高中');
      addSchoolOption('國立南科國際實驗高中','國立南科國際實驗高中');
    }
    else if($('#select-location').val() == "澎湖縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立馬公高中','國立馬公高中');
      addSchoolOption('國立澎湖海事高職','國立澎湖海事高職');
    }
    else if($('#select-location').val() == "金門縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立金門高中','國立金門高中');
      addSchoolOption('國立金門農工','國立金門農工');
    }
    else if($('#select-location').val() == "連江縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立馬祖高中','國立馬祖高中');
    }
    else if($('#select-location').val() == "高雄市")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立高雄師大附中','國立高雄師大附中');
      addSchoolOption('市立高雄高中','市立高雄高中');
      addSchoolOption('市立高雄女中','市立高雄女中');
      addSchoolOption('市立左營高中','市立左營高中');
      addSchoolOption('市立前鎮高中','市立前鎮高中');
      addSchoolOption('市立高雄高商','市立高雄高商');
      addSchoolOption('市立高雄高工','市立高雄高工');
      addSchoolOption('市立中正高工','市立中正高工');
      addSchoolOption('市立海青工商','市立海青工商');
      addSchoolOption('市立中山高中','市立中山高中');
      addSchoolOption('市立小港高中','市立小港高中');
      addSchoolOption('市立新莊高中','市立新莊高中');
      addSchoolOption('國立鳳山高中','國立鳳山高中');
      addSchoolOption('國立鳳新高中','國立鳳新高中');
      addSchoolOption('國立旗美高中','國立旗美高中');
      addSchoolOption('國立岡山高中','國立岡山高中');
      addSchoolOption('市立三民家商','市立三民家商');
      addSchoolOption('國立岡山農工','國立岡山農工');
      addSchoolOption('國立旗山農工','國立旗山農工');
      addSchoolOption('國立鳳山商工','國立鳳山商工');
      addSchoolOption('私立新光高中','私立新光高中');
      addSchoolOption('私立樹德家商','私立樹德家商');
      addSchoolOption('國立中山大學附中','國立中山大學附中');
      addSchoolOption('私立復華高中','私立復華高中');
      addSchoolOption('私立立志高中','私立立志高中');
      addSchoolOption('私立道明高中','私立道明高中');
      addSchoolOption('私立明誠高中','私立明誠高中');
      addSchoolOption('私立中華藝校','私立中華藝校');
      addSchoolOption('私立普門高中','私立普門高中');
      addSchoolOption('市立瑞祥高中','市立瑞祥高中');
      addSchoolOption('市立中正高中','市立中正高中');
      addSchoolOption('市立三民高中','市立三民高中');
      addSchoolOption('市立林園高中','市立林園高中');
      addSchoolOption('市立鼓山高中','市立鼓山高中');
      addSchoolOption('私立華德工家','私立華德工家');
      addSchoolOption('私立大榮高中','私立大榮高中');
      addSchoolOption('私立三信家商','私立三信家商');
      addSchoolOption('私立國際商工','私立國際商工');
      addSchoolOption('私立旗美商工','私立旗美商工');
      addSchoolOption('私立高英工商','私立高英工商');
      addSchoolOption('私立中山工商','私立中山工商');
      addSchoolOption('私立高苑工商','私立高苑工商');
      addSchoolOption('私立高鳳工家','私立高鳳工家');
      addSchoolOption('私立正義高中','私立正義高中');
      addSchoolOption('市立仁武高中','市立仁武高中');
      addSchoolOption('市立路竹高中','市立路竹高中');
      addSchoolOption('市立文山高中','市立文山高中');
      addSchoolOption('市立新興高中','市立新興高中');
      addSchoolOption('市立福誠高中','市立福誠高中');
      addSchoolOption('市立六龜高中','市立六龜高中');
      addSchoolOption('市立楠梓特殊學校','市立楠梓特殊學校');
      addSchoolOption('市立楠梓高中','市立楠梓高中');
      addSchoolOption('私立義大國際高中','私立義大國際高中');
      addSchoolOption('中正預校','中正預校');
    }
    else if($('#select-location').val() == "屏東縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立屏東女中','國立屏東女中');
      addSchoolOption('國立屏東高中','國立屏東高中');
      addSchoolOption('國立潮州高中','國立潮州高中');
      addSchoolOption('國立恆春工商','國立恆春工商');
      addSchoolOption('縣立大同高中','縣立大同高中');
      addSchoolOption('國立屏北高中','國立屏北高中');
      addSchoolOption('國立東港海事','國立東港海事');
      addSchoolOption('國立佳冬高農','國立佳冬高農');
      addSchoolOption('國立內埔農工','國立內埔農工');
      addSchoolOption('國立屏東高工','國立屏東高工');
      addSchoolOption('縣立枋寮高中','縣立枋寮高中');
      addSchoolOption('私立陸興高中','私立陸興高中');
      addSchoolOption('私立美和高中','私立美和高中');
      addSchoolOption('縣立來義高中','縣立來義高中');
      addSchoolOption('私立日新工商','私立日新工商');
      addSchoolOption('私立華洲工家','私立華洲工家');
      addSchoolOption('私立民生家商','私立民生家商');
      addSchoolOption('私立屏榮高中','私立屏榮高中');
      addSchoolOption('縣立東港高中','縣立東港高中');
    }
    else if($('#select-location').val() == "花蓮縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立花蓮高中','國立花蓮高中');
      addSchoolOption('國立花蓮女中','國立花蓮女中');
      addSchoolOption('國立玉里高中','國立玉里高中');
      addSchoolOption('國立花蓮高農','國立花蓮高農');
      addSchoolOption('國立花蓮高工','國立花蓮高工');
      addSchoolOption('國立花蓮高商','國立花蓮高商');
      addSchoolOption('國立光復商工','國立光復商工');
      addSchoolOption('縣立體育高中','縣立體育高中');
      addSchoolOption('私立四維高中','私立四維高中');
      addSchoolOption('私立海星高中','私立海星高中');
      addSchoolOption('私立上騰工商','私立上騰工商');
      addSchoolOption('私立慈濟大學附中','私立慈濟大學附中');
    }
    else if($('#select-location').val() == "臺東縣")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('國立臺東高中','國立臺東高中');
      addSchoolOption('國立臺東女中','國立臺東女中');
      addSchoolOption('國立臺東大學附屬體育高中','國立臺東大學附屬體育高中');
      addSchoolOption('縣立蘭嶼高中','縣立蘭嶼高中');
      addSchoolOption('國立臺東大學附屬特殊教育學校','國立臺東大學附屬特殊教育學校');
      addSchoolOption('國立臺東高商','國立臺東高商');
      addSchoolOption('國立臺東專科學校附設高職部','國立臺東專科學校附設高職部');
      addSchoolOption('國立關山工商','國立關山工商');
      addSchoolOption('國立成功商業水產','國立成功商業水產');
      addSchoolOption('私立育仁高中','私立育仁高中');
      addSchoolOption('私立公東高工','私立公東高工');
    }
    else if($('#select-location').val() == "其他")
    {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
      addSchoolOption('海外臺灣學校','海外臺灣學校');
      addSchoolOption('大陸臺商子弟學校','大陸臺商子弟學校');
      addSchoolOption('大陸及港澳地區學校','大陸及港澳地區學校');
      addSchoolOption('七年一貫制學校','七年一貫制學校');
      addSchoolOption('高普考或乙丙等特考及格','高普考或乙丙等特考及格');
      addSchoolOption('五年制專科學校','五年制專科學校');
      addSchoolOption('師範學校','師範學校');
      addSchoolOption('進修學校(補校)或夜間部','進修學校(補校)或夜間部');
      addSchoolOption('空中補校','空中補校');
      addSchoolOption('國外學校','國外學校');
      addSchoolOption('學力鑑定考試及格','學力鑑定考試及格');
      addSchoolOption('漏列學校或其他','漏列學校或其他');
    }
    else {
      $('#select-school').empty();
      addSchoolOption('','請選擇');
    }


});

function resetRegisterForm() {
  $('#register-email').val('');
  $('#select-location').empty();
  $('#select-school').empty();
  $('#select-identity').empty();
  addLocationOption('','請選擇');
  addLocationOption('基隆市','基隆市');
  addLocationOption('臺北市','臺北市');
  addLocationOption('新北市','新北市');
  addLocationOption('桃園市','桃園市');
  addLocationOption('新竹縣市','新竹縣市');
  addLocationOption('苗栗縣','苗栗縣');
  addLocationOption('臺中市','臺中市');
  addLocationOption('彰化縣','彰化縣');
  addLocationOption('南投縣','南投縣');
  addLocationOption('雲林縣','雲林縣');
  addLocationOption('嘉義縣市','嘉義縣市');
  addLocationOption('臺南市','臺南市');
  addLocationOption('高雄市','高雄市');
  addLocationOption('屏東縣','屏東縣');
  addLocationOption('宜蘭縣','宜蘭縣');
  addLocationOption('花蓮縣','花蓮縣');
  addLocationOption('臺東縣','臺東縣');
  addLocationOption('澎湖縣','澎湖縣');
  addLocationOption('連江縣','連江縣');
  addLocationOption('金門縣','金門縣');
  addLocationOption('其他','其他');
  addSchoolOption('','請選擇');
  addIdentityOption('','請選擇');
  addIdentityOption('考生','考生');
  addIdentityOption('家長','家長');
  addIdentityOption('其他','其他');
}

function resendEmail() {
  var mail = getLoginData();

  if(mail === ''){}
  else {
    $.ajax({
      // type: "GET",
      type: "POST",
      url:baseResendEmailUrl,
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      dataType: "json",
      data: "="+mail,
      beforeSend: function() {
        // 顯示處理中畫面
        $('input[type=submit]').prop( "disabled", true );
        // $('#myResendModal').modal('hide');
      },
      success: function(data){
        successDialogAlertMsg(data.message);
        $('input[type=submit]').prop( "disabled", false );
        // $('#myMessageModal').modal('show');
      },
      error: function(data){
        var jsonObj = JSON.parse(data.responseText);
        if(data.status == 406)
        {
          errorDialogAlertMsg("<strong>錯誤！</strong> "+jsonObj.message);
          $('input[type=submit]').prop( "disabled", false );
          // $('#myMessageModal').modal('show');
        }
        else {
          errorDialogAlertMsg("<strong>錯誤！</strong> 沒有網路連線");
          $('input[type=submit]').prop( "disabled", false );
          // $('#myMessageModal').modal('show');
        }
      }
    });
  }
}

//按鈕事件
// $('#enter-btn').click(function(e) {
//     e.preventDefault();
//     $(e.currentTarget).closest('ul').hide();
//     $('#signin-email').val('');
//     $('form#signin').fadeIn('fast');
// });

// $('#register-btn').click(function(e){
//     e.preventDefault();
//     $(e.currentTarget).closest('ul').hide();
//     resetRegisterForm();
//     $('form#register').fadeIn('fast');
// });

$('#registerbtn').click(function(e){
    e.preventDefault();
    var email = $('#signin-email').val();
    resetRegisterForm();
    $('#register-email').val(email);
    $('form#register').fadeIn('fast');
});


$('#send-register-btn').click(function (e){
  var inputRegisterData = getRegisterData();

  if((inputRegisterData.email === '') || (inputRegisterData.location === '') || (inputRegisterData.schoolName === '') || (inputRegisterData.identity === '')){}
  // 沒有問題，開始向後端要資料
  else {
    e.preventDefault();

    $.ajax({
      // type: "GET",
      type: "POST",
      url:baseRegisterSystemSingUpUrl,
      headers: {
        "content-type": "application/json"
      },
      dataType: "json",
      data: JSON.stringify(inputRegisterData),
      beforeSend: function() {
        // 顯示處理中畫面
        $('input[type=submit]').prop( "disabled", true );
      },
      success: function(data){
        // 隱藏處理中畫面
        if(data.status == 201)
        {
          $('input[type=submit]').prop( "disabled", false );
          // $('#myRegisterModal').modal('hide');
          errorDialogAlertMsg("<strong>註冊失敗！</strong> "+data.message);
          // $('#myMessageModal').modal('show');
        }
        else{
          $('input[type=submit]').prop( "disabled", false );
          // $('#myRegisterModal').modal('hide');
          successDialogAlertMsg("<strong>註冊成功！</strong> "+data.message);
          // $('#myMessageModal').modal('show');
          $('#login-modal').foundation('reveal', 'open');
        }
      },
      error: function(data){
        // 隱藏處理中畫面
        if(data.status == 406)
        {
          errorDialogAlertMsg("<strong>錯誤！</strong> "+data.message);
          $('input[type=submit]').prop( "disabled", false );
          // $('#myMessageModal').modal('show');
        }
        else {
          errorDialogAlertMsg("<strong>錯誤！</strong> 沒有網路連線");
          $('input[type=submit]').prop( "disabled", false );
          // $('#myMessageModal').modal('show');
        }
      }
    });
  }
});

$('#signbtn').click(function(e) {
  var inputLoginData = getLoginData();

  if(inputLoginData === ''){}
  // 沒有問題，開始向後端要資料
  else {
    e.preventDefault();

    $.ajax({
      // type: "GET",
      type: "POST",
      url:baseRegisterSystemLoginUrl,
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      dataType: "json",
      data: "="+inputLoginData,
      beforeSend: function() {
        // 顯示處理中畫面
        $('input[type=submit]').prop( "disabled", true );
      },
      success: function(data){
        // 隱藏處理中畫面
          successDialogAlertMsg("<strong>"+data.message+"</strong>");
          $('input[type=submit]').prop( "disabled", false );
          $('#login-modal').foundation('reveal', 'close');
      },
      error: function(data){
        // 隱藏處理中畫面
        var jsonObj = JSON.parse(data.responseText);
        if(data.status == 404)
        {
          errorDialogAlertMsg("<strong>錯誤！</strong> "+jsonObj.message);
          $('input[type=submit]').prop( "disabled", false );
          // $('#myMessageModal').modal('show');
        }
        else if(data.status == 401)
        {
          resendDialogAlertMsg(jsonObj.message);
          $('input[type=submit]').prop( "disabled", false );
          // $('#myResendModal').modal('show');
        }
        else {
          errorDialogAlertMsg("<strong>錯誤！</strong> 沒有網路連線");
          $('input[type=submit]').prop( "disabled", false );
          // $('#myMessageModal').modal('show');
        }
      }
    });
  }
});
