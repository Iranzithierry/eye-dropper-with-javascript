const btn = document.querySelector(".try_btn");

const activateEyeDropper = async () => {
    try {
      const eyeDropper = new EyeDropper();
      const response = await eyeDropper.open();
      console.log(response);
  
      if (typeof response === 'object' && response.hasOwnProperty('sRGBHex')) {
        const hexCode = response.sRGBHex;
        alert(`The Color Of The Object Is:    ${hexCode}`);
        console.log(hexCode)
      } else {
        alert('Invalid response format:', response);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  btn.addEventListener("click", activateEyeDropper);
  
