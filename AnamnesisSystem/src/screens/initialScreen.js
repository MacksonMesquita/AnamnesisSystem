class InitialScreen extends HTMLElement {
    connectedCallback() {
        this. innerHTML = `
        <img src="images/download.jpeg" alt="medicinal image">
        <h1>Hello World</h1>
        `
    }
}

customElements.define('initialscreen-component', InitialScreen);