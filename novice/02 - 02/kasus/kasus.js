class cat{
    constructor(tiredness, hunger, lonliness, happiness){
      this.tiredness = tiredness;
      this.hunger = hunger;
      this.lonliness = lonliness;
      this.happiness = happiness;
    }
   tidur(y,r,t){
    this.tiredness+=y;
    this.hunger-=r;
    this.happiness+=t;
    // this.happiness+=c;
    return `tiredness: ${this.tiredness}, hunger: ${this.hunger}, lonliness: ${this.lonliness}, happiness: ${this.happiness} `;
    }
    makan(y,r,t){
      this.tiredness-=y;
      this.hunger-=r;
      this.happiness+=t;
      // this.happiness+=c;
      return `tiredness: ${this.tiredness}, hunger: ${this.hunger}, lonliness: ${this.lonliness}, happiness: ${this.happiness} `;
      }
      hewan(y,r,t){
        this.tiredness-=y;
        this.lonliness-=r;
        this.happiness+=t;
        // this.happiness+=c;
        return `tiredness: ${this.tiredness}, hunger: ${this.hunger}, lonliness: ${this.lonliness}, happiness: ${this.happiness} `;
        }
    
  }
  let kucing = new cat(70,70,70,70);
  console.log("=============tidur=========");
  console.log(kucing);
  console.log(kucing.tidur(10,10,10));
  console.log("=============makan=========");
  console.log(kucing);
  console.log(kucing.makan(10,10,10));
  console.log("=============hewan peliharaan=========");
  console.log(kucing);
  console.log(kucing.makan(10,10,10));
  
  
  