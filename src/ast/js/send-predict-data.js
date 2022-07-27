// var basePredictSystemUrl = "https://2cbf-140-126-120-156.ngrok.io/api/ast/analysis";
var basePredictSystemUrl = "api/ast/analysis";
var max_input_score = 15;
var querying = false;

// http://stackoverflow.com/questions/1127905/how-can-i-format-an-integer-to-a-specific-length-in-javascript

// function formatNumberLength(num, length) {
//     var r = "" + num;
//     while (r.length < length) {
//         r = "0" + r;
//     }
//     return r;
// }

function transferToMobileSalaryURL(url) {
    let params = url.split('?');
    // https://guide.104.com.tw/career/view?degree=3&mid=520114&sid=5007000000
    let murl = "https://guide.104.com.tw/career/view?"+params[1];
    return murl;
}

function getData() {
  // 網頁介面對應
  let input_salary        = document.getElementById('input-expect-salary');
  let input_ast_chinese   = document.getElementById('input-ast-chinese');
  let input_ast_english   = document.getElementById('input-ast-english');
  let input_ast_mathA     = document.getElementById('input-ast-math-a');
  let input_ast_history   = document.getElementById('input-ast-history');
  let input_ast_geography = document.getElementById('input-ast-geography');
  let input_ast_citizen   = document.getElementById('input-ast-citizen');
  let input_ast_physics   = document.getElementById('input-ast-physics');
  let input_ast_chemistry = document.getElementById('input-ast-chemistry');
  let input_ast_biology  = document.getElementById('input-ast-biology');
  let subject_test_math_a = document.getElementById('subject-test-math-a');
  let subject_test_math_b = document.getElementById('subject-test-math-b');
  let subject_test_society = document.getElementById('subject-test-society');
  let subject_test_science = document.getElementById('subject-test-science');

  let input_gsat_chinese  = document.getElementById('input-gsat-chinese');
  let input_gsat_english  = document.getElementById('input-gsat-english');
  let input_gsat_matha     = document.getElementById('input-gsat-matha');
  let input_gsat_mathb     = document.getElementById('input-gsat-mathb');
  let input_gsat_society   = document.getElementById('input-gsat-society');
  let input_gsat_science   = document.getElementById('input-gsat-science');
  let input_gsat_engLis   = document.getElementById('input-gsat-english-listen');

  let input_departmentGroup = document.getElementsByName('input-department-group');
  let input_stateGroup = document.getElementsByName('input-state-group');
  let input_universityGroup = document.getElementsByName('input-university-group');
  let salary = input_salary.value == "" ? 0 : parseInt(input_salary.value);

  // 取得使用者填寫的表單資料
  // let ast_chinese = input_ast_chinese.value == "" ? 0 : parseInt(input_ast_chinese.value);
  // let ast_english = input_ast_english.value == "" ? 0 : parseInt(input_ast_english.value);
  // let ast_mathA = input_ast_mathA.value == "" ? 0 : parseInt(input_ast_mathA.value)
  // let ast_history = input_ast_history.value == "" ? 0 : parseInt(input_ast_history.value);
  // let ast_geography = input_ast_geography.value == "" ? 0 : parseInt(input_ast_geography.value);
  // let ast_citizen = input_ast_citizen.value == "" ? 0 : parseInt(input_ast_citizen.value);
  // let ast_physics = input_ast_physics.value == "" ? 0 : parseInt(input_ast_physics.value);
  // let ast_chemistry = input_ast_chemistry.value == "" ? 0 : parseInt(input_ast_chemistry.value);
  // let ast_biology = input_ast_biology.value == "" ? 0 : parseInt(input_ast_biology.value);
  // let sub_test_mathA = subject_test_math_a.value == "" ? 0 : parseInt(subject_test_math_a.value);
  // let sub_test_mathB = subject_test_math_b.value == "" ? 0 : parseInt(subject_test_math_b.value);
  // let sub_test_society = subject_test_society.value == "" ? 0 : parseInt(subject_test_society.value);
  // let sub_test_science = subject_test_science.value == "" ? 0 : parseInt(subject_test_science.value);

  let ast_chinese = parseInt(input_ast_chinese.value);
  let ast_english = parseInt(input_ast_english.value);
  let ast_mathA = parseInt(input_ast_mathA.value)
  let ast_history = parseInt(input_ast_history.value);
  let ast_geography = parseInt(input_ast_geography.value);
  let ast_citizen = parseInt(input_ast_citizen.value);
  let ast_physics = parseInt(input_ast_physics.value);
  let ast_chemistry = parseInt(input_ast_chemistry.value);
  let ast_biology = parseInt(input_ast_biology.value);
  let sub_test_mathA = parseInt(subject_test_math_a.value);
  let sub_test_mathB = parseInt(subject_test_math_b.value);
  let sub_test_society = parseInt(subject_test_society.value);
  let sub_test_science = parseInt(subject_test_science.value);
  let gsat_engLis = input_gsat_engLis.value;

  let gsat_chinese = input_gsat_chinese.value == "" ? 0 : parseInt(input_gsat_chinese.value);
  let gsat_english = input_gsat_english.value == "" ? 0 : parseInt(input_gsat_english.value);
  let gsat_mathA = input_gsat_matha.value == "" ? 0 : parseInt(input_gsat_matha.value);
  let gsat_mathB = input_gsat_mathb.value == "" ? 0 : parseInt(input_gsat_mathb.value);
  let gsat_society = input_gsat_society.value == "" ? 0 : parseInt(input_gsat_society.value);
  let gsat_science = input_gsat_science.value == "" ? 0 : parseInt(input_gsat_science.value);

  let departmentGroup = [];
  for(let i=0; i<input_departmentGroup.length; i++) {
     if(input_departmentGroup[i].checked) {
       departmentGroup.push(input_departmentGroup[i].value);
     }
   }
  // 若沒選擇的話，就全選
   if(departmentGroup.length == 0) {
     for(let i=0; i<input_departmentGroup.length; i++) {
       departmentGroup.push(input_departmentGroup[i].value);
     }
   }

  let stateGroup = [];
  for(let i=0; i<input_stateGroup.length; i++) {
    if(input_stateGroup[i].checked) {
      stateGroup.push(input_stateGroup[i].value);
    }
  }
  // 若沒選擇的話，就全選
  if(stateGroup.length == 0) {
    for(let i=0; i<input_stateGroup.length; i++) {
      stateGroup.push(input_stateGroup[i].value);
    }
  }

  let universityGroup = [];
  for(let i=0; i<input_universityGroup.length; i++) {
    if(input_universityGroup[i].checked) {
      universityGroup.push(input_universityGroup[i].value);
    }
  }
  // 若沒選擇的話，就全選
  if(universityGroup.length == 0) {
    for(let i=0; i<input_universityGroup.length; i++) {
      universityGroup.push(input_universityGroup[i].value);
    }
  }

  // 製作JSON
  let data = {
    grades: {
      ast: {
        Math_A: ast_mathA,
        History: ast_history,
        Geographic:ast_geography,
        Citizen: ast_citizen,
        Physics: ast_physics,
        Chemistry: ast_chemistry,
        Biology: ast_biology
      },
      gsat: [
        {
          Chinese: gsat_chinese,
          English: gsat_english,
          MathA: gsat_mathA,
          MathB: gsat_mathB,
          Society: gsat_society,
          Science: gsat_science,
          EngListeningLevel: gsat_engLis,
        },
        {
          Chinese: ast_chinese,
          English: ast_english,
          MathA: sub_test_mathA,
          MathB: sub_test_mathB,
          Society: sub_test_society,
          Science: sub_test_science,
        }
      ]
    },
    groups: departmentGroup,
    location: stateGroup,
    property: universityGroup,
    expect_salary: salary
  };
  return data;
}

