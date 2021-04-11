import {
  determineUniqueCards,
  determineOddEvenCards,
  cardTypeCheck,
} from './enchantments';

const TYPE_IS_ODD = false;
const TYPE_IS_EVEN = true;

describe('Enchantments', () => {
  describe('cardTypeCheck', () => {
    test('a single matching card', () => {
      expect(cardTypeCheck([1], 1)).toBe(1);
    });

    test('a single matching card among many', () => {
      expect(cardTypeCheck([7, 4, 7, 3, 1, 2], 1)).toBe(1);
    });

    test('a single unmatched card', () => {
      expect(cardTypeCheck([1], 2)).toBe(0);
    });

    test('multiple matching cards', () => {
      expect(cardTypeCheck([7, 7, 7], 7)).toBe(3);
    });

    test('multiple matching cards among many', () => {
      expect(cardTypeCheck([1, 2, 3, 7, 7, 7, 3, 2, 1], 7)).toBe(3);
    });

    test('no matching cards', () => {
      expect(cardTypeCheck([1, 2, 3, 4, 5, 4, 3, 2, 1], 7)).toBe(0);
    });
  });

  describe('determineUniqueCards', () => {
    test('a single unique card', () => {
      expect(determineUniqueCards([1])).toBe(1);
    });

    test('multiple unique cards', () => {
      expect(determineUniqueCards([1, 2, 3])).toBe(3);
    });

    test('many duplicates', () => {
      expect(determineUniqueCards([7, 7, 7, 7])).toBe(1);
    });

    test('a mix of unique and duplicated cards', () => {
      expect(determineUniqueCards([1, 1, 2, 3])).toBe(3);
    });
  });

  describe('determineOddEvenCards', () => {
    test('a single odd card', () => {
      expect(determineOddEvenCards([1], TYPE_IS_ODD)).toBe(1);
      expect(determineOddEvenCards([1], TYPE_IS_EVEN)).toBe(0);
    });

    test('a single even card', () => {
      expect(determineOddEvenCards([2], TYPE_IS_ODD)).toBe(0);
      expect(determineOddEvenCards([2], TYPE_IS_EVEN)).toBe(1);
    });

    test('multiple odd cards', () => {
      expect(determineOddEvenCards([1, 3, 5], TYPE_IS_ODD)).toBe(3);
      expect(determineOddEvenCards([1, 3, 5], TYPE_IS_EVEN)).toBe(0);
    });

    test('multiple even cards', () => {
      expect(determineOddEvenCards([2, 2, 4, 6, 6], TYPE_IS_ODD)).toBe(0);
      expect(determineOddEvenCards([2, 2, 4, 6, 6], TYPE_IS_EVEN)).toBe(5);
    });

    test('a mix of odd and even cards', () => {
      expect(determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], TYPE_IS_ODD)).toBe(4);
      expect(determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], TYPE_IS_ODD)).toBe(2);
    });
  });
});
