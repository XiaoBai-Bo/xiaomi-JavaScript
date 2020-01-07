window.onload=function(){
	//1.获取标签
	function $(select){
		return document.querySelector(select);
	}
	isuserinfo();
//	console.log($(".site-header .header-info .show-name"));
	function isuserinfo(){
		//(1).获取当前存储内容
		var userinfoStr=window.localStorage.getItem('name');
		var userObj=JSON.parse(userinfoStr);
		if(userObj){
			//(2).表示用户名已经存在
			$(".site-header .info-Nouser").style.display='none';
			$(".site-header .info-user").style.display='block';
			$(".site-header .header-info .show-name").innerHTML=userObj.username;
			$(".site-denglv .denglv form").style.display='none';
			$(".site-denglv .denglv .success-login").style.display='block';
			console.log("用户已登录");
			
		}else{
			console.log("用户未登录");
		}
	}
	
	//2.监听登录按钮的点击事件
	$(".site-denglv .denglv form .login-denglv .tijiao").onclick=function(){
//		//3.获取用户名和密码
		var username=$("#username").value;
		var password=$("#password").value;
		console.log(username);
		console.log(password);
		if(username&&password){
			//4.将json对象转换成json字符串
			var jsonStr=JSON.stringify({
				"username":username,
			    "password":password
			})
			//5.将用户名和密码保存到localStorage中
			window.localStorage.setItem('name',jsonStr);
			//6.显示当前用户名到网页中，并且登录按钮不存在
			isuserinfo();
			//7.清空输入框
			$(".site-denglv .denglv form .login-denglv input[type='text']").value='';
			$(".site-denglv .denglv form .login-denglv input[type='password']").value='';
			
		}
		
	}
	$(".site-header .user-name .login-user ul li .moveLogin").onclick=function(){
		window.localStorage.clear();
		isuserinfo();
		$(".site-header .info-user").style.display='none';
		$(".site-header .user-name").style.display='none';
		$(".site-header .info-Nouser").style.display='block';
		$(".site-denglv .denglv form").style.display='block';
		$(".site-denglv .denglv .success-login").style.display='none';
	};

}


$(function(){
	$(".site-header .info-user").on({mousemove:function(){
	    	$(".site-header .info-user").css({
	    		"background":"#fff",
	    		"color":"#ff6700",
	    		});
	    	$(".site-header .user-name").css("display","block");
	    },mouseout:function(){
	    	$(".site-header .user-name").css("display","none");
	    	$(".site-header .info-user").css({
	    		"background":"",
	    		"color":"",
	    	});
	    }
    });
    $(".site-header .user-name").on({mousemove:function(){
	    	$(".site-header .info-user").css({
	    		"background":"#fff",
	    		"color":"#ff6700",
	    		});
	    	$(".site-header .user-name").css("display","block");
	    },mouseout:function(){
	    	$(".site-header .user-name").css("display","none");
	    	$(".site-header .info-user").css({
	    		"background":"",
	    		"color":"",
	    	});
	    }
    });
})

