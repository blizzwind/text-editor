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
function tab(e) {
  if (e.key == "Tab") {
    e.preventDefault();
    start = this.selectionStart;
    end = this.selectionEnd;
    this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  }
}
document.getElementById("inp").addEventListener("change", lo);
document.getElementById("txt").addEventListener("keydown", tab);
