from flask import Flask
import sqlite3
import analysis
import pandas as pd

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False


@app.route('/Temporary_Fetch/<course>/<feedback>/<learn>/<expectations>/<critical>/<diverse>/<clear>/<grade>', methods=['GET'])
def temp_ratings(course, feedback, learn, expectations, critical, diverse, clear, grade):
    
    course_info = course.split(" ")
    subject_code = course_info[0]
    course = course_info[1]

    data = analysis.stats_for_project(course, subject_code, grade, expectations, learn, critical, clear, diverse, feedback)
    result_dict = data.set_index(data.index)['final_scoring_normal'].to_dict()

    print(result_dict)
    return result_dict


# Once preferences are stored in sql database 
@app.route('/Fetch_Data')
def get_ratings():
    pass


# Once login and sign up info are complete
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
