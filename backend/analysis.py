import pandas as pd

def stats_for_project(course, subject_code, grade_importance,expected_importance,objective_importance,critical_importance,organization_importance,diverse_importance,feedback_importance):
    df = pd.read_csv('sections.csv')

    #Go through each column case by case
    df['GPA'] = df.apply(lambda row: (row['a'] * 4.0 + row['b'] * 3.0 + row['c'] * 2.0 + row['d'] * 1.0 + row['f'] * 0.0) / row['total_graded_students'] / 4.0, axis=1)
    df['expected'] = df.apply(lambda row: (row['expected_1'] * 1.0 + row['expected_2'] * 2.0 + row['expected_3'] * 3.0) / max(1, row['expected_1']+row['expected_2']+row['expected_3']) / 3.0, axis=1)
    df['objectives'] = df.apply(lambda row: (row['objectives_1'] * 1.0 + row['objectives_2'] * 2.0 + row['objectives_3'] * 3.0 + row['objectives_4'] *4.0) / max(1, row['objectives_1']+row['objectives_2']+row['objectives_3']+row['objectives_4']) / 4.0, axis=1)
    df['criticalthinking'] = df.apply(lambda row: (row['critical_thinking_1'] * 1.0 + row['critical_thinking_2'] * 2.0 + row['critical_thinking_3'] * 3.0 + row['critical_thinking_4'] * 4.0) / max(1, row['critical_thinking_1']+row['critical_thinking_2']+row['critical_thinking_3']+row['critical_thinking_4']) / 4.0, axis=1)
    df['organizerranking'] = df.apply(lambda row: (row['organization_1'] * 1.0 + row['organization_2'] * 2.0 + row['organization_3'] * 3.0 + row['organization_4'] * 4.0) / max(1, row['organization_1']+row['organization_2']+row['organization_3']+row['organization_4']) / 4.0, axis=1)
    df['diverse'] = df.apply(lambda row: (row['diverse_1'] * 1.0 + row['diverse_2'] * 2.0 + row['diverse_3'] * 3.0 + row['diverse_4'] * 4.0 + row['diverse_5'] * 5.0) / max(1, row['diverse_1']+row['diverse_2']+row['diverse_3']+row['diverse_4']+row['diverse_5'] + row['diverse_0']) / 5.0, axis=1)
    df['feedback'] = df.apply(lambda row: (row['feedback_1'] * 1.0 + row['feedback_2'] * 2.0 + row['feedback_3'] * 3.0 + row['feedback_4'] * 4.0 + row['feedback_5'] * 5.0 + row['feedback_6'] * 6.0) / max(1, row['feedback_1']+row['feedback_2']+row['feedback_3']+row['feedback_4']+row['feedback_5']+row['feedback_6']) / 6.0, axis=1)

    keep_list = ['GPA', 'expected', 'objectives', 'criticalthinking', 'organizerranking', 'diverse', 'feedback', 'semester', 'year', 'subject_code', 'course_number', 'section_number', 'professor_name']

    df = df.loc[:, keep_list]

    df = df[df["course_number"] == course]
    df = df[df["subject_code"] == subject_code]

    df['final_scoring'] = df.apply(lambda row: round(5 * (row['GPA'] * grade_importance + row['expected'] * expected_importance + row['objectives'] * objective_importance + row['criticalthinking'] * critical_importance + row['organizerranking'] * organization_importance+ row['diverse'] * diverse_importance + row['feedback'] * feedback_importance) / 7.0, 2), axis=1)
    print(df.head())
    df = df.sort_values(by='final_scoring', ascending=False)
    final_df=df.loc[:,["professor_name","final_scoring"]]
    final_df = final_df.groupby(['professor_name']).mean()
    print("Choose Professor: " + final_df.iloc[0].index, "with score:", final_df.iloc[0].final_scoring)
    return(final_df.head(10))


print(stats_for_project(221, 'MATH', 1,1,1,1,1,1,1))
