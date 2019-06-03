var http = require('http');

    // node请求第三方接口
    var data = {};
    data = JSON.stringify(data);
    var opt = {
        // host:'http://crm.ibetwo.com',
        hostName:'http://crm.ibetwo.com',
        port:'8030',
        method:'POST',
        path:'/common/getStrore',
        headers:{
            "Content-Type":'application/json',
            "Accept":'text/html',
            "Content-Length":data.length,
            
            
        },
    }

    var back_data = '';
   var req =  http.request(opt,function(res){
        console.log(res);
        res.on('data',function(data){
            back_data += data;
        }).on('end',function(){
            console.log(back_data);
        })
    }).on('error',function(e){
      console.log("error:" + e.message);
    })

    req.write(data);
    req.end();

    console.log('结束');