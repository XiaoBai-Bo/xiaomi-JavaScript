$(function(){
	
	//轮播
	var swiper=new Swiper(".swiper-header",{
		pagination: ".swiper-pagination",
		paginationClickable:true,
		grabCursor:true,
//		spaceBetween:100,       //滑块之间的间隔
		prevButton:".swiper-button-prev",
		nextButton:".swiper-button-next",
		autoplay:2000,
        effect : 'fade', //渐变方式
	});
	//购物车移动事件
	$(".topBar .shop a").on({mousemove:function(){
			$(".shops").css("display","block");
			$(".topBar .shop a").css({
				"background-color":"#fff",
				"color":"#ff6700",
			});
		},mouseout:function(){
			$(".shops").css("display","none");
			$(".topBar .shop a").css({
				"background-color":"",
				"color":"",
			});
		}
	});
	$(".shops").on({mousemove:function(){
			$(".shops").css("display","block");
			$(".topBar .shop a").css({
				"background-color":"#fff",
				"color":"#ff6700",
			});
		},mouseout:function(){
			$(".shops").css("display","none");
			$(".topBar .shop a").css({
				"background-color":"",
				"color":"",
			});
		}
	});
	
	//小米手机移动事件
	$(".header .site-list>ul>li:eq(1)").on({mousemove:function(){
			$(".header-nav-menu-active:eq(0)").css("display","block");
		},mouseout:function(){
			$(".header-nav-menu-active:eq(0)").css("display","none");
		}
	});
	$(".header .header-nav-menu-active:eq(0)").on({mousemove:function(){
			$(".header-nav-menu-active:eq(0)").css("display","block");
		},mouseout:function(){
			$(".header-nav-menu-active:eq(0)").css("display","none");
		}
	});
	//Redmi 红米鼠标移动事件
	$(".header .site-list>ul>li:eq(2)").on({mousemove:function(){
			$(".header-nav-menu-active:eq(1)").css("display","block");
		},mouseout:function(){
			$(".header-nav-menu-active:eq(1)").css("display","none");
		}
	});
	$(".header .header-nav-menu-active:eq(1)").on({mousemove:function(){
			$(".header-nav-menu-active:eq(1)").css("display","block");
		},mouseout:function(){
			$(".header-nav-menu-active:eq(1)").css("display","none");
		}
	});

    //手机部分鼠标移动事件的实现
    $(".brick-item:eq(0)").hover(
	  function(){
	     $(".brick-item:eq(0) .hidden").slideDown(400);
	      $(".brick-item:eq(0) .hidden p").css("color","#fff");
	  },
	  function(){
	     $(".brick-item:eq(0) .hidden").css("display","none");
	      $(".brick-item:eq(0) .hidden p").css("color","#fff");
	  }
);
    $(".brick-item:eq(1)").hover(
	  function(){
	     $(".brick-item:eq(1) .hidden").slideDown(400);
	     $(".brick-item:eq(1) .hidden p").css("color","#fff");
	  },
	  function(){
	     $(".brick-item:eq(1) .hidden").css("display","none");
	     $(".brick-item:eq(1) .hidden p").css("color","#fff");
	  }
);
    $(".brick-item:eq(2)").hover(
	  function(){
	     $(".brick-item:eq(2) .hidden").slideDown(400);
	      $(".brick-item:eq(2) .hidden p").css("color","#fff");
	  },
	  function(){
	     $(".brick-item:eq(2) .hidden").css("display","none");
	     $(".brick-item:eq(2) .hidden p").css("color","#fff");
	  }
);
    $(".brick-item:eq(3)").hover(
	  function(){
	     $(".brick-item:eq(3) .hidden").slideDown(400);
	      $(".brick-item:eq(3) .hidden p").css("color","#fff");
	  },
	  function(){
	     $(".brick-item:eq(3) .hidden").css("display","none");
	     $(".brick-item:eq(3) .hidden p").css("color","#fff");
	  }
);
    
    //用户名鼠标移动事件
    $(".topBar .login .user-name a:eq(0)").on({mousemove:function(){
	    	$(".topBar .login .user-name a:eq(0)").css({
	    		"background":"#fff",
	    		"color":"#ff6700",
	    		});
	    	$(".topBar .login .user-name .login-user").css("display","block");
	    	$(".topBar .login .user-name span:eq(1)").removeAttr("hidden");
	    },mouseout:function(){
	    	$(".topBar .login .user-name .login-user").css("display","none");
	    	$(".topBar .login .user-name a:eq(0)").css({
	    		"background":"",
	    		"color":"",
	    	});
	    	$(".topBar .login .user-name span:eq(1)").attr("hidden",true);
	    }
    })
    $(".topBar .login .user-name .login-user").on({mousemove:function(){
	    	$(".topBar .login .user-name a:eq(0)").css({
	    		"background":"#fff",
	    		"color":"#ff6700",
	    		});
	    	$(".topBar .login .user-name span:eq(1)").removeAttr("hidden");	
	    	$(".topBar .login .user-name .login-user").css("display","block");
	    },mouseout:function(){
	    	$(".topBar .login .user-name .login-user").css("display","none");
	    	$(".topBar .login .user-name a:eq(0)").css({
	    		"background":"",
	    		"color":"",
	    	});
	    	$(".topBar .login .user-name span:eq(1)").attr("hidden",true);
	    }
    })


})

