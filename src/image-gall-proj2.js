import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallProj extends DDD {
  static get tag() {
    return "image-gall-proj2";
  }

constructor() {
  super();
  this.images = [
    {src: "https://www.videogameshelf.com/wp-content/uploads/2013/04/Zelda-Ocarina-of-Time-Master-Sword.jpg", caption: "Young Link Pulls Master Sword", description: "This is from The Legend of Zelda: Ocarina of Time. Link is about to pull the master sword which will advance him through time 7 years"},
    {src: "https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt7caa10bdf8bd4173/650f033eaf5d1a0b9e58406c/Mario_64_Bowser.png?disable=upscale&width=1200&height=630&fit=crop", caption: "Mario Fighting Bowser", description: "This is from Super Mario 64. It is a battle between Mario and the final boss of the game Bowser. Here they face off"},
    {src: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/The-Legend-of-Zelda-Twilight-Princess-HD-Gameplay.jpg", caption: "Adult Link Wielding Master Sword", description: "This is from The Legend of Zelda: Twilight Princess. This is Link who is seen wielding the master sword and hylian shield"},
    {src: "https://assetsio.gnwcdn.com/ar4rx.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", caption: "Super Mario Galaxy Cover", description: "This is a picture of the opening menu of Super Mario Galaxy. It shows Mario and 3 Luma together in space. The title of the game is shown and a planet"},
    {src: "https://preview.redd.it/does-anyone-else-miss-when-luigis-mansion-was-spooky-v0-gn7mnmpy74ab1.jpg?width=1080&crop=smart&auto=webp&s=c87f5ccc255b406b0e97ecae3a64aa05ede85073", caption: "Luigi's Mansion", description: "This is from the game Luigi's Mansion. This picture is of the mansion that the game takes place"},
    {src: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/06/18/6df0b0d9-9288-4452-a4df-9811b3cfe2db/luigi-mansion-3-hands-on", caption: "Luigi And His Ghost Dog", description: "This is from the game Luigi's Mansion 3. This picture shows Luigi and his ghost dog. It also them standing in the hotel where the game takes place. They are scared"},
  ];
  this.currentImageIndex = 0;
  this.showDescription = true;
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
        display: block;
        text-align: center;
        color: var(--ddd-theme-default-coalyGray);
      }

      .description {
        display: none;
        font-size: 14px;
        margin: auto;
      }

      .description.hidden {
        display: block;
        text-align: center;
        color: var(--ddd-theme-default-coalyGray);
      }

      .description-button {
        display: block;
        margin: 15px auto;
        text-align: center;
        background-color: var(--ddd-theme-default-skyBlue);
        height: 8%;
        border-radius: 10%;
      }

      .description-button:hover {
        background-color: var(--ddd-theme-default-coalyGray);
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

      .border-container:hover {
        transform: translateY(-5px) translateX(5px);
        box-shadow: 0 0 25px 0 rgba(255, 0, 0, 255);
      }
    `];
  }

  render() {
    const currentImage = this.images[this.currentImageIndex];
    return html`
      <div class="border-container">
        <div class="media-image-container">
          <div class="media-image">
            <img src="${currentImage.src}">
          </div>
          <div class="caption">${currentImage.caption}</div>
          <button class="description-button" @click="${this.toggleDescription}">Description</button>
          <div class="description ${this.showDescription ? '' : 'hidden'}">${currentImage.description}</div>
        </div>
        <div class="button-container">
          <button class="arrow-back" @click="${this.navigateBack}"><-</button>
          <button class="arrow-forward" @click="${this.navigateForward}">-></button>
        </div>
      </div>
    `;
  }
  

  navigateBack = () => {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.render();
    }
  }
  
  navigateForward = () => {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
      this.render();
    }
  }
  
  toggleDescription() {
    this.showDescription = !this.showDescription;
    this.requestUpdate();
  }

  zoomIn() {
    const container = this.shadowRoot.querySelector('.border-container');
    container.classList.toggle('zoomed');
  }
  
  static get properties() {
    return {
      ...super.properties,
      images: { type: Array },
      currentImageIndex: { type: Number },
      showDescription: { type: Boolean }
    };
  }
}

globalThis.customElements.define(ImageGallProj.tag, ImageGallProj);
