import threading
import time

def dormir(index, delai):
    print(f"process n°{index} va se coucher...")
    time.sleep(delai)
    print(f"process n°{index} a fini de dormir après {delai} sec...")

def main():
    thread_container = []
    delais = [2, 1, 3, 1.5]
    
    #création des sous-process
    for index, delai in enumerate(delais):
        thread = threading.Thread(target=dormir, args=(index+1, delai))
        thread_container.append(thread)
        thread.start()
    #attendre que tout les process finissent
    print("avant l'attente")
    for thread in thread_container:
        thread.join()
    print("après l'attente")

if __name__ == "__main__":
    main()