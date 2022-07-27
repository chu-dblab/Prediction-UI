// var liffID = '1657337645-Eop8Wj1r';
var liffID = '1657321772-40ezKwvL';
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

function sentToLIFF(data) {
    if (!liff.isInClient()) {
        alert('This button is unavailable as LIFF is currently being opened in an external browser.');
    } else {
        liff.sendMessages([
            {
                type: 'text',
                text: JSON.stringify(data),
            },
        ]).then(() => {
          liff.closeWindow();
        }).catch((error) => {
            window.alert('Error sending message: ' + error);
        });
    }
}



liff.init({
    liffId: liffID
}).catch((err)=>{
  alert(err);
});

let form_input = document.getElementById('input-form');
form_input.onsubmit = function (e)  {
    e.preventDefault();
    let studentGrade = getData();
    sentToLIFF(studentGrade);
}
