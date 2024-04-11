import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class imagegallproj2 extends DDD {
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
          display: center;
       }

      .border-container {
        background-color: var(--ddd-theme-default-potentialMidnight);
        color: var(--ddd-theme-default-potentialMidnight);
        padding: var(--ddd-spacing-4);
        height: 500px;
        min-width: 100px;
      }

      .media-image {
        background-color: var(--ddd-theme-default-slateGray);
        color: var(--ddd-theme-default-slateGray);
        padding: var(--ddd-spacing-4);
        height: 500px;
        min-width: 100px;
      }

      .caption {

      }

      .description {

      }

      .play-list {

      }

      .arrow-forward {

      }

      .arrow-back {

      }

      .dialog-tag {

      }
    `];
  }

  render() {
    return html`
    <div class="border-container">
      <div class="media-image">
        <div class="caption"></div>
        <div class="description"></div>
      </div>
    </div>
    <div class="play-list">
      <button class="arrow-forward"></button>
      <button class="arrow-back"></button>
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

globalThis.customElements.define(imagegallproj2.tag, imagegallproj2);
