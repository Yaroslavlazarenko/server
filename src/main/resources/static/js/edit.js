let $backBtn = document.querySelector("#backButton");
let $editBtn = document.querySelector("#confirmEditButton");
let $databaseInfo = document.querySelector('.databaseInfo');
let $courseName = document.querySelector("#courseName");
let $courseCode = document.querySelector("#courseCode");
let $faculty = document.querySelector("#faculty");
let $numbCourse = document.querySelector("#numbCourse");
let $group = document.querySelector("#group");
let $hoursLectures = document.querySelector("#hoursLectures");
let $hoursPractical = document.querySelector("#hoursPractical");
let $hoursLaboratory = document.querySelector("#hoursLaboratory");
let $nameTeacher = document.querySelector("#nameTeacher");
let $nameAssistants = document.querySelector("#nameAssistants");
let $success = document.querySelector(".success");

let database = $databaseInfo.innerHTML;
database = JSON.parse(database);

let editedCourseName = database.name;
let editedCourseCode = database.courseCode;
let editedFaculty = database.faculty;
let editedNumbCourse = database.numbCourse;
let editedGroup = database.group;
let editedHoursLectures = database.houresSubjectLecturesPracticalLaboratory[0];
let editedHoursPractical = database.houresSubjectLecturesPracticalLaboratory[1];
let editedHoursLaboratory = database.houresSubjectLecturesPracticalLaboratory[2];
let editedNameTeacher = database.nameTeacher;
let editedNameAssistants = database.nameAssistants;

const regex                           = /[.?!)(,:_\n\t]/g;
const regexNumber                     = /[?!)(,:_A-Za-zа-яА-ЯЁёІіЇїҐґЄє\n\t\s']/g;
const url                             = 'http://localhost:8080/edit/edited';

$backBtn.addEventListener('click', function () {
    document.location.href = 'index';
});

$success.addEventListener('click', function () {
    $success.classList.add("hide");
});

$editBtn.addEventListener('click', async function () {
    if ($courseName.value) {
        if ($courseName.value.replaceAll(regex, ""))
            editedCourseName = $courseName.value.replaceAll(regex, "").toLowerCase();
        $courseName.value = '';
    }
    if ($courseCode.value) {
        if ($courseCode.value.replaceAll(regexNumber, ""))
            editedCourseCode = $courseCode.value.replaceAll(regexNumber, "");
        $courseCode.value = '';
    }
    if ($faculty.value) {
        if ($faculty.value.replaceAll(regex, ""))
            editedFaculty = $faculty.value.replaceAll(regex, "").toLowerCase();
        $faculty.value = '';
    }
    if ($numbCourse.value) {
        if ($numbCourse.value.replaceAll(regexNumber, ""))
            editedNumbCourse = $numbCourse.value.replaceAll(regexNumber, "");
        $numbCourse.value = '';
    }
    if ($group.value) {
        if ($group.value.replaceAll(regex, ""))
            editedGroup = $group.value.replaceAll(regex, "").toLowerCase();
        $group.value = '';
    }
    if ($hoursLectures.value) {
        if ($hoursLectures.value.replaceAll(regexNumber, ""))
            editedHoursLectures = $hoursLectures.value.replaceAll(regexNumber, "");
        $hoursLectures.value = '';
    }
    if ($hoursPractical.value) {
        if ($hoursPractical.value.replaceAll(regexNumber, ""))
            editedHoursPractical = $hoursPractical.value.replaceAll(regexNumber, "");
        $hoursPractical.value = '';
    }
    if ($hoursLaboratory.value) {
        if ($hoursLaboratory.value.replaceAll(regexNumber, ""))
            editedHoursLaboratory = $hoursLaboratory.value.replaceAll(regexNumber, "");
        $hoursLaboratory.value = '';
    }
    if ($nameTeacher.value) {
        if ($nameTeacher.value.replaceAll(regex, ""))
            editedNameTeacher = $nameTeacher.value.replaceAll(regex, "").toLowerCase();
        $nameTeacher.value = '';
    }
    if ($nameAssistants.value) {
        if ($nameAssistants.value.replaceAll(regex, ""))
            editedNameAssistants = $nameAssistants.value.replaceAll(regex, "").toLowerCase();
        $nameAssistants.value = '';
    }

//request data
    const information = {
        courseName: (editedCourseName),
        courseCode: (editedCourseCode),
        faculty: (editedFaculty),
        numbCourse: (editedNumbCourse),
        group: (editedGroup),
        hoursLectures: (editedHoursLectures),
        hoursPractical: (editedHoursPractical),
        hoursLaboratory: (editedHoursLaboratory),
        nameTeacher: (editedNameTeacher),
        nameAssistants: (editedNameAssistants).toString(),
        id: parseInt((window.location.href).toString().split("=")[1])
    };

    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(information),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        $success.classList.remove("hide");
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
        console.log(json);
    }
});


