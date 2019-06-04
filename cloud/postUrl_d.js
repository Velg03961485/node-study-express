


var request = require('request');



  request({
      url: 'http://crm.ibetwo.com:8030/campaign/getById',
      method: 'POST',
      data:{
        id:1
      }
  }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
          //输出返回的内容
          console.log(body);
      }else{
        console.log(body);
      }
  });