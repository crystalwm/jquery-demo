/**
 * Created by John on 2014-12-31.
 */
var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection

var connection = mysql.createConnection({
    host     : 'localhost',       //主机
    user     : 'root',               //MySQL认证用户名
    password : 'abcd',        //MySQL认证用户密码
    port: '3306' ,               //端口号
    datebase:'test'
});

//设置参数
var userProc='call test.p_userinfo(?,?,?,@ExtReturnVal);';
var userProc_Params=[1,'Wilson Z','abce'];

//调用存储过程
connection.query(userProc,userProc_Params,function(err,retresult){
    if(err)
    {
        console.log('[EXEC PROC ERROR] - ',err.message);
        return;
    }

    console.log('-------------------PROC-------------------------');
    console.log(retresult);
 //   console.log(retresult[0][0].ExtReturnVal);
    console.log('------------------------------------------------');

});

connection.end();