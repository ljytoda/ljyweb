let myImage = document.querySelector('img');
//切换图片
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png')
    {
      myImage.setAttribute('src', 'images/firefox2.png');
    }
    else
    {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//添加按钮
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//输入名字事件的函数
function setUserName()
{
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎 '+ storedName +'！ 能看到这个页面简直酷毙了!';
    }
}

//初始化界面读取构造
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'IG '+ storedName +'酷毙了!' ;
}

//点击触发输入名字事件
myButton.onclick = function() {
   setUserName();
}
