function Computer(name,memory,processor, os){
  this.name = name;
  this.memory=memory;
  this.processor=processor;
  this.os= os    
}

Computer.prototype.getWeight = function(weight){
  console.log(`Weight is ${weight}+ kg`)
}

Computer.prototype.turn = function(turn){
  console.log(`The ${this.name} is switched ${turn}.`)
}



function Notebook(name,memory,processor, os, screen, resolution ){
  this.name = name;
  this.memory=memory,
  this.processor=processor;
  this.os= os;
  this.screen = screen;
  this.resolution= resolution
}



Notebook.prototype= new Computer()

const MsiTitan = new Notebook('MsiTitan','64gb','IntelCorei9','Windows 11 Home', '17.3','3840x2160')


MsiTitan.getWeight(3.3)
MsiTitan.turn('on')

console.log(MsiTitan)

const IruOffice = new Computer('IruOffice','480gb','IntelCorei710700','Free DOS')

IruOffice.getWeight(9.2)
IruOffice.turn('off')
