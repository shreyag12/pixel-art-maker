let color;
let color_b = "rgb(0, 0, 0)";
function clearGrid() {
	$("#mytable").empty();
}


function makeGrid() {

            clearGrid();
            $("#mytitle").show();
            $("#new").show();
            var table = $("#mytable");
            const row = $('#row').val();
            const column = $('#column').val();
            for(let i = 0;i<row;i++){
            	table.append("<tr>");
            	for(let j =0;j<column;j++){
            		table.append("<td></td>");
            	}
            	table.append("</tr>");
            }
            return false;

}

function colorGrid() {

	color = document.getElementById("colorPicker").value;
  $("#test").css('background-color',color);
	color_b = $("#test").css("background-color");

}
function resetGrid() {
	
	$("td").css('background-color', "");
}

 $(document).on("click", "td" , function() {
        var cell = $(this);
     		let color2 = cell.css("background-color");
        if(color2 == color_b)
          $(this).css('background-color',"");
        else
          $(this).css('background-color',color_b);
        });
