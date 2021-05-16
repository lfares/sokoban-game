class Element {
    constructor(value, position) {
        this.value = value;
        this.position = position;
        this.imgSrc = this.parseValueToImgSrc(this.value);
    }

    /**
     * Gets and Sets
     */
    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

    getX() {
        return this.position[0];
    }

    getY() {
        return this.position[1];
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
}

export default Element;