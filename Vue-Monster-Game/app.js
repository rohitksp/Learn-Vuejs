const healthBar = (value) => {
  return Math.floor(Math.random() * value);
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      fightingRound: 0,
      winner: null,
      battleStatus: [],
    };
  },

  computed: {
    monsterHealthBar() {
      if (this.monsterHealth <= 0) {
        return { width: (this.monsterHealth = 0 + "%") };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },
    playerHealthBar() {
      if (this.playerHealth <= 0) {
        return { width: (this.playerHealthBar = 0 + "%") };
      } else {
        return { width: this.playerHealth + "%" };
      }
    },
    specialAttackPower() {
      return this.fightingRound % 3 !== 0;
    },
  },

  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "win";
      }
    },
    playerHealth(value) {
      if (this.monsterHealth <= 0 && value <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "lost";
      }
    },
  },

  methods: {
    playerAttack() {
      const monsterEnergy = healthBar(8);
      this.monsterHealth -= monsterEnergy;
      this.monsterAttack();
      this.battleLogs("player", "attack", monsterEnergy);
    },
    monsterAttack() {
      this.fightingRound++;
      const playerEnergy = healthBar(12);
      this.playerHealth -= playerEnergy;
      this.battleLogs("monster", "attack", playerEnergy);
    },
    specialAttack() {
      const specialMove = healthBar(20);
      this.monsterHealth -= specialMove;
      this.battleLogs("player", "attack", specialMove);
      this.monsterAttack();
    },
    healedPlayer() {
      const healedPlayerHealth = healthBar(20);
      if (this.playerHealth + healedPlayerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healedPlayerHealth;
      }
      this.monsterAttack();
      this.battleLogs("player", "healed", healedPlayerHealth);
    },
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.fightingRound = 0;
      this.winner = null;
      this.battleStatus = [];
    },
    surrenderPlayer() {
      this.winner = "lost";
      this.playerHealth = 0;
    },
    battleLogs(who, what, value) {
      this.battleStatus.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
