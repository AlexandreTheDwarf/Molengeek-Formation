import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isHord, Card
import pytest

def test_isHord_small_hand():
    hand = [Card("diamond", 2)]
    result = isHord(hand)
    assert result == None

def test_isHord_valid_hand():
    hand = [Card("A", 2), Card("A", 3), Card("A", 4), Card("A", 5), Card("A", 6)]
    result = isHord(hand)
    assert result == 145

def test_isHord_invalid_hand():
    hand = [Card("A", 10), Card("D", 2), Card("B", 3), Card("A", 7)]
    result = isHord(hand)
    assert result == None