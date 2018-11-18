var para = document.createElement("div");
para.setAttribute("id", "helpYJ");
document.body.appendChild(para);

var helpYJ = document.getElementById("helpYJ");

helpYJ.style.color = "yellow";
helpYJ.style.backgroundColor = "red";
helpYJ.style.position = "absolute";
helpYJ.style.right = "0px";
helpYJ.style.top = "20px";
helpYJ.style.zIndex = 99;

window.onresize = function() {
  // Extra small devices (portrait phones, less than 576px)
  // @media (max-width: 575.98px) { ... }
  if (innerWidth >= 576) {
    helpYJ.textContent = "xs: " + innerWidth;
  }

  // Small devices (landscape phones, 576px and up)
  // @media (min-width: 576px) and (max-width: 767.98px) { ... }
  if (innerWidth >= 767.98) {
    helpYJ.textContent = "sm: " + innerWidth;
  }

  // Medium devices (tablets, 768px and up)
  // @media (min-width: 768px) and (max-width: 991.98px) { ... }
  if (innerWidth >= 991.98) {
    helpYJ.textContent = "md: " + innerWidth;
  }

  // Large devices (desktops, 992px and up)
  // @media (min-width: 992px) and (max-width: 1199.98px) { ... }
  if (innerWidth >= 1199.98) {
    helpYJ.textContent = "lg: " + innerWidth;
  }

  // Extra large devices (large desktops, 1200px and up)
  // @media (min-width: 1200px) { ... }
  if (innerWidth >= 1200) {
    helpYJ.textContent = "xl: " + innerWidth;
  }
};
