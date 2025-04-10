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

root.title("WinRyad")
root.geometry("580x360")

btn_open_file = tk.Button(root, text="browse", command=browse_files)
btn_open_file.pack(pady=10)

text_zone = tk.LabelFrame(root, text="Files selected")
text_zone.pack()

entry = tk.Entry(root)
entry.pack(padx=10, pady=10)

btn_export_file = tk.Button(root, text="export", command="")
btn_export_file.pack(pady=10)

btn_compress_file = tk.Button(root, text="Zip Files", command="")
btn_compress_file.pack(pady=10)

root.mainloop()