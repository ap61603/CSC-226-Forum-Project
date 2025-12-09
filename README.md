# CSC-226-Forum-Project

# ClassForum+ 🎮 💬

An interactive class forum and mini-game hub built for Web Dev 2025. This project features a message board powered by a Django backend and interactive browser-based games.

Created by: Ari • Sal • Albert
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📋 **Project Features**
Persistent Forum: Users can post messages that save to a database.

**Mini-Games**: Tic-Tac-Toe and Web Dev Trivia.

**Backend**: Python (Django).

**Database**: SQLite (Local storage).
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Setup Instructions (Run these first!)
Since this project uses a backend, you cannot just open the HTML files. You must set up the Python server environment locally. Follow these steps exactly.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 1: Get the Code

Download the project folder or clone the repository to your local machine.

Commands:

git clone <your-repo-url>

cd CSC-226-Forum-Project

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 2: Create a Virtual Environment

We need a clean "box" to install Django so it doesn't conflict with other programs on your computer.


Mac / Linux: python3 -m venv venv

Windows: python -m venv venv

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 3: Activate the Environment

You must activate the environment every time you work on the project. You will know it works when you see (venv) at the start of your terminal line.


Mac / Linux: source venv/bin/activate

Windows: venv\Scripts\activate

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Step 4: Install Dependencies

Once the environment is active (venv), install Django.


Command: pip install django
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🗄️ Database Setup

Because we are using a local SQLite database, the database file (db.sqlite3) might not be shared or might be empty when you first download the code. You need to build it on your machine.


1. Build the Database Tables

Run this command to create the empty tables for the Forum: 

Command: python3 manage.py migrate


2. Create Your Admin Account

Since user accounts are stored in your local database, you need to create your own "Superuser" to manage posts or access the admin panel.

Command: python3 manage.py createsuperuser


Enter a username (e.g., your name).

Enter a password (it will be invisible while typing).

Skip email if you want (press Enter).

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🚀 How to Run the Website

Once setup is complete, run these commands whenever you want to work on the site:


1. Make sure your environment is active: source venv/bin/activate

2. Start the Server: python3 manage.py runserver
   
3. View in Browser: Go to: http://127.0.0.1:8000

4. Access Admin Panel: Go to: http://127.0.0.1:8000/admin and log in with the superuser account you created.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Troubleshooting

Error: ModuleNotFoundError: No module named 'django'

Fix: You forgot to activate your virtual environment. Run source venv/bin/activate and try again.

Error: zsh: command not found: python

Fix: Your computer uses python3. Use python3 manage.py runserver instead of just python.

Error: no such table: forum_post

Fix: You haven't built the database yet. Run python3 manage.py migrate.
