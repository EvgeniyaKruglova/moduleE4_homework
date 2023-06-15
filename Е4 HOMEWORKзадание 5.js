
class  Computer {
  constructor (name, memory,processor,os){
    this.name = name;
    this.memory=memory;
    this.processor=processor;
    this.os= os    
  }
  getWeight (weight){
    console.log(`Weight is ${weight} kg`)
  }
  turn (turn){
    console.log(`The ${this.name} is switched ${turn}.`)
  }
}


class Notebook extends Computer{
  constructor (screen, resolution,name, memory, processor, os){
    super(name, memory, processor, os);
    this.screen = screen;
    this.resolution= resolution
}
  getWeight (weight){
    console.log(`Weight is ${weight} kg`)
  }
  turn (turn){
    console.log(`The ${this.name} is switched ${turn}.`)
  }
}

const IruOffice = new Computer('IruOffice','480gb','IntelCorei710700','Free DOS')
IruOffice.getWeight(9.2)
IruOffice.turn('off')
console.log(IruOffice)

const MsiTitan = new Notebook('17.3','3840x2160','MsiTitan','64gb','IntelCorei9','Windows 11 Home',)
console.log(MsiTitan)