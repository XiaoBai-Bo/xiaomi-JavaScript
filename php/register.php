<?php
	include('mysql_connect.php');
	//获取注册表单提交的数据、姓名、密码、再次确认密码
	$name=$_POST['name'];
	$password=$_POST['password'];
	$psd_again=$_POST['psd_again'];
	
	if($name==''||$password==''){
		echo '账号或密码不能为空！';
	}else{
		if($password!=$psd_again){
			echo '两次输入密码不一致！';
		}else{
			//经过验证后，将账户和密码写入到数据库
			//$db数据库对象,$mysql_result接收返回的布尔值
			$sql="INSERT INTO xmstore (username,password) VALUES ('{$name}','{$password}')";
			var_dump($sql);
			$mysqli_result=$db->query($sql);
			var_dump($mysqli_result);
			if($mysqli_result==true){
				echo '插入数据成功！';
				echo"<script type='text/javascript'>location='../view/page/login.html';</script>";
			}else{
				echo '插入数据失败！';
			}
		}
	}
	
?>