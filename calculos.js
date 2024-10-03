function calculateCarbonFootprint() {
    const food = document.getElementById('food').value;
    let carbonFootprint;
  
    switch(food) {
      case 'chicken':
        carbonFootprint = 5.5; // Valores de ejemplo
        break;
      case 'beef':
        carbonFootprint = 27.0;
        break;
      case 'pasta':
        carbonFootprint = 1.5;
        break;
      default:
        carbonFootprint = 0;
    }
  
    document.getElementById('result').innerText = `Huella de carbono de ${food}: ${carbonFootprint} kg CO₂`;
  }
  