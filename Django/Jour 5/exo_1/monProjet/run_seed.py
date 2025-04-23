import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'monProjet.settings')
django.setup()

from monApp import seed

if __name__ == '__main__':
    seed.generate_product()
