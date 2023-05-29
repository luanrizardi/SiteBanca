document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("apostaForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      var oddCasa = parseFloat(document.getElementById("oddCasa").value);
      var oddJusta = parseFloat(document.getElementById("oddJusta").value);
  
      var b = oddCasa - 1;
      var p = 100 / oddJusta;
      var q = 100 - p;
      var f = 0.1 * ((b * p - q) / b);
  
      document.getElementById("resultado").textContent = "Fração de aposta: " + f.toFixed(2) + "%";
    });
  });
  