function fnW(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}

//中国地图开始
//var china_map =echarts.init(document.getElementById("china_map"),'macarons'); 
var china_map =echarts.init(document.getElementById("china_map"),'infographic'); 
//var china_map =echarts.init(document.getElementById("china_map"),'shine'); 


function randomData() {
		return Math.round(Math.random()*500);
	}
 
	var mydata = [
		{name: '北京',value: 1652 },{name: '天津',value: 62 },
		{name: '上海',value: 388 },{name: '重庆',value: 53 },
		{name: '河北',value: 53 },{name: '河南',value: 64 },
		{name: '云南',value: 5 },{name: '辽宁',value: 50 },
		{name: '黑龙江',value: 15 },{name: '湖南',value: 22 },
		{name: '安徽',value: 49 },{name: '山东',value: 28283 },
		{name: '新疆',value: 5 },{name: '江苏',value: 316 },
		{name: '浙江',value: 209 },{name: '江西',value: 14 },
		{name: '湖北',value: 99 },{name: '广西',value: 2 },
		{name: '甘肃',value: 5 },{name: '山西',value: 12 },
		{name: '内蒙古',value: 4 },{name: '陕西',value: 41},
		{name: '吉林',value: 10 },{name: '福建',value: 57 },
		{name: '贵州',value: 1 },{name: '广东',value: 1222 },
		{name: '青海',value: 1 },{name: '西藏',value: 0 },
		{name: '四川',value: 54 },{name: '宁夏',value: 3 },
		{name: '海南',value: 6 },{name: '台湾',value: 0 },
		{name: '香港',value: 0 },{name: '澳门',value: 0 }
	];
 
	var option = {
		//backgroundColor: '#FFFFFF',
		
		title: {
			text: '各省市成交数量分析',
			textStyle:{color:'#fff'},
			x:'center'
		},
		tooltip : {
			trigger: 'item'
		},
		visualMap: {
			show : false,
			x: 'left',
			y: 'bottom',
			//layoutCenter:['30%','30%'],
			splitList: [ 
				{start: 10001, end:30000},{start: 1001, end: 10000},
				{start: 501, end: 1000},{start: 101, end: 500},
				{start: 1, end: 100},{start: 0, end: 0},
			],
			color: ['#ff0', '#ffff00', '#0E94EB','#6FBCF0', '#F0F06F', '#00CC00']
		},
		series: [{
			name: '各省市成交数量分析',
			type: 'map',
			mapType: 'china', 
			roam: true,
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false
				}
			},
			data:mydata
		}]
	};

china_map.setOption(option);
//中国地图结束





//获取当前时间
var timer = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var day = date.getDay(); //获取当前星期几 
    var ampm = hours < 12 ? 'am' : 'pm';
    $('#time').html(fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));
    $('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span><span>' + ampm + '</span><span>周' + day + '</span>')

}, 1000)


//各性质事业单位数量占比，带边框效果的饼图
//var pie_fanzui =echarts.init(document.getElementById("pie_xingzhi"),'macarons');
var pie_xingzhi =echarts.init(document.getElementById("pie_xingzhi"),'infographic');
option = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['教育','医疗卫生','其他'],
        textStyle: {color: '#fff'}
    },
    
	label: {
	     normal: {
	          textStyle: {
	                color: 'red'  // 改变标示文字的颜色
	          }
	     }
	},
    series : [
        {
            name: '各性质事业单位数量占比',
            type: 'pie',
            radius : '55%',
            center: ['55%', '45%'],
            data:[
                {value:9463, name:'教育'},
                {value:2450, name:'医疗卫生'},
                {value:6483, name:'其他'},
            ],
          
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            
        }
    ]
};
pie_xingzhi.setOption(option);
//----------------------各性质事业单位数量占比end---------------



//采购方式数量占比分析，带边框效果的饼图
//var pie_age =echarts.init(document.getElementById("pie_caigoufs"),'macarons');
var pie_age =echarts.init(document.getElementById("pie_caigoufs"),'infographic');
//var pie_age =echarts.init(document.getElementById("pie_caigoufs"),'shine');
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['单一来源','公开招标','竞争性磋商','竞争性谈判','网上商城','询价'],
        textStyle: {color: '#fff'}
    },
    series: [
        {
            name:'采购方式数量占比',
            type:'pie',
            radius: ['25%', '55%'],
            center: ['55%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:652, name:'单一来源'},
                {value:1739, name:'公开招标'},
                {value:5437, name:'竞争性磋商'},
                {value:75, name:'竞争性谈判'},
                {value:18354, name:'网上商城'},
                {value:33, name:'询价'}
            ]
        }
    ]
};
pie_age.setOption(option);
//----------------------采购方式数量分析占比end---------------



