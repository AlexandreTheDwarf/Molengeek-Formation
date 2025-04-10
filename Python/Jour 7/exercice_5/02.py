import tkinter as tk
import logging

logging.basicConfig(level=logging.DEBUG, format="<%(asctime)s-%(levelname)s-%(message)s>")

counter = 0

def increment():
    global counter
    counter += 1
    logging.debug(f"counter = {counter}")
    update_screen()

def increment_by(x:int):
    global counter
    counter += x
    logging.debug(f"counter = {counter}")
    update_screen()

def update_screen():
    labelCounter.config({"text" : counter})
    if counter >= 20:
        root.destroy()

root = tk.Tk()

root.geometry("280x125")
labelCounter = tk.Label(root, text=counter)
labelCounter.pack()
btn_plus = tk.Button(root, text="+1", command=increment)
btn_plus.pack(pady=10)
btn_plus_5 = tk.Button(root, text="+5", command=lambda:increment_by(5))
btn_plus_5.pack(pady=10)

root.mainloop()