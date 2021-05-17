class Element {
    constructor(value, position) {
        this.value = value;
        this.position = position;
        this.imgSrc = this.parseValueToImgSrc(this.value);
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
        this.imgSrc = this.parseValueToImgSrc(this.value);
    }

    /**
     * 
     *  @param {string} value retrieved from level's grid 
     *  @returns {string} imgSrc  
     */
    parseValueToImgSrc(value) {
        switch (value) {
            case '#':
              return './img/wall.png';
            case '@':
              return './img/character.png';
            case '&':
              return './img/character.png'; // character on goal
            case '$':
              return './img/box.png';
            case '*':
              return './img/boxOnGoal.png';
            case '.':
              return './img/goal.png';
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