function setData(resultData) {
  // 網頁介面對應
  var table_result = $("#table-result-suggest-school-departments");
  var table_result_body = table_result.find("tbody");

  // 有沒有資料
  if(resultData.length > 0) {
    table_result_body.empty();
    for(var i=0; i<resultData.length; i++) {
      addData(resultData[i].did, resultData[i].uname, resultData[i].uurl,
              resultData[i].dname, resultData[i].durl, resultData[i].salary, resultData[i].salaryUrl,
              resultData[i].minScore, resultData[i].yourScore);
    }
  }
  else {
    table_result_body.empty();
    table_result_body.append('<tr><td colspan="6">沒有符合您的校系，請修改條件後再次分析。</td></tr>');
  }
}

function addData(did, uname, uurl, dname, durl, salary, salaryUrl, minScore, yourScore) {
  let post_url = 'https://uac2.ncku.edu.tw/cross_search/index.php?c=search&m=detail';
  if(salary == 0) { salary = '樣本不足';}

  var table_result = $("#table-result-suggest-school-departments");
  var table_result_body = table_result.find("tbody");

  var trClass = '';
  if(yourScore < minScore) {
    trClass += ' warning';
  }
  if(uname == '中華大學') {
    trClass += ' chu';
  }
  var tr = `<tr data-item-id="${did}" class="${trClass}">`;

  var content = '';
  content += `<td data-title="校系代碼">
                <form method="post" action=${post_url} target="_blank">
                  <span data-tooltip aria-haspopup="true" data-tooltip-title="連結至分科測驗校系分則網頁">
                    <input class="link" type="submit" name="dep_id" value="${did}"/>
                  </span>
                </form>
              </td>`;

  content += `<td data-title="校名">
                <a href="${uurl}" target="_blank" data-tooltip aria-haspopup="true"
                    data-tooltip-title="連結至學校首頁">${uname}</a>
              </td>`;
  if(durl === null){
    content += `<td data-title="科系名稱">${dname}</td>`;
  }
  else {
    content += `<td data-title="科系名稱">
                  <a href="${durl}" target="_blank" data-tooltip aria-haspopup="true"
                      data-tooltip-title="連結至科系首頁">${dname}</a>
                </td>`;
  }
  if(salaryUrl === null) {
    content += `<td data-title="畢業生平均薪資">${salary}</td>`;
  }
  else {
      if(window.screen.height < 768) {
          salaryUrl = transferToMobileSalaryURL(salaryUrl);
      }
      content += `<td data-title="畢業生平均薪資">
                    <a href="${salaryUrl}" target="_blank" data-tooltip aria-haspopup="true"
                        data-tooltip-title="連結至104升學就業地圖">${salary}</a>
                  </td>`;
  }
  content += `<td data-title="去年最低錄取分數">${minScore}</td>`;
  if(yourScore < minScore) {
    content += `<td data-title="換算去年加權分數" class="warning">
                  <span data-tooltip aria-haspopup="true"
                      data-tooltip-title="換算去年加權分數\n低於去年最低錄取分數">${yourScore}</span>
                </td>`;
  }
  else {
    content += `<td data-title="換算去年加權分數">${yourScore}</td>`;
  }

  table_result_body.append(tr+content+'</tr>');
}

