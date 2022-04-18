//PieChart
// chartDivName : 차트를 그릴 영역의 id
// dataList : 차트 데이터
function drawPieChart(chartDivName, dataList){
    Highcharts.setOptions({
        lang: {thousandsSep: ','},
        credits:{enabled:false}
    });

    Highcharts.chart(chartDivName, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 300
        },
         title: {
            text: null
        },
        tooltip: {
            enabled: true,
            headerFormat: '',
            pointFormat: '<b>{point.name}</b><br/>{point.y}건  <br>{point.percentage:.1f}%'
        },
        plotOptions: {
            pie: {
                //allowPointSelect: true,
                //cursor: 'pointer',
                size : '65%',
                dataLabels: {
                    //enabled: true,
                    format: '{point.name}<br>{point.y}건 <br>{point.percentage:.1f} %',
                    //distance: '-30%',
                }
            }
        },
        series: [{
            //name: 'Brands',
            colorByPoint: true,
            data: dataList
        }]
    });
}

// LineAxesChart
// chartDivName : 차트를 그릴 영역의 id
// dataList : 차트 데이터
// totalCountList : legend의 총 건수 데이터
function drawLineChart(chartDivName, dataList, totalCountList){
    Highcharts.setOptions({
        lang: {thousandsSep: ','},
        credits:{enabled:false}
    });

    Highcharts.chart(chartDivName, {
        chart: {
           // height: 370
        },
        title: {
            text: "일별/세그먼트별 채팅수"
        },
       /* global: {
            useUTC: false
        },*/
        xAxis: {
            title: {
                text : "날짜"
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m/%d'
            },
            tickInterval: 24 * 60 * 60 * 1000
        },
        yAxis: {
            title: {
                text : "채팅수"
            },
            opposite: true,
            labels: {
                align: 'left',
                x: -3,
                y: -3,
                format: '{value:.,0f}'
            }
        },
        /*legend: {
            align: 'left',
            verticalAlign: 'top',
            borderWidth: 0,
            useHTML:true,
            labelFormatter: function() {
                var customLabel = this.name;
                if (totalCountList && 0 < totalCountList.length){
                    customLabel += "<br/> <span style='font-size:18px;'>" + totalCountList[this.index] + '건 <span>';
                }
                    return customLabel;
            },
        },*/
        legend: {
                      layout: 'vertical',
                      align: 'left',
                      verticalAlign: 'middle'
                  },
        tooltip: {
            shared: true,
            crosshairs: true,
            headerFormat:  '<b>{point.key:%Y년 %m월 %d일}</b><br/>',
           // pointFormat: '{series.name}: {point.y} <br/>'
        },
        series: dataList
    });
}

// LineAxesChart
// chartDivName : 차트를 그릴 영역의 id
// dataList : 차트 데이터
// totalCountList : legend의 총 건수 데이터
function drawLineChart2(chartDivName, dataList){
    Highcharts.setOptions({
        lang: {thousandsSep: ','},
        credits:{enabled:false}
    });

    Highcharts.chart(chartDivName, {
        chart: {
           // height: 370
        },
        title: {
            text: "일별 처리 채팅 수"
        },
       /* global: {
            useUTC: false
        },*/
        xAxis: {
            title: {
                text : "날짜"
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m/%d'
            },
            tickInterval: 24 * 60 * 60 * 1000
        },
        yAxis: {
            title: {
                text : "채팅수"
            },
            opposite: true,
            labels: {
                align: 'left',
                x: -3,
                y: -3,
                format: '{value:.,0f}'
            }
        },
        legend: {
                      layout: 'vertical',
                      align: 'left',
                      verticalAlign: 'middle'
                  },
        tooltip: {
            shared: true,
            crosshairs: true,
            headerFormat:  '<b>{point.key:%Y년 %m월 %d일}</b><br/>'
        },
        series: dataList
    });
}

