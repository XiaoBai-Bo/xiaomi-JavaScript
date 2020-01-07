<!--从数据库中提取数据进行验证-->
<?php
	//从数据库中提取数据，即所有的用户名和密码
	function collect_data(){
		include('mysql_connect.php');
		$sql="SELECT * FROM xmstore";
		$mysql_result=$db->query($sql);
		
		$rows=[];
		while($row=$mysql_result->fetch_array(MYSQLI_ASSOC)){
			$rows[]=$row;
		}
		return $rows;//返回数组类型的所有数据
	}
?>