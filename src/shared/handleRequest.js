export  const handleRequest = (message) => {
    const whatsappURL = `https://wa.me/2349055238226?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };