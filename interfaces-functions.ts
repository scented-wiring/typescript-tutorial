interface IPerson {
  name: string;
  city: string;
  age: number;
  printDetails(): string;
}

const tom: IPerson = {
  name: "Tom",
  city: "Munich",
  age: 33,
  printDetails: function () {
    return `${this.name} - ${this.city}`;
  },
};