function cleanData() {
  // 網頁介面對應
  var table_result = $("#table-result-suggest-school-departments");
  var table_result_body = table_result.find("tbody");

  table_result_body.empty();
  table_result_body.append('<tr><td class="big-row" colspan="˙">沒有符合您的校系，請修改條件後再次分析。</td></tr>');
}

function errorData() {
  // 網頁介面對應
  var table_result = $("#table-result-suggest-school-departments");
  var table_result_body = table_result.find("tbody");

  table_result_body.empty();
  table_result_body.append('<tr><td colspan="6">錯誤！沒有網路連線。</td></tr>');
}

function errorAlertMsg(text) {
  var alertArea = $("#input-area .alerts-area");
  alertArea.append(`<div data-alert class="alert-box alert round">${text} <a href="#" class="close">&times;</a></div>`);
  $("#input-area .alerts-area").foundation();
}

function warningAlertMsg(text) {
  var alertArea = $("#input-area .alerts-area");
  alertArea.append(`<div data-alert class="alert-box warning round">${text}<a href="#" class="close">&times;</a></div>`);
 $("#input-area .alerts-area").foundation();
}

function cleanAlert() {
  var alertArea = $("#input-area .alerts-area");
  alertArea.empty();
}

function atLeast3(data) {
  var bool = false;
  var count = 0;

  for (const key in data)
  {
    if(count < 3) {
      if(data[key] > 0) count++;
    } else {
      bool = true;
    }
  }
  return bool;
}

