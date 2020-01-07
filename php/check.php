<?php
	//登录页面的验证,输入的用户名是否存在
	include('ms_login.php');
	$name=$_POST['name'];
	$password=$_POST['password'];
	if($name==''){
		echo '用户名不能为空';
		echo "<script type='text/javascript'>location='../view/page/login.html';</script>";
	}elseif($password==''){
		echo '请填写密码';
		echo "<script type='text/javascript'>location='../view/page/login.html';</script>";
	}else{
		//调用函数将返回值赋给$colums;
		$colums=collect_data();
		//遍历数组$colum,取出数组中的$colum['username']和$colum['password'];
		foreach($colums as $colum){
			if(($colum['username']==$name)&&($colum['password']==$password)){
          		echo '验证成功,登录成功';
//				echo "<script type='text/javascript'>location='../index.html';</script>";
				echo "<script type='text/javascript'>location='../view/page/login.html';</script>";
			}
		}
	}
?>
