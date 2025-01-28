// script.js
document.getElementById("calculate").addEventListener("click", function () {
    const transport = parseFloat(document.getElementById("transport").value) || 0;
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const meat = parseFloat(document.getElementById("meat").value) || 0;
  
    // Karbon ayak izi katsayıları (örnek değerler)
    const transportFactor = 0.21; // km başına kg CO2
    const electricityFactor = 0.5; // kWh başına kg CO2
    const meatFactor = 7; // porsiyon başına kg CO2
  
    // Hesaplama
    const transportEmissions = transport * transportFactor;
    const electricityEmissions = electricity * electricityFactor;
    const meatEmissions = meat * meatFactor;
  
    const totalEmissions = (
      transportEmissions +
      electricityEmissions +
      meatEmissions
    ).toFixed(2);
  
    // Sonuç Gösterimi
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>Toplam Karbon Ayak İziniz</h2>
      <p>${totalEmissions} kg CO2/ay</p>
    `;
  });
  