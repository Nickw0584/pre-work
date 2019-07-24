!DOCTYPE html>
<html>
<head>
<script>
    <title>Jiggle Into JavaScript</title>
</head>
<body>

        <p>Press the buttons to change the box!</p>
        <div id="box" style="height: 150px; width: 150px; background-color: orange; margin: 25px;"></div>

        <button id="growBtn">Grow</button>
        <button id="bleBtn">Blue</button>
        <button id="fadeBtn">Fade</button>
        <button id="resetBtn">Reset</button>

        <script type="text/javascript">
            
            document.getElementById("growBtn").addEventListener("click", function () {

                document.getElementById("box").style.height = "250px";
                
            });

            document.getElementById("resetBtn").addEventListener("click", function() {

                document.getElementById("box").style.height = "150px";
    
            });

            document.getElementById("bleBtn").addEventListener("click", function(){

                document.getElementById("box").style.color = "blue";
            });

            document.getElementById("fadeBtn").addEventListener("click", function(){
                
                document.getElementById("box").style.color = "fade"
            
            }):

            <script type="text/javascript" src="javascript.js"></script>

</body>
</html>
