<!<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Karbon Ayakizi Testi</title>
  <style>
    /* Genel Stil */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #eaf6ff;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      background: white;
      box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
      border-radius: 12px;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .header h1 {
      color: #007bff;
      font-size: 28px;
      margin: 0;
    }

    .header p {
      font-size: 16px;
      color: #555;
      margin-top: 8px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-top: 15px;
      font-weight: bold;
      color: #0056b3;
    }

    input {
      margin-top: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
    }

    button {
      margin-top: 20px;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    .result {
      margin-top: 20px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      color: #007bff;
    }

    .advice {
      margin-top: 10px;
      font-size: 16px;
      color: #333;
      text-align: left;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Bosphorus Robotics</h1>
      <p>Karbon Ayakizi Testini Çözmeye Başlayın</p>
    </div>

    <form id="carbonForm">
      <label for="transport">Aylık taşıt kullanımınız (km):</label>
      <input type="number" id="transport" placeholder="Örn: 300" required>

      <label for="electricity">Aylık elektrik tüketiminiz (kWh):</label>
      <input type="number" id="electricity" placeholder="Örn: 250" required>

      <label for="meat">Haftalık et tüketimi (porsiyon):</label>
      <input type="number" id="meat" placeholder="Örn: 7" required>

      <button type="button" id="calculate">Hesapla</button>
    </form>

    <div id="result" class="result"></div>
  </div>

  <script>
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

      // Karbon ayak izi seviyeleri (örnek değerler)
      const goodThreshold = 100; // kg CO2/ay altında iyi kabul edilen seviye

      // Sonuç Gösterimi
      const resultDiv = document.getElementById("result");

      if (totalEmissions > goodThreshold) {
        resultDiv.innerHTML = `
          <p>Toplam Karbon Ayak İziniz: <br><strong>${totalEmissions} kg CO2/ay</strong></p>
          <div class="advice">
            <p><strong>Karbon ayakiziniz yüksek!</strong> Çevre üzerindeki etkinizi azaltmak için şunları yapabilirsiniz:</p>
            <ul>
              <li>Toplu taşıma kullanmaya veya yürümeye özen gösterin.</li>
              <li>Elektrik tasarrufu için enerji verimli cihazlar kullanın.</li>
              <li>Et tüketimini azaltarak bitkisel bazlı beslenmeye yönelin.</li>
              <li>Geri dönüşüm alışkanlıklarınızı geliştirin.</li>
            </ul>
          </div>
        `;
      } else {
        resultDiv.innerHTML = `
          <p>Toplam Karbon Ayak İziniz: <br><strong>${totalEmissions} kg CO2/ay</strong></p>
          <p><strong>Tebrikler!</strong> Karbon ayakiziniz olması gereken seviyede.</p>
        `;
      }
    });
  </script>
</body>
</html>