//===================招投标各月走势分析=======================
//var line_time =echarts.init(document.getElementById("zoushi"),'shine');
var zoushi =echarts.init(document.getElementById("zoushi"),'macarons');
//var line_time =echarts.init(document.getElementById("zoushi"),'infographic');
var option = {
        // 给echarts图设置背景色
        //backgroundColor: '#FBFBFB',  // -----------> // 给echarts图设置背景色
        color: ['#7FFF00'],
        tooltip: {
            trigger: 'axis'
        },
       
		grid:{
                    x:40,
                    y:30,
                    x2:5,
                    y2:20
                    
                },
        calculable: true,


        xAxis: [{
             type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
     axisLabel: {
			color: "#7FFF00" //刻度线标签颜色
			}
        }],
        yAxis: [{

            type: 'value',
            axisLabel: {
			color: "#7FFF00" //刻度线标签颜色
			}
        }],
        series: [{
            name: '2021年',
            type: 'line',
            data: [4.44 ,0.93 ,5.39 ,9.85 ,12.72 ,14.44 ,16.94 ,16.87 ,11.71 ,13.15 ,21.32 ,18.85 ],
            
        },
        {
            name: '2020年',
            type: 'line',
            data: [5.44 ,1.46 ,8.61 ,13.63 ,15.09 ,20.83 ,15.71 ,11.88 ,12.79 ,7.68 ,12.59 ,20.59 ]
        },
        {
            name: '2019年',
            type: 'line',
            data: [5.12,2.11,5.32,6.59,13.74,15.56,18.01,18.16,13.68,10.65,17.74,20.67]
        }
        ]
    };


zoushi.setOption(option);


//=========各月成交量分析开始=======================
//var qufenbu_data =echarts.init(document.getElementById("qufenbu_data"),'shine'); 
//var qufenbu_data =echarts.init(document.getElementById("qufenbu_data"),'macarons'); 
var cjl_data =echarts.init(document.getElementById("chengjiaoliang_data"),'infographic');
option = {
    color: ['#FADB71'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        x:30,
        y:10,
        x2:15,
        y2:20
    },
    xAxis : [
        {
            type : 'category',
            data : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
			color: "#FADB71" //刻度线标签颜色
			}
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
			    color: "#FADB71" //刻度线标签颜色
			}
        }
    ],
    series : [
        {
            name:'2021年',
            type:'bar',
            barWidth: '20%',
//            data:[157,51,845,2073,2098,2741,2818,2480,2612,2068,3593,4755]
            data:[0.015,0.005,0.085,0.207,0.210,0.274,0.282,0.248,0.261,0.207,0.359,0.476]
        },
        {
            name:'2020年',
            type:'bar',
            barWidth: '20%',
//            data:[228,26,170,646,775,926,873,712,542,446,754,1908]
            data:[0.023,0.003,0.017,0.065,0.078,0.093,0.087,0.071,0.054,0.045,0.075,0.191]
        }

    ]
};

cjl_data.setOption(option);
//=========各月成交量分析结束=======================


//时间选择器
var startV = '';
var endV = '';
laydate.skin('danlan');
var startTime = {
    elem: '#startTime',
    format: 'YYYY-MM-DD',
    min: '1997-01-01', //设定最小日期为当前日期
    max: laydate.now(), //最大日期
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        startV = datas;
        endTime.min = datas; //开始日选好后，重置结束日的最小日期
    }
};
var endTime = {
    elem: '#endTime',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now(),
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        endV = datas;
    }
};

laydate(startTime);
laydate(endTime);

//时间选择器
var startVs = '';
var endVs = '';
laydate.skin('danlan');
var startTimes = {
    elem: '#startTimes',
    format: 'YYYY-MM-DD',
    min: '1997-01-01', //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        startVs = datas;
        endTimes.min = datas; //开始日选好后，重置结束日的最小日期
        setQgData($('#barTypes').parent().parent(), 1);
    }
};
var endTimes = {
    elem: '#endTimes',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now(),
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        endVs = datas;
        setQgData($('#barTypes').parent().parent(), 1);
    }
};

laydate(startTimes);
laydate(endTimes);




//更改日期插件的样式
function dateCss() {
    var arr = $('#laydate_box').attr('style').split(';');
    var cssStr =
        'position:absolute;right:0;';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('top') != -1) {
            cssStr += arr[i];
        }
    }

    $('#laydate_box').attr('style', cssStr);
}


var workDate;
var time = {
    elem: '#times',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now() + 30,
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        workDate = datas;
    }
};

laydate(time);



