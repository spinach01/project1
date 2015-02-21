<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.11.2.min.js"  type="text/javascript"></script>
<script src="./js/script1.js" type="text/javascript"></script>

<style type="text/css">
*{
list-style-type: none;
}
a:focus { outline: thin dotted; }
a{
text-decoration: none;
}
a:HOVER{ color: #4d4d4d;}
a:hover, a:active { outline: 0; }
body{
width: 100%;
height: 100%;
background-color: #efefd9;
position: relative;
}
#wrapper{
width: 1000px;
background: url(./img/bg.png);
position: absolute;
left: 50%;
margin-left: -500px;
}

#main{
width: 100%;
background-color: #efefd9;
position: relative;
}
#header-top{
width: 100%;
height: 76px;
}
#header-logo{
padding-top: 20px;
}
#header-bottom{
width: 100%;
height: 44px;
}

#menu{
float: left;
height: 20px;
}

#menu ul li{
  list-style: none;
  padding: 0 19px;
  float: left;
  line-height: 22px;
  height: 24px;
}
#menu ul li:hover{
  cursor: pointer;
  background-color: #DEDEC9;
}

#menu ul li a{
  color: #4d4d4d;
}

#menu ul li.active{
  background-color: #4d4d4d;
}

#menu ul li.active a{
  color: #fff;
}

#content{
height: 421px;
overflow: hidden;
position: relative;
}

footer{
width: 100%;
background-color: #4d4d4d;
height: 28px;
}
</style>

</head>

<body>
  <div id="wrapper" style="display: block;">
    <div id="main">
      <header>
        <div id="header-top">
          <div id="header-logo"><a href="#" onclick="load_content('home', null)">
            <img src="./img/logo.png"></a>
          </div>
        </div>
        <div id="header-bottom">
          <div id="menu">
            <ul>
              <li id="menu1_head">menu1</li>
              <li id="menu2_head">menu2</li>
              <li id="menu3_head" >menu3</li>
              <li id="menu4_head" onclick="load_content('menu4', $(this))"><a href="javascript:void(0)">menu4</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div id="content">
        <div id="slider">
          <div id="main1"><div><img src="./img/main1.jpg"></div></div>
          <div id="main2"><div><img src="./img/main1.jpg"></div></div>
          <div id="main3"><div><img src="./img/main1.jpg"></div></div>
          <div id="main4"><div><img src="./img/main1.jpg"></div></div>
        </div>
        <div id="menu1"><p>menu1</p></div>
        <div id="menu2"><p>menu2</p></div>
        <div id="menu3"><p>menu3</p></div>
      </div>
    </div>
    
    <footer>
      <div class="footer-left">
        <p>footer footer footer footer footer footer footer</p>
      </div>
    </footer>
  </div>
</body>
</html>