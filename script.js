class Animal {
  constructor(name) {
    this.name = name;
  }

  action(event) {
    event.stopPropagation();
    document.getElementById(this.actionSoundName).play();
  }

  showImage() {
    document.querySelector("img").src = this.image;
    document.querySelector("img").width = "500"
    document.querySelector("img").height = "400"
  }

  putInTheDocument() {
    const petsTable = document.getElementById("petsTable");
    const petTR = document.createElement("tr");
    
    const petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    const petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    const petActionTD = document.createElement("td");
    const petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petTR.onclick = this.showImage.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
    this.image = "myCat.jpg"
  }
}

class Monkey extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
    this.actionText = "Scream"
    this.actionSoundName = "scream"
    this.image = "https://pbs.twimg.com/media/En0g1OPXIAAwAT2.jpg"
  }
}
const Mila = new Cat("Şero");
const Charlie = new Monkey("Charlie");
Mila.putInTheDocument();
Charlie.putInTheDocument();