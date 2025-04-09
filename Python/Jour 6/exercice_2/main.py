class Card :
    def __init__(self, suit, value):
        self._suit = suit
        self._value = value
    def __str__(self):
        val = ""
        if self._value <= 10:
            val = str(self._value)
        elif self._value == 11:
            val = "Jack"
        elif self._value == 12:
            val = "Queen"
        elif self._value == 13:
            val = "King"
        else:
            val = "Ace"
        return f"[{self._suit}-{val}]"
        
        
        
hand = []

def showHand(hand):
    for card in hand:
        print(card)

def allCardSameColor(hand)->bool:
    targetSuit = hand[0]._suit
    for card in hand:
        if card._suit != targetSuit:
            return False
    return True

def sortHandByValue(hand)->list:
    for i in range(len(hand)-1, 0, -1):
        for j in range(0, i):
            if hand[j+1]._value < hand[j]._value:
                temp = Card(hand[j+1]._suit, hand[j+1]._value)
                hand[j+1] = Card(hand[j]._suit, hand[j]._value)
                hand[j] = Card(temp._suit, temp._value)
    return hand

def isASuite(hand)->bool:
    sortHandByValue(hand)
    for i in range(0, len(hand)-1):
        if hand[i]._value + 1 != hand[i+1]._value:
            return False
    return True

def getSumCardValue(cards)->int:
    somme = 0
    for card in cards:
        somme += card._value
    return somme


def isDemonHand(hand)->int|None:
    if len(hand) != 5:
        return None
    if not allCardSameColor(hand):
        return None
    if not isASuite(hand):
        return None
    if hand[0]._value != 10:
        return None
    return 2000


def isSuperHorde(hand)->int|None:
    if len(hand) != 5:
        return None
    if not allCardSameColor(hand):
        return None
    if not isASuite(hand):
        return None
    return 600 + getSumCardValue(hand)

def getCountValue(hand)->list:
    result = []
    indexUsed = []
    for x in range(0, len(hand)):
        if x in indexUsed:
            continue
        actualValue = hand[0]._value
        count = 1
        for y in hand:
            if y in indexUsed:
                continue
            if actualValue == y._value:
                count += 1
                indexUsed.append(y)
        result.append({"value": actualValue, "count" : count})
    return result



def isTetrade(hand)->int|None:
    if len(hand) < 4:
        return None
    frequence = {}
    for card in hand:
        frequence[card._value] = frequence.get(card._value, 0) + 1
        if frequence[card._value] >= 4:
            return 400 + (4*card._value)
    return None


def isBigR(hand)->int|None:
    if len(hand) != 5:
        return None
    
    frequence = {}
    for card in hand:
        frequence[card._value] = frequence.get(card._value, 0) + 1
    print(frequence.keys())
    if len(frequence.keys()) != 2:
        return None
    if frequence[next(iter(frequence))] == 3 or frequence[next(iter(frequence))] == 2:
        return 175 + getSumCardValue(hand)


def isHord(hand)->int|None:
    if len(hand) != 5:
        return None
    if not allCardSameColor(hand):
        return None
    return 125 + getSumCardValue(hand)

def isMarch(hand)->int|None:
    if len(hand) != 5:
        return None
    if not isASuite(hand):
        return None
    return 100 + getSumCardValue(hand)

def isTriad(hand)->int|None:
    if len(hand) < 3:
        return None
    frequence = {}
    for card in hand:
        frequence[card._value] = frequence.get(card._value, 0) + 1
    for key in frequence.keys():
        if frequence[key] == 3:
            return 80 + (3*int(key))
    return None

def isDyade(hand)->int|None:
    if len(hand) < 2:
        return None
    frequence = {}
    for card in hand:
        frequence[card._value] = frequence.get(card._value, 0) + 1
    for key in frequence.keys():
        if frequence[key] == 2:
            return 20 + (2*int(key))
    return None

def getSolo(hand)->int:
    sortHandByValue(hand)
    return 10 + hand[len(hand)-1]._value

def isDoubleDyade(hand)->int|None:
    if len(hand) < 4:
        return None
    frequence = {}
    for card in hand:
        frequence[card._value] = frequence.get(card._value, 0) + 1
    countDyadeValue = []
    
    for key in frequence.keys():
        if frequence[key] == 2:
            countDyadeValue.append(key)
    if len(countDyadeValue) == 2:
        return 40 + (2*countDyadeValue[0]) + (2*countDyadeValue[1])
hand = [
    Card("d", 2),
    Card("d", 1),
    Card("d", 2),
    Card("d", 1),
    Card("d", 3),
]

res = isDoubleDyade(hand)

print(res)