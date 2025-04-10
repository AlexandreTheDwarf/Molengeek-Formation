import tkinter as tk
from tkinter import filedialog
import os

root = tk.Tk()

def browse_files():
    files_name = filedialog.askopenfilenames(
        title="select your files",
        filetypes=(("tous les fichiers", ".*"), ("fichier texte", "*.txt"))
    )
    for i, name in enumerate(files_name):
        print(f"file ({i}) : {name}")
        # os.remove(name) # a decocher mais en acceptant de prendre des risques

btn_open_file = tk.Button(root, text="browse", command=browse_files)
btn_open_file.pack()


root.mainloop()