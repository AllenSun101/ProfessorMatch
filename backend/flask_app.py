from flask import Flask
import sqlite3
import analysis

app = Flask(__name__)

@app.route('/Temporary_Fetch')
def temp_ratings(preferences):
    print(preferences)
    return analysis.whatever()

@app.route('/Fetch_Data')
def get_ratings():
    return analysis.whatever()


@app.route('/Input_Preferences')
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

    #cursor.execute('''INSERT INTO users (username, password, feedback, objectives, clear_expectations, critical_thinking, diversity, organization, grade_distribution) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''', 
    #               (stuff))


if __name__ == '__main__':
   app.run(debug = True)
