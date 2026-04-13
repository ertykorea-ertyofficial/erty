window.ERTYSeo = {
  setTitle(title) {
    document.title = title;
  },

  setDescription(description) {
    let element = document.querySelector('meta[name="description"]');

    if (!element) {
      element = document.createElement("meta");
      element.name = "description";
      document.head.appendChild(element);
    }

    element.content = description;
  },

  setCanonical(url) {
    let element = document.querySelector('link[rel="canonical"]');

    if (!element) {
      element = document.createElement("link");
      element.rel = "canonical";
      document.head.appendChild(element);
    }

    element.href = url;
  }
};
