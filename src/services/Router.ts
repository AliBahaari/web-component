export const Router = {
  init() {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        this.go(`/${button.dataset.link}`);
      });
    });

    this.go(location.pathname);
  },
  go(route: string, addToHistory: boolean = true) {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let routeComponent = "";
    switch (route) {
      case "/about-us":
        routeComponent = "<h1>About Us</h1>";
        break;
      case "/contact-us":
        routeComponent = "<h1>Contact Us</h1>";
        break;
      default:
        routeComponent = "<h1>404</h1>";
        break;
    }

    const appNode = document.querySelector("#app");
    if (appNode) {
      appNode.innerHTML = routeComponent;
    }
  },
};
