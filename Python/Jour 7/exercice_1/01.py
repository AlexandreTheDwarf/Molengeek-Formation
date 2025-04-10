import logging
import logging.config

logging.basicConfig(level=logging.DEBUG, format="<%(asctime)s-%(levelname)s-%(message)s>")
logging.disable(30)

logging.debug("<debut du programme>")
logging.warning("ceci est un warning")
logging.error("ceci est une erreur")

def factorielle(n):
    logging.debug("appel de la fonction factorielle")
    if n < 0:
        raise Exception(f"factorielle de {n} impossible")
    if n == 0 :
        logging.debug("dernier appel")
        return 1 #porte de sortie de la fonction recursif
    return n * factorielle(n-1)

result = factorielle(3)

print(result)
print(5*4*3*2*1)