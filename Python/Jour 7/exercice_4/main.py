import time
import threading

counter = 0

def incrementer(iter):
    global counter
    for _ in range(iter):
        time.sleep(0.5)
        counter += 1

def main():
    thread1 = threading.Thread(target=incrementer, args=[2])
    thread2 = threading.Thread(target=incrementer, args=[3])
    
    thread1.start()
    thread2.start()

    thread1.join()
    thread2.join()
    

if __name__ == "__main__":
    debut = time.time()
    incrementer(5)
    print(f"counter : {counter}")
    fin = time.time()
    print(f"Temps d'execution total : {fin - debut:.2f} secondes.")