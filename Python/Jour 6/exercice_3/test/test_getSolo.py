import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from main import getSolo, Card
import pytest

def test_getSolo_trow_AttributeError():
    with pytest.raises(AttributeError):
        hand = [{},{},{},{}]
        getSolo(hand)

def test_getSolo_valid_hand():
    hand = [Card("A", 4), Card("A", 2), Card("A", 3), Card("A", 7)]
    result = getSolo(hand)
    assert result == 17
