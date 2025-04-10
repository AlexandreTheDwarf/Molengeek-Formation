import tkinter as tk
from tkinter import messagebox

def validate():
    print(entry.get())

def clear():
    entry.delete(0, tk.END)#tk.END retourne le dernier index 

def show():
    messagebox.showwarning("t'a fumé quoi srx?",f"ça veut dire quoi {entry.get()} ?")


root = tk.Tk()
root.title("entry and message box")

entry = tk.Entry(root)
entry.pack(padx=10, pady=10)

btn_validation = tk.Button(root, text='valider', command=validate, bg="green")
btn_validation.pack(padx=10, pady=10)

btn_delete = tk.Button(root, text='clear', command=clear, bg="red")
btn_delete.pack(padx=10, pady=10)

btn_show = tk.Button(root, text='show', command=show,  bg="yellow")
btn_show.pack(padx=10, pady=10)

root.mainloop()