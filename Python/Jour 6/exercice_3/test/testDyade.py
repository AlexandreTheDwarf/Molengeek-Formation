from main import isDyade, Card
import pytest

def test_isDyade_trow_AttributError():
    with pytest.raises(AttributeError) as e:
        hand = [{},{},{},{}]
        isDyade(hand)

def test_isDyade_small_hand():
    hand = [Card("diamond", 2)]
    result = isDyade(hand)
    assert result == None

def test_isDyade_valid_hand():
    hand = [Card("A", 2), Card("A", 2), Card("A", 3), Card("A", 7)]
    result = isDyade(hand)
    assert result == 24

def test_isDyade_invalid_hand():
    hand = [Card("A", 10), Card("A", 2), Card("A", 3), Card("A", 7)]
    result = isDyade(hand)
    assert result == None