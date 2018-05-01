class JBTile extends Tile {

  processData() {
    // make a counter for each response DOCTYPE
    this.love = 0;
    this.hate = 0;
    this.alright = 0;
    this.care = 0;

    // get all the responses to that question
    // the useful method here is getColumn()
    this.jediAnswers = this.table.getColumn('How did you feel about The Last Jedi?');
    console.log(this.jediAnswers);
    // compare each answer to the string
    // increment counters as appropriate
    for (let i = 0; i < this.jediAnswers.length; i++) {
      if (this.jediAnswers[i] === 'Loved it') {
        this.love++;
      } else if (this.jediAnswers[i] === 'Hated it') {
        this.hate++;
      } else if (this.jediAnswers[i] === 'Alright') {
        this.alright++;
      } else {
        this.care++;
      }
    }
  }

  display() {
    noStroke();

    for (let i = 0; i < this.love; i++) {
      image(imgLove, xLove, yLove);
      xLove += 50;
    }

    for (let i = 0; i < this.alright; i++) {
      image(imgAlright, xAlright, yAlright);
      xAlright += 50;
    }

    for (let i = 0; i < this.care; i++) {
      image(imgDontCare, xCare, yCare);
      xCare += 50;
    }

    // call super class' display method so we get our
    // clean matrix and translation
    super.display();

    console.log(this.table);
  }

}
