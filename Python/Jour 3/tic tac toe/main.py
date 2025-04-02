theBoard = {'top-L': ' ', 'top-M': ' ', 'top-R': ' ',
            'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',
            'low-L': ' ', 'low-M': ' ', 'low-R': ' '}

def printBoard(board):
    print(board['top-L'] + '|' + board['top-M'] + '|' + board['top-R'])
    print('-+-+-')
    print(board['mid-L'] + '|' + board['mid-M'] + '|' + board['mid-R'])
    print('-+-+-')
    print(board['low-L'] + '|' + board['low-M'] + '|' + board['low-R'])

def win(board):
    # Vérifier les lignes, colonnes et diagonales pour 'X'
    if ((board['top-L'] == board['top-M'] == board['top-R'] == 'X') or
        (board['mid-L'] == board['mid-M'] == board['mid-R'] == 'X') or
        (board['low-L'] == board['low-M'] == board['low-R'] == 'X') or
        (board['top-L'] == board['mid-M'] == board['low-R'] == 'X') or
        (board['low-L'] == board['mid-M'] == board['top-R'] == 'X') or
        (board['top-L'] == board['mid-L'] == board['low-L'] == 'X') or
        (board['top-M'] == board['mid-M'] == board['low-M'] == 'X') or
        (board['top-R'] == board['mid-R'] == board['low-R'] == 'X')):
        print("X, Win!")
        return True

    # Vérifier les lignes, colonnes et diagonales pour 'O'
    elif ((board['top-L'] == board['top-M'] == board['top-R'] == 'O') or
          (board['mid-L'] == board['mid-M'] == board['mid-R'] == 'O') or
          (board['low-L'] == board['low-M'] == board['low-R'] == 'O') or
          (board['top-L'] == board['mid-M'] == board['low-R'] == 'O') or
          (board['low-L'] == board['mid-M'] == board['top-R'] == 'O') or
          (board['top-L'] == board['mid-L'] == board['low-L'] == 'O') or
          (board['top-M'] == board['mid-M'] == board['low-M'] == 'O') or
          (board['top-R'] == board['mid-R'] == board['low-R'] == 'O')):
        print("O, Win!")
        return True

    return False

turn = 'X'
moveUse = []

for i in range(9):
    printBoard(theBoard)
    print('Turn for ' + turn + '. Move on which space?')

    # Boucle pour s'assurer que l'utilisateur choisit une position valide
    while True:
        move = input()

        # Vérifier si la position est déjà utilisée ou invalide
        if move in moveUse or move not in theBoard:
            print("Position invalide ou déjà utilisée. Choisissez une autre position.")
        else:
            moveUse.append(move)
            theBoard[move] = turn
            break  # Sortir de la boucle une fois une position valide est choisie

    # Vérifier s'il y a un gagnant
    if win(theBoard):
        break

    # Vérifier s'il y a match nul
    if len(moveUse) == 9:
        print("Match nul!")
        break

    # Changer de tour
    if turn == 'X':
        turn = 'O'
    else:
        turn = 'X'

printBoard(theBoard)

