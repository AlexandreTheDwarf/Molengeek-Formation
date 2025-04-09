import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isTetrade, Card

def test_isTetrade_small_hand():
    hand = [Card("diamond", 2)]
    result = isTetrade(hand)
    assert result == None

def test_isTetrade_valid_hand():
    hand = [Card("A", 3), Card("A", 3), Card("A", 3), Card("A", 3), Card("A", 2)]
    result = isTetrade(hand)
    assert result == 412

def test_isTetrade_invalid_hand():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isTetrade(hand)
    assert result == None