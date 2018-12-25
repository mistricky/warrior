class Player {
  beAStrongKing(warrior, currentHP) {
    let { health, maxHealth, rest, walk } = warrior;

    if (
      health() < maxHealth() &&
      !(this.afterRestHP && this.afterRestHP > currentHP)
    ) {
      rest();
      this.afterRestHP = health();
    } else {
      this.afterRestHP = 0;
      walk();
    }
  }

  playTurn(warrior) {
    /** ability */
    let { rest, attack, walk, rescue } = warrior;
    /** senses */
    let { health } = warrior;

    let space = warrior.feel();
    let unit = space.getUnit();

    if (!space.isEmpty()) {
      if (unit.isEnemy()) {
        attack();
      } else {
        rescue();
      }
    } else {
      /** wa yayayyayayyay !!! */
      this.beAStrongKing(warrior, health());
    }
  }
}
