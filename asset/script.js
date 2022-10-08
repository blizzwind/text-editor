function op() {
  document.getElementById("inp").click();
}
function lo() {
  file = document.getElementById("inp").files[0];
  file = URL.createObjectURL(file);
  re(file);
}
function re(file) {
  rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
        document.getElementById("txt").value = "";
		document.getElementById("txt").value = allText;
      }
    }
  }
  rawFile.send(null);
}
function sa() {
  data = new Blob([document.getElementById("txt").value], {type: "text/plain"});
  textFile = window.URL.createObjectURL(data);
  a = document.createElement("a");
  a.href = textFile;
  a.download = "save.txt";
  a.click();
}
document.getElementById("inp").addEventListener("change", lo);
