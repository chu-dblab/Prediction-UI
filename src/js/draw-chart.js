var chart_data;
var debug_data;
var chart_height = 500;
var chart_rotate = false;
// if(document.documentElement.clientWidth <= 640) {
if(screen.width <= 640) {
  chart_rotate = true;
  chart_height = 700;
}

var chart = c3.generate({
  bindto: '#render-chart',
  padding: {
    // top: 40,
    // right: 100,
    bottom: 25,
    left: 100,
  },
  data: {
    x: 'name',
    json: [{
      "name": "工程學群 資訊工程學系",
      "平均分數": 48.13508108108107,
      "平均薪資": 49.726702702702674,
      "CP值": 77.77777777777777
    }],
    keys: {
      value:['name', '平均分數', '平均薪資', 'CP值']
    },
    axes: {
      'CP值': 'y2'
    },
    labels: {
      format: {
        y: function () { return ""; },
        y2: function (v) { return v + "%"; },
        'CP值': function (v) { return v; }
      }
    },
    colors: {
      '平均分數': '#34c6bb',
      '平均薪資': '#feab85',
      'CP值': '#be4a47'
    }
  },
  axis: {
    x: {
        type: 'category',
        tick: {
          // format: function(x) {
          //   // console.log(x);
          //   return [x];
          // },
          multiline: true,
          multilineMax: 3,
          width: 80
        },
        outer: true
    },
    y: {
      min: 0,
      label: {
        text: '平均分數 與 平均薪資',
        position: 'outer-middle'
        // inner-top : default
        // inner-middle
        // inner-bottom
        // outer-top
        // outer-middle
        // outer-bottom
      },
      padding: {bottom: 0}
    },
    y2: {
      show: true,
      label: {
        text: 'CP值',
        position: 'outer-middle'
      },
    },
    rotated: chart_rotate
  },
  legend: {
    // position: 'right'
  },
  bar: {
    width: {
        // ratio: 0.5 // this makes bar width 50% of length between ticks
    }
    // or
    //width: 100 // this makes bar width 100px
  },
  size: {
      height: chart_height
  },
  grid: {
    y: {
      lines: [
        {value: 0, axis: 'y2'}
      ]
    }
  }
});

function selectChart(group, name, pmin = null, pmax = null) {
  // console.log(chart_data[group][name]);

  var m_title = d3.select('#render-area').select('#render-title');
  var m_subtitle = d3.select('#render-area').select('#render-subtitle');
  m_title.text(name);
  if(pmin == 0 && pmax == 10) {
    m_subtitle.text('CP值最高前十名');
  }
  else {
    m_subtitle.text('');
  }

  var data;
  if(pmin !== null && pmax !== null) {
    data = array_get_count(chart_data[group][name], pmin, pmax);
  }
  else {
    data = chart_data[group][name];
  }
  // console.log(data);

  renderTheChart('#render-chart', data);
}

function array_get_count(array, min, max) {
  var result = [];
  for(i=min; i<max; i++) {
	result.push(array[i]);
  }
  return result;
}

function renderTheChart(element_name, data) {
  // console.log(data);
  // debug_data = data;

  chart.load({
    x: 'name',
    json: data,
    keys: {
      value:['name', '平均分數', '平均薪資', 'CP值']
    },
    types: {
      '平均分數': 'bar',
      '平均薪資': 'bar'
    }
  });
}

d3.json("docs/107-CP-public.json").then(function(data) {
  chart_data = data;
  // 切換顯示動作
  var parm = getUrlParmC();
  if(parm) {
    var pmin = parm.p_min;
    var pmax = parm.p_max;
    selectChart(parm.group, parm.name, pmin, pmax);
  }
  else {
    selectChart('一般分類', '學校',0, 10);
    var link_chartItems = document.getElementsByClassName("chart-link");
    link_chartItems[0].classList.add("active");
  }
});

window.onhashchange = function() {
  // 切換顯示動作
  var parm = getUrlParmC();
  if(parm) {
    var pmin = parm.p_min;
    var pmax = parm.p_max;
    selectChart(parm.group, parm.name, pmin, pmax);
  }
  else {
    selectChart('一般分類', '學校',0, 10);
    var link_chartItems = document.getElementsByClassName("chart-link");
    link_chartItems[0].classList.add("active");
  }
};


// 當按鈕按下去的時候
var link_chartItems = document.getElementsByClassName("chart-link");
for(var i=0; i<link_chartItems.length; i++) {
  link_chartItems[i].onclick = function() {

    // 更改按鈕狀態
    for(var j=0; j<link_chartItems.length; j++) {
      link_chartItems[j].classList.remove("active");
    }
    this.classList.add("active");

    // 切換顯示動作
    var parm = getUrlParmC(this.href);
    var pmin = parm.p_min;
    var pmax = parm.p_max;
    selectChart(parm.group, parm.name, pmin, pmax);

    // 偵測視窗高度有沒有超過底下區域
    if(window.innerHeight > $("#container").get(0).offsetTop) {
      return true;
    }
    else {
      window.scroll(0, $("#container").get(0).offsetTop);
      return true;
    }
  }
}

function getUrlParmC(thisUrl = window.location.href) {
  var request_string = thisUrl.split("#")[1];
  if(request_string) {
    var requestId = request_string.split("?")[0];
    var goto_string = requestId;
    if(goto_string) {
      var goto_group = decodeURI(goto_string.split("-")[0]);
      var goto_name = decodeURI(goto_string.split("-")[1]);
      var page_max = Arg.parse(request_string).pmax;
      var page_min = Arg.parse(request_string).pmin;
      return {
        group: goto_group,
        name: goto_name,
        p_max: page_max,
        p_min: page_min
      };
    }
    else {
      return null;
    }
  }
  else { return null; }
}
