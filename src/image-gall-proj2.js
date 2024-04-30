import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallProj extends DDD {
  static get tag() {
    return "image-gall-proj2";
  }

constructor() {
  super();
  this.images = [
    {src: "https://www.videogameshelf.com/wp-content/uploads/2013/04/Zelda-Ocarina-of-Time-Master-Sword.jpg", caption: "Young Link Pulls Master Sword", description: "Description 1"},
    {src: "https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt7caa10bdf8bd4173/650f033eaf5d1a0b9e58406c/Mario_64_Bowser.png?disable=upscale&width=1200&height=630&fit=crop", caption: "Mario Fighting Bowser", description: "Description 2"},
    {src: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/The-Legend-of-Zelda-Twilight-Princess-HD-Gameplay.jpg", caption: "Adult Link Wielding Master Sword", description: "Description 3"},
    {src: "https://assetsio.gnwcdn.com/ar4rx.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", caption: "Super Mario Galaxy Cover", description: "Description 4"},
    {src: "https://preview.redd.it/does-anyone-else-miss-when-luigis-mansion-was-spooky-v0-gn7mnmpy74ab1.jpg?width=1080&crop=smart&auto=webp&s=c87f5ccc255b406b0e97ecae3a64aa05ede85073", caption: "Luigi's Mansion", description: "Description 5"},
    {src: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/06/18/6df0b0d9-9288-4452-a4df-9811b3cfe2db/luigi-mansion-3-hands-on", caption: "Luigi And His Ghost Dog", description: "Description 6"},
  ];
  this.currentImageIndex = 0;
}

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          padding: var(--ddd-spacing-4);
       }

      .border-container {
        background-color: var(--ddd-theme-default-potentialMidnight);
        color: var(--ddd-theme-default-potentialMidnight);
        padding: var(--ddd-spacing-4);
        height: 500px;
        min-width: 100px;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: none;
      }

      .media-image-container {
        background-color: var(--ddd-theme-default-slateGray);
        color: var(--ddd-theme-default-slateGray);
        padding: var(--ddd-spacing-4);
        height: 90%;
        min-width: 90%;
      }
      
      .media-image img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
      }

      .caption {
        display: center;
      }

      .description {
        display: center;
      }

      .play-list {
        display: center;
      }

      .button-container {
        display: flex;
        height: 5%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }

      .arrow-forward {
        margin: auto;
      }

      .arrow-back {
        margin: auto;
      }

      .dialog-tag {
        display: center;
      }

      .border-container:hover {
        transform: translateY(-5px) translateX(5px);
        box-shadow: var(--ddd-theme-default-coalyGray);
      }

    `];
  }

  render() {
    const currentImage = this.images[this.currentImageIndex];
    return html`
      <div class="border-container">
        <div class="media-image-container">
          <div class="media-image">
            <img src="${this.images[this.currentImageIndex].src}">
          </div>
          <div class="caption">${this.images[this.currentImageIndex].caption}</div>
          <div class="description">${this.images[this.currentImageIndex].description}</div>
        </div>
        <div class="button-container">
          <button class="arrow-back" @click="${this.navigateBack}"><-</button>
          <button class="arrow-forward" @click="${this.navigateForward}">-></button>
        </div>
      </div>
      <div class="play-list">
      </div>
      <div class="dialog-tag"></div>
    `;
  }
  

  navigateBack = () => {
    console.log("Navigating back...");
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      console.log("New index after navigating back:", this.currentImageIndex);
      this.render();
    }
  }
  
  navigateForward = () => {
    console.log("Navigating forward...");
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      console.log("New index after navigating forward:", this.currentImageIndex);
      this.render();
    }
  }
  
  

  static get properties() {
    return {
      ...super.properties,
      images: { type: Array },
      currentImageIndex: { type: Number }
    };
  }
}

globalThis.customElements.define(ImageGallProj.tag, ImageGallProj);
