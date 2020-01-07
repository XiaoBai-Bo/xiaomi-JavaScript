<?php
	//数据库的链接
	//链接服务器，选择php10数据库；
	$host='localhost';
	$user='root';
	$psd='';
	$dbname='php10';
	
	$db = new mysqli($host,$user,$psd,$dbname);//链接到数据库
	//确认数据库字符集编码;保证输入到数据库的字符不乱码;
	$db->query("SET NAMES UTF8");
?>