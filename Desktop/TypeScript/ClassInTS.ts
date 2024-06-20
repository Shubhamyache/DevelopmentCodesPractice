class Student {
  RollNo: number;
  Name: string;
  constructor(_RollNo: number, Name: string) {
    this.RollNo = _RollNo;
    this.Name = Name;
  }
  showDetails() {
    console.log(this.RollNo + " : " + this.Name);
  }
}

//Enums

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color;
let ColorColor = Color.Green;
