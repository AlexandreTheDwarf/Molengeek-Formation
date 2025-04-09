import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isBigR, Card

def test_isBigR_small_hand():
    hand = [Card("diamond", 2)]
    result = isBigR(hand)
    assert result == None

def test_isBigR_valid_hand():
    hand = [Card("A", 2), Card("A", 3), Card("A", 3), Card("A", 2), Card("A", 2)]
    result = isBigR(hand)
    assert result == 187

def test_isBigR_invalid_hand():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isBigR(hand)
    assert result == None