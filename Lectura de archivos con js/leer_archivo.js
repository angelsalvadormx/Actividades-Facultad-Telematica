function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var table = document.getElementById('table');
                var allText = rawFile.responseText.split('\n');
                allText.forEach(function(data){
                    data = data.split('\\');
                    table.innerHTML += "<tr><td>"+data[0]+"</td><td>"+data[1]+"</td><td>"+data[2]+"</td><td>"+data[3]+"</td><td>"+data[4]+"</td><td>"+data[4]+"</td><td>"+data[5]+"</td><td>"+data[6]+"</td><td>"+data[7]+"</td></tr>"; 
                })

            }
        }
    }
    rawFile.send(null);
}

readTextFile('archivo.txt')