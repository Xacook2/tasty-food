from flask import Flask, request, render_template
import sqlite3
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    username = request.form['username']
    password = request.form['password']
    with open('create_table.sql', 'r') as file:
      create_table_sql = file.read()
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.executescript(create_table_sql)
    cursor.execute('''SELECT * FROM users WHERE username = ?''', (username,))
    if cursor.fetchone():
      return 'username is taken'
    else:
        cursor.execute('''
                      INSERT INTO users (username, password)
                      VALUES (?, ?)
                      ''', (username, password))
        userid = username[0]
        conn.commit()
        conn.close()
        return "You are now signed up and logged in"


@app.route('/submitl', methods=['POST'])
def submitl():
    logging = True
    user = request.form['user']
    passw = request.form['pass']
    with open('create_table.sql', 'r') as file:
        create_table_sql = file.read()
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        cursor.executescript(create_table_sql)
        while logging:
            cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (user, passw))
            user = cursor.fetchone()
            if not user:
                return "Tru again"
            if user:
                userid = user[0]
                '''
                cursor.execute("SELECT * FROM rating WHERE username = ?", (user[0],))
                userR = cursor.fetchone()
                if not userR:
                    cursor.execute("INSERT INTO rating (username, cottage_pie) VALUES (?, NULL)", (user[0],))
                    conn.commit()
                logging = False
                # make it so it isnt always cottage_pie
                rating(user[0], "cottage_pie")
                '''
                return "Correct"
                

def rating(user, type_of_recipe):
    rate = input("rate 1-5")
    rate = int(rate)
    #do this so it fits with html
    if rate < 6 and rate > 0:
        cursor.execute("UPDATE rating SET {} = ? WHERE username = ?".format(type_of_recipe), (rate, user))
        conn.commit()
            
            
        

        
    
    


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
