import tkinter as tk

root = tk.Tk()

root.title("Hello World")
root.geometry("1280x720")
# root.attributes("-fullscreen", True)

label  = tk.Label(root, text="mon titre", bg="yellow")
label.pack()

root.mainloop()