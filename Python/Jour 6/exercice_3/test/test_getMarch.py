import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isMarch, Card
import pytest

def test_isMarch_small_hand():
    hand = [Card("diamond", 2)]
    result = isMarch(hand)
    assert result == None

def test_isMarch_valid_hand():
    hand = [Card("A", 2), Card("A", 3), Card("A", 4), Card("A", 5), Card("A", 6)]
    result = isMarch(hand)
    assert result == 120

def test_isMarch_invalid_hand():
    hand = [Card("A", 10), Card("A", 2), Card("A", 3), Card("A", 7)]
    result = isMarch(hand)
    assert result == None