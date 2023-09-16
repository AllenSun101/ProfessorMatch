from flask import Flask
import analysis
import pandas as pd

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False


@app.route('/Temporary_Fetch/<course>/<feedback>/<learn>/<expectations>/<critical>/<diverse>/<clear>/<grade>', methods=['GET'])
def temp_ratings(course, feedback, learn, expectations, critical, diverse, clear, grade):
    
    course_info = course.split(" ")
    if len(course_info) != 2:
        return {"Error" : "Invalid Course"}
    
    subject_code = course_info[0]
    course = course_info[1]

    data = analysis.stats_for_project(course, subject_code, grade, expectations, learn, critical, clear, diverse, feedback)
    
    if data.empty:
        return {"Error" : "Invalid Course"}
    
    result_dict = data.set_index(data.index)['final_scoring_normal'].to_dict()

    print(result_dict)
    return result_dict


if __name__ == '__main__':
   app.run(debug = True)
