window.alert('Still under development — kindly drop your suggestions using the button above.');

let data = JSON.parse(localStorage.getItem("storage")) || { semester: [], activeId: null };
let courses = [];

function active() {
 return data.semester.find(s => s.id === data.activeId) || data.semester[0];
}

function createSem(name) {
 if (!name) {
  name = prompt("Enter Semester", '');
  if (!name || name.trim() === '') {
   return;
  }
  name = name.trim();
 }

 const sem = {
  id: Date.now(),
  name: name,
  course: []
 };
 data.semester.push(sem);
 data.activeId = sem.id;
 save();
 render();
}

function renderCourses() {
 const tbody = document.getElementById("courseList");

 if (courses.length == 0) {
  tbody.innerHTML = '<tr><td colspan="4" class="text-gray-600">No courses yet</td></tr>';
  return;
 }

 let rows = '';
 for (let i = 0; i < courses.length; i++) {
  let c = courses[i];
  rows += '<tr>'
      +   '<td class="text-gray-700 ">' + c.name + '</td>'
      +   '<td class="text-gray-700">' + c.unit + '</td>'
      +   '<td class="text-gray-700 ">' + c.grade + '</td>'
      +   '<td class="text-gray-700">' + (c.unit * c.grade) + '</td>'
      +   '<td  class="text-red-700 font-bold"><button class="cursor-pointer" onclick="deleteCourse(' + i + ')">x</button></td>'
      + '</tr>';
 }

 tbody.innerHTML = rows;

}
function deleteCourse(index){
 courses.splice(index, 1);
 renderCourses();
 summary();
 popUp('Course Removed✔️');
}
function addCourse() {
 const n = document.getElementById("name");
 const u = document.getElementById("unit");
 const g = document.getElementById("grade");

 const cName = n.value.trim().toUpperCase();
 const unit  = parseInt(u.value);
 const grade = parseInt(g.value);

 if (!cName) {
  popUp('Enter a Course Please');
  return;
 } else if (!unit && cName) {
  popUp('Enter a Unit Please');
  return;
 } else if (unit > 6 && cName) {
  popUp('The Maximum Unit per Course is 6');
  return;
 }

 courses.push({ name: cName, unit, grade });

 console.log(typeof cName, typeof unit, typeof grade);
 n.value = '';
 u.value = '';

 renderCourses();
 totalUnit();
 summary();
 popUp(cName + ' Added ✔️');
}

function popUp(msg) {
 const pop = document.getElementById('popUp');
 pop.textContent = msg;
 pop.classList.remove('opacity-0');
 pop.classList.add('opacity-100');

 setTimeout(() => {
  pop.classList.remove('opacity-100');
  pop.classList.add('opacity-0');
 }, 2000);
}
function totalUnit(){
 let total = 0;
 for (let i = 0; i < courses.length; i++) {
  total += courses[i].unit;
 }
 document.getElementById('totalUnits').textContent = total;
}
function clearAll() {
  const n1 = document.getElementById("cgpa");
  const u1 = document.getElementById("totalUnits");
 const g1 = document.getElementById("position");
 g1.textContent = '-';
 u1.textContent= 0;
 n1.textContent = '-';
 if (!confirm('Delete ALL data?')) return;
 courses = [];
 renderCourses()

 popUp('Cleared!');
 
}

function summary(){
 let  qp=0;
 let totalUnits = 0;
 for (let i = 0; i < courses.length; i++) {
  qp += courses[i].unit * courses[i].grade;
  totalUnits += courses[i].unit;
 }
 let cgpa = 0;
 if (totalUnits > 0) {
  cgpa = qp/totalUnits;
 }
 document.getElementById('cgpa').textContent = cgpa.toFixed(2);
 document.getElementById('totalUnits').textContent = totalUnits;
 document.getElementById('position').textContent = classDegree(cgpa);
}

function classDegree(cgpa){
 if(cgpa>= 4.5 )
  return 'First Class';
 if(cgpa>=4.0 )
  return 'Second Class Upper';
 if(cgpa>=3.5)
  return 'Second Class Lower';
 if(cgpa>=2.5)
  return 'Third Class';
 if(cgpa<2.5)
  return'Pass';
 return '-'
}
