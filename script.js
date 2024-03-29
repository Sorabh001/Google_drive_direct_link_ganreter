document.getElementById("urlForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var inputUrl = document.getElementById("gdriveurl").value;
    var modifiedUrl = inputUrl.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id/");
    modifiedUrl = modifiedUrl.replace("/view?usp=drivesdk", "");
    document.getElementById("output").value = modifiedUrl;
});

document.getElementById("output").addEventListener("click", function() {
    this.select();
    document.execCommand("copy");
    alert("link copy to clipboard!");
});
