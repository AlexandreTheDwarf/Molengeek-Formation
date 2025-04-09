import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import isTriad, Card
import pytest

def test_isTriad_trow_AttributError():
    with pytest.raises(AttributeError) as e:
        hand = [{},{},{},{}]
        isTriad(hand)

def test_isTriad_small_hand():
    hand = [Card("diamond", 2)]
    result = isTriad(hand)
    assert result == None

def test_isTriad_valid_hand():
    hand = [Card("A", 2), Card("A", 2), Card("A", 2), Card("A", 7)]
    result = isTriad(hand)
    assert result == 86

def test_isTriad_invalid_hand():
    hand = [Card("A", 10), Card("A", 2), Card("A", 3), Card("A", 7)]
    result = isTriad(hand)
    assert result == None