<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta content="width=device-width,initial-scale=1" name="viewport">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <title>Dashboard</title>  
  <style type="text/css">
  	@import url(https://fonts.googleapis.com/css?family=Lato:400,700|Oswald);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
body {
	margin: 0 auto;
	overflow-x: hidden;
}
li {
  list-style: none;
}
.header {
  background-color: #241a99;
  color: #fff;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}
.header-logo {
  float: left;
  font-size: 36px;
  padding: 0px 20px;
}

.header-list li {
  float: right;
  padding-right:40px;
}
@media print{
	img{page-break-inside:avoid}
	img{max-width:100%!important}
	h2,p{orphans:3;widows:3}
	h2{page-break-after:avoid}
	}
*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
html{font-size:10px;-webkit-tap-highlight-color:transparent}
body{font-family:Lato,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.58;color:#555;background-color:#fff}
.img-responsive{display:block;max-width:100%;height:auto}
h1{font-family:Oswald,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.1;color:#000;font-size:63px}
h2{font-size:27px}
p{margin:0 0 12.5px}
@media (min-width:768px){
.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}
.container:after,.container:before{content:" ";display:table}
.container:after{clear:both}@media (min-width:768px){.container{width:750px}}
@media (min-width:992px){.container{width:970px}}
@media (min-width:1200px){.container{width:1170px}}
.row:after,.row:before{content:" ";display:table}
.row:after{clear:both}
.col-md-4,.col-md-8,.col-xs-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}
.col-xs-12{float:left;width:100%}
@media (min-width:992px){
	.col-md-4,.col-md-8{float:left}
	.col-md-4{width:33.33333%}
	.col-md-8{width:66.66667%}
}
body{
	background-image:linear-gradient(180deg,#241a99 0,#5e50fa);
}
body.white{background-color:#fff;background-image:none}
.white-text-container,.white-text-container h1,.white-text-container p{color:#fff}
.content-wrapper{position:relative;z-index:1}
.section-container{padding:60px 0 40px}
.footer-container{padding:20px 0 30px}
.card{border-radius:.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125);margin-bottom:3rem}
.card .h2,.card h2{margin-top:0;margin-bottom:40px}.card .card-block{padding:4rem}
@media (min-width:992px){
	.card .card-block{padding:6rem}
}
  </style>
<link href="./DBstyle.css" rel="stylesheet"></head>

<body class="" bgcolor="blue">


<div class="header">
      <div class="header-logo" style="font-family: 'Fjalla One', sans-serif;"><i class="fas fa-atom">  </i> Your Dashboard</div>
      <div class="header-list">
        <ul>
          <li><a href="logout.php"><button type="button" class="btn btn-outline-secondary"><font color="white" size="5px">Logout</font></button></a></li>
        </ul>
    </div>
</div>
<main class="content-wrapper">
  <header class="white-text-container section-container">
    <div class="text-center" align="center">
      <h1 align="center"><?php echo "<h1>Hi! " . $_SESSION['username'] . "</h1>"; ?></h1>
      <br>
      <p align="center">It's time to check your knowlegde</p>
    </div>
  </header>
</main>


 <div class="container">
   <div class="row">
     <div class="col-xs-12">

        <div class="card">
          <div class="card-block">
            <h2>Quiz on Advance Web Technologies</h2>
            <div class="row">
              <div class="col-md-4">
                <p><img src="./assets/awd.jpg" class="img-responsive" alt=""></p>
              </div>
              <div class="col-md-8">

              <p>This is a Quiz on Advance Web Technologies. The Quiz consistes of 10 question each question has 10 point therefore in total 100 points quiz.This quiz is for practice purpose only. You can attempt the quiz multiple time . Best Of Luck!</p>
              <br>
              <p><div class="d-grid gap-2 d-md-block" align="center"><a href="quiz-on-awd/home.html" target="_blank">
  <button  class="btn btn-primary" type="button" style="width: 60%;height: 50px;font-size: 30px" >Start Quiz</button>
</a></div> </p>

              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <h2>Quiz on JAVA</h2>
            <div class="row">
              <div class="col-md-4">
                <p><img src="./assets/java.png" class="img-responsive" alt=""></p>
              </div>
              <div class="col-md-8">

              <p>This is a Quiz on JAVA. The Quiz consistes of 10 question each question has 10 point therefore in total 100 points quiz.This quiz is for practice purpose only. You can attempt the quiz multiple time . Best Of Luck!</p>
              <br>
              <p><div class="d-grid gap-2 d-md-block" align="center"><a href="quiz-on-java/home.html" target="_blank">
  <button  class="btn btn-primary" type="button" style="width: 60%;height: 50px;font-size: 30px">Start Quiz</button>
</a></div></p>

              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <h2>Quiz On Python </h2>
            <div class="row">
              <div class="col-md-4">
                <p><img src="./assets/python.png" class="img-responsive" alt=""></p>
              </div>
              <div class="col-md-8">

              <p>This is a Quiz on Python. The Quiz consistes of 10 question each question has 10 point therefore in total 100 points quiz.This quiz is for practice purpose only. You can attempt the quiz multiple time . Best Of Luck!</p>
              <br>
              <p> <div class="d-grid gap-2 d-md-block" align="center"><a href="quiz-on-Python/home.html" target="_blank">
  <button  class="btn btn-primary" type="button" style="width: 60%;height: 50px;font-size: 30px">Start Quiz</button>
</a></div></p>

              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <h2>Quiz on Data Structure And Algorithm</h2>
            <div class="row">
              <div class="col-md-4">
                <p><img src="./assets/dSA.jpeg" class="img-responsive" alt=""></p>
              </div>
              <div class="col-md-8">

              <p>This is a Quiz on Data Structure And Algorithm. The Quiz consistes of 10 question each question has 10 point therefore in total 100 points quiz.This quiz is for practice purpose only. You can attempt the quiz multiple time . Best Of Luck!</p>
              <br>
              <p> <div class="d-grid gap-2 d-md-block" align="center"><a href="quiz-on-DSA/home.html" target="_blank">
  <button  class="btn btn-primary" type="button" style="width: 60%;height: 50px;font-size: 30px">Start Quiz</button></a>
</div></p>

              </div>
            </div>
          </div>
        </div>
       
     </div>
   </div>
 </div>
<footer class="footer-container white-text-container text-center">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <p align="center"><i class="fas fa-atom" style="font-size: 40px;"> </i></p>
        
        <p align="center">A Quiz Website </p>
        <p>
        </p>
      </div>
    </div>
  </div>
</footer>
</body>
</html>