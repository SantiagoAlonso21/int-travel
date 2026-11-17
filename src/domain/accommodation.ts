class Accommodation {
  #name!: string;
  #cost!: number;

  constructor(name: string, cost: number) {
    this.setName(name);
    this.setCost(cost);
  }

  getName(): string {
    return this.#name;
  }

  setName(name: string): void {
    if (name.trim() === "") {
      throw new Error("El nombre no puede ser vacio");
    }

    this.#name = name;
  }

  getCost(): number {
    return this.#cost;
  }

  setCost(cost: number): void {
    if (cost < 0) {
      throw new Error("El costo no puede ser negativo");
    }
    
    this.#cost = cost;
  }
}
export default Accommodation;
