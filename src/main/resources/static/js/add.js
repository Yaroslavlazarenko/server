let $backBtn = document.querySelector("#backButton");
let $addBtn = document.querySelector("#addButton");
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

let editedCourseName = "Null";
let editedCourseCode = -1;
let editedFaculty = "Null";
let editedNumbCourse = -1;
let editedGroup = "Null";
let editedHoursLectures = -1;
let editedHoursPractical = -1;
let editedHoursLaboratory = -1;
let editedNameTeacher = "Null";
let editedNameAssistants = "Null";
let id = -1;

//constants
const regex = /[.?!)(,:_\n\t]/g;
const regexNumber = /[?!)(,:_A-Za-zа-яА-ЯЁёІіЇїҐґЄє\n\t\s']/g;
const regexContract = /[?!).(,:_A-Za-zа-яА-ЯЁёІіЇїҐґЄє\n\t\s']/g;
const url = 'http://localhost:8080/add/added';

$backBtn.addEventListener('click', function () {
    document.location.href = 'index';
});

$addBtn.addEventListener('click', async function () {
    if ($courseName.value) {
        if ($courseName.value.replaceAll(regex, ""))
            editedCourseName = $courseName.value.replaceAll(regex, "").toLowerCase();
        $courseName.value='';
    }
    if ($courseCode.value) {
        if ($courseCode.value.replaceAll(regexNumber, ""))
            editedCourseCode = $courseCode.value.replaceAll(regexNumber, "");
        $courseCode.value='';
    }
    if ($faculty.value) {
        if ($faculty.value.replaceAll(regex, ""))
            editedFaculty = $faculty.value.replaceAll(regex, "").toLowerCase();
        $faculty.value='';
    }
    if ($numbCourse.value) {
        if ($numbCourse.value.replaceAll(regexNumber, ""))
            editedNumbCourse = $numbCourse.value.replaceAll(regexNumber, "");
        $numbCourse.value='';
    }
    if ($group.value) {
        if ($group.value.replaceAll(regex, ""))
            editedGroup = $group.value.replaceAll(regex, "").toLowerCase();
        $group.value='';
    }
    if ($hoursLectures.value) {
        if ($hoursLectures.value.replaceAll(regexNumber, ""))
            editedHoursLectures = $hoursLectures.value.replaceAll(regexNumber, "");
        $hoursLectures.value='';
    }
    if ($hoursPractical.value) {
        if ($hoursPractical.value.replaceAll(regexNumber, ""))
            editedHoursPractical = $hoursPractical.value.replaceAll(regexNumber, "");
        $hoursPractical.value='';
    }
    if ($hoursLaboratory.value) {
        if ($hoursLaboratory.value.replaceAll(regexNumber, ""))
            editedHoursLaboratory = $hoursLaboratory.value.replaceAll(regexNumber, "");
        $hoursLaboratory.value='';
    }
    if ($nameTeacher.value) {
        if ($nameTeacher.value.replaceAll(regex, ""))
            editedNameTeacher = $nameTeacher.value.replaceAll(regex, "").toLowerCase();
        $nameTeacher.value='';
    }
    if ($nameAssistants.value) {
        if ($nameAssistants.value.replaceAll(regex, ""))
            editedNameAssistants = $nameAssistants.value.replaceAll(regex, "").toLowerCase();
        $nameAssistants.value='';
    }

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
        id: -1
    };

    $success.addEventListener('click', function () {
        $success.classList.add("hide");
    });

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