// LineAxesChart
// www.highcharts.com/demo/column-stacked
// chartDivName : 차트를 그릴 영역의 id
// dataList : 차트 데이터
// totalCountList : legend의 총 건수 데이터
function drawBarChart(chartDivName, dataList) {
    Highcharts.chart(chartDivName, {
        chart: {
            type: 'column'
        },
        title: {
            text: '게임별 채팅 카운트 비율'
        },
        xAxis: {
            title: {
                text : "날짜"
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m/%d'
            },
            tickInterval: 24 * 60 * 60 * 1000
        },
        yAxis: {
            title: {
                text : "채팅수"
            },
            opposite: true,
            labels: {
                align: 'left',
                x: -3,
                y: -3,
                format: '{value:.,0f}'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'middle'
        },
        tooltip: {
            shared: true,
            crosshairs: true,
            headerFormat:  '<b>{point.key:%Y년 %m월 %d일}</b><br/>'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: dataList
    });
}
// LineAxesChart
// chartDivName : 차트를 그릴 영역의 id
// dataList : 차트 데이터
// totalCountList : legend의 총 건수 데이터
function drawGameLineChart(chartDivName, dataList){
    Highcharts.setOptions({
        lang: {thousandsSep: ','},
        credits:{enabled:false}
    });

    Highcharts.chart(chartDivName, {
        chart: {
           // height: 370
        },
        title: {
            text: "시간별 채팅 총 유입량"
        },
       /* global: {
            useUTC: false
        },*/
        xAxis: {
            title: {
                text : "시간"
            },
            categories: ['0시~','1시~','2시~','3시~','4시~','5시~','6시~','7시~','8시~','9시~','10시~',
            '11시~','12시~','13시~','14시~','15시~','16시~','17시~','18시~','19시~','20시~','21시~','22시~','23시~']
        },
        yAxis: {
            title: {
                text : "채팅수"
            },
            opposite: true,
            labels: {
                align: 'left',
                x: -3,
                y: -3,
                format: '{value:.,0f}'
            }
        },
        legend: {
                      layout: 'vertical',
                      align: 'left',
                      verticalAlign: 'middle'
                  },
        tooltip: {
            shared: true,
            crosshairs: true,
            headerFormat:  '<b>{point.key:%Y년 %m월 %d일 %H시}</b><br/>'
        },
        series: dataList
    });
}
// MultiAxesChart
// chartDivName : 차트를 그릴 영역의 id
// dataList : 차트 데이터
function drawMultiAxesChart(chartDivName, dataList, summaryDataList){
    Highcharts.setOptions({
        lang: {thousandsSep: ','},
        credits:{enabled:false}
    });

    Highcharts.chart(chartDivName, {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: null
        },
        xAxis: [{
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m/%d'
            },
            tickInterval: 24 * 60 * 60 * 1000
        }],
        yAxis: [{
            gridLineWidth: 0,
            title: {
                text: null
                },
              },{ // Primary yAxis
            labels: {
                format: '{value}%',
            },
            title: {
                text: null,
            },
           opposite: true,
           min: 0,
           max:100
        }],
        tooltip: {
            shared: true,
            crosshairs: true,
            headerFormat:  '<b>{point.key:%Y년 %m월 %d일}</b><br/>'

        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            useHTML:true,
            labelFormatter: function() {
                var customLabel = this.name;
                var idx = this.index;

                if(summaryDataList && 0 < summaryDataList.length){
                    dataObj = summaryDataList[idx];

                    if (idx == 0){
                        customLabel += " : <span style='font-size:18px;'>" + dataObj["currCnt"] + "%";
                        if(dataObj["compareVal"]){
                            customLabel += "     <span class='" + dataObj["compareClass"] + "'>(" + dataObj["compareMark"]  + dataObj["compareVal"] + ")</span>";
                        }
                        customLabel += " </span>";
                    }else{
                        customLabel += " : " + dataObj["currCnt"] + "건";
                        if(dataObj["compareVal"]){
                            customLabel += "     <span class='" + dataObj["compareClass"] + "'>(" + dataObj["compareMark"] + dataObj["compareVal"] + ")</span>";
                        }
                    }
                }

              return customLabel;
            },
        },
        series: dataList
    });
 }