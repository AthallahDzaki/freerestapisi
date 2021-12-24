<!DOCTYPE html>
<html>
<head>
<title> You Found Me </title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
  font-size: 17px;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}

.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
</style>
</head>
<body>

<video autoplay loop id="myVideo">
  <source src="assets/vid/vid.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

</body>
</html>
