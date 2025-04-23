import django
django.setup()
from monApp import seed

if __name__ == "__main__":
    seed.seed_students()