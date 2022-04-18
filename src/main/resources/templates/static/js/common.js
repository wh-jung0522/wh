// 날짜 계산 함수 (format : yy-mm-dd)
function calculateBeforeDate(option, days){
    var today  = new Date();
    var newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + days);

    yy = newDate.getFullYear();
    mm = (newDate.getMonth() + 1 < 10) ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
    dd = (newDate.getDate() < 10) ? '0' + newDate.getDate() : newDate.getDate();

    if(option == 1) {
        return yy + "-" + mm + "-" + dd;
    } else {
        return yy + "-" + mm + "-" + dd + " 00:00:00";
    }
}

// comma
function addComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

// ajax 호출
function ajaxCaller(domain, requestUrl, type, requestParam, callbackFunc, callbackFuncParam){
    var url = domain + requestUrl;
    if (type == "GET" && requestParam){
        var queryString = $.param(requestParam);
        url = url + "?" + queryString
    }
    console.log('url = ', url);

    $.ajax({
        url: url,
        type:type,
        dataType: "json",
        success:function(data){
            if (callbackFuncParam){
                callbackFunc(data, callbackFuncParam);
            }else{
                callbackFunc(data, callbackFuncParam);
            }
        },
        error: function(request,status,error) {
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

//
function convertChartDataList(startDate, endDate, keyObj){
     startDate = Date.parse(new Date(startDate));
     endDate   = Date.parse(new Date(endDate));

     //var oneDayMs = 24 * 60 * 60 * 1000;
     var oneHourMs = 24 * 60 * 60 * 1000;
     var chartDataList = [];

     // 검색기간 날짜 만큼 데이터 생성 (데이터가 없는 경우는 해당 날짜에 0 을 넣어줌)
     while(startDate <= endDate){
         chartDataList.push([startDate, (keyObj[startDate]) ? keyObj[startDate] : 0]);
         //startDate += oneDayMs;
         startDate += oneHourMs;
     }

     return chartDataList;
 }

// dataList를 date(timestamp)를 키로 가지는 obj로 변환
// isTotalCnt=True 경우는 valueKey의 총합도 계산
function convertKeyObj(dataList, key, valueKey, isTotalCnt){
    var resultObj = {};
    var totalCnt = 0;

    for(var i = 0; i < dataList.length; i++){
        resultObj[Date.parse(dataList[i][key])] = dataList[i][valueKey];
        totalCnt += dataList[i][valueKey];
    }

    if(isTotalCnt){
        resultObj["totalCnt"] = totalCnt;
    }

    return resultObj;
}

function isNull(val, replaceVal){
    return (val == null) ? replaceVal : val;
}