import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isDemonHand, Card

def test_isDemonHand_small_hand():
    hand = [Card("diamond", 2)]
    result = isDemonHand(hand)
    assert result == None

def test_isDemonHand_valid_hand():
    hand = [Card("A", 10), Card("A", 11), Card("A", 12), Card("A", 13), Card("A", 14)]
    result = isDemonHand(hand)
    assert result == 2000

def test_isDemonHand_invalid_Suit():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isDemonHand(hand)
    assert result == None

def test_isDemonHand_invalid_allCardSameColor():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isDemonHand(hand)
    assert result == None

def test_isDemonHand_invalid_startingValue():
    hand = [Card("A", 3), Card("A", 4), Card("A", 5), Card("A", 6)]
    result = isDemonHand(hand)
    assert result == None