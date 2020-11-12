const getBackgroundColor = ({ maxTemp }) => {
  if (maxTemp <= 8) {
    return `radial-gradient( 
      circle 465px at -15.1% -25%,  
      rgba(17,130,193,1) 0%, 
      rgba(67,166,238,1) 49%, 
      rgba(126,203,244,1) 90.2% 
      );`
  }

  if (maxTemp > 8 && maxTemp <= 14) {
    return `radial-gradient(
      circle farthest-corner at 14.7% 26.3%,
      rgba(121, 206, 212, 1) 0.2%,
      rgba(101, 167, 191, 1) 89.5%
    );`
  }

  if (maxTemp > 14 && maxTemp <= 19) {
    return `radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,101,133,1) 0%, rgba(255,211,165,1) 90% );`
  }

  if (maxTemp > 19 && maxTemp <= 25) {
    return `linear-gradient( 
      99deg,  
      rgba(255,166,0,1) 14.7%, 
      rgba(255,99,97,1) 73% 
      );`
  }

  return `linear-gradient( 
    109.6deg,  
    rgba(234,192,56,1) 11.2%, 
    rgba(215, 45, 45, 1.00) 68.5% 
    );`
}

export default getBackgroundColor
