// $(function () {
    // 设置pie chart 数据
    pieChartData1 = [
        { value: 10, name: 'rose1' },
        { value: 5, name: 'rose2' },
        { value: 15, name: 'rose3' },
        { value: 25, name: 'rose4' },
        { value: 20, name: 'rose5' },
        { value: 35, name: 'rose6' },
        { value: 30, name: 'rose7' },
        { value: 40, name: 'rose8' }
    ];

    function initMapOfDatavPage() {
        // 初始化全国地图
        mapOfChina('datav_map_china');
            
        yearsAuditEcharts(); // 审计地图，年度审计 台账
        pieEchartsInit('datav_third_echarts_list1', pieChartData1); // 审计预警 饼状图 datav_third_echarts_list1
        pieEchartsInit('datav_third_echarts_list2', pieChartData1); // 审计预警 饼状图 datav_third_echarts_list1
        pieEchartsInit('datav_third_echarts_list3', pieChartData1); // 审计预警 饼状图 datav_third_echarts_list1

    }

    function initMapOfDatavImage() {
        var productNumber = +$('.datav_image_left_top_content .datav_image_bo1_value').eq(0).attr('data-value');
        var marketNumber = +$('.datav_image_left_top_content .datav_image_bo1_value').eq(1).attr('data-value');
        let bigIndexFlag = productNumber > marketNumber ? 0 : 1;
        $('.datav_image_left_top_content .datav_image_bo1_value').eq(bigIndexFlag).css({
            width: '3.23rem'
        });
        let minWidth = 3.23 * (bigIndexFlag === 0 ? (marketNumber / productNumber) : (productNumber / marketNumber));
        $('.datav_image_left_top_content .datav_image_bo1_value').eq(bigIndexFlag === 0 ? 1 : 0).css({
            width: minWidth + 'rem'
        });
        // 初始化图表
        datavImageCategory([ 182, 121, 290, 330]);
        // 初始化 行业分布 南丁格尔图 
        
        datavImageIndustry([
            {value:335, name:'传统行业'},
            {value:310, name:'建筑行业'},
            {value:234, name:'其他行业'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
        ]);
        // 区域预警
        datavImageArea([
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '锦江区'
            },
            {
                value:  [3500, 6800, 5800, 3000, 60000, 20000],
                name : '成华区'
            },
            {
                name : '青羊区'
            },
            {
                name : '高新区'
            },
            {
                name : '天府新区'
            }
        ]);
    }

    // 审计预警
    function initmapOfDatavWarning() {
        // 区域预警  (今日预警)
        datavWarningToday([
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '锦江区'
            },
            {
                value:  [3500, 6800, 5800, 3000, 60000, 20000],
                name : '成华区'
            },
            {
                name : '青羊区'
            },
            {
                name : '高新区'
            },
            {
                name : '天府新区'
            }
        ]);
        // 预警分布  (今日预警)
        datavWarningDistribution([
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '锦江区'
            },
            {
                value:  [3500, 6800, 5800, 3000, 60000, 20000],
                name : '成华区'
            },
            {
                name : '青羊区'
            },
            {
                name : '高新区'
            },
            {
                name : '天府新区'
            }
        ]);

        // 两侧柱形图
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        datavWarningLeftBar( 'datav_warning_left_bottom_chart', data);
        datavWarningLeftBar( 'datav_warning_right_bottom_chart', data);
    }
    
    function yearsAuditEcharts() { // 审计地图，柱形图，年度审计 台账
        var dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月'];
        var data = [220, 182, 191, 234, 290, 330];

        var myFirstOption = {
            title: {
                text: '',
                subtext: ''
            },
            xAxis: {
                data: dataAxis,
                show: true,
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#fff',
                        fontSize: '0.16rem'
                    }
                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#5CD7FF',
                        fontSize: '0.16rem'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            grid: {
                containLabel: true
            },
            series: [
                {
                    type: 'bar',
                    barWidth: 16,
                    barMaxWidth: 16,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#83bff6' },
                                    { offset: 0.5, color: '#188df0' },
                                    { offset: 1, color: '#188df0' }
                                ]
                            ),
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#5CD7FF',
                                    fontSize: '0.2rem',
                                    fontWeight: 600
                                }
                            },
                            barBorderRadius: [30, 30, 30, 30]
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#2378f7' },
                                    { offset: 0.7, color: '#2378f7' },
                                    { offset: 1, color: '#83bff6' }
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };

        //初始化echarts实例
        var myFirstChart = echarts.init(document.getElementById('datav_first_charts_body'));

        // 使用制定的配置项和数据显示图表
        myFirstChart.setOption(myFirstOption);
    }


    function randomData() {
        return Math.round(Math.random() * 500);
    }


    function mapOfChina(idName) {
        //初始化echarts实例
        var myChartOfChina = echarts.init(document.getElementById(idName));

        var mydata = [
            { name: '天津', value: '100' },
            { name: '北京', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() },
            { name: '石家庄', value: randomData() },
            { name: '太原', value: randomData() },
            { name: '呼和浩特', value: randomData() },
            { name: '沈阳', value: randomData() },
            { name: '长春', value: randomData() },
            { name: '哈尔滨', value: randomData() },
            { name: '南京', value: randomData() },
            { name: '杭州', value: randomData() },
            { name: '合肥', value: randomData() },
            { name: '福州', value: randomData() },
            { name: '南昌', value: randomData() },
            { name: '济南', value: randomData() },
            { name: '郑州', value: randomData() },
            { name: '武汉', value: randomData() },
            { name: '长沙', value: randomData() },
            { name: '广州', value: randomData() },
            { name: '南宁', value: randomData() },
            { name: '海口', value: randomData() },
            { name: '成都', value: randomData() },
            { name: '贵阳', value: randomData() },
            { name: '昆明', value: randomData() },
            { name: '拉萨', value: randomData() },
            { name: '西安', value: randomData() },
            { name: '兰州', value: randomData() },
            { name: '西宁', value: randomData() },
            { name: '银川', value: randomData() },
            { name: '乌鲁木齐', value: randomData() },
            { name: '台北市', value: randomData() }
        ];
        var cityPosition = {
            "天津": [117.4219, 39.4189],
            "北京": [116.4551, 40.2539],
            "上海": [121.4648, 31.2891],
            "重庆": [107.7539, 30.1904],
            "香港": [114.2784, 22.3057],
            "澳门": [113.5715, 22.1583],
            "石家庄": [114.4995, 38.1006],
            "太原": [112.3352, 37.9413],
            "呼和浩特": [111.4124, 40.4901],
            "沈阳": [123.1238, 42.1216],
            "长春": [125.8154, 44.2584],
            "哈尔滨": [127.9688, 45.368],
            "南京": [118.8062, 31.9208],
            "杭州": [119.5313, 29.8773],
            "合肥": [117.29, 32.0581],
            "福州": [119.4543, 25.9222],
            "南昌": [116.0046, 28.6633],
            "济南": [117.1582, 36.8701],
            "郑州": [113.4668, 34.6234],
            "武汉": [114.3896, 30.6628],
            "长沙": [113.0823, 28.2568],
            "广州": [113.5107, 23.2196],
            "南宁": [108.479, 23.1152],
            "海口": [110.3893, 19.8516],
            "成都": [103.9526, 30.7617],
            "贵阳": [106.6992, 26.7682],
            "昆明": [102.9199, 25.4663],
            "拉萨": [91.1865, 30.1465],
            "西安": [109.1162, 34.2004],
            "兰州": [103.5901, 36.3043],
            "西宁": [101.4038, 36.8207],
            "银川": [106.3586, 38.1775],
            "乌鲁木齐": [87.9236, 43.5883],
            "台北市": [121.5200760, 25.0307240]
        };
        var k = 1;
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = cityPosition[data[i].name];
                if (geoCoord) {
                    if(data[i].name == '成都') {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                            itemStyle: {
                                color: '#f00'
                            }
                        });
                    }else {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                   
                }
            }
            return res;
        };
        
        var optionMap = {
            backgroundColor: '',
            geo: {
                map: 'china',
                roam: false,
                zoom: 1.1,
                roam: true,
                label: {
                    normal: {
                        show: false,
                        fontSize: '0.12rem',
                        color: '#0053FB'
                    },
                    emphasis: {
                        show: false,
                        areaColor: '#ff0',
                        color: '#0053FB'
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#0053FB',
                        areaColor: 'rgba(0,0,0, 0)',
                    },
                    emphasis: {
                        areaColor: 'rgba(0, 0, 0, 0)',
                        
                        // shadowOffsetX: 0,
                        // shadowOffsetY: 0,
                        // shadowBlur: 20,
                        // borderWidth: 0,
                        // shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: 'd',
                    type: 'effectScatter', // scatter  effectScatter(波纹效果)
                    coordinateSystem: 'geo',
                    data: convertData(mydata),
                    symbolSize: function (val, data) { // 散点半径
                        if(data.data.name === '成都') {
                            return 30;
                        }
                        return 5;
                    },
                    showEffectOn: 'render', // 渲染完成后显示特效
                    effectType: 'ripple', // 涟漪特效'ripple'
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'left',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0054FF'
                        }
                    }
                },
                {
                    name: '信息量',
                    type: 'map',
                    geoIndex: 0,
                    data: mydata
                }
            ]
        };

        // 使用制定的配置项和数据显示图表
        myChartOfChina.setOption(optionMap);
    }

    function pieEchartsInit(idName, data) { // 审计地图， 饼状， 审计预警总数

        //初始化echarts实例
        let pieCharts = echarts.init(document.getElementById(idName));

        let pieChartOption = {
            title: {
                // text: '南丁格尔玫瑰图',
                // subtext: '纯属虚构',
                // x: 'center'
            },
            // tooltip: {
            //     trigger: 'item',
            //     formatter: "{a} <br/>{b} : {c} ({d}%)"
            // },
            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    radius: ["10%", '80%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            position: 'inner',
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: data
                }
            ]
        };


        // 使用制定的配置项和数据显示图表
        pieCharts.setOption(pieChartOption);

    }
    
    
    function datavImageCategory(data) { // 审计图像  采购/查询 柱形图

        var imageChartOption = {
            title: {
                text: '',
                subtext: ''
            },
            legend: {
                data: ['色块0', '色块1', '色块2', '色块3', '色块4', '色块5', '色块6', '色块7', '色块8', '色块9', '色块10'],
                bottom: 40,
                itemWidth: 20,
                left: 'center',
                formatter: function (name) {
                    return '';
                }
            },
            xAxis: {
                // data: ['1', '2', '3', '4'],
                data: ['材料查询', '对标采购', '预算管理', '成本控制'],
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#5CD7FF',
                        fontSize: '0.16rem'
                    }
                },
                offset: 60,
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#5CD7FF',
                        fontSize: '0.16rem'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            grid: {
                position: 'center',
                bottom: '60',
                containLabel: true
            },
            series: [
                {
                    type: 'bar',
                    barWidth: '0.2rem',
                    barMinWidth: 16,
                    barMaxWidth: '0.3rem',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#83bff6' },
                                    { offset: 0.5, color: '#188df0' },
                                    { offset: 1, color: '#188df0' }
                                ]
                            ),
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#5CD7FF',
                                    fontSize: '0.2rem',
                                    fontWeight: 600
                                }
                            },
                            barBorderRadius: [16, 16, 16, 16]
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#2378f7' },
                                    { offset: 0.7, color: '#2378f7' },
                                    { offset: 1, color: '#83bff6' }
                                ]
                            )
                        }
                    },
                    data: data
                },
                {
                    name: '色块0',
                    type: 'bar',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    }
                },
                {
                    name: '色块1',
                    type: 'bar',
                    show: false
                },
                {
                    name: '色块2',
                    type: 'bar'
                },
                {
                    name: '色块3',
                    type: 'bar'
                },
                {
                    name: '色块4',
                    type: 'bar'
                },
                {
                    name: '色块5',
                    type: 'bar'
                },
                {
                    name: '色块6',
                    type: 'bar'
                },
                {
                    name: '色块7',
                    type: 'bar'
                },
                {
                    name: '色块8',
                    type: 'bar'
                },
                {
                    name: '色块9',
                    type: 'bar'
                },
                {
                    name: '色块10',
                    type: 'bar'
                },
                {
                    name: '色块11',
                    type: 'bar'
                }
            ]
        };

        //初始化echarts实例
        var myDatavImageChart1 = echarts.init(document.getElementById('datav_image_center_top_chart'));

        // 使用制定的配置项和数据显示图表
        myDatavImageChart1.setOption(imageChartOption);
    }

    // 扇形图
    function datavImageIndustry(data) {
        // datav_image_center_bottom_chart
        industryOption = {
            title : {
                text: '行业分布',
                x:'left',
                textStyle: {
                    color: '#00F0FF',
                    fontSize: '0.22rem'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                x: '10px',
                y: '50px',
                data: ['传统行业','建筑行业','其他行业','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['70%', '50%'],
                    data: data,
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
        
        var industryChart = echarts.init(document.getElementById('datav_image_center_bottom_chart'));
        industryChart.setOption(industryOption);
    }

    // 雷达图
    function datavImageArea(data) {
        areaOption = {
            title: {
                text: '区域预警',
                x:'left',
                textStyle: {
                    color: '#00F0FF',
                    fontSize: '0.22rem'
                }
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                x: '10px',
                y: '50px',
                textStyle: {
                    color: '#f00',
                    fontSize: '0.16rem'
                },
                data: [ '锦江区', '成华区', '青羊区', '高新区', '天府新区']
            },
            
            radar: {
                name: {
                   show: false
                },
                center: ['80%', '50%'],
                indicator: [
                   { name: '锦江区', max: 6500},
                   { name: '成华区', max: 16000},
                   { name: '青羊区', max: 30000},
                   { name: '高新区', max: 38000},
                   { name: '天府新区', max: 52000}
                ]
            },
            series: [{
                name: 'ddd',
                type: 'radar',
                data : data
            }]
        };
        var areaChart = echarts.init(document.getElementById('datav_image_right_top_chart'));
        areaChart.setOption(areaOption);
    }
    // 审计预警   图表1 
    function datavWarningToday(data) {
        warningTodayOption = {
            title: {
                text: '今日预警',
                x:'left',
                textStyle: {
                    color: '#00F0FF',
                    fontSize: '0.22rem'
                }
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                x: '10px',
                y: '50px',
                textStyle: {
                    color: '#E4C100',
                    fontSize: '0.16rem'
                },
                data: [ '锦江区', '成华区', '青羊区', '高新区', '天府新区']
            },
            
            radar: {
                name: {
                   show: false
                },
                center: ['80%', '50%'],
                indicator: [
                   { name: '锦江区', max: 6500},
                   { name: '成华区', max: 16000},
                   { name: '青羊区', max: 30000},
                   { name: '高新区', max: 38000},
                   { name: '天府新区', max: 52000}
                ]
            },
            series: [{
                name: 'ddd',
                type: 'radar',
                data : data
            }]
        };
        var warningTodayChart = echarts.init(document.getElementById('datav_warning_left_top_chart'));
        warningTodayChart.setOption(warningTodayOption);
    }
    // 审计预警  图表2  预警分布  右一
    function datavWarningDistribution(data) {
        warningDistributionOption = {
            title: {
                text: '今日预警',
                x:'left',
                textStyle: {
                    color: '#00F0FF',
                    fontSize: '0.22rem'
                }
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                x: '10px',
                y: '50px',
                textStyle: {
                    color: '#FF0000',
                    fontSize: '0.16rem'
                },
                data: [ '锦江区', '成华区', '青羊区', '高新区', '天府新区']
            },
            
            radar: {
                name: {
                   show: false
                },
                center: ['80%', '50%'],
                indicator: [
                   { name: '锦江区', max: 6500},
                   { name: '成华区', max: 16000},
                   { name: '青羊区', max: 30000},
                   { name: '高新区', max: 38000},
                   { name: '天府新区', max: 52000}
                ]
            },
            series: [{
                name: 'ddd',
                type: 'radar',
                data : data
            }]
        };
        var warningDistributionChart = echarts.init(document.getElementById('datav_warning_right_top_chart'));
        warningDistributionChart.setOption(warningDistributionOption);
    }

    // 审计预警  柱状图 左一
    function datavWarningLeftBar(idName, data) {
        var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        let optionBar = {
            title: {
                text: '',
                subtext: ''
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            grid:{
                x:0,   //左侧与y轴的距离
                y:0,   //top部与x轴的距离
                x2:0,   //右侧与y轴的距离
                y2:0    //bottom部与x轴的距离
            },
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%'
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };
        let warningDistributionBarChart = echarts.init(document.getElementById(idName));
        warningDistributionBarChart.setOption(optionBar);
    }