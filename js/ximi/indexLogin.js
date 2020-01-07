//用户名局部刷新
window.onload=function(){
	function $(select){
		return document.querySelector(select);
	}
	
	console.log(111);
	userinfo();
	function userinfo(){
		var userinfoStr=window.localStorage.getItem('name');
		var userObj=JSON.parse(userinfoStr);
		console.log(userinfoStr);
		console.log(userObj);
		if(userObj){
			console.log("存在");
			$(".topBar .login .user-noname").style.display='none';
			$(".topBar .login .user-name").style.display='block';
			$('.topBar .login .user-name a span').innerHTML=userObj.username;
		}else{
			console.log("不存在");
		}
	}
	$('.topBar .login .user-name .login-user ul .moveLogin-one').onclick=function(){
		window.localStorage.clear();
		userinfo();
		$(".topBar .login .user-name").style.display='none';
		$(".topBar .login .user-noname").style.display='block';
	}
		
}
