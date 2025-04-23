import os
import subprocess
import sys
import venv

def create_virtual_environment(env_name, project_path):
    env_path = os.path.join(project_path, env_name)
    print(f"Creating virtual environment '{env_path}'...")
    venv.create(env_path, with_pip=True)
    print(f"Virtual environment '{env_path}' created.")
    return env_path

def activate_virtual_environment(env_path):
    # Determine the correct path to the activation script
    if os.name == 'nt':  # Windows
        activate_script = os.path.join(env_path, 'Scripts', 'activate')
    else:  # Unix/MacOS
        activate_script = os.path.join(env_path, 'bin', 'activate')

    if not os.path.exists(activate_script):
        raise FileNotFoundError(f"Activation script not found: {activate_script}")

    # Activate the virtual environment by modifying the environment variables
    os.environ['PATH'] = os.path.join(env_path, 'Scripts') + os.pathsep + os.environ['PATH']
    os.environ['VIRTUAL_ENV'] = env_path
    print(f"Virtual environment '{env_path}' activated.")

def install_django():
    print("Installing Django...")
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'django'])
    print("Django installed.")

def create_django_project(project_name, project_path):
    # Ensure the parent directory exists
    os.makedirs(project_path, exist_ok=True)
    print(f"Creating Django project '{project_name}'...")
    subprocess.check_call([sys.executable, '-m', 'django', 'startproject', project_name, project_path])
    print(f"Django project '{project_name}' created.")

def create_django_app(project_path, app_name):
    print(f"Creating Django app '{app_name}'...")
    subprocess.check_call([sys.executable, 'manage.py', 'startapp', app_name], cwd=project_path)
    print(f"Django app '{app_name}' created.")

def add_app_to_installed_apps(project_path, app_name):
    settings_path = os.path.join(project_path, 'settings.py')
    with open(settings_path, 'r') as file:
        lines = file.readlines()

    with open(settings_path, 'w') as file:
        for line in lines:
            file.write(line)
            if 'INSTALLED_APPS' in line:
                file.write(f"    '{app_name}',\n")

    print(f"App '{app_name}' added to INSTALLED_APPS.")

def create_template_directory(project_path):
    template_dir = os.path.join(project_path, 'templates')
    os.makedirs(template_dir, exist_ok=True)
    base_html_path = os.path.join(template_dir, 'base.html')

    with open(base_html_path, 'w') as file:
        file.write('<!DOCTYPE html>\n')
        file.write('<html lang="en">\n')
        file.write('<head>\n')
        file.write('    <meta charset="UTF-8">\n')
        file.write('    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n')
        file.write('    <title>Document</title>\n')
        file.write('</head>\n')
        file.write('<body>\n')
        file.write('{% block content %}')
        file.write(' ')
        file.write('{% endblock content %}')
        file.write('</body>\n')
        file.write('</html>\n')

    print(f"Template directory and base.html created at '{template_dir}'.")
    return template_dir

def add_template_dir_to_settings(project_path, template_dir):
    settings_path = os.path.join(project_path, 'settings.py')
    with open(settings_path, 'r') as file:
        lines = file.readlines()

    with open(settings_path, 'w') as file:
        in_templates_section = False
        for line in lines:
            file.write(line)
            if 'TEMPLATES' in line:
                in_templates_section = True
            if in_templates_section and "'DIRS': []" in line:
                file.write(f"            os.path.join(BASE_DIR, '{os.path.relpath(template_dir, project_path)}'),\n")
                in_templates_section = False

    print(f"Template directory added to settings.")

def main():
    env_name = 'env'
    project_name = 'monProjet'
    app_name = 'monApp'
    project_path = 'C:\\Users\\Pc Portable\\Documents\\Molengeek-Formation\\Django\\Jour 5\\exo_1'  # Change this to your desired path

    env_path = create_virtual_environment(env_name, project_path)
    activate_virtual_environment(env_path)
    install_django()
    django_project_path = os.path.join(project_path, project_name)
    create_django_project(project_name, django_project_path)
    create_django_app(django_project_path, app_name)
    add_app_to_installed_apps(os.path.join(django_project_path, project_name), app_name)
    template_dir = create_template_directory(django_project_path)
    add_template_dir_to_settings(django_project_path, template_dir)

    print("Setup complete!")

if __name__ == "__main__":
    main()
