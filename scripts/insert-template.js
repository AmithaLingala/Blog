class InsertTemplate extends HTMLElement {
  constructor() {
    super();
    this._load();
  }

  async _load() {
    const source = this.getAttribute("src");
    const script = this.getAttribute("script-src");
    const scriptType = this.getAttribute("script-type");

    if (!source) {
      throw new Error("Missing src attribute given for insert-template tag");
    }

    let response = await fetch(source);
    if (response.status != 200) {
      throw new Error(
        `Failed to load the resource ${source} for insert-template tag`
      );
    }
    this.innerHTML = await response.text();
    if(script) {
        const scriptElement = document.createElement("script");
        scriptElement.src = script;
        if(scriptType) {
          scriptElement.type = scriptType;
        }
        this.appendChild(scriptElement);
    }          
  }
}

window.customElements.define("insert-template", InsertTemplate);
