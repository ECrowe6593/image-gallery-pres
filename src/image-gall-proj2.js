import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallProj extends DDD {
  static get tag() {
    return "image-gall-proj2";
  }

constructor() {
  super();
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
      }

      .media-image-container {
        background-color: var(--ddd-theme-default-slateGray);
        color: var(--ddd-theme-default-slateGray);
        padding: var(--ddd-spacing-4);
        height: 90%;
        min-width: 90%;
      }
      
      .media-image {
        align-items: center;
        justify-content: center;
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
    `];
  }

  render() {
    return html`
    <div class="border-container">
      <div class="media-image-container">
        <div class="media-image">
          <img src="https://www.videogameshelf.com/wp-content/uploads/2013/04/Zelda-Ocarina-of-Time-Master-Sword.jpg">
        </div>
        <div class="caption"></div>
        <div class="description"></div>
      </div>
      <div class="button-container">
        <button class="arrow-back"><-</button>
        <button class="arrow-forward">-></button>
      </div>
    </div>
    <div class="play-list">
    </div>
    <div class="dialog-tag"></div>
  `;
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }
}

globalThis.customElements.define(ImageGallProj.tag, ImageGallProj);
