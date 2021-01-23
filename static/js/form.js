/*
 * @Author: your name
 * @Date: 2021-01-23 12:12:43
 * @LastEditTime: 2021-01-23 12:12:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020\前端第三轮\register_form\js\form.js
 */
function _submit() {
    var name=document.getElementById("name").value;
    var man=document.getElementById("man").checked;
    var woman=document.getElementById("woman").checked;
    var tel=document.getElementById("tel").value;
    var password=document.getElementById("password").value;
    var confirm_password=document.getElementById("confirm_password").value;
    if(!name|(!man&!woman)|!tel|!password)
    {
        alert("请完整填写信息！");
        return ;
    }
    if(password!=confirm_password)
    {
        alert("两次密码不一致！");
        return ;
    }
    //验证昵称格式
    var judge1=/^[^ ]$/;
    if(!judge1.test(name))
    {
        alert("昵称不能包含空格！");
        return ;
    }
    //验证手机号格式
    var judge2=/(13[^4]\d{8})|(134[^9]\d{7})|(14[78]\d{8})|(17[6789]\d{8})|(18\d{9})|(14[78]\d{8})|(15[^4]\d{8})/g;
    if(tel.match(judge2)!=tel)
    {
        alert("手机号错误！");
        return ;
    }
    //验证密码格式
    var judge3=/(?=^.{9,15}$)(?=([0-9a-zA-Z#&\*\?@]*?\d){2})(?=[0-9a-zA-Z#&\*\?@]*?[a-z])(?=([0-9a-zA-Z#&\*\?@]*?[A-Z]))(?=([0-9a-zA-Z#&\*\?@]*?[#&\*\?@]){1})(^[a-zA-Z0-9]*[#&\*\?@][a-zA-Z0-9]*$)([0-9a-zA-Z#&\*\?@]*)$/;
    if(!judge3.test(password))
    {
        alert("密码格式错误！");
        return ;
    }
    alert("修改成功！");
    document.getElementById("name").value='';
    document.getElementById("tel").value='';
    document.getElementById("password").value='';
    document.getElementById("confirm_password").value='';
    document.getElementById("man").checked=false;
    document.getElementById("woman").checked=false;
}