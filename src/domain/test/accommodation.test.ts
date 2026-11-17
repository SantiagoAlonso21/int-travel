import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Hotel", 100);
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("Nombre no vacio", () => {
      expect(() => new Accommodation(" ", 100)).toThrow("El nombre no puede ser vacio");
    });

    test("Costo positivo", () => {
      expect(() => new Accommodation("Hotel1", -1)).toThrow("El costo no puede ser negativo");
    });

    test("Correcta instanciación", () => {
      expect(accommodation.getName()).toBe("Hotel");
      expect(accommodation.getCost()).toBe(100);
    });

  });

  describe("Accommodation cost", () => {
    test.todo("agregar tests para el costo");
  });
});