function checkGradeIsAllBlank(grades) {
  let ast_data = grades.ast;
  let gsat_data = grades.gsat[1];
  if(isNaN(ast_data.Biology) && isNaN(ast_data.Chemistry) && isNaN(ast_data.Physics) && isNaN(ast_data.Math_A)
      && isNaN(ast_data.History) && isNaN(ast_data.Citizen) && isNaN(ast_data.Citizen) && isNaN(gsat_data.Chinese)
      && isNaN(gsat_data.English) && isNaN(gsat_data.MathA) && isNaN(gsat_data.MathB) && isNaN(gsat_data.Science)
      && isNaN(gsat_data.Society)) {
        return true
      }
      else return false;
}

function fetchPredictData(data) {
  let div_loading = document.getElementById('loading-area');
  $.ajax({
    type: "POST",
    url: basePredictSystemUrl,
    headers: {
      "content-type": "application/json"
    },
    dataType: "json",
    data: JSON.stringify(data),
    beforeSend: function () {
      // 顯示處理中畫面
      div_loading.classList.remove('hidden');
      $('input[type=submit]').prop("disabled", true);
      $('.analyze_start').val('落點分析中...');
      querying = true;
    },
    success: function (data) {
      // 隱藏處理中畫面
      div_loading.classList.add('hidden');
      setData(data.result);
      $('input[type=submit]').prop("disabled", false);
      $('.analyze_start').val('開始分析');
      querying = false;
    },
    error: function (data) {
      // 隱藏處理中畫面
      div_loading.classList.add('hidden');
      if(data.status == 400)
      {
        warningAlertMsg("請檢查成績是否輸入正確");
      }else{
        errorData();
        errorAlertMsg("<strong>錯誤！</strong> 沒有網路連線");        
      }
      $('input[type=submit]').prop("disabled", false);
      $('.analyze_start').val('開始分析');
      querying = false;
    }
  });
}

function queryResult(data) {
  let astData = data.grades.ast;
  let gsatData = data.grades.gsat[1];
  let subject = Object.assign(astData,gsatData);
  console.log(atLeast3(subject));
  cleanAlert();
  if(checkGradeIsAllBlank(data.grades)) {
    warningAlertMsg("你還沒填寫成績喔～");
  } else if(!atLeast3(subject)) {
    warningAlertMsg("請填入至少三科以上成績喔～");
  } else {
    // 沒有問題，開始向後端要資料
    if(!querying) {
      fetchPredictData(data);
    }
  }
}

function mockPredictResult()
{
  let mock_result = [
    {
      did: '04302',
      uname: '中華大學',
      uurl: 'https://www1.chu.edu.tw',
      dname: '應用日語學系',
      durl: 'https://aj.chu.edu.tw/index.php?Lang=zh-tw',
      minScore: 300.25,
      yourScore: 400.25,
      salary: 50040,
      salaryUrl: 'https://www.104.com.tw/jb/career/department/view?degree=3&sid=5067000000&mid=520101'
    },
    {
      did: "04323",
      uname: "中華大學",
      uurl: "http://www1.chu.edu.tw",
      dname: "電機工程學系",
      durl: "http://ee.chu.edu.tw",
      minScore: 265.25,
      salary: 58180,
      salaryUrl: "https://www.104.com.tw/jb/career/department/view?degree=3&sid=5067000000&mid=520101",
      yourScore: 800,
      examURL: "https://campus4.ncku.edu.tw/uac/cross_search/dept_info/04323.html"
    },
  ];

  return mock_result;
}

var form_input = document.getElementById('input-form');
form_input.onsubmit = function(e) {
    e.preventDefault();
    let studentGrade = getData();
    queryResult(studentGrade);
}
