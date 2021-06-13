class Element {
    constructor(value, position) {
        this.value = value;
        this.position = position;
        this.imgSrcPosition = this.parseValueToImgSrcPosition(this.value);
        this.name = this.parseValueToName(this.value);
    }

    /**
     * Gets and Sets
     */
    getX() {
        return this.position[0];
    }

    getY() {
        return this.position[1];
    }

    setElement(elementName) {
        this.name = elementName;
        this.value = this.parseNameToValue(this.name);
        this.imgSrcPosition = this.parseValueToImgSrcPosition(this.value);
    }

    /**
     * 
     *  @param {string} value retrieved from level's grid 
     *  @returns {string} imgSrc  
     */
    parseValueToImgSrcPosition(value) {
        switch (value) {
            case '#':
              return {x: 448, y: 384};
            case '@':
              return {x: 0, y: 256};
            case '&':
              return {x: 0, y: 256}; 
            case '$':
              return {x: 384, y: 0};
            case '*':
              return {x: 576, y: 0};
            case '.':
              return {x: 768, y: 256};
            case ' ':
              return 'empty';
        }
    }

    parseValueToName(value) {
        switch (value) {
            case '#':
              return 'wall';
            case '@':
              return 'character';
            case '&':
              return 'characterOnGoal'; 
            case '$':
              return 'box';
            case '*':
              return 'boxOnGoal';
            case '.':
              return 'goal';
            case ' ':
              return 'empty';
        }
    }

    parseNameToValue(name) {
      switch (name) {
          case 'wall':
            return '#';
          case 'character':
            return '@';
          case 'characterOnGoal':
            return '&'; 
          case 'box':
            return '$';
          case 'boxOnGoal':
            return '*';
          case 'goal':
            return '.';
          case 'empty':
            return ' ';
      }
  }
}

export default Element;