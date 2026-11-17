import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation instanciacion y creación", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Hotel", 100);
    void accommodation;
  });

  test("Nombre no vacio", () => {
    expect(() => new Accommodation(" ", 100)).toThrow("El nombre no puede ser vacio");
  });

  test("Costo", () => {
    expect(() => new Accommodation("Hotel1", -1)).toThrow("El costo no puede ser negativo");
  });

  test("Correcta instanciación", () => {
    expect(accommodation.getName()).toBe("Hotel");
    expect(accommodation.getCost()).toBe(100);
  });
});

describe("Set y get", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Hotel", 100);
    void accommodation;
  });

  test("Name", () => {
    expect(() => accommodation.setName(" ")).toThrow("El nombre no puede ser vacio");
    accommodation.setName("Hotel 2")
    expect(accommodation.getName()).toBe("Hotel 2");
  });

  test("Costo", () => {
    expect(() => accommodation.setCost(-1)).toThrow("El costo no puede ser negativo");
    accommodation.setCost(0)
    expect(accommodation.getCost()).toBe(0);
  });
});