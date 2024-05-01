function saveNote() {
    var note = document.getElementById("note").value;
    var blob = new Blob([note], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ملاحظة.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  function copyNote() {
    var note = document.getElementById("note").value;
    navigator.clipboard.writeText(note);
    alert("تم نسخ الملاحظة بنجاح!");
  }
  
  function clearNote() {
    document.getElementById("note").value = "";
    alert("تم مسح الملاحظة بنجاح!");
  }
  
  window.onload = function () {
    var savedNote = localStorage.getItem("note");
    if (savedNote) {
      document.getElementById("note").value = savedNote;
    }
  };
  