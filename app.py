from flask import Flask, render_template, request, redirect
 
app = Flask(__name__)
 
students = []
 
@app.route("/", methods = ["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form("name")
        grade = float(request.form["grade"])
        status = "Passed" if grade >= 75 else "Fail"
 
        students.append({
            "name": name,
            "grade": grade,
            "status": status
        })
        return redirect("/")
    return render_template("index.html", students=students)
 
if __name__ == "__main__":
    app.run(debug=True)