# Initialisation du plateau
def reset_board():
    return {'top-L': ' ', 'top-M': ' ', 'top-R': ' ',
            'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',
            'low-L': ' ', 'low-M': ' ', 'low-R': ' '}

# Affichage du plateau
def printBoard(board):
    print(board['top-L'] + '|' + board['top-M'] + '|' + board['top-R'])
    print('-+-+-')
    print(board['mid-L'] + '|' + board['mid-M'] + '|' + board['mid-R'])
    print('-+-+-')
    print(board['low-L'] + '|' + board['low-M'] + '|' + board['low-R'])

# Vérification de la victoire
def win(board):
    winning_combinations = [
        ['top-L', 'top-M', 'top-R'], ['mid-L', 'mid-M', 'mid-R'], ['low-L', 'low-M', 'low-R'], # Lignes
        ['top-L', 'mid-L', 'low-L'], ['top-M', 'mid-M', 'low-M'], ['top-R', 'mid-R', 'low-R'], # Colonnes
        ['top-L', 'mid-M', 'low-R'], ['low-L', 'mid-M', 'top-R']  # Diagonales
    ]

    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] and board[combo[0]] != ' ':
            print(f"{board[combo[0]]} gagne la partie !")
            return True

    return False

# Début du jeu
while True:
    theBoard = reset_board()
    moveUse = []
    turn = 'X'

    for _ in range(9):
        printBoard(theBoard)
        print(f"Tour de {turn}. Choisissez une case : {list(theBoard.keys())}")

        while True:
            move = input().strip()
            if move not in theBoard:
                print("Mauvaise entrée. Essayez encore.")
            elif move in moveUse:
                print("Case déjà utilisée. Essayez encore.")
            else:
                moveUse.append(move)
                theBoard[move] = turn
                break

        if win(theBoard):
            break

        if len(moveUse) == 9:
            print("Match nul !")
            break

        turn = 'O' if turn == 'X' else 'X'

    printBoard(theBoard)
    rejouer = input("Voulez-vous rejouer ? (o/n) ").strip().lower()
    if rejouer != 'o':
        break
