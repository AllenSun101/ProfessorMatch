from flask import Flask
import sqlite3

app = Flask(__name__)

@app.route('/')
def get_ratings():
    return "Hello"

@app.route('/InputPreferences')
def input_references(preferences):
    conn = sqlite3.connect('user_preferences.db')
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS users
                   (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    username VARCHAR(50) NOT NULL,
                    password VARCHAR(50) NOT NULL,
                    feedback INTEGER NOT NULL;
                    objectives INTEGER NOT NULL;
                    clear_expectations INTEGER NOT NULL;
                    critical_thinking INTEGER NOT NULL;
                    diversity INTEGER NOT NULL;
                    organization INTEGER NOT NULL;
                    grade_distribution DOUBLE NOT NULL;)
                   ''')
    
    # Add user inputs

    # cursor.execute('''INSERT INTO users ''')

if __name__ == '__main__':
   app.run(debug = True)
