import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isSuperHorde, Card

def test_isSuperHorde_small_hand():
    hand = [Card("diamond", 2)]
    result = isSuperHorde(hand)
    assert result == None

def test_isSuperHorde_valid_hand():
    hand = [Card("A", 2), Card("A", 3), Card("A", 4), Card("A", 5), Card("A", 6)]
    result = isSuperHorde(hand)
    assert result == 620

def test_isSuperHorde_invalid_Suit():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isSuperHorde(hand)
    assert result == None

def test_isSuperHorde_invalid_allCardSameColor():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isSuperHorde(hand)
    assert result == None