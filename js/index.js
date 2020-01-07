//用正则表达式进行表单验证
function checkUserName() {
	var regUserName = /^[\da-z][\u4E00-\u9FA5\w.-]{1,12}[\da-z]$/i;
	if(!regUserName.test($("#username").val())) {
		$("#usernameinfo").html("×");
		$("#usernameinfo").addClass("error");
		$("#username").focus();
		return false;
	} else {
		$("#usernameinfo").html("OK");
		$("#usernameinfo").addClass("ok");
		return true;
	}
}

function checkPassWord() {
	var regPassword = /^[\da-z]{6,10}$/i;
	if(!regPassword.test($("#password").val())) {
		$("#passwordinfo").html("×");
		$("#passwordinfo").addClass("error");
		$("#password").focus();
		return false;
	} else {
		$("#passwordinfo").html("OK");
		$("#passwordinfo").addClass("ok");
		return true;
	}
}
