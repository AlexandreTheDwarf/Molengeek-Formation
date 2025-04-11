import tkinter as tk
from tkinter import filedialog, messagebox
import os
import shutil
import zipfile

root = tk.Tk()

# On stocke la liste des fichiers sélectionnés dans une variable globale
selected_files = []

def browse_files():
    global selected_files
    selected_files = filedialog.askopenfilenames(
        title="Select your files",
        filetypes=(("Tous les fichiers", ".*"), ("Fichier texte", "*.txt"))
    )

    # On vide les anciens labels
    for widget in text_zone.winfo_children():
        widget.destroy()

    # On affiche chaque fichier
    for file in selected_files:
        file_label = tk.Label(text_zone, text=file, anchor="w", justify="left")
        file_label.pack(fill="x", padx=5, pady=2)

def move_files():
    dest_folder = entry.get().strip()
    
    if not dest_folder:
        messagebox.showwarning("Chemin manquant", "Veuillez entrer un chemin de destination.")
        return
    
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)

    for file in selected_files:
        try:
            shutil.move(file, os.path.join(dest_folder, os.path.basename(file)))
        except Exception as e:
            messagebox.showerror("Erreur", f"Erreur lors du déplacement de {file} : {e}")
            return
    
    messagebox.showinfo("Succès", "Fichiers déplacés avec succès.")

def compress_files():
    dest_folder = entry.get().strip()
    
    if not dest_folder:
        messagebox.showwarning("Chemin manquant", "Veuillez entrer un chemin de destination.")
        return

    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)

    zip_path = os.path.join(dest_folder, "archive.zip")

    try:
        with zipfile.ZipFile(zip_path, "w") as zipf:
            for file in selected_files:
                arcname = os.path.basename(file)  # Nom dans le zip
                zipf.write(file, arcname)
    except Exception as e:
        messagebox.showerror("Erreur", f"Erreur lors de la compression : {e}")
        return

    messagebox.showinfo("Succès", f"Fichiers compressés dans :\n{zip_path}")

root.title("WinRyad")
root.geometry("580x360")

btn_open_file = tk.Button(root, text="Browse", command=browse_files)
btn_open_file.pack(pady=10)

text_zone = tk.LabelFrame(root, text="Files selected")
text_zone.pack(padx=10, pady=5, fill="both", expand=True)

entry = tk.Entry(root)
entry.pack(padx=10, pady=10, fill="x")

btn_export_file = tk.Button(root, text="Export", command=move_files)
btn_export_file.pack(pady=5)

btn_compress_file = tk.Button(root, text="Zip Files", command=compress_files)
btn_compress_file.pack(pady=5)

root.mainloop()
