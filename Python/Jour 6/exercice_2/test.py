from dummy import division
import pytest 
#test_ au debut de la fonction indique que c'est un test à effectué
def test_divisionCorrect():
    result = division(6,2)
    #assert valide le test si l'expression qui le suit est True
    assert result == 3.0

def test_division_throwError_with_zero():
    with pytest.raises(ZeroDivisionError) as e:
        division(2,0)